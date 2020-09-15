import React from 'react';
import './YoutubeComp.css';

const YoutubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src={props.image} alt=""/>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p>{props.desc}</p>
        </div>
    )
}

YoutubeComp.defaultProps = {
    time: '00.00',
    image: 'https://images.unsplash.com/photo-1563900905574-8674edd8d156?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'No Tittle',
    desc: 'No Desc' 
}

export default YoutubeComp;


