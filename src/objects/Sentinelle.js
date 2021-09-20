import sentinelleglb from '../assets/sentinelle.glb'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

class Sentinelle {
    constructor(scene) {

        const loader = new GLTFLoader();
        loader.loadAsync(sentinelleglb)
        .then (glb => {
            this.sentinelle = glb.scene
            this.sentinelle.position.set(26.37605426949947, 24.340657510898026, -9.35877496984777)
            this.sentinelle.lookAt(0, 0, 0)
            scene.add(this.sentinelle);
        }).catch(error => {
            console.log(error);
        })
    }
}

export default Sentinelle