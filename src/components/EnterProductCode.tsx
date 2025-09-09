import * as React from "react";
import { useState } from "react";
import { Button, Grid, Box, TextField, Typography } from "@mui/material";
import "../styles/style.css"

interface EnterProductCodeProps { 
    enterProductCode: any,
    handleEnterProductCode: any,
}

export default function EnterProductCodeComponent(props: EnterProductCodeProps) {
    const [ enterProductCode, setEnterProductCode ] = useState(props.enterProductCode);
    const keypad = 
    [
        ['7', '8', '9'],
        ['4', '5', '6'],
        ['1', '2', '3'],
        ['A', '0', null]
    ]

    const handleEnterProductCode = (value: string) => {
        let updatedEnterProductCode = enterProductCode.concat(value);
        if(updatedEnterProductCode.length > 3) {
            updatedEnterProductCode = updatedEnterProductCode.substr(0, 3);
        }
        setEnterProductCode(updatedEnterProductCode);
        props.handleEnterProductCode(updatedEnterProductCode);
    }

    const handleRemoveProductCode = () => {
        const updatedEnterProductCode = enterProductCode.slice(0, -1);
        setEnterProductCode(updatedEnterProductCode);
        props.handleEnterProductCode(updatedEnterProductCode);
    }

    return (
        <>
            <Grid item md={12} id="display-product-div" >
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', margin: '10px 0' }}>
                    Enter Product Code: 
                </Typography>
                <Box component="div" className="box">
                    {enterProductCode}
                </Box>
            </Grid>
            <Grid container item md={12} id="enter-product-div">
                { keypad.map((row: any, i: number) => {
                    return (
                        <Grid item xs={12} key={i} sx={{ textAlign: 'center', marginBottom: '5px' }}>
                            { row.map((digit: string | null, j: number) => {
                                return (digit) ? 
                                <Button key={j} variant="outlined" onClick={() => handleEnterProductCode(digit)}>
                                    <Typography variant="subtitle1">{digit}</Typography>
                                </Button> :
                                <Button key={j} variant="outlined" onClick={() => handleRemoveProductCode()}>
                                    <Typography variant="subtitle1">&#x2190;</Typography>
                                </Button>
                            })}
                        </Grid>
                        )
                })}
            </Grid>
        </>
    )
}