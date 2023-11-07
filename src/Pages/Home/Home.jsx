import Faq from "../../Components/Faq";
import Featured from "../../Components/Featured";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <Faq></Faq>
        </div>
    );
};

export default Home;