import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MenuEntry.css';

export const MenuEntry = ({location}) => {

    const navigate = useNavigate();

    return <div class='menu_entry' onClick={() => {navigate("/" + location)}}>
        {location}
    </div>
}