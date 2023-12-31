/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 robotgbc.gltf --transform 
Files: robotgbc.gltf [1.92MB] > robotgbc-transformed.glb [252.38KB] (87%)
Author: NoMoreFeelings (https://sketchfab.com/NoMoreFeelings)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/gameboy-d1f396eae44141058ec945234af36b16
Title: GameBoy
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Model(props) {
    const { nodes, materials } = useGLTF('/robotgbc-transformed.glb');
    return (
        <group {...props} dispose={null}>
            <mesh
                geometry={nodes.Object_2.geometry}
                material={materials.Material}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <mesh
                geometry={nodes.Object_3.geometry}
                material={materials['Material.001']}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <mesh
                geometry={nodes.Object_4.geometry}
                material={materials['Material.002']}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <mesh
                geometry={nodes.Object_5.geometry}
                material={materials['Material.003']}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <mesh
                geometry={nodes.Object_6.geometry}
                material={materials['Material.004']}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <mesh
                geometry={nodes.Object_7.geometry}
                material={materials['Material.005']}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <mesh
                geometry={nodes.Object_8.geometry}
                material={materials['Material.006']}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <mesh
                geometry={nodes.Object_9.geometry}
                material={materials['Material.007']}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <mesh
                geometry={nodes.Object_10.geometry}
                material={materials['Material.008']}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <mesh
                geometry={nodes.Object_11.geometry}
                material={materials['Material.009']}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <mesh
                geometry={nodes.Object_12.geometry}
                material={materials.None}
                rotation={[-Math.PI / 2, 0, 0]}
            />
        </group>
    );
}

useGLTF.preload('/robotgbc-transformed.glb');

export default Model;
