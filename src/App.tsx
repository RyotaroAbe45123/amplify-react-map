import { Box } from '@mui/material';
import { useState } from 'react';
import './App.css';
import { Map } from './Map';

export const App = () => {
  const [text, setText] = useState<string> ("");
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
            <Map setText={setText} />
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
    // <div className="map">
    //   <div className="title">Welcome to Map App!</div>
    // </div>
  );
}
