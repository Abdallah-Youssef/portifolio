import * as THREE from 'three'
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import cubeglb from './assets/cube.glb'
import bit0 from './assets/0-bit.png'
import bit1 from './assets/1-bit.png'

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



    const bit0Texture = new THREE.TextureLoader().load(bit0)
    const bit1Texture = new THREE.TextureLoader().load(bit1)


    // matrix 0's and 1's
    const addBit = () => {
        const geometry = new THREE.PlaneGeometry(0.5, 0.5);
        const material = new THREE.MeshStandardMaterial({map: Math.random() < 0.5 ? bit0Texture : bit1Texture, transparent: true})
        const bit = new THREE.Mesh(geometry, material)
        bit.material.side = THREE.DoubleSide;
        const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(30))
        bit.position.set(x, y, z)
        scene.add(bit)

    }

    Array(250).fill().forEach(addBit)


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

        controls.update(1 * secs);

        renderer.render(scene, camera)
    }

    animate()
    return scene
}


