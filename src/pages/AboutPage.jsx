import About from "../components/About";
import Footer from "../components/Footer";
import Group from "../components/Group";
import HeadlineCards from "../components/HeadlineCards";
import Nav from "../components/Nav";

const AboutPage = () => {
    return ( 
        <div>
            <Nav />
            <About />
            <Group/>
            <HeadlineCards />
            <Footer />
        </div>
    );
}
 
export default AboutPage;