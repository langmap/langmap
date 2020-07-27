import Layout from '../components/MyLayout';
import Meta from '../components/seo-meta.js';
import ResourceCard from '../components/ResourceCard';
import { Container, Row, Col } from 'react-bootstrap';

export default function Resources() {
  return (
    <Layout>
      <center> <h1> Linguistics Resources </h1> </center>
      <Meta description={'Linguistics books, textbooks and more at langmap.me'} url={'https://langmap.me'}/>
      <hr class="solid" style={{  borderTop: '2px solid #bbb', opacity: '0.7', width: '50%'}}/>

      <center> <h2> For Fun </h2> </center>
      <Container>
        <Row>
         <Col> <ResourceCard description="An entertaining overview of Europe's many languages, ranging from English to Russian to Basque." url="https://amzn.to/30tVJdv" title="Lingo" imgurl="https://images-na.ssl-images-amazon.com/images/I/41NmarPb4BL.jpg" /> </Col>
         <Col> <ResourceCard description="What is language? John McWhorter explores how languages across the globe originate, evolve, multiply and divide." url="https://amzn.to/3jJQtuY" title="What Language Is" imgurl="https://images-na.ssl-images-amazon.com/images/I/517PbTTVzuL._SX333_BO1,204,203,200_.jpg" /> </Col>
         <Col> <ResourceCard description="An in-depth look into the history, grammar and demographics of twenty of the world's most spoken languages." url="https://amzn.to/32CaKwp" title="Babel" imgurl="https://images-na.ssl-images-amazon.com/images/I/41oAQDXNRML._SX316_BO1,204,203,200_.jpg" /> </Col>
        </Row>
      </Container>

      <hr class="solid" style={{  borderTop: '2px solid #bbb', opacity: '0.7', width: '90%'}}/>

      <center> <h2> Academic Resources </h2> </center>
      <Container>
        <Row>
         <Col> <ResourceCard description="An excellent introductory textbook that samples linguistics' subfields in a fun, casual manner." url="https://amzn.to/2CAfYhH" title="The Study of Language" imgurl="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1370634866l/147521.jpg" />  </Col>
          <Col> <ResourceCard description="Two essential works on the study of language by Noam Chomsky, the father of modern linguistics." url="https://amzn.to/3g2nyAh" title="On Language: Chomsky's Classic Works" imgurl="https://images-na.ssl-images-amazon.com/images/I/51rT6EasmVL._SX322_BO1,204,203,200_.jpg" />  </Col>
          <Col> <ResourceCard description="A dense, enlightening read that covers the role of categories, metaphor and analogy across various languages." url="https://amzn.to/3eYgmnb" title="Women, Fire and Dangerous Things" imgurl="https://images-na.ssl-images-amazon.com/images/I/41QEMo5Px1L._SX356_BO1,204,203,200_.jpg" />  </Col>
        </Row>
      </Container>

      <hr class="solid" style={{  borderTop: '2px solid #bbb', opacity: '0.7', width: '90%'}}/>

      <center> <h2> Textual Linguistics </h2> </center>
      <Container>
        <Row>
         <Col> <ResourceCard description="The tale of how three lost scripts -- Egyptian hieroglyphs, Maya glyphs, and the Minoan Linear B -- were undeciphered, and a study of six still-uncracked ones." url="https://amzn.to/3f711AS" title="Lost Languages: The Enigma of the World's Undeciphered Scripts" imgurl="https://images-na.ssl-images-amazon.com/images/I/51w8DEhOEFL._SX401_BO1,204,203,200_.jpg" />  </Col>
          <Col> <ResourceCard description="A humourously relevant book on how the Internet is affecting our use of punctuation, slang, emojis and more." url="https://amzn.to/2CJmSRY" title="Because Internet" imgurl="https://images-na.ssl-images-amazon.com/images/I/41Fj8O9tDXL._SX329_BO1,204,203,200_.jpg" />  </Col>
          <Col> <ResourceCard description="Where do everyday punctuation marks come from? This chronicle of the parallel histories of language and typography will surprise you." url="https://amzn.to/3g1FAmc" title="Shady Characters: The Secret Life of Punctuation, Symbols & Other Typographical Marks" imgurl="https://images-na.ssl-images-amazon.com/images/I/41R3eOqPNPL._SX343_BO1,204,203,200_.jpg" />  </Col>
        </Row>
      </Container>
    </Layout>
  );
}