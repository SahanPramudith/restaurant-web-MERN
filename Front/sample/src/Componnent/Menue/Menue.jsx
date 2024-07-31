import React from 'react';
import { Box } from '@mui/material';
import { Fullscreen } from '@mui/icons-material';
import './Menue.css'
import MenueBanner from './Commen/Title/Menue_Banner';



function Menue() {
    return (
        <div >
            <MenueBanner img={'src/assets/bgimg.jpeg'} heding={"Menue"} />
        </div>
    );
}

export default Menue;