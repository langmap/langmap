import Layout from '../components/MyLayout';
import Meta from '../components/seo-meta.js';
import ResourceCard from '../components/ResourceCard';
import { Container, Row, Col } from 'react-bootstrap';

export default function Resources() {
  return (
    <Layout>
      <h1> Resources </h1>
      <Meta description={'Language learning materials and more at langmap.me'} url={'https://langmap.me'}/>
      <h2> German </h2>
      <Container>
        <Row>
         <Col> <ResourceCard description="it's a book" url="https://www.amazon.com/dp/B01N9W111U/" title="German Book 1" imgurl="https://m.media-amazon.com/images/I/51oFXEubSQL._SY346_.jpg" /> </Col>
         <Col> <ResourceCard description="it's a book" url="https://www.amazon.com/dp/B01N9W111U/" title="German Book 1" imgurl="https://m.media-amazon.com/images/I/51oFXEubSQL._SY346_.jpg" />  </Col>
        </Row>
      </Container>
    </Layout>
  );
}