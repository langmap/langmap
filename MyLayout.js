import Header from './Header.js';
import Meta from './seo-meta.js';
import { initGA, logPageView } from './analytics';

class Layout extends React.Component {
  constructor (props) {
    super(props);
   }
   componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
    var script = document.createElement("script");
    script.src = "./statcounter.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    var script2 = document.createElement("script");
    script2.src = "https://www.statcounter.com/counter/counter.js";
    script2.type = "text/javascript";
    script2.async = true;
    document.body.appendChild(script2);
  }
  render () {
  	const layoutStyle = {
	  margin: 10,
	  padding: 10,
	  border: '1px solid #DDD'
	};
    return (
       <div style={layoutStyle}>
	    <Header />
	    {this.props.children}
	  </div>
    )
  }
}

export default Layout;