import React from "react";
import { scaleQuantize } from "d3-scale";
import { Row, Col, Container } from 'react-bootstrap';

class ColorBar extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
    };
    this.formatValue = this.formatValue.bind(this);
   }

  formatValue(value) {
    return Math.round(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

   render() {
    const max = Math.max.apply(Math, this.props.data.map(function(o) { return o.val; })); 
    const min = Math.min.apply(Math, this.props.data.map(function(o) { return o.val; }));
    const d = (max-min) / 20;
    const range = (['#448821', '#71a537', '#9dc24d', '#ffe877'].reverse());

    var nums = this.props.data.map(function(o) { return o.val; }).sort((a, b) => {return a-b;});
    nums.splice(0, 1);
    nums.splice(nums.length - 1, 1);
    nums = Array.from(new Set(nums));

    var domain = [];
    if(nums.length <= 4){
      domain = nums;
    } else {
      domain = [min + d*0.01, min + d*0.25, min + d*0.5, min + d*5];
    }

    const ColorSquare = ({ color, text }) => {
      return (
      <Col style={{'paddingLeft': '0', 'paddingRight': '0', 'margin' : '0', 'alignItems': 'center'}}>
        <Row style={{'paddingLeft': '0', 'paddingRight': '0', 'margin' : '0', 'alignItems': 'center'}}>
        <Col style={{'paddingLeft': '0', 'paddingRight': '0', 'margin' : '0', 'maxWidth': '30px'}}> <div style={{'width': '25px', 'height':'16px', 'border': '1px solid #000', 'backgroundColor': color }} />  </Col>
        <Col style={{'paddingLeft': '0', 'paddingRight': '0', 'margin' : '0'}}> {text} </Col>
        </Row>
      </Col>
      );
    };
    var squares = [];
    squares.push(<ColorSquare key={'nd'} color={'#f8f8ff'} text={'No Data'} />);
    squares.push(<ColorSquare key={'min'} color={'#f7ff7a'} text={this.formatValue(min) + '+ Speakers'} />);
    for(var i = 0; i < domain.length; i++){
      squares.push(<ColorSquare key={i} color={range[i]} text={this.formatValue(domain[i]) + '+'} />);
    }
    squares.push(<ColorSquare key={'max'} color={'#006b09'} text={this.formatValue(max) + "+"} />);
     return ( 
        <Container style={{ 'alignItems': 'center'}} fluid> 
          <Row style={{'paddingLeft': '0', 'paddingRight': '0', 'margin' : '0'}}>
            { squares } 
          </Row>
        </Container>
      );
   }

}

export default ColorBar;