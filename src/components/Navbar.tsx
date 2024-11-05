import { FC, useState } from "react";
import "./Navbar.css";
import logo from '../assets/symbol.png'
import search1 from '../assets/search1.svg'
import dropdown from '../assets/arrow-down.svg'



const Navbar: FC = () => {
    const [location, setLocation] = useState<string>('Kerala');
    const [locationDropdown, setLocationDropdown] = useState<boolean>(false);

    return (
        <div className="navbar fixed flex items-center justify-between top-0 left-0 w-full pl-4 h-[70px] mx-auto bg-[#EFF1F3] z-10 text-white">
            <div className="nav-left flex items-center gap-x-2">
                <img className="logo cursor-pointer" src={logo} alt="" />
                <div className="location flex bg-white justify-between px-3 py-[10px] border-black border-2 rounded w-[280px] h-[48px] relative">
                    <img src={search1} alt="Search icon" className="search-1 mr-2 w-[20px]" />
                    <input type="text" className="border-none outline-none text-black" value={location} readOnly />
                    <img src={dropdown} alt="Dropdown arrow" className={`arrow-down mr-1 ${locationDropdown ? 'rotate-180' : ''} cursor-pointer`} onClick={() => setLocationDropdown((prev) => !prev)} />
                    <div className={`location-dropdown absolute top-12 left-0 right-0 bg-white shadow-2xl flex flex-col items-start gap-y-2 p-5 rounded ${locationDropdown ? 'block' : 'hidden'}`}>
                        <h3 className="text-sm text-gray-600 pb-3">Popular Locations</h3>
                        <ul className="flex flex-col text-start text-black gap-y-4">
                            {['Kerala', 'TamilNadu', 'Bangladesh', 'Goa'].map((item) => (
                                <li key={item} className="py-2 px-4 hover:bg-gray-200 cursor-pointer" onClick={() => {
                                    setLocation(item);
                                    setLocationDropdown(false);
                                }
                                }>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;