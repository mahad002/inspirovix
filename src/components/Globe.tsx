import React, { useEffect, useRef, useMemo } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { useTheme } from '../theme/ThemeContext';

const Globe: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationRef = useRef<number | null>(null);

  const isMobile = useMemo(() => window.innerWidth < 768, []);

  useEffect(() => {
    if (!containerRef.current) return;

    // Cleanup previous scene
    if (sceneRef.current && rendererRef.current) {
      sceneRef.current.clear();
      rendererRef.current.dispose();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Optimized camera setup
    const aspectRatio = window.innerWidth / window.innerHeight;
    const fov = isMobile ? 50 : 45;
    
    const camera = new THREE.PerspectiveCamera(fov, aspectRatio, 0.1, 1000);
    camera.position.z = isMobile ? 150 : 200;

    // Optimized renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: false, // Disable for better performance
      alpha: true,
      powerPreference: "high-performance"
    });
    rendererRef.current = renderer;
    
    const updateSize = () => {
      const width = containerRef.current?.clientWidth || window.innerWidth;
      const height = isMobile ? 300 : (containerRef.current?.clientHeight || 400);
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    
    updateSize();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Limit pixel ratio for performance
    containerRef.current.appendChild(renderer.domElement);

    // Simplified globe geometry
    const geometry = new THREE.SphereGeometry(
      isMobile ? 50 : 60,
      32, // Reduced segments for better performance
      32
    );

    // Simplified material
    const material = new THREE.MeshBasicMaterial({
      color: theme === 'dark' ? 0x4c1d95 : 0x7c3aed,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });

    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Simplified lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    // Optimized animation loop
    let lastTime = 0;
    const targetFPS = 30; // Limit FPS for better performance
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      animationRef.current = requestAnimationFrame(animate);
      
      if (currentTime - lastTime >= frameInterval) {
        globe.rotation.y += 0.005;
        globe.rotation.x += 0.002;
        renderer.render(scene, camera);
        lastTime = currentTime;
      }
    };

    animate(0);

    // Handle resize
    const handleResize = () => {
      updateSize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, [theme, isMobile]);

  return (
    <div className="relative w-full h-[40vh] md:h-[60vh]">
      <div 
        ref={containerRef} 
        className="absolute inset-0"
        style={{ zIndex: 0 }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-4 md:bottom-10 left-1/2 transform -translate-x-1/2 text-center px-4"
        style={{ zIndex: 1 }}
      >
        <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Connecting Dreams Globally
        </h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className={`text-sm md:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-2xl`}
        >
          Where innovation meets possibility, and dreams become reality
        </motion.p>
      </motion.div>
    </div>
  );
};

export default React.memo(Globe);