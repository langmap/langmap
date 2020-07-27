import Layout from '../components/MyLayout';
import Meta from '../components/seo-meta.js';
export default function About() {
  return (
    <Layout>
    	<center> <h1> About LangMap </h1> </center>
    	<hr class="solid" style={{  borderTop: '2px solid #bbb', opacity: '0.7', width: '50%'}}/>
    	<Meta description={'Learn more about langmap.me, a visual exploration of the world\'s languages.'} url={'http://langmap.me'}/>
   	  <center> <h2> What is LangMap? </h2> </center> 
      <p style={{paddingLeft: '10%  !important', paddingRight: '10%  !important'}}>
	      LangMap is a data visualization tool for language speakers, students and enthusiasts alike. 
	      Its data comes primarily from <a href="https://www.ethnologue.com/"> Ethnologue </a> with minor supplementary sources. Consider <a href="https://ko-fi.com/langmap">donating to the site</a> to 
	      keep the servers up and allow us to add new features.
      </p>
      <center> <h2> How many languages are available? </h2> </center>
      <p style={{paddingLeft: '10%  !important', paddingRight: '10%  !important'}}>
	      There are currently 80 languages that can be mapped on LangMap. 
	      This list includes the top twenty most spoken languages as well as a mix of Indo-European, Semitic, Indo-Aryan, Uralic, Dravidian, Niger-Congo and Sino-Tibetan languages. 
	      Certain language families have spotty coverage or are so localised that visualizing them on a global scale does not work: e.g., Navajo, which is only spoken in the United States, 
	      or Quechua, whose dialects are so country-specific that it would be difficult to convey a correct map. 
	      Certain languages are also more documented than others, and it is difficult to gather data in politically unstable or impoverished areas.
	      As such, a blank region on the map for a language does not mean no speakers -- it means no data. 
	    </p>
	  <center> <h2>What's next for LangMap?</h2> </center>
      <p style={{paddingLeft: '10%  !important', paddingRight: '10% !important'}}>
	      <ul>
	      	<li>Country-specific maps for drilling down to regions, states or counties</li>
	      	<li>Localisation for the website so that people can use it in their language(s)</li>
	      	<li>More languages and expanded language data coverage</li>
	      </ul>
	    </p>
      <center> <h2>Where did the idea for LangMap come from?</h2> </center>
      <p style={{paddingLeft: '10%  !important', paddingRight: '10%  !important'}}>
	      The inspiration for LangMap came from <a href="https://amzn.to/30tVJdv"><i>Lingo</i></a> and <a href="https://amzn.to/32CaKwp"><i>Babel</i></a> by Gaston Dorren: two excellent books about 
	      European languages and the twenty most spoken languages in the world respectively. They are two enjoyable and educational reads, 
	      and after I finished the books I wanted to explore the international breakdown of language populations in a more visual manner.
	      It's one thing to read a chart; it's another to read a map.
	    </p>
      <center> <h2>Who is behind LangMap?</h2> </center>
      <p style={{paddingLeft: '10%  !important', paddingRight: '10%  !important'}}>
	      My name is Charles Rule. I am a software developer who loves linguistics, geography and data visualization. 
	      If you have suggestions for LangMap, please email langmapme@gmail.com or contact me on <a href="https://linkedin.com/in/charles-rule">LinkedIn</a>.
	    </p>
    </Layout>
  );
}