import Layout from '../components/MyLayout';
import Meta from '../components/seo-meta.js';
import ResourceCard from '../components/ResourceCard';
import { Container, Row, Col } from 'react-bootstrap';

export default function Resources() {
  return (
    <Layout>
      <center> <h1> Geography Resources </h1> </center>
      <hr class="solid" style={{  borderTop: '2px solid #bbb', opacity: '0.7', width: '50%'}}/>
      <Meta description={'Online geography Resources, books and more at langmap.me'} url={'https://langmap.me'}/>
      <center> <h2> Books </h2> </center>
      <Container>
        <Row>
         <Col> <ResourceCard description="A fun collection of geography-, map- and history-related trivia from a inveterate traveler and geographer extraordinaire." url="https://amzn.to/32Sq8oG" title="The Trivia Lover's Guide to the World" imgurl="https://images-na.ssl-images-amazon.com/images/I/51960+3ZduL._SX331_BO1,204,203,200_.jpg" /> </Col>
         <Col> <ResourceCard description="Ten maps that explain everything about geopolitics, from the importance of Crimea to the failures of the Sykes–Picot Agreement to the long-lasting effects of the Monroe Doctrine." url="https://amzn.to/3hQxIEH" title="Prisoners of Geography" imgurl="https://images-na.ssl-images-amazon.com/images/I/51dYH-gcQ7L._SX331_BO1,204,203,200_.jpg" />  </Col>
         <Col> <ResourceCard description="The story of pivotal episodes in world history -- from the first human migrations out of Africa to the space race -- told through more than 140 detailed maps." url="https://amzn.to/2CGwa13" title="History of the World Map by Map " imgurl="https://images-na.ssl-images-amazon.com/images/I/51XuBaftGVL._SX418_BO1,204,203,200_.jpg" /> </Col>
        </Row>
      </Container>

      <hr class="solid" style={{  borderTop: '2px solid #bbb', opacity: '0.7', width: '90%'}}/>

      <center> <h2> Online Content </h2> </center>
      <Container>
        <Row>
         <Col> <ResourceCard description="A great website for learning country locations, capitals and flags through quizzes." url="https://online.seterra.com/en" title="Seterra" imgurl="https://i.pinimg.com/originals/01/ab/c8/01abc89ebaacdb787e70dfcf2fe77365.png" /> </Col>
         <Col> <ResourceCard description="GeographyNow is an educational YouTube channel with in-depth videos about every country in the world." url="https://www.youtube.com/user/GeographyNow" title="GeographyNow" imgurl="https://online.seterra.com/images/system/geographynow.png" />  </Col>
         <Col> <ResourceCard description="Explore the world and guess where you are in this fun online game." url="https://www.geoguessr.com/" title="GeoGuessr" imgurl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXCdUpITAvQlRDETL0dlLpjU1S2k5tlO0u3Q&usqp=CAU" /> </Col>
        </Row>
      </Container>

    </Layout>
  );
}