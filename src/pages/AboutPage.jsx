import About from "../components/About";
import Footer from "../components/Footer";
import HeadlineCards from "../components/HeadlineCards";
import Nav from "../components/Nav";

const AboutPage = () => {
    return ( 
        <div>
            <Nav />
            <About />
            <HeadlineCards />
            <Footer />
        </div>
    );
}
 
export default AboutPage;