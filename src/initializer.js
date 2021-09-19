import * as THREE from 'three'
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import cubeglb from './assets/cube.glb'
import Bit from './objects/Bit';

export default function run() {
    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#bg"),
        alpha: true
    })

    renderer.setClearColor( 0x0D0208);
    // renderer.setClearColor( 0xFF0000);
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)


    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff)
    scene.add(ambientLight)


    // Prespective
    const gridHelper = new THREE.GridHelper(100, 100)
    scene.add(gridHelper)

    const controls = new FirstPersonControls(camera, renderer.domElement)
    controls.lookSpeed = 0.15
    controls.lookVertical = false
    controls.movementSpeed = 3
    controls.domElement.addEventListener("mousemove", (e) => {
        if (e.clientX >= 0.4 * window.innerWidth && e.clientX <= 0.6 * window.innerWidth) {
            controls.activeLook = false
        } else {
            controls.activeLook = true
        }
    })
    camera.position.setZ(5)
    camera.position.setY(1)

    // Objects and animation
    const loader = new GLTFLoader();

    // Central cube
    let cube
    loader.load(cubeglb, function (gltf) {
        cube = gltf.scene
        cube.position.setY(1)
        scene.add(cube);

    }, undefined, error => console.error(error));





    let bits = Array(250).fill().map(() => new Bit(scene))


    let lt = new Date()
    function animate() {
        var now = new Date(),
            secs = (now - lt) / 1000;
        lt = now;

        requestAnimationFrame(animate)




        if (cube){
            cube.rotation.z += 0.005
            cube.rotation.y += 0.005
            cube.rotation.x += 0.005
        }

        bits.forEach(bit => bit.update())

        controls.update(1 * secs);

        renderer.render(scene, camera)
    }

    animate()
    return scene
}


