import Navbar from "../components/Navbar";
import mental from '../assets/mental.png';
import './home.css'

function Home(){
    return (

        <>
            <Navbar/>
            <div className="container">
                <section id = "Hero">
                    <div id = "text">
                        <h1>Want to control your mind?</h1>
                        <p>Feel powerful with MindConnect, get control over your life. Win.</p>
                    </div>
                    
                    <div id = "pic">
                        <img src={mental} alt="" />
                    </div>

                </section>
            </div>
        </>


    )
}

export default Home;