import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Hello from './components/Hello';
import Keyboard from './components/Keyboard';
import Wallet from './components/Wallet';
import Money from './components/Money';
import Products from './components/Products';
import Selected_Product from './components/Selected_Product';
import Surplus from './components/Surplus';

function App() {
// משתנה סטייט המקבל את מערך המוצרים
  const [allProducts, setAllProducts] = useState([
    {id: 1, name: "x", price: 10, code: "1A"},
    {id: 2, name: "x", price: 10, code: "1B"},
    {id: 3, name: "x", price: 10, code: "1C"},
    {id: 4, name: "x", price: 10, code: "1D"},
    {id: 5, name: "x", price: 10, code: "1E"},
    {id: 6, name: "x", price: 10, code: "1F"},
    {id: 7, name: "x", price: 10, code: "2A"},
    {id: 8, name: "x", price: 10, code: "2B"},
    {id: 9, name: "x", price: 10, code: "2C"},
    {id: 10, name: "x", price: 10, code: "2D"},
    {id: 11, name: "x", price: 10, code: "2E"},
    {id: 12, name: "x", price: 10, code: "2F"},
    {id: 13, name: "x", price: 10, code: "3A"},
    {id: 14, name: "x", price: 10, code: "3B"},
    {id: 15, name: "x", price: 10, code: "3C"},
    {id: 16, name: "x", price: 10, code: "3D"},
    {id: 17, name: "x", price: 10, code: "3E"},
    {id: 18, name: "x", price: 10, code: "3F"}
  ])

  // משתנה סטייט המקבל את המוצר הנוכחי
  const [currentProduct, setCurrentProduct]=useState({});
  
  // משתנה סטייט המקבל את הסכום שהמשתמש הכניס
  const [price, setPrice]=useState(0);

  // משתנה השומר את סכום הכסף שיש בארנק
  const [sum, setSum] = useState(50);
  return (
    <div>
      <header>מכונת משקאות</header>
      <div><Hello /></div>
      <div><Keyboard setCurrentProduct={setCurrentProduct} allProducts={allProducts}/></div>
      <div><Wallet sum={sum} setSum={setSum}/></div>
      <div><Money price={price} setPrice={setPrice} sum={sum} setSum={setSum}/></div>
      <div><Products allProducts={allProducts}/></div>
      <div><Selected_Product/></div>
      <div><Surplus price={price} setPrice={setPrice} sum={sum} setSum={setSum} currentProduct={currentProduct}/></div>
    </div>
  );
}

export default App;
