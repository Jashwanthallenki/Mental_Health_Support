import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import '../components/Index.css'

import Navbar from '../components/Navbar';
// import SideBar from '../components/SideBar';
import MainContent from '../components/MainContent';
import Notification from '../components/Notification';
function Index(){
    return(
        
        <body className="bg-light">
            
            <Navbar/>
            <MainContent/>
            <Notification/>

        </body>
        
    )
}
export default Index;