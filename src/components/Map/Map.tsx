import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import { Dispatch, SetStateAction } from 'react';
import { Pin } from '../../types/api';
import { initialCenterPostion } from '../../utils/settings';

const key = process.env.REACT_APP_KEY ? process.env.REACT_APP_KEY : "";

const containerStyle = {
    width: "90%",
    height: "90%"
};

type Props = {
    setId: Dispatch<SetStateAction<number | null>>
    pins: Pin[] | null
    setShow: Dispatch<SetStateAction<boolean>>
}

export const Map = ({ setId, pins, setShow }: Props) => {
  return (
    <LoadScript
      googleMapsApiKey={key}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={initialCenterPostion}
        zoom={5}
      >
        {
            pins && pins.map((data: any) => (
                <MarkerF key={data.name} position={data.address} label={data.name} onClick={() => {setId(data.id);setShow(true)}} />
            ))
        }
      </GoogleMap>
    </LoadScript>
  )
}
