import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import '../style.css';

// Scene:
const scene = new THREE.Scene();

// Camera:
const aspectRatio = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
camera.position.z = 10;

// Renderer:
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// For objects we set:
// 1. Geometry (some geometry function)
// 2. Material (MeshBasicMaterial function)
// 3. Mesh (Geometry and Material)
// 4. Axis (optional)

const geometry = new THREE.SphereGeometry(1, 10, 10);
const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
const mesh = new THREE.Mesh(geometry, material);
const axesHelper = new THREE.AxesHelper(3);

// Add the mesh to the scene:
scene.add(mesh);
scene.add(axesHelper);

// Add OrbitControls:
const controls = new OrbitControls(camera, renderer.domElement);

//controls.update() must be called after any manual changes to the camera's transform
camera.position.set( 0, 1, 10 );

// Add the controls to the scene:
scene.add(controls);

// Call Renderer to render & animate:
renderer.render(scene, camera);

// Update the controls:
controls.update();


console.log("Distance between mesh and camera: ", mesh.position.distanceTo(camera.position));

export default function animate() {
  // Request animation frame:  
  window.requestAnimationFrame(animate);

  // Scale the mesh:
	// mesh.scale.x += 0.01;
	// mesh.scale.y += 0.01;
	// mesh.scale.z += 0.01;

  // Rotate the mesh:
  mesh.rotation.x += 0.01;
  // mesh.rotation.y += 0.01;
  // mesh.rotation.z += 0.01;
  

  controls.update();

  // Render the scene:
  renderer.render(scene, camera);
}

animate();