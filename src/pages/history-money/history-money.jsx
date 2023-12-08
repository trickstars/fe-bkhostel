const HistoryMoney = () => {
    return (
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
      <div className="flex flex-col row-start-1 row-span-7 col-start-3 col-span-6 ml-5">
        <div className="px-3 py-4 mt-6 border-b border-gray rounded-md h-fit font-bold text-3xl">
          Nạp tiền
        </div>
        <div className="px-3 py-4 mt-3 bg-gray-100 border-b border-gray rounded-md h-fit text-lg">
          <div className="font-bold">Số dư ví</div>
          <div className="pt-10 text-base">0</div>
        </div>
        <div className="text-lg font-bold py-3 mt-6">Phương thức nạp tiền</div>
        <div className="px-3 py-3 bg-gray-100 border-b border-gray rounded-md h-40 text-2xl"></div>
        <div className="col-start-3 col-span-6 text-lg font-bold py-3 mt-6">
          Số tiền nạp
        </div>
        <div className="px-3 py-3 border border-gray rounded-md h-14 text-2xl"></div>
        <button className="justify-center items-center rounded-md px-3 py-3 mt-8 mb-16 bg-[#0000FF]">
          <p className="text-lg text-white  font-semibold">Nạp Tiền</p>
        </button>
      </div>
      // </div>
    );
}
export default HistoryMoney