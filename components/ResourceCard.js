import { Card, Button } from 'react-bootstrap';

const ResourceCard = (props) => (
<Card style={{ width: '18rem' }}>
  <a href={props.url}> <Card.Img variant="top" src={props.imgurl} style={{ 'width': '100% !important', 'height': '27vw !important', 'objectFit': 'cover !important'}}/> </a>
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
      {props.description}
    </Card.Text>
    <Button variant="primary" href={props.url}>Learn More</Button>
  </Card.Body>
</Card>
);

export default ResourceCard; 