import Faq from "../../Components/Faq";
import Featured from "../../Components/Featured";
import Banner from "./Banner";
import Footer from "./Footer";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default Home;