import * as React from "react";
import { useState } from "react";
import { Grid, Divider, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ProductScreen from "./ProductScreen";
import InsertMoney from "./InsertMoney";
import MoneyDisplay from "./MoneyDisplay";
import EnterProductCode from "./EnterProductCode";
import "../styles/style.css"


// Augment the palette to include an ochre color
declare module '@mui/material/styles' {
    interface Palette {
      ochre: Palette['primary'];
    }
  
    interface PaletteOptions {
      ochre?: PaletteOptions['primary'];
    }
  }
  
  // Update the Button's color options to include an ochre option
  declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
      ochre: true;
    }
  }
  
  const theme = createTheme({
    palette: {
      ochre: {
        main: '#E3D026',
        light: '#E9DB5D',
        dark: '#A29415',
        contrastText: '#242105',
      },
    },
  });

export default function ContainerComponent() {

    const [ money, setMoney ] = useState(0);
    const [ enterProductCode, setEnterProductCode ] = useState('');

    const onMoneyAvailable = (total: number) => {
        setMoney(total);
    }

    const onSelect = (price: number) => {
        setMoney(money - price);
    }

    const onEnterProductCode = (enteredCode: string) => {
        setEnterProductCode(enteredCode);
    }

    const onCancelPayment = (val: number) => {
      setMoney(val);
  }

    return(
        <ThemeProvider theme={theme} >
            <Grid container spacing={0} alignItems="center" justifyContent="center" id="vending-machine-div">
                <Grid className="neon-container" item xs={12} sx={{ textAlign: 'center', margin: '1em 0'}}>
                  <Typography className="neon-text" variant="h3">React Vending Machine</Typography>
                </Grid>

                <Grid item xs={12} sx={{ marginRight: '20px'}}>
                    <ProductScreen money={money} handleSelect={onSelect} enterProductCode={enterProductCode} />
                </Grid>

                <Grid item xs={12} sx={{ margin: '3rem 0' }}>
                  <Divider flexItem sx={{ margin: "0 2rem" }} />
                </Grid>

                <Grid container item xs={12} spacing={2} alignItems="center" justifyContent="center" sx={{ marginBottom: '3rem' }}>
                  <Grid item xs={12} sx={{ textAlign: 'center' }}>
                      <Typography variant="h4" sx={{ margin: '1rem 0' }}>Input Screen</Typography>
                  </Grid>
                  <Grid item md={12} sx={{ textAlign: 'center', marginBottom: '2rem' }} className="money-display-div">
                    <MoneyDisplay money={money} handleCancelPayment={onCancelPayment} />
                  </Grid>
                </Grid>

                <Grid container item spacing={2} sx={{ margin: '0 auto 5rem', maxWidth: '75rem' }} justifyContent="center" >
                  <Grid item md={12} lg={6} id="coin-div">
                    <InsertMoney money={money} handleMoneyAvaiable={onMoneyAvailable} />
                  </Grid>
                  <Grid container item md={12} lg={6} sx={{ textAlign: 'center', marginBottom: '10px'}} justifyContent="center" >
                    <EnterProductCode enterProductCode={enterProductCode} handleEnterProductCode={onEnterProductCode}/>
                  </Grid>
                </Grid>

            </Grid>
        </ThemeProvider>
    );
}
