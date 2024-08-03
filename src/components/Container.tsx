import * as React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../state/store";
import { 
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from "../state/counter/counterSlice";
import { Grid, Divider, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import VendingMachine from "./VendingMachine";
import InsertMoney from "./InsertMoney";
import MoneyDisplay from "./MoneyDisplay";
import EnterProductCode from "./EnterProductCode";


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
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

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
                <Grid item xs={12} sm={12} sx={{ textAlign: 'center', margin: '1em 0'}}>
                  <Typography variant="h3">React Vending Machine</Typography>
                </Grid>
                <Grid item xs={12} sm={7} sx={{ marginRight: '20px'}}>
                    <VendingMachine money={money} handleSelect={onSelect} enterProductCode={enterProductCode} />
                </Grid>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Grid item xs={12} sm={4} sx={{ width: "100%" }}>
                  <Grid item xs={12} sx={{ textAlign: 'center' }}>
                      <Typography variant="h5">Input Screen</Typography>
                  </Grid>
                  <Grid container item>
                    <Grid container item md={6} sx={{ textAlign: 'center', marginBottom: '10px'}}>
                      <EnterProductCode enterProductCode={enterProductCode} handleEnterProductCode={onEnterProductCode}/>
                    </Grid>
                    <Grid item md={6} id="coin-div">
                      <InsertMoney money={money} handleMoneyAvaiable={onMoneyAvailable} />
                    </Grid>
                    <Grid item md={12} id="money-display-div">
                      <MoneyDisplay money={money} handleCancelPayment={onCancelPayment} />
                    </Grid>
                  </Grid>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
