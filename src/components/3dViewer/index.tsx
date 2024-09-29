"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

function Viewer3D({ modelPath }: { modelPath: string }) {
  const [rotate, setRotate] = useState(-20);
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>(new THREE.Scene());
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = sceneRef.current;

    // Create a perspective camera
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      1,
      800
    );
    cameraRef.current = camera;

    // Create a WebGL renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Add lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(10, 10, 10);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Load GLTF model
    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        const model = gltf.scene;
        scene.add(model);

        const controls = new OrbitControls(camera, renderer.domElement);
        controlsRef.current = controls;

        controls.rotateSpeed = 0.3;
        controls.zoomSpeed = 0.9;
        controls.minDistance = 3;
        controls.maxDistance = 20;
        controls.minPolarAngle = 0;
        controls.maxPolarAngle = Math.PI / 2;
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.enableZoom = false;
        controls.enablePan = false;

        camera.position.z = 8;

        // Rotate the camera 180 degrees around the y-axis and tilt it 30 degrees downward
        camera.position.applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI);
        camera.position.applyAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 8);
        camera.position.applyAxisAngle(
          new THREE.Vector3(0, 0, 1),
          Math.PI / 12
        );
        camera.lookAt(scene.position);

        // Update the controls target to match the new camera position
        controls.target.copy(scene.position);
        controls.update();

        // Start animation loop
        animate();
      },
      (xhr) => {
        console.log("Model loaded");
      },
      (error) => {
        console.error("An error occurred while loading the GLB model", error);
      }
    );

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      if (renderer && scene && camera) {
        renderer.render(scene, camera);
      }
      if (controlsRef.current) {
        controlsRef.current.update();
      }
    };

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current || !camera || !renderer) return;
      camera.aspect =
        containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
      if (renderer) {
        renderer.dispose();
      }
      if (controlsRef.current) {
        controlsRef.current.dispose();
      }
    };
  }, [modelPath]);

  const onRotate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setRotate(value);

    const camera = cameraRef.current;
    const scene = sceneRef.current;
    const controls = controlsRef.current;

    if (camera && scene && controls) {
      // Convert the range input value (0-100) to radians (0 to 2π)
      const angle = (value / 1000) * Math.PI * 2;

      // Calculate the new camera position
      const radius = camera.position.distanceTo(scene.position);
      const x = Math.sin(angle) * radius;

      // Set the new camera position
      camera.position.set(x, camera.position.y, camera.position.z);

      // Make the camera look at the center of the scene
      camera.lookAt(scene.position);

      // Update the controls target to match the new camera position
      controls.target.copy(scene.position);
      controls.update();
    }
  };

  return (
    <div>
      <div
        ref={containerRef}
        style={{ width: "800px", height: "800px", border: "1px solid red" }}
      />
      <input
        type="range"
        onChange={onRotate}
        min={-20}
        max={20}
        value={rotate}
      />
    </div>
  );
}

export default Viewer3D;
