import './App.css';
import { Canvas } from 'react-three-fiber';
import React, { Suspense } from 'react';
import Midi from './Midi';
import { Stats, Html } from 'drei';
import Model from './Scene';
import Effects from './Effects';
import Terrain from './Terrain'
import Crystal from './Crystal'
// import Weaver from './Weaver'

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 8] }} shadowMap>
        <ambientLight />
        <Stats
        showPanel={0} // Start-up panel (default=0)
        className="stats" // Optional className to add to the stats container dom element
      />
      <Suspense>
        <Midi />
        <Suspense fallback={<Html><h2>Loading</h2></Html>}>
          <Effects />
          <group scale={[0.15,0.15,0.15]}>
          {/* <Weaver /> */}
          </group>
          <Model position={[-10, 0, 0]} rotation={[0, 0, 0]} />
          <Terrain />
          <Crystal position={[150,0,-120]} scale={[0.5,0.5,0.5]}/>
          <Crystal position={[-30,0,-40]} scale={[0.5,0.5,0.5]}/>
          <Crystal position={[85,0,-260]} scale={[0.5,0.5,0.5]}/>
          <Crystal position={[150,0, 680]} scale={[0.5,0.5,0.5]}/>
          <Crystal position={[-100,0, 560]} scale={[0.5,0.5,0.5]}/>
          <Crystal position={[-64,0, 460]} scale={[0.5,0.5,0.5]}/>
          <Crystal position={[-80,0, 160]} scale={[0.5,0.5,0.5]}/>
          <Crystal position={[54,0, 380]} scale={[0.5,0.5,0.5]}/>
        </Suspense>
        </Suspense>
        <pointLight position={[10, 10, 10]} />
      </Canvas>
    </>
  );
}

export default App;
