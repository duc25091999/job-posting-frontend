import '../styles/globals.css'
import '../styles/home.css'
import '../styles/hiring.css'
import '../styles/job-detail.css'
import 'react-quill/dist/quill.snow.css';
require("../styles/variables.less");

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
