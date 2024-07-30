import * as React from "react";
import { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { products } from "../data/product";
import SlotItem from "./SlotItem";
import '../styles/style.css';

interface VendingMachineProps {
    classes?: any,
    money: any,
    enterProductCode: any,
    handleSelect: any
}

export default function VendingMachineComponent(props: VendingMachineProps) {
    const [productList] = useState(products);

    return(
        <Grid container spacing={2}>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <Typography variant="h5">Slot Item Screen</Typography>
            </Grid>
                { productList && productList.map((product: any) => {
                    return <SlotItem key={product.id} product={product} money={props.money} 
                        handleSelect={props.handleSelect} enterProductCode={props.enterProductCode} />;
                })
                }
        </Grid>
    );
}
