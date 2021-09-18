import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {FlyControls} from 'three/examples/jsm/controls/FlyControls'
import {FirstPersonControls} from 'three/examples/jsm/controls/FirstPersonControls'

import * as objects from './objects'
const {dodec} = objects


console.log(dodec);
export default function run(){
    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#bg")
    })

    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)


    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff)
    scene.add(ambientLight)


    // Prespective
    const gridHelper = new THREE.GridHelper()
    scene.add(gridHelper)

    const controls = new FirstPersonControls(camera, renderer.domElement)
    controls.lookSpeed = 0.15
    controls.lookVertical = false
    controls.movementSpeed = 3
    camera.position.setZ(5)
    camera.position.setY(1)

    // Objects and animation
    scene.add(...Object.values(objects))

    let lt = new Date()
    function animate(){
        var now = new Date(),
        secs = (now - lt) / 1000;
        lt = now;

        requestAnimationFrame(animate)
        dodec.rotation.x += 0.01
        dodec.rotation.y += 0.01
        dodec.rotation.z += 0.01


        controls.update(1*secs);

        renderer.render(scene, camera)
    }

    animate()    
    return scene
}


