import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { Display } from './components/Display/Display';
import { Map } from './components/Map/Map';
import { Search } from './components/Search/Search';
import { Pin } from './types/api';
import { endpoint } from './utils/settings';


export const App = () => {
  const [show, setShow] = useState<boolean> (true);


  const [id, setId] = useState<number | null> (null);

  const [pins, setPins] = useState<Pin[] | null> (null);
  const getData = async () => {
    const response = await fetch(`${endpoint}/dev/data`)
    return response.json();
  }

  const [initPins, setInitPins] = useState<Pin[] | null> (null);

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
            },
            category_1: dd.category_1,
            category_2: Number(dd.category_2),
          }
        })
        setPins(d);
        setInitPins(d);
      })

    
  }, [])

  return (
    <Box
      display="flex"
      width="100%"
      height="100vh"
    >
      <Box
        width="100%"
        height="100%"
        position="relative"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Map setId={setId} pins={pins} setShow={setShow} />
      </Box>
      <Search pins={pins} setPins={setPins} initPins={initPins} />
      <Display show={show} setShow={setShow} id={id} />
    </Box>
  );
}
