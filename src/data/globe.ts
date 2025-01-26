export const globeConfig = {
  camera: {
    fov: 45,
    near: 0.1,
    far: 1000,
    position: 300
  },
  controls: {
    dampingFactor: 0.05,
    rotateSpeed: 0.5,
    minDistance: 200,
    maxDistance: 500,
    autoRotateSpeed: 0.5
  },
  globe: {
    radius: 80,
    segments: 64
  },
  textures: {
    dark: {
      earth: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg',
      bump: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg',
      specular: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg'
    },
    light: {
      earth: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_day_4096.jpg',
      bump: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg',
      specular: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg'
    }
  },
  lights: [
    { position: [1, 1, 1], intensity: 1 },
    { position: [-1, -1, -1], intensity: 0.5 },
    { position: [1, -1, 1], intensity: 0.5 },
    { position: [-1, 1, -1], intensity: 0.5 }
  ]
};