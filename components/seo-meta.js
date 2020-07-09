import Head from 'next/head';

const Meta = (props) => (
	<Head>
		<title>LangMap</title>
		<meta name="description" content={props.description} />
		<meta property="og:type" content="website" />
		<meta name="og:title" property="og:title" content="LangMap" />
		<meta name="og:description" property="og:description" content={props.description} />
		<meta property="og:image" content="http://localhost:3000/defaultmap.png" />  
		<meta property="og:site_name" content="LangMap" />
		<meta property="og:url" content={props.url} />  
		<meta name="twitter:card" content="summary" /> 
		<meta name="twitter:title" content="Explore the world\'s languages" />
		<meta name="twitter:description" content={props.description} />
		<meta name="twitter:image" content="http://localhost:3000/defaultmap.png" />   
		<link rel="icon" type="image/x-icon" href="http://localhost:3000/favicon.ico" />
		<link rel="apple-touch-icon" href="http://localhost:3000/favicon.ico" />
	</Head>
);

export default Meta;