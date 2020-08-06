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
  }
  render () {
  	const layoutStyle = {
	  margin: 10,
	  padding: 10,
	  border: '1px solid #DDD'
	};
      const script = {__html: `<!-- Default Statcounter code for Langmap.me
https://langmap.me -->
<script type="text/javascript">
var sc_project=12361869; 
var sc_invisible=1; 
var sc_security="2c7a9961"; 
</script>
<script type="text/javascript"
src="https://www.statcounter.com/counter/counter.js"
async></script>
<noscript><div class="statcounter"><a title="Web Analytics"
href="https://statcounter.com/" target="_blank"><img
class="statcounter"
src="https://c.statcounter.com/12361869/0/2c7a9961/1/"
alt="Web Analytics"></a></div></noscript>
<!-- End of Statcounter Code -->`};
    return (
      <div>
        <div style={layoutStyle}>
    	    <Header />
    	    {this.props.children}
          <div dangerouslySetInnerHTML={script} />
  	   </div>
        <div style={{textAlign : 'center'}}> Got feedback? Contact us through <a href="mailto:langmapme@gmail.com">email</a>, <a href="https://twitter.com/langmap_me">Twitter</a> or <a href="https://www.linkedin.com/in/charles-rule/">LinkedIn</a>!</div>
      </div>
    )
  }
}

export default Layout;