import React from 'react';
import { useNavigate } from 'react-router';
import './Header.css'


export const Header = () => {

    const navigate = useNavigate();

    return <div class="header" onClick={() => {navigate("/")}}>
        La sociedad
    </div>
}