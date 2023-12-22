import React, { useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { Table } from './Table.js';

import "react-datepicker/dist/react-datepicker.css";

import './Tables.css';

export const Tables = ({}) => {

    const [mesa1, setMesa1] = useState('libre');
    const [mesa2, setMesa2] = useState('libre');
    const [mesa3, setMesa3] = useState('libre');
    const [mesa4, setMesa4] = useState('libre');
    const [mesa5, setMesa5] = useState('libre');
    const [mesa6, setMesa6] = useState('libre');
    const [mesa7, setMesa7] = useState('libre');
    const [mesa8, setMesa8] = useState('libre');

    const [selectedDate, setSelectedDate] = useState(new Date());

    function selectTable(number) {

        switch (number) {
            case 1:
                if (mesa1 == 'libre') {
                    setMesa1('selected');
                }

                break;

            case 2:
                if (mesa2 == 'libre') {
                    setMesa2('selected');
                }

                break;

            case 3:
                if (mesa3 == 'libre') {
                    setMesa3('selected');
                }

                break;

            case 4:
                if (mesa4 == 'libre') {
                    setMesa4('selected');
                }

                break;

            case 5:
                if (mesa5 == 'libre') {
                    setMesa5('selected');
                }

                break;

            case 6:
                if (mesa6 == 'libre') {
                    setMesa6('selected');
                }

                break;

            case 7:
                if (mesa7 == 'libre') {
                    setMesa7('selected');
                }

                break;

            case 8:
                if (mesa8 == 'libre') {
                    setMesa8('selected');
                }

                break;
        }
    }

    function reservar()
    {
        if (mesa1 == 'selected') {
            setMesa1('ocupada');
        }
        if (mesa2 == 'selected') {
            setMesa2('ocupada');
        }
        if (mesa3 == 'selected') {
            setMesa3('ocupada');
        }
        if (mesa4 == 'selected') {
            setMesa4('ocupada');
        }
        if (mesa5 == 'selected') {
            setMesa5('ocupada');
        }
        if (mesa6 == 'selected') {
            setMesa6('ocupada');
        }
        if (mesa7 == 'selected') {
            setMesa7('ocupada');
        }
        if (mesa8 == 'selected') {
            setMesa8('ocupada');
        }
    }

    useEffect(() => {
        switch (selectedDate.getFullYear() + '-' + (selectedDate.getMonth()+1)  + '-' + selectedDate.getDate()) {
            case '2023-1-12': 
                setMesa1('ocupado');
                setMesa2('libre');
                setMesa3('libre');
                setMesa4('libre');
                setMesa5('ocupada');
                setMesa6('libre');
                setMesa7('ocupada');
                setMesa8('libre');

                break;

            case '2023-1-18': 
                setMesa1('libre');
                setMesa2('libre');
                setMesa3('libre');
                setMesa4('libre');
                setMesa5('ocupada');
                setMesa6('ocupada');
                setMesa7('ocupada');
                setMesa8('ocupada');

                break;

            default:
                setMesa1('libre');
                setMesa2('libre');
                setMesa3('libre');
                setMesa4('libre');
                setMesa5('libre');
                setMesa6('libre');
                setMesa7('libre');
                setMesa8('libre');

        }
    }, [selectedDate]);

    return <>
        <div class='mesas main_container'>
            <div class='mesas_header'>
                <ReactDatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} dateFormat="dd-MM-yyyy"/>

                <div class='button' onClick={() => reservar()}>
                    Reservar
                </div>
            </div>

            <div class='mesas_map'>
                <Table estado={mesa1} selectTable={() => selectTable(1)} number={1}/>
                <Table estado={mesa2} selectTable={() => selectTable(2)} number={2}/>
                <Table estado={mesa3} selectTable={() => selectTable(3)} number={3}/>
                <Table estado={mesa4} selectTable={() => selectTable(4)} number={4}/>
                <Table estado={mesa5} selectTable={() => selectTable(5)} number={5}/>
                <Table estado={mesa6} selectTable={() => selectTable(6)} number={6}/>
                <Table estado={mesa7} selectTable={() => selectTable(7)} number={7}/>
                <Table estado={mesa8} selectTable={() => selectTable(8)} number={8}/>
            </div>
        </div>
    </>
}