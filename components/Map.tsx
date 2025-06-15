import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

type Viewport = {
  latitude: number;
  longitude: number;
  zoom: number;
};

const Map = () => {
  const [viewport, setViewport] = useState<Viewport>({
    latitude: 14.7718,
    longitude: 120.9587,
    zoom: 8,
  });

  return (
    <div className="map_wrap">
      <div className="map">
        <ReactMapGL
          mapStyle={'mapbox://style/mapbox/dark-v9'}
          mapboxApiAccessToken="pk.eyJ1IjoiYmF5YXppZGgiLCJhIjoiY2tvemdwc3ByMDg1YzJubzQxcDR0cDR3dyJ9.s1zXEb5OPqgBDcmupj3GBA"
          {...viewport}
          onViewportChange={(nextViewport: Viewport) =>
            setViewport(nextViewport)
          }
        />
      </div>
    </div>
  );
};

export default Map;
