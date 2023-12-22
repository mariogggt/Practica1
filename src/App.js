import React from 'react';
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import { Menu } from './Componentes/Menu';
import { Header } from './Componentes/Header';
import { Pos } from './Componentes/Pos';
import { Receipts } from './Componentes/Receipts';
import { Tables } from './Componentes/Tables';
import { Inventory } from './Componentes/Inventory';

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Menu typeOfUser={'admin'}></Menu>
        <Routes>
          <Route path="/" element={<Pos/>}></Route>
          <Route path="/Ventas" element={<Pos/>}></Route>
          <Route path="/Recibos" element={<Receipts/>}></Route>
          <Route path="/Mesas" element={<Tables/>}></Route>
          <Route path="/Inventario" element={<Inventory/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
