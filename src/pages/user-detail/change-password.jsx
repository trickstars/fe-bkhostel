import { PiTelevision } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";
import { CiCreditCard2 } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";
import UserDetail from "./components/user-detail";
import { RiArrowDropRightFill } from "react-icons/ri";
import { RiArrowDownSFill } from "react-icons/ri";
import { LiaFlagUsaSolid } from "react-icons/lia";
import 'flowbite';
const style = {
    color: '#25BEB9', fontSize: '1.5rem'
}
const style_list = "flex flex-row items-center pl-3 ml-2 hover:bg-[#B6D6F2] rounded-3xl";
const ChangePassWord = () => {

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
                    UsersList/Duc Phan/Change Password
                </div>
                <div className="mx-14 bg-white text-[#797C7B] p-6 h-2/3 rounded-2xl">
                    <form className="w-1/2 mx-auto mt-16 mb-16">
                        <div class="grid gap-6 mb-10 md:grid-cols-1">
                            <div>
                                <input type="password" id="old_pass" class="bg-gray-50 border border-[#B6D6F2] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Old Password" required />
                            </div>
                            <div>
                                <input type="password" id="new_pass" class="bg-gray-50 border border-[#B6D6F2] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="New Password" required />
                            </div>
                            <div>
                                <input type="password" id="confirm-pass" class="bg-gray-50 border border-[#B6D6F2] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Confirm Password" required />
                            </div>
                        </div>
                        <button type="submit" class="w-full text-white bg-[#25BEB9] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default ChangePassWord;