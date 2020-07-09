import MapChart from "../components/MapChart";
import ReactTooltip from "react-tooltip";

class Map extends React.Component {

  constructor (props) {
    super(props);
 
    this.state = {
      content: "",
      data: this.props.langData
    };
    this.setContent = this.setContent.bind(this);
  }

  setContent(c) {
    this.setState({content: c});
  }

  render () {
    return (
      <div>
        <MapChart setTooltipContent={this.setContent} data={this.props.langData} number={this.props.number}/>
        <ReactTooltip>{this.state.content}</ReactTooltip>
      </div>
    )
  }
}
 
export default Map;