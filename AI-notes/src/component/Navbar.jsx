import { Link } from "react-router-dom";
import { IoLogInOutline } from "react-icons/io5";
import { useState } from "react";
import Apparelhover from "../hovercomponent/Apparelhover";
import Accessorieshover from "../hovercomponent/Accessorieshover";
import { useContext } from "react";
import { ContentContext } from "../context/Content";
import Profile from "./Profile";
import { IoSearchOutline } from "react-icons/io5";
 
function Navbar(){
    const {user}= useContext(ContentContext);
    const [hover,setHover]=useState(false);
    const [hover1,setHover1]=useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    function handleHover(){
        setHover(!hover);
    }
    function handleHover1(){
        setHover1(!hover1);
    }
  

 return(<>
 <div className="w-full  border h-20 border-slate-400 bg-stone-600 flex flex-row items-center text-white justify-center relative">
<h1 className="text-2xl ">NevStore</h1>
<div className="w-full border-b border-slate-400 bg-stone-600 flex flex-col sm:flex-row items-center text-white relative z-20 px-4 py-4 sm:px-6 lg:px-8 justify-between">
                <div className="flex items-center w-full sm:w-auto justify-between mb-4 sm:mb-0">
                    <h1 className="text-2xl font-bold tracking-wide mr-8">NevStore</h1>
                    {/* Search Bar - Visible on larger screens, collapsed on small screens */}
                    <form className="relative hidden sm:flex items-center">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="pl-3 pr-8 py-1.5 rounded-lg border border-gray-400 bg-stone-700 text-white text-sm
                                       focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent
                                       w-32 lg:w-48 transition-all duration-200"
                        />
                        <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:text-blue-300">
                            <IoSearchOutline size={18} />
                        </button>
                    </form>
                </div>
                </div>
    <nav className="flex justify-center w-full">
        <ul className="flex items-center gap-5">
            <li>
                <Link to="/" className="z-10">Home</Link>
            </li>
            <li className="relative">
                <Link to="/apparel"  className="text-black sticky z-10 ">Apparel</Link>
            </li>
            <li className="relative">
                <Link to="/accessories" className="z-10">Accessories</Link>
            </li>
            <li>
                <Link to="/Electronic" className="z-10">Electronic</Link>
            </li>
        </ul>
        <div onMouseEnter={handleHover1} className="absolute py-10 z-10"> 
          {hover1 && <Apparelhover/>}
        </div>
        <div onMouseEnter={handleHover} className="absolute py-10 z-10"> 
          {hover && <Accessorieshover/>}
        </div>
    </nav>

{user? <Profile/>:<div> <Link to="/login" className="relative"><IoLogInOutline size={30} className="items-center absolute top-0 right-0"></IoLogInOutline></Link></div> }
 </div>
 </>
 )
}
export default Navbar;