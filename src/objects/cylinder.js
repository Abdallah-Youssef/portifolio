import * as THREE from 'three'

const geometry = new THREE.CylinderGeometry()
const material = new THREE.MeshStandardMaterial({color:'orange'})
export const cylinder = new THREE.Mesh(geometry, material)

