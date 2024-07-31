import { Box } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Card() {
    return (
        <div>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyItems: 'center',
                padding: 5,
                paddingLeft: 5
            }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', }}>
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
                        <img src="src/assets/icon-1.png" alt="" style={{ width: '75px' }} />
                        <h1>Pizza</h1>
                        <NavLink to={'/pizza'}>
                            <Box>
                                <img style={{ width: '50px', height: '50px', }} src="src\assets\arrow-2.png" alt="" />
                            </Box>
                        </NavLink>
                    </Box>
                    <Box gap={2}
                        alignItems="center"
                        p={3}

                        bgcolor={'#F5F7F8'}
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '270px',
                            border: '5px',
                            border: '2px solid grey',
                            borderRadius: '30px',
                            marginLeft: '40px'

                        }}>

                        <img src="src\assets\icon-2.png" alt="" />
                        <h1>Burger</h1>
                        <NavLink to={'/burger'}>
                            <Box>
                                <img style={{ width: '50px', height: '50px', }} src="src\assets\arrow-2.png" alt="" />
                            </Box>
                        </NavLink>
                    </Box>
                    <Box gap={2}
                        alignItems="center"
                        p={2}
                        bgcolor={'#F5F7F8'}
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '270px',
                            border: '5px',
                            border: '2px solid grey',
                            borderRadius: '30px',
                            marginLeft: '40px'

                        }}>
                        <img src="src\assets\icon-3.png" alt="" />
                        <h1>Bread</h1>
                        <NavLink to={'/menu'}>
                            <Box>
                                <img style={{ width: '50px', height: '50px', }} src="src\assets\arrow-2.png" alt="" />
                            </Box>
                        </NavLink>

                    </Box>

                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row' ,marginTop:'30px'}}>

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
                        <img src="src/assets/icon-4.png" alt="" style={{ width: '75px' }} />
                        <h1>Seafood</h1>
                        <NavLink to={'/seaFood'}>
                            <Box>
                                <img style={{ width: '50px', height: '50px', }} src="src\assets\arrow-2.png" alt="" />
                            </Box>
                        </NavLink>
                    </Box>

                    <Box
                        gap={2}
                        alignItems="center"
                        p={2}
                        bgcolor={'#F5F7F8'}
                        sx={{
                            marginLeft: '40px',
                            display: 'flex',
                            flexDirection: 'row',
                            width: '290px',
                            border: '5px',
                            border: '2px solid grey',
                            borderRadius: '30px',


                        }}>
                        <img src="src/assets/icon-5.png" alt="" style={{ width: '75px' }} />
                        <h1>Coffy</h1>
                        <NavLink to={'/Coffy'}>
                            <Box>
                                <img style={{ width: '50px', height: '50px', }} src="src\assets\arrow-2.png" alt="" />
                            </Box>
                        </NavLink>
                    </Box>


                    <Box
                        gap={2}
                        alignItems="center"
                        p={3}
                        bgcolor={'#F5F7F8'}
                        sx={{
                            marginLeft: '40px',
                            display: 'flex',
                            flexDirection: 'row',
                            width: '250px',
                            border: '5px',
                            border: '2px solid grey',
                            borderRadius: '30px',


                        }}>
                        <img src="src/assets/icon-6.png" alt="" style={{ width: '75px' }} />
                        <h1>Chicken</h1>
                        <NavLink to={'/chicken'}>
                            <Box>
                                <img style={{ width: '50px', height: '50px', }} src="src\assets\arrow-2.png" alt="" />
                            </Box>
                        </NavLink>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}

export default Card;