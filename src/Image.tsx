import { Box } from "@mui/material"
import { useEffect, useState } from "react"

const endpoint = process.env.REACT_APP_API_ENDPOINT ? process.env.REACT_APP_API_ENDPOINT : ""

type Props = {
    id: number | null
}

type I = {
    main: string,
    other: string[]
}

export const Image = ({ id }: Props) => {
    const [images, setImages] = useState<I | null> (null);

    const getImages = async () => {
        const response = await fetch(`${endpoint}/dev/images?id=${id}`)
        return response.json();
      }
    
      useEffect(() => {
        if (id !== null) {
            getImages()
                .then((data) => {
                    setImages(data);
                })  
        }
      }, [id])
    
        return (
        <Box
            width="20%"
            height="100vh"
            bgcolor="blue"
        >
            {
                images && <img src={`data:image/jpg;base64,${images.main}`} width="100%" />

            }
        </Box>
    )
}