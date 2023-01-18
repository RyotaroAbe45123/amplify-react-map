import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import { Map } from './Map';

const endpoint = process.env.REACT_APP_API_ENDPOINT ? process.env.REACT_APP_API_ENDPOINT : ""

type Pin = {
  name: string,
  address: {
    lat: number,
    lng: number,
  }
}

export const App = () => {
  const [text, setText] = useState<string> ("");

  const [pins, setPins] = useState<Pin[] | null> (null);
  const getData = async () => {
    const response: any = await fetch(`${endpoint}/dev/data`)
    console.log(response.json());
    setPins([
      {
        name: "hoge",
        address: {
          lat: 35.69575,
          lng: 139.77521,
        },
      },
      {
        name: "fuga",
        address: {
          lat: 35.79575,
          lng: 139.77521,
        },
      }
    ]);
  }

  useEffect(() => {
    getData();
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
