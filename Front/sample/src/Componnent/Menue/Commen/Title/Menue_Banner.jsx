import React from 'react';
import './title.css'

function MenueBanner(props) {
    return (
        <div>
            <div className='Menue-1'>
                <img className='banner-img-1' src={props.img} alt="" />
                <h1 className='Mbanner-txt-1'>{props.heding}</h1>
            </div>
        </div>
    );
}

export default MenueBanner;