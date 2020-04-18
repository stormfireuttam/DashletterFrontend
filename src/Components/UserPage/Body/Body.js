import React from 'react';
import {Container} from 'react-bootstrap';
import Slider from '../../../UI/Slider/Slider';
import Section from './Section/Section';

const Body = () => {
    return(
        <Container fluid={true}>            
            <Slider />
            <br/>
            <Section title="Recommended For You"/>
            <Section title="Science and Technology"/>
            <Section title="Top Publishers"/>
        </Container>
    );
}

export default Body;