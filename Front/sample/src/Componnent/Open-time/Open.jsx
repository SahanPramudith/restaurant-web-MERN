import { Box } from '@mui/material';
import React from 'react';
import './Banner.css'
import AOS from "aos";

function Open() {
    return (
        <div>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                height: '520px',
            }}>
                <Box
                    gap={5}
                    p={2}
                    sx={
                        {
                            border: '2px solid grey',
                            width: '50%',

                        }
                    }
                >


                    <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
                        <div>
                            <h5   className='btxt-2'>Enjoy Our Foods From <br></br>6 Days In a Week
                            </h5>
                        </div>
                        <div className='banar-1'>
                            <img className='banner-img-1' src="src\assets\baner.png" alt="" />
                            <h1 className='btxt-1'>Monday - Friday--
                                09am-6pm</h1>
                        </div>
                        <br /><br />
                        <div className='banar-1'>
                            <img className='banner-img-1' src="src\assets\baner.png" alt="" />
                            <h1 className='btxt-1'>Sater day ------------
                                08am-7pm</h1>
                        </div><br /><br />
                        <br />
                        <div className='banar-1'>
                            <img className='banner-img-1' src="src\assets\baner.png" alt="" />
                            <h1 className='btxt-1'>Sunday - ---------------
                                closed</h1>
                        </div>
                    </Box>

                </Box >
                <Box sx={{
                    border: '2px solid grey',
                    width: '50%'

                }}
                >
                    <div className='banner-2'>

                    </div>
                </Box>
            </Box>

        </div>
    );
}

export default Open;