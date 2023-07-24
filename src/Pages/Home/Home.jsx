import Banner from "../../Component/Banner";
import Gallery from "../../Gallerys/Gallery";
import Colleges from "../Colleges/Colleges";


const Home = () => {
    return (
        <div className="pt-10">
            <Banner></Banner>
            <Colleges></Colleges>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;