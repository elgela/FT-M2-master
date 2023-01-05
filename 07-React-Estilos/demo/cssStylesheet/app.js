import React from 'react';
import { render } from 'react-dom';
import OtroComponente from './src/components/OtroComponente.js';
import Producto from './src/components/Product.jsx';

render(
    <div>
        <Producto title="Prueba" price={400}/>
        <OtroComponente title="Otro" price={133}/>
    </div>
    , document.getElementById('app'));
