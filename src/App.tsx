import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import { Map } from './Map';

const endpoint = process.env.REACT_APP_API_ENDPOINT ? process.env.REACT_APP_API_ENDPOINT : ""

type Pin = {
  name: string,
  address: {
    lat: number | string,
    lng: number | string,
  }
}

export const App = () => {
  const [text, setText] = useState<string> ("");

  const [pins, setPins] = useState<Pin[] | null> (null);
  const getData = async () => {
    const response = await fetch(`${endpoint}/dev/data`)
    return response.json();
    // console.log(response.json());
    // const d: Pin[] = response.json()
    // console.log(d);
    // setPins(d);
    // setPins([
    //   {
    //     name: "hoge",
    //     address: {
    //       lat: 35.69575,
    //       lng: 139.77521,
    //     },
    //   },
    //   {
    //     name: "fuga",
    //     address: {
    //       lat: 35.79575,
    //       lng: 139.77521,
    //     },
    //   }
    // ]);
  }

  useEffect(() => {
    getData()
      .then((data) => {
        const d = data.map((dd: Pin) => {
          return {
            name: dd.name,
            address: {
              lat: Number(dd.address.lat),
              lng: Number(dd.address.lng),
            }
          }
        })
        setPins(d);
      })
    // console.log(d);
    // setPins(d as any);
  }, [])

  return (
    <Box display="flex">
      <Box
        width="80%"
        height="100vh"
      >
        <Box
          height="20%"
          bgcolor="red"
        >
          a
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="80%"
          >
            <Map setText={setText} pins={pins} />
          </Box>
      </Box>
      <Box
        width="20%"
        height="100vh"
        bgcolor="blue"
        >
        {text}
      </Box>
    </Box>
  );
}
