import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function MenuCard(props) {
    const theme = useTheme();


    return (
        <Card sx={{ display: 'flex',flexDirection:'row',width:'550px' }}>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={props.img}
                alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{display:'' }}>
                    <Typography sx={{flexWrap:"wrap",justifyContent:'center'}}>
                           {props.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {props.content}
                    </Typography>
                </CardContent>
            </Box>

        </Card>
    );
}