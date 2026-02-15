// // ===== FANCY 3D LIQUID BACKGROUND =====

// const canvas = document.getElementById("bg");

// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(
//   60,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   100
// );

// camera.position.z = 2.5;

// const renderer = new THREE.WebGLRenderer({
//   canvas: canvas,
//   antialias: true,
//   alpha: true
// });

// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// // Geometry (high segments = smooth waves)
// const geometry = new THREE.PlaneGeometry(6, 6, 200, 200);

// // Material (liquid gradient)
// const material = new THREE.MeshStandardMaterial({
//   color: 0xff9800,
//   roughness: 0.35,
//   metalness: 0.6,
//   side: THREE.DoubleSide
// });

// const plane = new THREE.Mesh(geometry, material);
// plane.rotation.x = -0.5;
// scene.add(plane);

// // Lights
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
// scene.add(ambientLight);

// const pointLight = new THREE.PointLight(0xff6a00, 1.2);
// pointLight.position.set(2, 3, 4);
// scene.add(pointLight);

// // Animate waves
// const clock = new THREE.Clock();

// function animate() {
//   const time = clock.getElapsedTime();

//   const pos = geometry.attributes.position;

//   for (let i = 0; i < pos.count; i++) {
//     const x = pos.getX(i);
//     const y = pos.getY(i);

//     const wave =
//       Math.sin(x * 2 + time) * 0.15 +
//       Math.cos(y * 2 + time * 0.8) * 0.15;

//     pos.setZ(i, wave);
//   }

//   pos.needsUpdate = true;

//   plane.rotation.z = time * 0.05;

//   renderer.render(scene, camera);
//   requestAnimationFrame(animate);
// }

// animate();

// // Resize
// window.addEventListener("resize", () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

