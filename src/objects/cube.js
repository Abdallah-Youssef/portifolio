import * as THREE from 'three'


const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshStandardMaterial({color:'gray'})
export const cube = new THREE.Mesh(geometry, material)
