import * as React from "react";
import { useEffect, useState } from "react";
import { Button, Grid, Box, TextField, Typography } from "@mui/material";
import "../styles/style.css"

interface InsertMoneyProps {
    money: any,
    handleMoneyAvaiable: any,
}

export default function InsertMoneyComponent(props: InsertMoneyProps) {
    const [ moneyAvailable, setMoneyAvailable ] = useState(props.money);

    useEffect(() => {
        setMoneyAvailable(props.money);
    }, [props.money]);

    const onItemClick = (value: number) => {
        const newTotal = moneyAvailable + value;
        setMoneyAvailable(newTotal);
        props.handleMoneyAvaiable(newTotal);
    };

    return(            
        <>
            <Typography variant="subtitle1" className="text">Pick up your coins </Typography>
            <Grid item xs={12}>
                <Button color="ochre" variant="contained" onClick={() => onItemClick(0.05)}>5¢</Button>
                <Button color="ochre" variant="contained" onClick={() => onItemClick(0.2)}>20¢</Button>
                <Button color="ochre" variant="contained" onClick={() => onItemClick(0.1)}>10¢</Button>
                <Button color="ochre" variant="contained" onClick={() => onItemClick(0.5)}>50¢</Button>
                <Button color="ochre" variant="contained" onClick={() => onItemClick(1)}>1$</Button>
                <Button color="ochre" variant="contained" onClick={() => onItemClick(2)}>2$</Button>
            </Grid>
        </>
    );
}
