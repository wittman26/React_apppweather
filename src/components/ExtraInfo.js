import React from 'react';
import PropTypes from 'prop-types';

const ExtraInfo = ({humedad, viento}) => (
<div>
    {/* <span>{humedad + '%'}</span>
    <span>{viento + 'viento'}</span> */}
    <span>{`${humedad} % - `}</span>
    <span>{`${viento} viento`}</span>    
</div>
)

ExtraInfo.propTypes = {
    humedad: PropTypes.number.isRequired,
    viento: PropTypes.string.isRequired
}

export default ExtraInfo;