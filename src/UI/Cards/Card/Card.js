import React from 'react';

function Card({src, data}) {
    let imgStyles= {
        width: 88 + '%',
        height: 95 + '%'
    }
    return (<div style={imgStyles}>
                <img src={src} alt="side-img" style={imgStyles}/>
                <br/>
                <i>{data}</i>
            </div>)
}

export default Card;