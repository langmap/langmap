import { Card, Button } from 'react-bootstrap';

const ResourceCard = (props) => (
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.imgurl} />
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