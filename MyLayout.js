import Header from './Header.js';
import Meta from './seo-meta.js';
import { initGA, logPageView } from './analytics';

export default class Layout extends React.Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
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
	    {props.children}
	  </div>
    )
  }
}



export default Layout;