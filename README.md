# React Vending Machine

- An online vending machine that would simulate a real-life one.
- Multiple rows and columns with different products (products can be repeated several times).
- Have different prices for different products and also a maximum amount of products per slot.
- Have a keypad to enter the product code and a way to add credit (money) to the machine.

- Still does not support resonsive view.

## Demo

![Demo](./src/assets/demo/demo.gif)


## Installation

This project uses TypeScript, Material UI 5 and Webpack.

```bash
npm install
```
Open [http://localhost:8080/](http://localhost:8080/) to view it in the browser.

### Note
- Make sure to use node v.19 or later
- If face error 'node-pre-gyp ERR!' please read [this artical](https://stackoverflow.com/questions/57879150/how-can-i-solve-error-gypgyp-errerr-find-vsfind-vs-msvs-version-not-set-from) and install Visual Studio Installer


## Usage

```bash
npm run start
```
It will take some time to finish the installation

There are two ways to use the vending machine

A. Use the Keypad to enter the code.

1. Users can start by inputting the keypad to enter the product code (which appears on the item slot)
2. Insert coin to purchase
3. Click 'Available' (if there is enough stock)
4. (optional) Click 'Return Your Money' to get your money back.

B. Without using the keypad
1. Insert coin to purchase
2. Click 'Available' (if there is enough stock)
3. (optional) Click 'Return Your Money' to get your money back.

