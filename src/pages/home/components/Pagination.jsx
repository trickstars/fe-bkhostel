import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Pagination = ({currentPage, totalPage, gotoPage}) => {
    const pages = Array.from({length: totalPage}, (_, i) => i + 1)
    return (
        <ul className='flex items-center gap-2 list-none mx-auto my-5'>
            <li 
                className='cursor-pointer border border-gray-300 rounded-sm px-1 py-1 text-sm'
                onClick={() => gotoPage(currentPage - 1)}
            >
                <IoIosArrowBack />
            </li>
            {currentPage > 5 && 
            <li 
                className='cursor-pointer border border-gray-300 rounded-sm px-1 py-1 text-sm'
                >
                ...
            </li>}
            {pages.map((page, i) => {
                return (
                <li 
                    key={i}
                    className={page === currentPage 
                        ? 'cursor-pointer bg-black text-white rounded-sm px-[10px] py-[4px] text-sm'
                        : 'cursor-pointer border border-gray-300 rounded-sm px-[10px] py-[4px] text-sm'
                    }
                    onClick={() => gotoPage(page)}
                >
                    {page}
                </li>)
            })}
            {pages - currentPage > 5 && 
            <li 
                className='cursor-pointer border border-gray-300 rounded-sm px-1 py-1 text-sm'
                >
                ...
            </li>}
            <li 
                className='cursor-pointer border border-gray-300 rounded-sm px-1 py-1 text-sm'
                onClick={() => gotoPage(currentPage + 1)}
            >
                <IoIosArrowForward />
            </li>
        </ul>
    )
}

export default Pagination
