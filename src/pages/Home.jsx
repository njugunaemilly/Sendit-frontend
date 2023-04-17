import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Order from "../components/Order";

const Home = () => {
    return ( 
        <div>
            <Nav />
            <Hero />
            <About />
            <Order />
            <Footer />

        </div>
    );
}
 
export default Home;