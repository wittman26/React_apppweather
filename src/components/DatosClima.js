import React from 'react';
import Temperatura from './Temperatura';
import ExtraInfo from './ExtraInfo';
import {CLOUD, SUNNY} from './../contants/climas'

const Clima = () => (<div>
        <Temperatura temperatura={-6} estadoClima={SUNNY}/>
        <ExtraInfo humedad={80} viento={'10m/s'}/>    
</div>)

export default Clima;