import React from 'react';
import Card from '../Card/Menue-Card';
import MenueBanner from '../Menue/Commen/Title/Menue_Banner';
import { Box, Typography } from '@mui/material';
import Form from './contactForm/Form';

function Contact() {
    return (
        <div>
            <div>
                <MenueBanner img={'src/assets/bgimg.jpeg'} heding={"Contact Us"} />
            </div>
            <Box
                height={200}
                width={200}
                my={4}
                display="flex"
                alignItems="center"
                justifyContent={'space-around'}
                gap={4}
                p={2}
                sx={{ width: "100%" }}
            >
                <Box
                    gap={2}
                    alignItems="center"
                    p={2}
                    bgcolor={'#F5F7F8'}
                    sx={{
                        marginLeft: '20px',
                        display: 'flex',
                        flexDirection: 'row',
                        width: '250px',
                        border: '5px',
                        border: '2px solid grey',
                        borderRadius: '30px',

                    }}>
                    <img src="src\assets\contact-1.png" alt="" style={{ width: '75px' }} />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography marginBottom={1} variant='h7'>Location</Typography>
                        <Typography variant='body1'>744/A,Nupe<br />Matara</Typography>

                    </Box>

                </Box>

                <Box
                    gap={2}
                    alignItems="center"
                    p={2}
                    bgcolor={'#F5F7F8'}
                    sx={{
                        marginLeft: '20px',
                        display: 'flex',
                        flexDirection: 'row',
                        width: '250px',
                        border: '5px',
                        border: '2px solid grey',
                        borderRadius: '30px',
                    }}>
                    <img src="src\assets\icon-8.png" alt="" style={{ width: '75px' }} />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography marginBottom={1} variant='h7'>E mail Address</Typography>
                        <Typography variant='body1'>infor@gmail.com</Typography>

                    </Box>

                </Box>

                <Box
                    gap={2}
                    alignItems="center"
                    p={2}
                    bgcolor={'#F5F7F8'}
                    sx={{
                        marginLeft: '20px',
                        display: 'flex',
                        flexDirection: 'row',
                        width: '250px',
                        border: '5px',
                        border: '2px solid grey',
                        borderRadius: '30px',
                    }}>
                    <img src="src\assets\icon-9.png" alt="" style={{ width: '75px' }} />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography marginBottom={1} variant='h7'>Contact Us</Typography>
                        <Typography variant='body1'>074-1600386<br />041-3598452</Typography>
                    </Box>
                </Box>
            </Box>
            <div>
                <Form/>
            </div>


        </div >
    );
}

export default Contact;