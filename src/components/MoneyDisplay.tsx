import * as React from "react";
import { Button, Grid, Box, Typography } from "@mui/material";
import "../styles/style.css"

interface MoneyDisplayProps {
    money: any,
    handleCancelPayment: any,
}

export default function MoneyDisplayComponent(props: MoneyDisplayProps) {

    const handleCancelPayment = () => {
        props.handleCancelPayment(0);
    };

    return (
        <>
            <Grid item xs={12} sx={{ textAlign: 'center', margin: '10px 0'}}>
                <Typography variant="h6">Money Available:</Typography>
                <Box component="div" className="box">{Math.round(props.money * 100) / 100} </Box>
                <Typography display="inline-block" variant="subtitle1">$</Typography>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center', margin: '10px 0'}}>
                <Button variant="outlined" onClick={handleCancelPayment} disabled={(props.money > 0 ? false : true )}>return your money</Button>
            </Grid>
        </>
    )
}
