const Recharge = () => {
    return (<div className="flex flex-col row-start-1 row-span-7 col-start-3 col-span-6  ">
                <div className="px-3 py-4 mt-6 border-b border-gray rounded-md h-fit font-bold text-3xl mb-6">
                    Lịch sử nạp tiền
                </div>
                <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400 border-2">
                    <thead class="text-lg text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3 border-b-2 border-r-2">
                                Ngày nạp tiền
                            </th>
                            <th scope="col" class="px-6 py-3 border-b-2 border-r-2">
                                Mã giao dịch
                            </th>
                            <th scope="col" class="px-6 py-3 border-b-2 border-r-2">
                                Số tiền
                            </th>
                            <th scope="col" class="px-6 py-3 border-b-2 border-r-2">
                                Phương thức
                            </th>
                            <th scope="col" class="px-6 py-3 border-b-2 border-r-2">
                                Trạng thái
                            </th>
                            <th scope="col" class="px-6 py-3 border-b-2 border-r-2">
                                #
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td class="px-6 py-4 grid-cols-6">

                            </td>
                            <td class="px-6 py-4">

                            </td>
                            <td class="px-6 py-4">

                            </td>
                            <td class="px-6 py-4">

                            </td>
                            <td class="px-6 py-4">

                            </td>
                            <td class="px-6 py-4">

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        // <div className="grid grid-cols-8 gap-3 mr-20 ">
        //     <div className="font-semibold row-start-1 row-span-7 col-start-1 col-span-2 pl-3 text-lg bg-[#F5F4F3]">
        //         <div className="py-8 grid grid-cols-2">
        //             <div className="grid grid-cols-2">
        //                 <div className="w-20 h-20 rounded-full bg-white items-center">
        //                     <p></p>
        //                 </div>
        //                 <div className="pl-3 pt-3 items-center justify-center">
        //                     <div className="hover:cursor-pointer">user</div>
        //                     <div>12345678</div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="my-8 hover:cursor-pointer">Đăng tin cho thuê</div>
        //         <div className="my-8 hover:cursor-pointer">Lịch sử cho thuê</div>
        //         <div className="my-8 hover:cursor-pointer">Thông tin cá nhân</div>
        //         <div className="my-8 hover:cursor-pointer">Nạp tiền</div>
        //         <div className="my-8 hover:cursor-pointer">Lịch sử nạp tiền</div>
        //         <div className="my-8 hover:cursor-pointer">Thoát</div>
        //     </div>
            
        // </div>
    )
}
export default Recharge;