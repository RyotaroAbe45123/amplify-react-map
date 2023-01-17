import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import { Dispatch, SetStateAction } from 'react';

const key = process.env.REACT_APP_KEY ? process.env.REACT_APP_KEY : "";

const containerStyle = {
    width: "80%",
    height: "80%"
};

const center = {
    lat: 35.69575,
    lng: 139.77521,
};

type Props = {
    setText: Dispatch<SetStateAction<string>>
}

export const Map = ({ setText }: Props) => {
  return (
    <LoadScript
      googleMapsApiKey={key}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
      >
        <MarkerF position={center} label="A"
         onClick={() => setText("A")} 
        />
      </GoogleMap>
    </LoadScript>
  )
}
