import React from "react";
import ShareButton from './ShareButton';
import { convert, deconvert } from './urlConverter.js';
import Meta from './seo-meta';
import { Button, InputGroup, FormControl, Row, Col, Container } from 'react-bootstrap';
import { saveAs } from 'file-saver';
import {saveSvgAsPng} from 'save-svg-as-png';
import {AiFillSave} from 'react-icons/ai';
import domtoimage from 'dom-to-image';
import {isMobile} from 'react-device-detect';

class ShareBlock extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      copied: false,
    }
    this.copyToClipboard = this.copyToClipboard.bind(this);
    this.formatList = this.formatList.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  copyToClipboard() {
    const url = 'https://langmap.me/l/' + convert(this.props.languages);
    const textField = document.createElement('textarea');
    textField.innerText = url;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  };

  formatList(res){
    if (res.length < 2) return res; 
    if (res.length === 2) return res[0] + ' and ' + res[1]; 
    let newString = "";
    for(var i = 0; i < res.length - 2; i++){
      newString += res[i] + ', ';
    }
    newString += res[res.length - 2] + ' and ' + res[res.length - 1];
    return newString;
  }

  handleSave(){
    
    domtoimage.toBlob(document.getElementById('map-outer'), {bgcolor: '#FFFFFF'})
    .then(function (blob) {
        window.saveAs(blob, 'my_langmap.png');
    });
      }

  render(){ 
    var url = 'https://langmap.me/l/' + convert(this.props.languages);
    var description = 'How many people speak ' + this.formatList(this.props.languages) + '? Find out with LangMap!';
    if(this.props.languages.length === 0){
        url = 'https://langmap.me/';
        description = 'Explore the world\'s languages with shareable and saveable maps!'; 
    }
    return (
      <div style={{'marginTop': '10px', 'marginBottom': '2px'}}>
        <Container style={{ 'alignItems': 'center'}} fluid='md'>
          <Row>
          { !isMobile && 
          <Col xs={3} style={{ 'alignItems': 'center'}}>       
              <Button onClick={this.handleSave}><AiFillSave size='1.5rem'/> Download Map</Button>
          </Col>
        } 

        {!isMobile && 
            <Col xs={5} style={{ 'alignItems': 'center'}}>
              <ShareButton network='twitter' number={this.props.number} languages={this.props.languages}/>
              <ShareButton network='weibo' number={this.props.number} languages={this.props.languages}/>
              <ShareButton network='tumblr' number={this.props.number} languages={this.props.languages}/>
              <ShareButton network='facebook' number={this.props.number} languages={this.props.languages}/>
              <ShareButton network='reddit' number={this.props.number} languages={this.props.languages}/>
              <ShareButton network='telegram' number={this.props.number} languages={this.props.languages}/>
              <ShareButton network='vk' number={this.props.number} languages={this.props.languages}/>
              <ShareButton network='xing' number={this.props.number} languages={this.props.languages}/>
            </Col>
          }

        {isMobile && 
          <Col fluid='auto'>
            <InputGroup>
              <FormControl value={url} disabled />
              <InputGroup.Append>
                <Button onClick={this.copyToClipboard}>Copy URL</Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
          }

          {!isMobile && 
            <Col xs={4} style={{ 'alignItems': 'center'}}>
            <InputGroup>
              <FormControl value={url} disabled />
              <InputGroup.Append>
                <Button onClick={this.copyToClipboard}>Copy URL</Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        }

          </Row>
        
        </Container>
        <Meta description={description} url={url} image={this.props.uri}/>
        </div>
      );
  }

}

export default ShareBlock;