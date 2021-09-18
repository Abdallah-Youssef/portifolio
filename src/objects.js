import * as THREE from 'three'

const dodecGeometry = new THREE.DodecahedronGeometry()
const material = new THREE.MeshStandardMaterial({color:'gray'})

export const dodec = new THREE.Mesh(dodecGeometry, material)
