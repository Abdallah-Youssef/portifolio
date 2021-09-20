import Cube from './Cube';
import Bit from './Bit';
import Sentinelle from './Sentinelle';
import Tube from './Tube';
import * as THREE from 'three'

export default class ObjectManager {
    constructor(scene) {
        this.scene = scene
        this.objects = []
        this.clock = new THREE.Clock();
    }

    loadObjects() {
        this.objects.push(new Cube(this.scene))
        this.objects.push(...Array(300).fill().map(() => new Bit(this.scene)))
        this.objects.push(new Sentinelle(this.scene))

        this.cameraPath = new Tube(this.scene)
        this.objects.push(this.cameraPath)
    }

    update() {
        this.objects.forEach(obj => {
            if (obj.update)
                obj.update()
        })
    }


    updateCamera(camera) {
        const time = this.clock.getElapsedTime();
        const looptime = 60;
        const t = (time % looptime) / looptime;
        const t2 = ((time + 0.1) % looptime) / looptime

        const pos = this.cameraPath.geometry.parameters.path.getPointAt(t);
        const pos2 = this.cameraPath.geometry.parameters.path.getPointAt(t2);

        camera.position.copy(pos);
        camera.lookAt(pos2);

    }
}
