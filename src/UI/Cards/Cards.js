import React from 'react';
import Card from './Card/Card';
import I1 from '../../Assets/cards (1).jpg';
import I2 from '../../Assets/cards (1).png';
import I3 from '../../Assets/cards (2).jpg';
import I4 from '../../Assets/cards (2).png';
import I5 from '../../Assets/cards (3).jpg';
import I6 from '../../Assets/cards (4).jpg';
import I7 from '../../Assets/cards (5).jpg';
import I8 from '../../Assets/cards (6).jpg';
import I9 from '../../Assets/cards (7).jpg';
import I10 from '../../Assets/cards (8).jpg';
import I11 from '../../Assets/cards (9).jpg';
import I12 from '../../Assets/cards (10).jpg';
import I13 from '../../Assets/cards (11).jpg';
import I14 from '../../Assets/cards (12).jpg';
import './Cards.css';
import {Button} from 'react-bootstrap';


class Cards extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            slideArr: [
                <Card src={I1}
                    data="Slide 1"/>,
                <Card src={I2}
                    data="Slide 2"/>,
                <Card src={I3}
                    data="Slide 3"/>,
                <Card src={I4}
                    data="Slide 4"/>,
                <Card src={I5}
                    data="Slide 5"/>,
                <Card src={I6}
                    data="Slide 6"/>,
                <Card src={I7}
                    data="Slide 7"/>,
                <Card src={I8}
                    data="Slide 8"/>,
                <Card src={I9}
                    data="Slide 9"/>,
                <Card src={I10}
                    data="Slide 10"/>,
                <Card src={I11}
                    data="Slide 11"/>,
                <Card src={I12}
                    data="Slide 12"/>,
                <Card src={I13}
                    data="Slide 13"/>,
                <Card src={I14}
                    data="Slide 14"/>],
                visible: 5
        };
        this.loadMore = this.loadMore.bind(this);
    } 

    loadMore(){
        this.setState((old) => {
            return {visible : old.visible + 5}
        })
    }
    
    render(){
        return(
            <div>
                <div className="grid">
                    {this.state.slideArr.slice(0, this.state.visible).map((item, index) => {
                    return(
                    <div key={index}>
                        {item}
                    </div>
                    )
                    })}
                </div>
                <br/>
                <Button className="load" variant="outline-primary" onClick={this.loadMore}>Load More</Button>
            </div>
            ); 
    }
        
}

export default Cards;