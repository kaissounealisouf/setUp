
///////////////////////////////////////////////////
// APPROACH ONE: files downloaded to your computer
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// APPROACH TWO: Get the files from a CDN
///////////////////////////////////////////////////
// import { Camera, Material, Texture } from "https://cdn.skypack.dev@0.132.2";
// import { OrbitControls } from "https://cdn.skypack.dev@0.132.2/examples/jsm/controls/OrbitControls.js";
///////////////////////////////////////////////////
// APPROACH THREE: Install the three.js NPM Package
///////////////////////////////////////////////////
// import { Camera, Material, Texture } from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import { Camera, Material, Texture } from "./build/three.module.js";
// import { OrbitControls } from "./examples/jsm/controls/OrbitControls.js";
//////////////////////////////////////////////////////////////////////////////

import * as THREE from "./node_modules/three/build/three.module.js";

// // Set up the scene
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 5;

// // Create a renderer
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // Define the vertices of the USA shape
// const usaVertices = [
//   new THREE.Vector3(2.5, 0.5, 0),
//   new THREE.Vector3(2.5, -1.5, 0),
//   new THREE.Vector3(1.5, -1.5, 0),
//   new THREE.Vector3(1.5, 0.5, 0),
//   new THREE.Vector3(0.5, 0.5, 0),
//   new THREE.Vector3(0.5, -0.5, 0),
//   new THREE.Vector3(-0.5, -0.5, 0),
//   new THREE.Vector3(-0.5, 0.5, 0),
//   new THREE.Vector3(-1.5, 0.5, 0),
//   new THREE.Vector3(-1.5, -1.5, 0),
//   new THREE.Vector3(-2.5, -1.5, 0),
//   new THREE.Vector3(-2.5, 0.5, 0),
// ];

// // Create a geometry for the USA shape
// const usaGeometry = new THREE.BufferGeometry().setFromPoints(usaVertices);

// // Create a material for the USA shape
// const usaMaterial = new THREE.MeshBasicMaterial({ color: 0x0077ff });

// // Create a mesh for the USA shape
// const usaMesh = new THREE.Mesh(usaGeometry, usaMaterial);
// scene.add(usaMesh);

// // Add lighting to the scene
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
// scene.add(ambientLight);
// const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
// directionalLight.position.set(0, 1, 1);
// scene.add(directionalLight);

// // Animation loop
// function animate() {
//   requestAnimationFrame(animate);
//   usaMesh.rotation.x += 0.01;
//   usaMesh.rotation.y += 0.01;
//   renderer.render(scene, camera);
// }
// animate();
//  console.log(THREE);

// 

// // Set up the scene
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 5;

// // Create a renderer
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // Create a geometry for the flag
// const flagGeometry = new THREE.PlaneGeometry(4, 2.4); // Adjust the dimensions as needed

// // Create a texture for the flag (USA flag image)
// const textureLoader = new THREE.TextureLoader();
// const flagTexture = textureLoader.load('./american _corner.jpg'); // Provide the path to your USA flag image

// // Create a material using the flag texture
// const flagMaterial = new THREE.MeshBasicMaterial({ map: flagTexture });

// // Create a mesh for the flag
// const flagMesh = new THREE.Mesh(flagGeometry, flagMaterial);
// scene.add(flagMesh);

// // Add lighting to the scene
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
// scene.add(ambientLight);
// const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
// directionalLight.position.set(0, 1, 1);
// scene.add(directionalLight);

// // Animation loop
// function animate() {
//   requestAnimationFrame(animate);
//   flagMesh.rotation.y += 0.01;
//   renderer.render(scene, camera);
// }
// animate();


// Set up the scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a geometry for the flag
const flagGeometry = new THREE.PlaneGeometry(4, 2.4); // Adjust the dimensions as needed

// Create textures for the front and back of the flag (USA flag images)
const textureLoader = new THREE.TextureLoader();
const frontFlagTexture = textureLoader.load('./american _corner.jpg'); // Provide the path to your front USA flag image
const backFlagTexture = textureLoader.load('./american _corner.jpg'); // Provide the path to your back USA flag image

// Create materials using the flag textures (double-sided material)
const flagMaterial = new THREE.MeshBasicMaterial({
  map: frontFlagTexture,
  side: THREE.DoubleSide,
  
});

// Create a mesh for the flag
const flagMesh = new THREE.Mesh(flagGeometry, flagMaterial);
scene.add(flagMesh);

// Add lighting to the scene
const ambientLight = new THREE.AmbientLight(0x4c9e0, 1);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0x4c9e0, 0.5);
directionalLight.position.set(0, 1, 1);
scene.add(directionalLight);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  flagMesh.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

