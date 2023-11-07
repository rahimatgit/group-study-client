import {  Outlet} from "react-router-dom";
import Navbar from "../Pages/Home/Navbar";
import Sidebar from "../Pages/Home/Sidebar";


const MainLayout = () => {
    return (
        <div className="w-[90%] mx-auto">
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar ">
                       <Navbar></Navbar>
                    </div>
                    {/* Page content here */}
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="menu p-4 w-80 min-h-full bg-base-200">
                        {/* Sidebar content here */}
                        <Sidebar></Sidebar>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default MainLayout;