import Layout from '../components/MyLayout';
import LanguageInput from "../components/LanguageInput";

function App() {
  return (
  	<Layout>
      <h2>Explore the world's languages</h2>
       <p> How many people speak English? Spanish? Swahili? Choose from more than 90 languages below to find out! </p>
      <LanguageInput/>
     </Layout>
  );
}

export default App; 
