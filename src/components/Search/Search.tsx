import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup } from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { Pin } from "../../types/api";
import { cate1, cate2} from "../../utils/functions";
import { Card } from "../Card";
import { MenuItems } from "./MenuItems";

type Props = {
    pins: Pin[] | null
    setPins: Dispatch<SetStateAction<Pin[] | null>>
    initPins: Pin[] | null
}

export const Search = ({ pins, setPins, initPins }: Props) => {
    // const [checkedList, setCheckedList] = useState<string[]>([]);
    // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     let updatedList: string[] = [...checkedList];
    //     if (event.target.checked) {
    //         updatedList = [...checkedList, event.target.value];
    //     }
    //     else {
    //         updatedList = checkedList.filter((i) => i !== event.target.value);
    //     }
    //     setCheckedList(updatedList);
    //     console.log(updatedList);
    // }

    // const checklist = [
    //     {
    //         id: 0,
    //         name: 'a',
    //         flag: false,
    //     },
    //     {
    //         id: 1,
    //         name: 'b',
    //         flag: false,
    //     },
    // ]


    // const [checked, setChecked] = useState<boolean> (false);
    // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     console.log('change');
    //     setChecked(event.target.checked);
    // }


    // const [checked, setChecked] = useState(false);
    // type arrayP = {
    //     search_1: [
    //         {
    //             name: string,
    //             checked: boolean,
    //         },
    //     ],
    //     search_2: [
    //         {
    //             name: string,
    //             checked: boolean,
    //         },
    //     ]
    // }

    // type c = {
    //     name: string,
    //     checked: boolean
    // }

    // const initCheckedList: c[] = [];
    // MenuItems.forEach((item) => {
    //     if (!item.subheader && item.name) {
    //         initCheckedList.push({
    //             name: item.name,
    //             checked: false,
    //         })
    //     }
    // })

    // const [checkedList, setCheckedList] = useState<c[]>(initCheckedList);

    // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     const updatedList: c[] = [];
    //     checkedList.forEach((l: c) => {
    //         if (l.name === event.target.name) {
    //             updatedList.push({
    //                 name: l.name,
    //                 checked: !l.checked,
    //             })
    //         } else {
    //             updatedList.push({
    //                 name: l.name,
    //                 checked: l.checked,
    //             })
    //         }
    //     })
    //     setCheckedList(updatedList);
    // }

    const [state, setState] = useState({
        a: false,
        b: false,
        c: false,
    })

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked
        })
    }
    return (
        <Card position="left">
            <Box>
                <Box>
                    <FormControl>
                        <Box display="flex">
                            <div>hoge</div>
                            <div>fuga</div>
                        </Box>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox checked={state.a} onChange={handleChange} />} name="a" label="a" />
                            <FormControlLabel control={<Checkbox checked={state.b} onChange={handleChange} />} name="b" label="b" />
                            <FormControlLabel control={<Checkbox checked={state.c} onChange={handleChange} />} name="c" label="c" />
                        </FormGroup>
                    </FormControl>
                </Box>
                <Box>
                    <FormControl>
                        <Box display="flex">
                            <div>hoge</div>
                            <div>piyo</div>
                        </Box>
                        <RadioGroup defaultValue="d" >
                            <FormControlLabel value="d" control={<Radio />} name="d" label="d" />
                            <FormControlLabel value="e" control={<Radio />} name="e" label="e" />
                            <FormControlLabel value="f" control={<Radio />} name="f" label="f" />
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Box>
        </Card>
    );
}
