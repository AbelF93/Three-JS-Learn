import *  as THREE from 'three';

const renderer= new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth,window.innerHeight);
document.body.appendChild( renderer.domElement);

//set camera
const camera = new THREE.PerspectiveCamera (45, window.innerWidth/window.innerHeight, 1, 500);
camera.position.set(0,0,100);
camera.lookAt(0,0,0);

//set scene
const scene = new THREE.Scene();

const material = new THREE.LineBasicMaterial({color: 0x000ff});

//create a geometry with verstices
const points = [];
points.push( new THREE.Vector3 (-10,0,0));
points.push( new THREE.Vector3 (0,10,0));
points.push( new THREE.Vector3 (10,0,0));

//set a geometry using the points
const geometry = new THREE.BufferGeometry().setFromPoints(points);
//create a line between eachp points.
const line = new THREE.Line (geometry, material);

//add the line inside the scene
scene.add(line);
renderer.render (scene, camera);//render it