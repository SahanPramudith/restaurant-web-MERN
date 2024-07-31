import { Box } from '@mui/material';
import React from 'react';

function Item(props) {
    return (
        <div>
            <Box>
                <MenuCard
                    img={props.img}
                    title={props.title}
                    content={props.content}
                />
            </Box>
        </div>
    );
}

export default Item;