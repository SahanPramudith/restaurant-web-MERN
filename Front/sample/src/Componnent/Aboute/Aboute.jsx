import React from 'react';
import './Aboute.css'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import MenueBanner from '../Menue/Commen/Title/Menue_Banner';

function Aboute() {
    return (
        <div>
            <div>
                <MenueBanner img={'src/assets/bgimg.jpeg'} heding={"About Us"} />
            </div>
            <div className='about-container-2'>
                <div className='about-left'>
                    <img src="src\assets\shape-2.png" alt="" />
                    <div>
                        <img className='Ab-img-1' src="src\assets\Ab-1.jpg" alt="" />
                        <img className='Ab-img-2' src="src\assets\Ab-3.jpg" alt="" />
                    </div>
                    <div>
                        <img className='Ab-img-3   ' src="src\assets\Ab-2.jpg" alt="" />
                    </div>
                </div>
                <div className='about-right'>

                    <div>
                        <Typography fontFamily={'fantasy'} marginLeft={20} marginTop={5} variant="h5" gutterBottom>
                            About us
                        </Typography>
                    </div>
                    <Typography marginLeft={20} marginTop={5} variant="h4" gutterBottom>
                        The Cleanest, Most Delicious Vegan Cookie Dough Ever.
                    </Typography>
                    <Box>
                        <Typography marginLeft={10} marginTop={5} variant="body1" gutterBottom>
                            But that you may see whence every one is born, the pleasure and pain of those who accuse him
                            I will open the whole of the praisers, and they will be discovered by the searcher of the truth and like an arch
                            I will explain the roof of the happy life.
                        </Typography>
                    </Box>
                    <div className='left-bottom'>
                        <div>
                            <img src="src\assets\icon-1.png" alt="" />
                            <img src="src\assets\icon-2.png" alt="" />
                            <img src="src\assets\icon-3.png" alt="" />
                            <img src="src\assets\icon-4.png" alt="" />
                            <img src="src\assets\icon-5.png" alt="" />
                        </div>


                    </div>
                </div>

            </div>
        </div>
    );
}

export default Aboute;