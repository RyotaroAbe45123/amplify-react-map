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
    setId: Dispatch<SetStateAction<number | null>>
    pins: any
}

export const Map = ({ setId, pins }: Props) => {
  return (
    <LoadScript
      googleMapsApiKey={key}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
      >
        {
            pins && pins.map((data: any) => (
                <MarkerF key={data.name} position={data.address} label={data.name} onClick={() => setId(data.id)} />
            ))
        }
      </GoogleMap>
    </LoadScript>
  )
}
