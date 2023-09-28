import { Outlet } from "react-router-dom";
import Navber from "../component/Navber/Navber";



const MainLayoute = () => {
    return (
        <div className="max-w-[1200px] mx-auto">
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayoute;