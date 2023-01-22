import { Box } from "@mui/material"

type Props = {
    position: "left" | "right",
    children: any
}

export const Card = ({ position, children }: Props) => {
    return (
        <Box
            sx={{
                position: "absolute",
                backgroundColor: "#fff",
                opacity: 0.6,
                height: "80%",
                width: "20%",
                top: "10%",
                left: position === "left" ? "8%" : "72%"
            }}
        >
            {children}
        </Box>
    )
}