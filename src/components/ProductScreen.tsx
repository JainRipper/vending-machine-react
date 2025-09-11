import * as React from "react";
import { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { products } from "../data/products";
import SlotItem from "./SlotItem";
import '../styles/style.css';

interface ProductScreenProps {
    classes?: any,
    money: any,
    enterProductCode: any,
    handleSelect: any
}

export default function ProductScreenComponent(props: ProductScreenProps) {
    const [productList] = useState(products);

    return(
        <Grid container spacing={2}>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <Typography variant="h4">Slot Item Screen</Typography>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center', marginBottom: '10px' }} className="money-display-div">
                <Typography variant="h6">Money Available: <span style={{ fontWeight: 'bold', fontSize: 'large'}}>{Math.round(props.money * 100) / 100} $</span></Typography>
            </Grid>
            { /* Product List */}
            <Grid container item spacing={2} sx={{ margin: '0 auto', maxWidth: '90rem' }}>
                { productList && productList.map((product: any) => {
                    return <SlotItem key={product.id} product={product} money={props.money} 
                        handleSelect={props.handleSelect} enterProductCode={props.enterProductCode} />;
                })
                }
            </Grid>
        </Grid>
    );
}
