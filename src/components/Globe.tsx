import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { motion } from 'framer-motion';
import { useTheme } from '../theme/ThemeContext';
import { globeConfig } from '../data/globe';

const Globe: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Fixed camera setup for mobile
    const aspectRatio = window.innerWidth / window.innerHeight;
    const fov = isMobile ? 60 : globeConfig.camera.fov;
    
    const camera = new THREE.PerspectiveCamera(
      fov,
      aspectRatio,
      globeConfig.camera.near,
      globeConfig.camera.far
    );
    
    // Fixed camera position for mobile
    camera.position.z = isMobile ? 180 : globeConfig.camera.position;

    // Renderer setup with responsive size
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    
    const updateSize = () => {
      const width = containerRef.current?.clientWidth || window.innerWidth;
      const height = isMobile ? window.innerWidth : (containerRef.current?.clientHeight || window.innerHeight);
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    
    updateSize();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Controls with adjusted settings for mobile
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = isMobile ? 0.5 : globeConfig.controls.rotateSpeed;
    controls.enableZoom = !isMobile;
    controls.enablePan = !isMobile;
    controls.minDistance = isMobile ? 180 : globeConfig.controls.minDistance;
    controls.maxDistance = isMobile ? 180 : globeConfig.controls.maxDistance;
    controls.autoRotate = true;
    controls.autoRotateSpeed = isMobile ? 0.8 : globeConfig.controls.autoRotateSpeed;

    // Create globe with adjusted size for mobile
    const geometry = new THREE.SphereGeometry(
      isMobile ? 60 : globeConfig.globe.radius,
      globeConfig.globe.segments,
      globeConfig.globe.segments
    );

    // Load textures based on theme
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load(
      theme === 'dark' 
        ? globeConfig.textures.dark.earth
        : globeConfig.textures.light.earth,
      () => {
        earthTexture.colorSpace = THREE.SRGBColorSpace;
      }
    );

    const bumpMap = textureLoader.load(
      theme === 'dark'
        ? globeConfig.textures.dark.bump
        : globeConfig.textures.light.bump
    );
    
    const specularMap = textureLoader.load(
      theme === 'dark'
        ? globeConfig.textures.dark.specular
        : globeConfig.textures.light.specular
    );

    // Material with improved lighting
    const material = new THREE.MeshStandardMaterial({
      map: earthTexture,
      normalMap: bumpMap,
      normalScale: new THREE.Vector2(0.5, 0.5),
      roughnessMap: specularMap,
      roughness: theme === 'dark' ? 0.5 : 0.7,
      metalness: theme === 'dark' ? 0.1 : 0.2,
    });

    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Add atmosphere with adjusted size
    const atmosphereGeometry = new THREE.SphereGeometry(
      (isMobile ? 60 : globeConfig.globe.radius) * 1.1,
      globeConfig.globe.segments,
      globeConfig.globe.segments
    );
    const atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 1.5);
          gl_FragColor = vec4(${theme === 'dark' ? '0.3, 0.6, 1.0, 0.5' : '0.4, 0.7, 1.0, 0.3'}) * intensity;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true
    });

    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);

    // Enhanced lighting setup
    const ambientLight = new THREE.AmbientLight(
      theme === 'dark' ? 0xffffff : 0xcccccc,
      theme === 'dark' ? 1.5 : 2
    );
    scene.add(ambientLight);

    globeConfig.lights.forEach(({ position, intensity }) => {
      const light = new THREE.DirectionalLight(
        theme === 'dark' ? 0xffffff : 0xdddddd,
        theme === 'dark' ? intensity : intensity * 1.2
      );
      light.position.set(...position);
      scene.add(light);
    });

    const hemisphereLight = new THREE.HemisphereLight(
      theme === 'dark' ? 0xffffff : 0xdddddd,
      theme === 'dark' ? 0x444444 : 0x666666,
      theme === 'dark' ? 0.5 : 0.7
    );
    scene.add(hemisphereLight);

    // Stars background (only in dark theme)
    if (theme === 'dark') {
      const starGeometry = new THREE.BufferGeometry();
      const starMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.5,
        transparent: true
      });

      const starVertices = [];
      for (let i = 0; i < 10000; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = (Math.random() - 0.5) * 2000;
        starVertices.push(x, y, z);
      }

      starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
      const stars = new THREE.Points(starGeometry, starMaterial);
      scene.add(stars);
    }

    // Handle window resize
    const handleResize = () => {
      updateSize();
      controls.minDistance = window.innerWidth < 768 ? 150 : globeConfig.controls.minDistance;
      controls.maxDistance = window.innerWidth < 768 ? 300 : globeConfig.controls.maxDistance;
      globe.scale.setScalar(window.innerWidth < 768 ? 0.8 : 1);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, [theme]); // Add theme as dependency to recreate globe when theme changes

  return (
    <div className="relative w-full h-[50vh] md:h-screen">
      <div 
        ref={containerRef} 
        className={`absolute inset-0 ${isMobile ? 'h-[400px]' : ''}`}
        style={{ zIndex: 0 }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-4 md:bottom-10 left-1/2 transform -translate-x-1/2 text-center px-4"
        style={{ zIndex: 1 }}
      >
        <h2 className="text-xl md:text-4xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Connecting Dreams Globally
        </h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className={`text-sm md:text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-2xl`}
        >
          Where innovation meets possibility, and dreams become reality
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Globe;