import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import { Image } from './Image';
import { Map } from './Map';

const endpoint = process.env.REACT_APP_API_ENDPOINT ? process.env.REACT_APP_API_ENDPOINT : ""

type Pin = {
  id: number,
  name: string,
  address: {
    lat: number | string,
    lng: number | string,
  }
}

export const App = () => {
  const [id, setId] = useState<number | null> (null);

  const [pins, setPins] = useState<Pin[] | null> (null);
  const getData = async () => {
    const response = await fetch(`${endpoint}/dev/data`)
    return response.json();
  }

  useEffect(() => {
    getData()
      .then((data) => {
        const d = data.map((dd: Pin) => {
          return {
            id: Number(dd.id),
            name: dd.name,
            address: {
              lat: Number(dd.address.lat),
              lng: Number(dd.address.lng),
            }
          }
        })
        setPins(d);
      })
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
            <Map setId={setId} pins={pins} />
          </Box>
      </Box>
      <Image id={id} />
    </Box>
  );
}
