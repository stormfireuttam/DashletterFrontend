import React from 'react';
import './ImgComp.css';

function ImgComp({src, data}) {
    let imgStyles= {
        width: 100 + '%',
        height: 100 + '%'
    }
    return (<div className="textOverImage" style={imgStyles} data-text={data}>
                <img src={src} alt="side-img" style={imgStyles}/>
            </div>)
}

export default ImgComp;

