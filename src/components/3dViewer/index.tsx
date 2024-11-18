"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

function Viewer3D({
  modelPath,
  show,
  width,
  height,
  mobileRatio,
}: {
  modelPath: string;
  show: boolean;
  width: number;
  height: number;
  mobileRatio: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>(new THREE.Scene());
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  let _rotate = -30;
  const handleScroll = () => {
    if (!cameraRef.current) return;

    const currentScrollY = window.scrollY;

    if (modelPath === "/models/service-3.glb") {
      if (currentScrollY < 2700) {
        _rotate = -30;
      } else if (currentScrollY > 3700) {
        _rotate = 30;
      } else {
        if (currentScrollY > (window as any)[modelPath]) {
          // Scrolling down
          if (_rotate < 31) {
            _rotate += 0.7;
          }
        } else {
          // Scrolling up
          if (_rotate > -30) {
            _rotate -= 0.7;
          }
        }
        (window as any)[modelPath] = currentScrollY;

        onRotate(_rotate);
      }
    } else if (modelPath === "/models/service-2.glb") {
      if (currentScrollY < 3700) {
        _rotate = -30;
      } else if (currentScrollY > 4700) {
        _rotate = 30;
      } else {
        if (currentScrollY > (window as any)[modelPath]) {
          // Scrolling down
          if (_rotate < 31) {
            _rotate += 0.7;
          }
        } else {
          // Scrolling up
          if (_rotate > -30) {
            _rotate -= 0.7;
          }
        }
        (window as any)[modelPath] = currentScrollY;

        onRotate(_rotate);
      }
    } else if (modelPath === "/models/service-1.glb") {
      if (currentScrollY < 1600) {
        _rotate = -30;
      } else if (currentScrollY > 2600) {
        _rotate = 30;
      } else {
        if (currentScrollY > (window as any)[modelPath]) {
          // Scrolling down
          if (_rotate < 31) {
            _rotate += 0.7;
          }
        } else {
          // Scrolling up
          if (_rotate > -30) {
            _rotate -= 0.7;
          }
        }
        (window as any)[modelPath] = currentScrollY;

        onRotate(_rotate);
      }
    }
  };

  useEffect(() => {
    if (show) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [show]);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = sceneRef.current;

    const _height = containerRef.current.clientHeight;

    // Create a perspective camera
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / _height,
      1,
      800
    );
    cameraRef.current = camera;

    // Create a WebGL renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(containerRef.current.clientWidth, _height);
    // renderer.toneMappingExposure = 1;
    // renderer.toneMapping = THREE.ACESFilmicToneMapping;

    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Add lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(10, 10, 10);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(
      new RoomEnvironment(),
      0.04
    ).texture;

    // Load GLTF model
    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        const model = gltf.scene;

        if (modelPath === "/models/service-2.glb") {
          model.position.x = camera.position.x - 1;
        } else if (modelPath === "/models/service-3.glb") {
          model.position.y = camera.position.y - 2;
        }

        scene.add(model);

        // Add white color to the model
        // model.traverse((child) => {
        //   if (child instanceof THREE.Mesh) {
        //     child.material.color.setHex(0xFFFFFF); // Set color to white
        //   }
        // });

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

        // Disable user rotation
        controls.enableRotate = false;

        camera.position.z = 8;

        // Scale the model based on the modelPath
        if (modelPath === "/models/service-3.glb") {
          model.scale.set(1.6, 1.6, 1.6);
        }

        // Rotate the camera 180 degrees around the y-axis and tilt it 30 degrees downward
        camera.position.applyAxisAngle(
          new THREE.Vector3(
            0,
            modelPath === "/models/service-2.glb"
              ? 1.05
              : modelPath === "/models/service-3.glb"
              ? 1
              : 1,
            0
          ),
          Math.PI
        );
        camera.position.applyAxisAngle(
          new THREE.Vector3(
            modelPath === "/models/service-2.glb" ? 0.5 : 1,
            modelPath === "/models/service-3.glb" ? 1 : 0,
            0
          ),
          Math.PI / 8
        );
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

  const onRotate = (value: number) => {
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
    <div className=" sm:h-[calc(100vw-32px)] md:h-[calc(100vw+100px)] md:w-full md:max-h-[620px]  max-h-none sm:w-full">
      <div
        ref={containerRef}
        className={`${
          modelPath === "/models/service-2.glb"
            ? "ml-0 "
            : modelPath === "/models/service-3.glb"
            ? "ml-[-170px] sm:ml-[-100px]  "
            : ""
        }   transform origin-top-left`}
        style={{
          width: `${modelPath === "/models/service-3.glb" ? 900 : 720}px`,
          height: `${modelPath === "/models/service-3.glb" ? 680 : 620}px`,
          transform: `scale(${mobileRatio + 0.03})`,
        }}
      />
    </div>
  );
}

export default Viewer3D;
