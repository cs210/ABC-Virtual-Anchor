import React from 'react';
import {css } from 'emotion';

import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import cartoonManV2 from '../../assets/cartoonManV2.glb'
import TVStudio from '../../assets/TVStudio.glb'


class ModelViewer extends React.Component {
    constructor(props) {
        super(props)

        this.model = null;
        this.scale = 7;
        this.y_offset = 5000
    }

    componentDidMount() {
        // === THREE.JS CODE START ===

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
        document.getElementById("scene").appendChild(renderer.domElement);


        var geometry = new THREE.BoxGeometry( 10, 10, 10 );
        var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );

        const gltfLoader = new GLTFLoader()
        gltfLoader.load(TVStudio, (gltf) => {
            this.model = gltf.scene;				
    

            const box = new THREE.Box3().setFromObject(this.model);
            const size = box.getSize(new THREE.Vector3()).length();
            const center = box.getCenter(new THREE.Vector3());


            this.model.position.x += (this.model.position.x - center.x);
            this.model.position.y += (this.model.position.y - center.y);
            this.model.position.y += this.y_offset
            this.model.position.z += (this.model.position.z - center.z);

            this.model.scale.x += this.scale
            this.model.scale.y += this.scale
            this.model.scale.z += this.scale
            
            this.model.rotation.x = -Math.PI / 2;
            this.model.rotation.y = Math.PI;
  
            camera.near = size / 100;
            camera.far = size * 100;
            camera.updateProjectionMatrix();

            camera.lookAt(this.model.position);
            scene.add( gltf.scene );
        });

        console.log(this.model)
        var animate =  () => {
            requestAnimationFrame( animate );
            if (this.model != null) {
                this.model.rotation.y += 0.01;
                
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
