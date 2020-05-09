import React from 'react';
import logo from '../../logo.svg';
import './NewsCard.css';

function NewsCard(props) {
    return (
        <div className="item">
            <img className="imgStyle" src={props.src} />
            <div>{props.title}</div>
            <div>{props.desc}</div>
            <div>{props.author}</div>
        </div>

    )
}

export default NewsCard;