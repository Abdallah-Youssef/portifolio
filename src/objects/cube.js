import * as THREE from 'three'
import cubeglb from '../assets/cube.glb'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

class Cube{
    constructor(scene) {

        const loader = new GLTFLoader();
        loader.loadAsync(cubeglb)
        .then (glb => {
            this.cube = glb.scene
            this.cube.position.set(3, -12, 1)
            scene.add(this.cube);
        })
    }

    update(){
        if (this.cube){
            this.cube.rotation.z += 0.005
            this.cube.rotation.y += 0.005
            this.cube.rotation.x += 0.005
        }
    }
}

export default Cube