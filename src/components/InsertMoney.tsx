import * as React from "react";
import { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { coins } from "../data/coins";
import "../styles/style.css"

interface InsertMoneyProps {
    money: any,
    handleMoneyAvaiable: any,
}

export default function InsertMoneyComponent(props: InsertMoneyProps) {
    const [ moneyAvailable, setMoneyAvailable ] = useState(props.money);
    const [ coinsList ] = useState(coins);

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
            <Typography variant="subtitle1" className="text" sx={{ fontWeight: 'bold', margin: '10px 0' }}>
                Pick up your coins 
            </Typography>
            <Grid item md={12} sx={{ margin: '0 auto', textAlign: 'center', maxWidth: '90%' }} >
                {coinsList.map((coin) => (
                    <Button key={coin.id} color="ochre" variant="contained" onClick={() => onItemClick(coin.value)}>
                        {coin.coin}
                    </Button>
                ))}
            </Grid>
        </>
    );
}
