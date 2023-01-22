import { Box, Button, Modal, Typography } from "@mui/material"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { endpoint } from "../../utils/settings"
import { Card } from "../Card"

// const endpoint = process.env.REACT_APP_API_ENDPOINT ? process.env.REACT_APP_API_ENDPOINT : ""

// type Props = {
//     id: number | null
// }

type I = {
    main: string,
    other: string[]
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

// export const Image = ({ id }: Props) => {
//     const [images, setImages] = useState<I | null> (null);

//     const getImages = async () => {
//         const response = await fetch(`${endpoint}/dev/images?id=${id}`)
//         return response.json();
//     }

//     useEffect(() => {
//     if (id !== null) {
//         getImages()
//             .then((data) => {
//                 setImages(data);
//             })  
//     }
//     }, [id])

//     const [open, setOpen] = useState<boolean>(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);

//     useEffect(() => {
//         const zoomControl = document.getElementsByClassName("gmnoprint");
//         if (zoomControl) {
//             const zoomControlElement = zoomControl[3];
//             if (zoomControlElement && open) {
//                 zoomControlElement.setAttribute("style", "position: absolute; left: -50px; top: 72px");
//             }
//             else if (zoomControlElement && !open) {
//                 zoomControlElement.setAttribute("style", "position: absolute; left: 0px; top: 72px");
//             }    
//         }
//     }, [open])

//     return (
//         <div>
//             <Button onClick={handleOpen}>
//                 Open Modal
//             </Button>
//             <Modal
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="modal-moda-title"
//                 aria-describedby="modal-modal-description"
//             >
//                 <Box
//                     bgcolor="blue"
//                     width="20%"
//                     margin="auto 0 auto auto"
//                     height="100%"
//                     // sx={style}
//                 >
//                     a
//                     {/* <Typography id="modal-modal-title" variant="h6" component="h2">
//                         Text in a modal
//                     </Typography>
//                     <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//                         Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//                     </Typography> */}
//                 </Box>
//             </Modal>
//         </div>
//     )
    
//     // return (
//     //     <Box
//     //         width="20%"
//     //         height="100vh"
//     //         bgcolor="blue"
//     //     >
//     //         {
//     //             images && <img src={`data:image/jpg;base64,${images.main}`} width="100%" />

//     //         }
//     //     </Box>
//     // )
// }

type Props = {
    show: boolean
    setShow: Dispatch<SetStateAction<boolean>>
    id: number | null
}

export const Display = ({ show, setShow, id }: Props) => {
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
        

    if (show) {
        return (
            <Card position="right">
                <Box
                    display="flex"
                    justifyContent="flex-end"
                >
                    <Button
                        onClick={() => setShow(false)}
                    >
                        ✕
                    </Button>
                </Box>
                {
                    id === null ? (
                        <div>
                            Initial Display
                        </div>
                    ) : (
                        <Box>
                            <Box>
                                {id}
                            </Box>
                            {
                                images && <img src={`data:image/jpg;base64,${images.main}`} width="100%" />
                            }
                        </Box>
                    )
                }
            </Card>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}