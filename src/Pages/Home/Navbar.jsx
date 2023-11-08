import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then()
            .catch()
    }

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
                    <NavLink to="/assignments" className="btn btn-primary btn-sm">
                        Assignments
                    </NavLink>
                    {/* <NavLink to="/assignments" className={({isActive}) =>}>
                                    Assignments
                                </NavLink>
                                <NavLink className="btn btn-primary btn-sm">
                                    logout
                                </NavLink> */}
                    {
                        user ?

                            <div className="flex flex-col gap-2 mt-5 md:mt-0 lg:mt-0 md:flex-row lg:flex-row ">
                                <NavLink to="/create" className="btn btn-primary btn-sm">
                                    Create Assignment
                                </NavLink>
                                <NavLink to="/submitted" className="btn btn-primary btn-sm">
                                    Submitted Assignments
                                </NavLink>
                                <NavLink to="/my-assignment" className="btn btn-primary btn-sm">
                                    My Assignment
                                </NavLink>
                                <NavLink onClick={handleLogout} className="btn btn-primary btn-sm">
                                    Logout
                                </NavLink>
                                <div className="avatar mx-3 mt-2 md:mt-0 lg:mt-0">
                                    <div className="w-10 rounded-full ring  ring-blue-500 ring-offset-2">
                                        <img src={user.photoURL} />
                                    </div>
                                </div>
                                <p className="mx-3 text-blue-500 font-bold mt-2 md:mt-0 lg:mt-0">{user.displayName}</p>
                            </div>
                            :
                            <div className="flex gap-2 flex-col mt-5 md:mt-0 lg:mt-0 md:flex-row lg:flex-row items-center ">
                                <NavLink to="/login" className="btn btn-primary btn-sm">
                                    Login
                                </NavLink>
                                <NavLink to="/register" className="btn btn-primary btn-sm">
                                    Register
                                </NavLink>
                            </div>
                    }
                </div>

            </div>
        </div>
    );
};

export default Navbar;