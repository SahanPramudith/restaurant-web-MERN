import React from 'react';
import MenueBanner from '../Commen/Title/Menue_Banner';
import { Box } from '@mui/material';
import MenuCard from "../MenueCard"


function Burger() {
    return (
        <div>
            <MenueBanner img={'src/assets/bgimg.jpeg'} heding={"Burger"} /><br/>
            <Box
                gap={2}

                sx={{
                    display: 'flex', justifyContent: 'space around',
                    flexWrap: 'wrap'
                }}>
                <MenuCard img={'src/assets/e8a3c26c-dda2-4d4c-9ebe-543ffaa28743.jpg'} />
                <MenuCard img={'src/assets/e8a3c26c-dda2-4d4c-9ebe-543ffaa28743.jpg'} />
                <MenuCard img={'src/assets/e8a3c26c-dda2-4d4c-9ebe-543ffaa28743.jpg'} />
            </Box>
        </div>
    );
}

export default Burger;