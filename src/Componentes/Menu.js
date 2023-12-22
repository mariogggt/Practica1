import React from 'react';
import { MenuEntry } from './MenuEntry';
import './Menu.css';

export const Menu = ({typeOfUser}) => {

    return <div class='menu'>
        <MenuEntry location="Ventas"></MenuEntry>
        <MenuEntry location="Recibos"></MenuEntry>
        <MenuEntry location="Mesas"></MenuEntry>
        {
            typeOfUser === 'admin' &&
            <MenuEntry location="Inventario"></MenuEntry>
        }
    </div>;
}