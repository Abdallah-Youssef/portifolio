import Cube from './Cube';
import Bit from './Bit';
import Sentinelle from './Sentinelle';

export default class ObjectManager {
    constructor (scene){
        this.scene = scene
        this.objects = []
    }

    loadObjects() {
        this.objects.push(new Cube(this.scene))
        this.objects.push(...Array(200).fill().map(() => new Bit(this.scene)))
        this.objects.push(new Sentinelle(this.scene))
    }

    update(){
        this.objects.forEach(obj => obj.update())
    }
}

