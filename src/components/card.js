import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


class CCard extends React.Component {
    render(){
        return(
<div>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://ibb.co/LhbDpqr" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>
        )}};

export default CCard;