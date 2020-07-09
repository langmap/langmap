import React, { memo } from "react";
import { scaleLog, scaleThreshold } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from "react-simple-maps";
import ReactTooltip from 'react-tooltip';
import { geoPath } from "d3-geo";
import { geoTimes } from "d3-geo-projection";
import ShareBlock from './ShareBlock.js';
import {Button, ButtonGroup, Container, Row, Col} from 'react-bootstrap';
import ColorBar from './colorBar';
import WorldMap from './map.json';

class MapChart extends React.Component {

  constructor (props) {
    super(props);
    this.mergeData = this.mergeData.bind(this);
    this.cleanData = this.cleanData.bind(this);
    this.handleZoomIn = this.handleZoomIn.bind(this);
    this.handleZoomOut = this.handleZoomOut.bind(this);
    this.projection = this.projection.bind(this);
    this.handleGeographyClick = this.handleGeographyClick.bind(this);
    this.state = {
      position : { coordinates: [8, 3], zoom: 1 }
    };
   }

   mergeData(data){
	  let mergedData = [];
	  for(var k = 0; k < Object.keys(data).length; k++) {
	    for(var j = 0; j < data[Object.keys(data)[k]][Object.keys(data)[k]].length; j++){
	      if(mergedData.find(item => item.name === data[Object.keys(data)[k]][Object.keys(data)[k]][j].name)){
	        mergedData.find(item => item.name === data[Object.keys(data)[k]][Object.keys(data)[k]][j].name).val += data[Object.keys(data)[k]][Object.keys(data)[k]][j].val;
	      } else {
	        mergedData.push(data[Object.keys(data)[k]][Object.keys(data)[k]][j]);
	      }
	    }
	  }
	  return mergedData;
   }

  cleanData(data) {
    if(typeof data === 'undefined' || Object.keys(data).length === 0 || data === []) return []; 
    let cleanData = [];
    for(var k = 0; k < data[Object.keys(data)[0]].length; k++) {
      cleanData.push(data[Object.keys(data)[0]][k]);
    }
    return cleanData;
  }

   handleZoomIn() {
    if (this.state.position.zoom >= 6) return;
    this.setState({position : {coordinates: this.state.position.coordinates, zoom: this.state.position.zoom * 2}});
  }

   handleZoomOut() {
    if (this.state.position.zoom <= 1) {
      this.setState({position : {coordinates: [8, 3], zoom: 1}});
      return;
    }
    this.setState({position : {coordinates: this.state.position.coordinates, zoom: this.state.position.zoom / 2}});
  }

  handleGeographyClick(geography){
    const path = geoPath().projection(this.projection());
    const centroid = this.projection().invert(path.centroid(geography));
    this.setState({position : {coordinates: centroid, zoom: 4}});
  };

  projection() {
    return geoTimes().translate([800 / 2, 450 / 2]).scale(160);
  };

render () {
  const layoutStyle = {
      border: '1px solid #DDD'
  };
	let data = Object.keys(this.props.data).length > 1 ? this.mergeData(this.props.data) : this.cleanData(this.props.data);
	const min = data.length > 0 ? Math.max.apply(Math, data.map(function(o) { return o.val; })) : 0; 
	const maxValue = data.length > 0 ? Math.min.apply(Math, data.map(function(o) { return o.val; })) : 0;
	const d = (maxValue - min) / 20; 
	const customScale = scaleLog()
        .range(['#006b09', '#00710c', '#027710', '#047e13', '#088416', '#0d8a1a', '#12911d', '#189721', '#1f9d24', '#25a428', '#2caa2c', '#34b02f', '#3cb733', '#45bd37', '#4fc33c', '#5ac940', '#66cf45', '#74d44a', '#86d950', '#a0dc58'])
        .domain([min + d*1,min + d*2,min + d*3,min + d*4,min + d*5,min + d*6,min + d*7,min + d*8,min + d*9,min + d*10,min + d*11,min + d*12,min + d*13,min + d*14,min + d*15,min + d*16,min + d*17,min + d*18,min + d*19]);
    return (
    <div id="outer-div">
    <ButtonGroup className="float-right">
            <Button onClick={this.handleZoomIn}>          
            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg></Button>
            <Button onClick={this.handleZoomOut}><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg></Button>
          </ButtonGroup>
      <div style={layoutStyle} id="map-outer">
        <div style={layoutStyle} id="map-inner">
    <ComposableMap id="the-map" data-tip=""
            projectionConfig={{
              rotate: [-10, 0, 0],
              scale: 147
            }}
              width={800}
        height={370}
        style={{ width: "100%", height: "auto" }} 
          >
          <ZoomableGroup zoom={this.state.position.zoom}
                center={this.state.position.coordinates} >
            {data.length >= 0 && (
              <Geographies geography={WorldMap}>
                {({ geographies }) => geographies.map((geo, i) => {
                      const country = data.find(d => d.id === geo.properties.ISO_A3);
                      return (
                        <Geography
                          key={geo.properties.ISO_A3 + i}
                          geography={ geo }
                          onClick={() => {this.handleGeographyClick(geo)}}
                          onMouseEnter={() => {
                          const { NAME } = geo.properties;
                          const POP = country ? data.find(element => element.id === geo.properties.ISO_A3).val : 0; 
                          	this.props.setTooltipContent(`${NAME} — ${POP.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")} Speakers`);
                          }}
                          onMouseLeave={() => {
                          	this.props.setTooltipContent("");
                          }}
                          style={{
                            default: {
                              fill: country ? customScale(country.val) : "#f8f8ff",
                              stroke: "#000000",
                              strokeWidth: 0.75,
                              outline: "none",
                            },
                            hover: {
                              outline: "none",
                            },
                            pressed: {
                              outline: "none",
                            }
                          }}
                        />
                      )
                    })}
              </Geographies>
            )}
          </ZoomableGroup>
          </ComposableMap>
          </div>
          { Object.keys(this.props.data).length  > 0 && <ColorBar data={data} />}
        </div>
        <ShareBlock number={this.props.number} languages={Object.keys(this.props.data)}/>
      </div>
    );
  }



}

export default React.memo(MapChart);