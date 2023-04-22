import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Homehero from "../components/Homehero";
import Nav from "../components/Nav";
import Order from "../components/Order";

const Home = () => {
    return ( 
        <div>
            <Nav />
            <Homehero />
            <Hero />
            <About />
            <Order />
            <Footer />

        </div>
    );
}
 
export default Home;