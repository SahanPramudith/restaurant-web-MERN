import React from 'react';
import './Home.css'
import Button_1 from '../../Button/Button-1';
import { Box } from '@mui/material';
import Card from '../../Componnent/Card/Menue-Card';
import Open from '../Open-time/Open';
import MenuCard from '../Menue/MenueCard'
import AOS from "aos";
import "aos/dist/aos.css";


function Home() {
    return (
        <div >
            <div>
                <div>
                    <div className='container-1'>
                        <div className='left'>
                            <div className=''>
                                <img className='img-1' src="src\assets\buger1.png" alt="" />
                            </div>

                            <h1 data-aos="fade-zoom-in" className='txt-1'>Crispy <br />  Chicken <br /> Burgers</h1>
                            <p className='txt-2'>Sit amet consectetur adipiscing Malesuada morbig</p>
                            <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative', bottom: '50px' }}>
                                <Button_1 />
                            </Box>

                        </div>
                        <div className='right'>
                            <img className='hero-1' src="src\assets\hero-1.jpg" alt="" />
                        </div>

                    </div>
                </div>
                <div className='container-2'>
                    <div className='container-3'>
                        <h4 className='txt-3'>OUR POPULAR FOOD</h4>
                        <h1 className='txt-3'>Best Category Foods Menue</h1>
                        <Card />

                    </div>

                </div>
                <div className='container-'>
                    <Open />
                </div>
                <div>
                    <img className='M-img-2' src="src\assets\arrow.3jpg.png" alt="" />
                    <h2 className='M-text'>Choose Your Best Menus</h2>
                </div>
                <div className='Menue-container'>
                    <div className='M-left'>
                        <img className='M-img' src="src\assets\hours-bg-1.jpg" alt="" />
                    </div>
                    <Box className='Menue-2'>
                        <MenuCard
                            img='src\assets\ab10d17d-1cc4-49ce-9834-76a474869750.jpg'
                            title="'sa   '"
                            content="sahan"

                        />
                        <MenuCard
                            img='src\assets\e8a3c26c-dda2-4d4c-9ebe-543ffaa28743.jpg'
                            title="'sa   '"
                            content="sahan"
                        />
                        <MenuCard
                            img='src\assets\c0df92e8-c6c1-43bb-8630-ac2631abf5ee.jpg'
                            title="'sa   '"
                            content="sahan"
                        />
                    </Box>

                </div>

            </div>
        </div>
    );
}

export default Home;