import React from "react";
import MenuCard from "../MenueCard";
import { Box } from "@mui/material";
import MenueBanner from "../Commen/Title/Menue_Banner";


export default function Pizza(props) {
    return (
        <div>
            <div>
                <MenueBanner img={'src/assets/bgimg.jpeg'} heding={"Pizza"} />
            </div>
            <br /><hr />
            <Box
                gap={2}

                sx={{
                    display: 'flex', justifyContent: 'space around',
                    flexWrap: 'wrap'
                }}>
                    <MenuCard  img={'src/assets/e8a3c26c-dda2-4d4c-9ebe-543ffaa28743.jpg'}/>
                    <MenuCard  img={'src/assets/e8a3c26c-dda2-4d4c-9ebe-543ffaa28743.jpg'}/>
                    <MenuCard  img={'src/assets/e8a3c26c-dda2-4d4c-9ebe-543ffaa28743.jpg'}/>
            </Box>


        </div>
    )
}