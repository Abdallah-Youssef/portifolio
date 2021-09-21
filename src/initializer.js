import * as THREE from 'three'
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls'
import  ObjectManager from './objects'
import space from './assets/space.jpg'

export default function run() {
    const scene = new THREE.Scene()
    const loader = new THREE.TextureLoader();
    const bgTexture = loader.load(space);
    scene.background = bgTexture;

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#bg"),
        alpha: true
    })

    renderer.setClearColor(0x0D0208);
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    window.addEventListener('resize', onWindowResize, false);

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);

    }


    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0xffffff, 0.3)
    pointLight.position.set(2, 2, 2)
    scene.add(pointLight)


    // Prespective
    // const gridHelper = new THREE.GridHelper(100, 100)
    // scene.add(gridHelper)

    const controls = new FirstPersonControls(camera, renderer.domElement)
    controls.lookSpeed = 0.30
    // controls.lookVertical = false
    controls.movementSpeed = 3
    controls.domElement.addEventListener("mousemove", (e) => {
        if (e.clientX >= 0.4 * window.innerWidth && e.clientX <= 0.6 * window.innerWidth 
            && e.clientY >= 0.45 * window.innerHeight && e.clientY <= 0.55 * window.innerHeight) {
            controls.activeLook = false
        } else {
            controls.activeLook = true
        }
    })
    camera.position.set(3, -7, -6)
    camera.rotateY(3.9)
    camera.rotateX(-0.6)


    // Objects and animation
    const objManager = new ObjectManager(scene)
    objManager.loadObjects()

    





    


    function animate() {
            requestAnimationFrame(animate)
            objManager.update()
            objManager.updateCamera(camera)
            renderer.render(scene, camera)
    }

    animate()
    renderer.render(scene, camera)
    return scene
}


