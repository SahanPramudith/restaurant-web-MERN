// App.js
import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { NavLink } from 'react-router-dom';

// Custom styled button
const CustomButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 5px 10px 8px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 60,
    width: 200,
    padding: '10px 50px',
    '&:hover': {
        background: 'linear-gradient(45deg,#F8DE22, #F94C10 80%, #C70039 110%)',
    },
});

function Button_1() {


    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginTop: '40px' }}>

            <NavLink to={'/menue'}>
                <CustomButton
                    variant="contained"
                >
                    Open oder
                </CustomButton>
            </NavLink>


        </div>
    );
}

export default Button_1;