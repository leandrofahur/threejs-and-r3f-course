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
// 5. Group

const geometry = new THREE.SphereGeometry(1, 10, 10);
const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
const axesHelper = new THREE.AxesHelper(3);

const mesh1 = new THREE.Mesh(geometry, material);
const mesh2 = new THREE.Mesh(geometry, material);
const mesh3 = new THREE.Mesh(geometry, material);
const mesh4 = new THREE.Mesh(geometry, material);

mesh1.position.set(3, 0, 0);
mesh2.position.set(-3, 0, 0);
mesh3.position.set(0, 3, 0);
mesh4.position.set(0, -3, 0);

const group = new THREE.Group();
group.add(mesh1);
group.add(mesh2);
group.add(mesh3);
group.add(mesh4);

// Add the mesh to the scene:
scene.add(group);
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

console.log({
	"Distance between mesh1 and camera: ": mesh1.position.distanceTo(camera.position),
	"Distance between mesh2 and camera: ": mesh2.position.distanceTo(camera.position),
	"Distance between mesh3 and camera: ": mesh3.position.distanceTo(camera.position),
	"Distance between mesh4 and camera: ": mesh4.position.distanceTo(camera.position)
});

export default function animate() {
  // Request animation frame:  
  window.requestAnimationFrame(animate);

  // Scale the mesh:
	// mesh.scale.x += 0.01;
	// mesh.scale.y += 0.01;
	// mesh.scale.z += 0.01;

  // Rotate the mesh:
  // mesh.rotation.x += 0.01;
  // mesh.rotation.y += 0.01;
  // mesh.rotation.z += 0.01;

	// Rotate the mesh:
	mesh1.rotation.x += 0.01;
	mesh2.rotation.y += 0.01;
	mesh3.rotation.z += 0.02;
	mesh4.rotation.x += 0.01;
	mesh4.rotation.y += 0.01;

	// Rotate the group:
	// group.rotation.x += 0.01;
	group.rotation.y += 0.01;
	group.rotation.z += 0.01;
  
  controls.update();

  // Render the scene:
  renderer.render(scene, camera);
}

animate();