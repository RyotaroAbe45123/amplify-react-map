import { Button } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { Pin } from "../../types/api";
import { cate1, cate2} from "../../utils/functions";
import { Card } from "../Card";

type Props = {
    pins: Pin[] | null
    setPins: Dispatch<SetStateAction<Pin[] | null>>
    initPins: Pin[] | null
}

export const Search = ({ pins, setPins, initPins }: Props) => {
    return (
        <Card position="left">
            <div>search</div>
            <Button
                onClick={() => {
                    if (pins) {
                        const pin: Pin[] = cate1(pins, "a");
                        setPins(pin);    
                    }
                }}
            >
                category_1
            </Button>
            <Button
                onClick={() => {
                    if (pins) {
                        const pin: Pin[] = cate2(pins, 1);
                        setPins(pin);    
                    }
                }}
            >
                category_2
            </Button>
            <Button
                onClick={() => setPins(initPins)}
            >
                reset
            </Button>
        </Card>
    );
}