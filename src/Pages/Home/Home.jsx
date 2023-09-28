import { useLoaderData } from "react-router-dom";
import Banner from "../../component/Banner/Banner";
import Phones from "../../component/Phones/Phones";


const Home = () => {
    const phones = useLoaderData()
    return (
        <div >
             <Banner></Banner>
             <Phones phones={phones}></Phones>
        </div>
    );
};

export default Home;