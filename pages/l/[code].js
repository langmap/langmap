import Link from 'next/link';
import Layout from '../../components/MyLayout';
import LanguageInput from "../../components/LanguageInput";

import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
    return {props : {code: context.query.code || null}};
}

function App({ code }) {
  return (
  	<Layout>
      <LanguageInput code={code}/>
     </Layout>
  );
}

export default App; 