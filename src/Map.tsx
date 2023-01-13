import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import { FC } from "react";

const key = "AIzaSyAakxMV2k2ca53H_w8er-vqglP6V0aa7So";

const containerStyle = {
    width: "50%",
    height: "50%",
};

const center = {
lat: 35.69575,
lng: 139.77521,
};

const positionA = {
    lat: 35.69731,
    lng: 139.7747,
}

const positionB = {
    lat: 35.69397,
    lng: 139.7762,
}

const positionALabel = {
    color: "#fff",
    fontFamily: "sans-serif",
    fontSize: "16px",
    fontWeight: "700",
    text: "office A"
}

export const Map: FC = () => {
    return (
        <>
            <LoadScript googleMapsApiKey={key}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={17}
                >
                    <Marker
                        position={positionA}
                        label={positionALabel}
                        onClick={() => console.log("A")}
                    />
                    <Marker position={positionB} label={"office B"} />
                </GoogleMap>
            </LoadScript>
        </>
    )
}