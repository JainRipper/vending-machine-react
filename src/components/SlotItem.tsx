import * as React from "react";
import { useState } from "react";
import { Card, CardHeader, CardMedia, CardContent, Grid, Button, Typography } from "@mui/material";
import '../styles/style.css';

interface SlotItemProps {
    classes?: any,
    product: any,
    money: any,
    handleSelect: any,
    enterProductCode: any
}

const noProductImgUrl = "https://i.imgur.com/DwEhwpx.jpeg";

export default function SlotItemComponent(props: SlotItemProps) {
    const { productImg, name, price, productCode } = props.product;
    const [ availability, setAvailability] = useState(props.product.availability);
    
    const handleAvailibily = () => {
        if(price > props.money) return;
        setAvailability(availability - 1);
        props.handleSelect(price);
    }

    return(
        <Grid item xs={12} sm={4} lg={3} id="slot-item-div">
            <div style={{ boxShadow: (productCode == props.enterProductCode? '0px 0px 22px 1px rgba(60,118,61,1)': 'unset') }}>
                <Card sx={{ margin: '0 auto', border: '1px solid #eee' }} className="slot-item-card">
                    <CardContent>
                        <Typography variant="h6" component="div" sx={{ color: (name? '#3c763d' : 'rgba(0, 0, 0, 0.26)'),
                            backgroundColor: (name? '#dff0d8' : '#fcf8e3'), padding: '5px 0'}}>
                            { name || 'Out of Order'}
                        </Typography>
                        <Typography variant="subtitle1" component="div" sx={{ backgroundColor: (productCode ? '#d9edf7' : 'transparent'), minHeight: '30px' }}>
                            {productCode ? `Code: ${productCode}` : ''}
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        height="194"
                        image={ productImg || noProductImgUrl }
                        alt={name}
                        sx={{ objectFit: "contain" }}
                    />
                    <CardHeader        
                        action={
                        <Button variant="contained" color="success" size="small" className="btn-available"
                            onClick={() => handleAvailibily()} title="Click to buy"
                            disabled={(name && props.money >= price ? ( (availability <= 0)? true : false) : true)} >
                            {'Available:  '}
                            <span style={{ fontWeight: 'bold', fontSize: 'large'}}>{availability}</span>                            
                        </Button>
                        }
                        titleTypographyProps={{variant:'subtitle1' }}
                        title={(price != null ? price + ' $' : 'N/A')}
                    />
                </Card>
            </div>
        </Grid>
    );
}
