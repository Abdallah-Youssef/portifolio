import * as THREE from 'three'
import sentinelleglb from '../assets/sentinelle.glb'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default class Sentinelle {
    constructor(scene) {
        const loader = new GLTFLoader();
        loader.loadAsync(sentinelleglb)
        .then (glb => {
            this.sentinelle = glb.scene
            this.sentinelle.position.set(-5, 2, -5)
            scene.add(this.sentinelle);
        }).catch(error => {
            console.log(error);
        })


    }

    update(){
        // if (this.cube){
        //     this.cube.rotation.z += 0.005
        //     this.cube.rotation.y += 0.005
        //     this.cube.rotation.x += 0.005
        // }
    }
}