import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl';

function Map() {
    const [viewPort,setViewPort] = useState({
        Width:'100%',
        latitude: 37.8,
        longitude: -122.4,
        zoom: 11
    })
  return (
   <ReactMapGL
    mapStyle='mapbox://styles/dragssine/clgxmcfzs00cm01pgc446dzo5'
    mapboxAccessToken='pk.eyJ1IjoiZHJhZ3NzaW5lIiwiYSI6ImNsZ3htMnI3bjAweTMzZG9nZ2g5aDRrZHQifQ.eWpeO5sWQN_r1cv42T_TwQ'
    {...viewPort}
    onViewportChange={viewport=> setViewPort(viewport)}
   ></ReactMapGL>
   
  );
}

export default Map
