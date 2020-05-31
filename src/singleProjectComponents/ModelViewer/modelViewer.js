import React from 'react';
import {css } from 'emotion';

import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import cartoonManV2 from '../../assets/cartoonManV2.glb'
import TVStudio from '../../assets/TVStudio.glb'
import dusk from '../../assets/sky.jpeg'
import stars from '../../assets/galaxies.jpeg'

class ModelViewer extends React.Component {
    constructor(props) {
        super(props)
        let file = cartoonManV2;
        if (!props.anchor) {
            file = TVStudio;
        }

        this.skyboxes = {
            '0' : dusk,
            '1' : stars,
            '2' : 'https://images.pexels.com/photos/1205301/pexels-photo-1205301.jpeg'
        }

        console.log(props.skybox)
        this.state = {
            model_file: file,
            model: null,
            scale: props.scale,
            y_offset: props.y_offset,
            rotation: props.rotation,
            background: props.background,
            skybox: props.skybox
        }

    }

    componentWillReceiveProps(props) {
        console.log(props)
        this.setState({skybox: props.skybox})

        let elem =  document.querySelector("canvas")
        elem.parentNode.removeChild(elem);
        this.attachCanvasElement(props.skybox);
        // this.attachCanvasElement()
    }

    componentDidMount() {
        this.attachCanvasElement(this.state.skybox);
    }

    attachCanvasElement(skybox){
            // === THREE.JS CODE START ===
            console.log('recalled')
            var sceneDom = document.getElementById("scene")
            console.log(sceneDom.offsetHeight)
            var scene = new THREE.Scene();
            var camera = new THREE.PerspectiveCamera( 25, sceneDom.offsetWidth / sceneDom.offsetHeight, 600, 60000);
            camera.position.set(0,100,0); 
            
    
            var ambientLight = new THREE.AmbientLight( 0xcccccc );
            scene.add( ambientLight );  
    
            var directionalLight = new THREE.DirectionalLight( 0xffffff );
            directionalLight.position.set( 0, 1, 1 ).normalize();
            scene.add( directionalLight );
    
            var renderer = new THREE.WebGLRenderer({ alpha: false });
            renderer.setClearColor( 0xC5C5C3 );
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize(sceneDom.offsetWidth, sceneDom.offsetHeight);
            // sceneDom = renderer.domElement
            document.getElementById("scene").appendChild(renderer.domElement);
    
    
            var geometry = new THREE.BoxGeometry( 10, 10, 10 );
            var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
            var cube = new THREE.Mesh( geometry, material );
            scene.add( cube );
    
        
            if (skybox !== '2') {
                //Load background texture
                const loader = new THREE.TextureLoader();
                // 
                loader.load(this.skyboxes[skybox] , function(texture)
                            {
                            scene.background = texture;  
                            });
            }

    
    
            const gltfLoader = new GLTFLoader()
            console.log(this.state.model_file)
            gltfLoader.load(this.state.model_file, (gltf) => {
                this.state.model = gltf.scene;				
        
    
                const box = new THREE.Box3().setFromObject(this.state.model);
                const size = box.getSize(new THREE.Vector3()).length();
                const center = box.getCenter(new THREE.Vector3());
    
    
                this.state.model.position.x += (this.state.model.position.x - center.x);
                this.state.model.position.y += (this.state.model.position.y - center.y);
                this.state.model.position.y += this.state.y_offset
                this.state.model.position.z += (this.state.model.position.z - center.z);
    
                this.state.model.scale.x += this.state.scale
                this.state.model.scale.y += this.state.scale
                this.state.model.scale.z += this.state.scale
                
                this.state.model.rotation.x = -Math.PI / 2;
                this.state.model.rotation.y = Math.PI;
        
                camera.near = size / 100;
                camera.far = size * 100;
                camera.updateProjectionMatrix();
    
                camera.lookAt(this.state.model.position);
                scene.add( gltf.scene );
            });
    
    
            var animate =  () => {
                requestAnimationFrame( animate );
                if (this.state.model != null && this.state.rotation) {
                    this.state.model.rotation.y += 0.01;
                }
            
                renderer.render( scene, camera );
                };
            animate();
        // === THREE.JS EXAMPLE CODE END ===
    }

    render(){
        return (
            <div       
            className={
            css`
                height: 100%;
                width: 100%;
            `
            }
            id={"scene"}
            >
            </div>
        )
    }
}
export default ModelViewer;
