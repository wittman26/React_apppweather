import React from 'react';
import { WiCloudy, WiDayCloudyHigh, WiDaySunny } from "weather-icons-react";
import PropTypes from 'prop-types';
import {CLOUD, SUNNY} from '../constants/climas'

/* Cuando solo recibe un parámetro, se pueden omitir los parentesis*/
const getIconoClima = estadoClima => {
    switch (estadoClima) {
        case CLOUD:
            return <WiDayCloudyHigh size={24} color='#000' />
        case SUNNY:
            return <WiDaySunny size={24} color='#000' />
        default:
            return <WiCloudy size={24} color='#000' />
    }
}

const Temperatura = ({ temperatura, estadoClima }) => (
    <div>
        {/* <WiThermometer size={24} color='#000' /> */}
        {getIconoClima(estadoClima)}
        <span>{`${temperatura} Cº`}</span>
    </div>
)

Temperatura.propTypes = {
    temperatura: PropTypes.number.isRequired,
    estadoClima: PropTypes.string
}

export default Temperatura;