import { NavLink } from "react-router-dom";


const Sidebar = () => {
    return (
        <div className="flex flex-col gap-2 w-[70%] mx-auto mt-4">
            <NavLink to="/" className="btn btn-primary btn-sm">
                        Home
                    </NavLink>
                    <NavLink to="/login" className="btn btn-primary btn-sm">
                        Login
                    </NavLink>
                    <NavLink to="/register" className="btn btn-primary btn-sm">
                        Register
                    </NavLink>
                    <NavLink to="/assignments" className="btn btn-primary btn-sm">
                        Assignments
                    </NavLink>
        </div>
    );
};

export default Sidebar;