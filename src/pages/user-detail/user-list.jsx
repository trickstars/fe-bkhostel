import { PiTelevision } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";
import { CiCreditCard2 } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";
import UserDetail from "./components/user-detail";
import { RiArrowDropRightFill } from "react-icons/ri";
import { RiArrowDownSFill } from "react-icons/ri";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { FaCamera } from "react-icons/fa";
import 'flowbite';
const style = {
    color: '#25BEB9', fontSize: '1.5rem'
}
const style_list = "flex flex-row items-center pl-3 ml-2 hover:bg-[#B6D6F2] rounded-3xl";
const UserList = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        if (show == false) return setShow(true);
        else return setShow(false);

    }
    return (
        <div className="grid grid-cols-10 gap-3">
            <div className=" h-screen col-start-1 col-span-2 pl-3 text-lg bg-white">
                <div className="my-8 ml-4 mb-3 hover:cursor-pointer text-4xl font-semibold text-[#0891B2]">BKHOSTEL</div>
                <div className={style_list}>
                    <PiTelevision style={style} />
                    <div className="my-8 hover:cursor-pointer ml-2 ">Statistics</div>
                </div>
                <div className={style_list}>
                    <RxAvatar style={style} />
                    <div className="my-8 hover:cursor-pointer ml-2">Users</div>

                    {show === true ? <RiArrowDownSFill onClick={handleClick} style={{ marginLeft: '105px', fontSize: '20px' }} />
                        : <RiArrowDropRightFill onClick={handleClick} style={{ marginLeft: '100px', fontSize: '30px' }} />}
                </div>
                {show == true ? <UserDetail /> : <></>}
                <div className={style_list}>
                    <CiCreditCard2 style={style} />
                    <div className="my-8 hover:cursor-pointer ml-2">Post</div>
                </div>
                <div className={style_list}>
                    <IoCartOutline style={style} />
                    <div className="my-8 hover:cursor-pointer ml-2">Pricing</div>
                </div>
            </div>
            <div className="h-screen col-start-3 col-span-8 pl-3 text-lg bg-[#b6d6f2]">
                <div className="flex align-center items-center h-24">
                    <div class="relative w-80 ml-14">
                        <input type="search" id="search-dropdown" class="block p-2.5 w-full text-sm text-black-900 bg-gray-50 rounded-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search" required />
                        <button type="submit" class="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-[#E8C4F2] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg class="w-6 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg></button>
                    </div>
                    <div className="ml-96 pl-72 flex flex-row align-center items-center  ">
                        <LiaFlagUsaSolid style={{ fontSize: "35px" }} />
                        <RxAvatar style={{ fontSize: "35px", marginLeft: "20px" }} />
                    </div>
                </div>
                <div className="my-8 ml-14 mt-8 hover:cursor-pointer text-2xl font-semibold text-black">
                    UserList/Duc Phan
                </div>
                <div className="grid grid-cols-3 mx-14 bg-white text-[#797C7B] p-6 rounded-2xl">
                    <div className="pr-4">
                        <div className="rounded-full bg-[#A6D4AE] w-64 h-64 mx-auto relative z-0 ">
                            <div className="absolute ml-48 z-10 mt-52 p-1.5 w-fit border bg-[#D9D9D9] rounded-full">
                                <FaCamera style={{ color: '#f5a201', fontSize: '24px' }} />
                            </div>
                        </div>
                        <div>
                            <button type="submit" class="mt-10 w-full text-white bg-[#00537A] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Order History</button>
                            <button type="submit" class="mt-2 w-full text-white bg-[#00537A] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Change Password</button>
                        </div>
                    </div>
                    <form className="col-start-2 col-span-3">
                        <div class="grid gap-6 mb-10 md:grid-cols-2">
                            <div>
                                <input type="text" id="first_name" class="bg-gray-50 border border-[#B6D6F2] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name *" required />
                            </div>
                            <div>
                                <input type="text" id="last_name" class="bg-gray-50 border border-[#B6D6F2] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name *" required />
                            </div>
                            <div>
                                <input type="text" id="company" class="bg-gray-50 border border-[#B6D6F2] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email Address *" required />
                            </div>
                            <div>
                                <input type="tel" id="phone" class="bg-gray-50 border border-[#B6D6F2] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone Number *" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                            </div>
                            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-gray-80 border border-[#B6D6F2] bg-gray-50 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Select Roles<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg>
                            </button>
                            <div id="dropdown" class="bg-gray-200 rounded-lg shadow w-64 dark:bg-gray-700">
                                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-white dark:hover:bg-gray-600 dark:hover:text-white">Admin</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-white dark:hover:bg-gray-600 dark:hover:text-white">User</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <input type="text" id="visitors" class="bg-gray-50 border border-[#B6D6F2] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="City/District/Town" required />
                            </div>
                            <div>
                                <input type="text" id="visitors" class="bg-gray-50 border border-[#B6D6F2] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ward / village" required />
                            </div>
                            <div>
                                <input type="text" id="visitors" class="bg-gray-50 border border-[#B6D6F2] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Street" required />
                            </div>
                            <div className="col-span-2">
                                <input type="password" id="confirm_password" class="bg-gray-50 border border-[#B6D6F2] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Street" required />
                            </div>
                        </div>
                        <button type="submit" class="w-full text-white bg-[#25BEB9] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default UserList;
