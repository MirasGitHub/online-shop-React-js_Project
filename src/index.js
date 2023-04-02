import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import 'toastr/build/toastr.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Products from './Pages/Products';
import Orders from './OurComponents/Orders';
import Layout from './OurComponents/Layout';
import Customers from './OurComponents/Customers';
import Reports from './OurComponents/Reports';
import CreateNewProduct from './OurComponents/CreateNewProduct';
import EditPage from './OurComponents/EditPage';



function RoutingConfiguration()
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='Products' element={<Products/>} index></Route>
          <Route path='Customers' element={<Customers/>}></Route>
          <Route path='Orders' element={<Orders/>}></Route>
          <Route path='Reports' element={<Reports/>}></Route>
          <Route path='CreateNewProduct' element={<CreateNewProduct/>}></Route>
          <Route path='EditPage' element={<EditPage/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

let theDivInIndexHtml = document.getElementById('root');
const root = ReactDOM.createRoot(theDivInIndexHtml);
root.render(<RoutingConfiguration />);


