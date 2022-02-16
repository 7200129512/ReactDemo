import {useHistory} from 'react-router-dom'
import Layout from './Layout';
const Blogs = () => {
  const history=useHistory();
    return ( 
        <div>
            <Layout></Layout>
            <h1 style={{marginRight:30}}>hii blogs</h1>
          <a onClick={history.goBack} style={{backgroundColor:'white',marginRight:30}}>Click Here</a>
        </div>
     );
}
 
export default Blogs;