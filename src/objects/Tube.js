import * as THREE from 'three'
import {Curves} from 'three/examples/jsm/curves/CurveExtras'


export default class Tube  {
    constructor(scene) {

        const curve = new Curves.TorusKnot(6);
        const geometry = new THREE.TubeBufferGeometry( curve, 100, 2, 8, true );
        const material = new THREE.MeshBasicMaterial({ wireframe:true });
        this.tube = new THREE.Mesh( geometry, material );
        scene.add(this.tube);

        return this.tube

    }

}