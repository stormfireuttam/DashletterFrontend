import React from 'react';
import './Section.css';
import Cards from '../../../../UI/Cards/Cards';

const Recommended = (props) => {
    return(
        <React.Fragment>
            <h3 className="header">{props.title}</h3><br/>
                <Cards/>
        </React.Fragment>
        
    );
}

export default Recommended;