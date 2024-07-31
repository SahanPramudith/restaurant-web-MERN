import React from 'react';
import './Nav.css'
import rout from '../../Naigation/Router';
import { Link, Navigate } from 'react-router-dom';
import { Button } from '@mui/material';
//import { shadows } from '@material-ui/system';

function NaveBar() {
    return (
        <div>
            <div className='nav'>
            {rout.map((val, index) => (
                <li className='li'> 
                   <Link  to={val.path}>{val.name}</Link>
                </li>
            
            ))}
    
            </div>
        </div>
    );
}

export default NaveBar;