import React from 'react';
import {centerMap} from '../../const'
import {YMaps, Map, Placemark} from 'react-yandex-maps';

const MapY = () => {
    return <div id="map" className="map">
        <YMaps>
            <Map
                state={centerMap}
                width="100%"
                height="100%"
            >
                <Placemark
                    geometry={[59.968137, 30.316272]}
                />
            </Map>
        </YMaps>
    </div>
};

export default MapY;
