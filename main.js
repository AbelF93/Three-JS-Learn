
import * as THREE from 'three';

//building a scene
const scene = new THREE.Scene();

//creates a Perspective Camera 
//Attributes:(FOV, Aspect Ratio (4/3 or 16/9), near, far)
const camera = new THREE.PerspectiveCamera (75,
    window.innerWidth / window.innerHeight, 0.1, 1000);

// Use WebGL to render the scene in the body
const renderer = new THREE.WebGLRenderer();
// Quarter size will optimise performance
// so as a third argument (updatedStyle:false)=>Lower Resolution. 
renderer.setSize( window.innerWidth/2, window.innerHeight/2);
document.body.appendChild( renderer.domElement);

//To render a cube

//Firstly define it's size
const geometry = new THREE.BoxGeometry(1,1,1);
//Then define the color or a specific material
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
//Create the cube as a Mesh by giving him the previous variables
const cube = new THREE.Mesh ( geometry, material)

//add the mesh to the scene
scene.add(cube);

//move back the camera from the cube
camera.position.z = 5;


//Initiate rendering

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
     //start animation
     cube.rotation.x += 0.01;
     cube.rotation.y += 0.01; 
}
animate();

