import React from 'react';
import {Card,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const white = {backgroundColor : 'rgb(255,255,255)'};
const content = (props) => (
    <Card className="text-center" style={{border: 0}}>
        <Card.Title as="h2" style = {white}><b>Inbox-Zero Experience</b></Card.Title>
        <Card.Body>
            <Card.Text>
                With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Link
                to={props.link}
                exact={props.exact}><Button variant="primary">Try Now</Button></Link>
        </Card.Body>
    </Card>
);

export default content;