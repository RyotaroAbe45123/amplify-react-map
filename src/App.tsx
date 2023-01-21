import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { Display } from './components/Display/Display';
import { Pin } from './types/api';
import { endpoint } from './utils/settings';
// import { Image } from './Image';
// import { Map } from './Map';


export const App = () => {
  const [show, setShow] = useState<boolean> (true);


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
    <Box
      display="flex"
      width="100%"
      height="100vh"
    >
      <Box
        bgcolor="red"
        width="100%"
        height="100%"
        // zIndex={0}
        position="relative"
      ></Box>
      <Box
        bgcolor="#fff"
        sx={{
          opacity: 0.6
        }}
        width="20%"
        height="60%"
        left="10%"
        top="20%"
        // zIndex={1}
        position="absolute"
        >
          <Button
            onClick={() => setShow(true)}
          >a</Button>
        </Box>
      <Display show={show} setShow={setShow} />
      {/* <Box
        bgcolor="#000"
        sx={{
          opacity: 0.6
        }}
        width="20%"
        height="60%"
        left="70%"
        top="20%"
        // zIndex={2}
        position="absolute"
        ></Box> */}
    </Box>
  );
}
