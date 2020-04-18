import React from 'react';
import Card from 'react-bootstrap/Card';

const content = (props) => (
    <Card className="text-center" style={{backgroundColor: props.bg, border: 0}}>
        <Card.Title as="h2">{props.title}</Card.Title>
        <Card.Body>
            <Card.Text>
                With supporting text below as a natural lead-in to additional content.
            </Card.Text>
        </Card.Body>
    </Card>
);

export default content;