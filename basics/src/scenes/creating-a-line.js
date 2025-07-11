import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import '../style.css';

// Scene
const scene = new THREE.Scene();

// Camera
const aspectRatio = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
camera.position.z = 50;
camera.lookAt(0, 0, 0);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// For objects we set:
// 1. Geometry (some geometry function)
// 2. Material (MeshBasicMaterial function)
// 3. Mesh (Geometry and Material)

const points = [];
for (let i = 0; i < Math.PI; i += 0.01) {
  points.push( new THREE.Vector3( Math.sin( i ) * 10, Math.cos( i ) * 10, 0 ) );
}

// points.push( new THREE.Vector3( - 10, 0, 0 ) );
// points.push( new THREE.Vector3( 0, 10, 0 ) );
// points.push( new THREE.Vector3( 10, 0, 0 ) );

const geometry = new THREE.BufferGeometry().setFromPoints(points);

const material = new THREE.LineBasicMaterial({ color: 0x00ff00 });

const mesh = new THREE.Line(geometry, material);
scene.add(mesh);

// Render & animate:
renderer.render(scene, camera);

// Update the controls:
controls.update();

export default function animateCreatingLine() {
  const time = Date.now() * 0.001; 
  
  // Request animation frame:  
  window.requestAnimationFrame(animateCreatingLine);

  // Rotate the mesh (not geometry):
  mesh.rotation.z = time;
  
  // Update the controls:
  controls.update();

  // Render the scene:
  renderer.render(scene, camera);
}
