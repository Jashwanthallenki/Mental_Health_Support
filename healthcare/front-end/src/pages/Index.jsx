import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import '../components/Index.css'
import '../components/SideBar'
import SideBar from '../components/SideBar';
import MainContent from '../components/MainContent';
import Notification from './Notification';
function Index(){
    return(
        
        <body className="bg-light">
            <SideBar/>

            <MainContent/>
            <Notification/>

        </body>
        
    )
}
export default Index;