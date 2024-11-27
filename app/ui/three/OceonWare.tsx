'use client'

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const OceanWave = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null); // Reference for the canvas element

  useEffect(() => {
    // Create scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current! });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Parameters for the grid of points
    const gridSize = 100; // grid size
    const spacing = 1.5; // spacing between points
    const waveFrequency = 0.2; // frequency of waves
    const waveAmplitude = 1; // amplitude of waves

    // Create a list to store the points
    const points: { mesh: THREE.Mesh; x: number; z: number }[] = [];

    // Create the grid of points
    for (let x = -gridSize / 2; x < gridSize / 2; x++) {
      for (let z = -gridSize / 2; z < gridSize / 2; z++) {
        const geometry = new THREE.SphereGeometry(0.05, 8, 8); // size of the point
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const point = new THREE.Mesh(geometry, material);
        point.position.set(x * spacing, 0, z * spacing);
        scene.add(point);
        points.push({ mesh: point, x: x, z: z });
      }
    }

    // Set up camera position
    camera.position.y = 10;
    camera.position.z = 20;
    camera.rotation.x = -0.5; // Tilt the camera for a perspective effect

    // Time variable for animation
    let time = 0;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update the height of each point to simulate the waves
      time += 0.05; // Animation speed
      points.forEach((point) => {
        point.mesh.position.y =
          Math.sin(point.x * waveFrequency + time) * waveAmplitude +
          Math.cos(point.z * waveFrequency + time) * waveAmplitude;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Adjust the rendering size when the window is resized
    const onResize = () => {
      if (canvasRef.current) {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      }
    };

    window.addEventListener('resize', onResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ display: 'block' }} />;
};

export default OceanWave;
