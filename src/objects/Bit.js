import * as THREE from 'three'
import bit0 from '../assets/0-bit.png'
import bit1 from '../assets/1-bit.png'

const bit0Texture = new THREE.TextureLoader().load(bit0)
const bit1Texture = new THREE.TextureLoader().load(bit1)

const rand = (x) => THREE.MathUtils.randFloatSpread(x)

export default class Bit {
    constructor(scene) {
        this.scene = scene
        const geometry = new THREE.PlaneGeometry(0.5, 0.5);
        const material = new THREE.MeshStandardMaterial({
            map: Math.random() < 0.5 ? bit0Texture : bit1Texture,
            transparent: true,
            side: THREE.DoubleSide})

        this.bit = new THREE.Mesh(geometry, material)
        const [x, y, z] = [rand(40), rand(50), rand(40)]
        this.bit.position.set(x, y, z)

        this.bit.rotateY(rand(Math.PI))

        scene.add(this.bit)
    }

    update(){
        this.bit.position.y -= 0.03
        if (this.bit.position.y < -20){
            this.bit.position.setY(20)
        }
    }
}