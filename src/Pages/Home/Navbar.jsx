import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="w-[90%] mx-auto">
            <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div>
            <div className="flex-1 px-2 mx-2">
                <div className="flex justify-center">
                <img className="w-[200px]" src="https://i.ibb.co/chrc8np/assignmate2.png" alt="" />
                </div>
            </div>
            <div className="flex-none hidden lg:block">

                {/* Navbar menu content here */}

                <div className="flex gap-2">
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
                    {/* <NavLink to="/assignments" className={({isActive}) =>}>
                                    Assignments
                                </NavLink>
                                <NavLink className="btn btn-primary btn-sm">
                                    logout
                                </NavLink> */}
                </div>

            </div>
        </div>
    );
};

export default Navbar;