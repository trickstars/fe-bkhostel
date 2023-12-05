import GoogleMapReact from 'google-map-react'
import { CiLocationOn } from "react-icons/ci";
import axios from 'axios';
import {useState, useEffect} from 'react';
import Header from "../../components/header/Header";
import Sidebar from '../../components/sidebar/Sidebar';
import Footer from "../../components/footer/Footer";

import { useNavigate } from 'react-router-dom';

const locationURL = import.meta.env.VITE_BACKEND_API + '/location';
const postsURL = import.meta.env.VITE_BACKEND_API + '/posts';
const authToken = localStorage.getItem('token')
// const config = {'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NmQ3YTQyODJiYmE2MzJjZDVjZjBlMCIsInRva2VuVmVyc2lvbiI6MCwiaWF0IjoxNzAxNjczNTcyfQ.ddG0VTMD-ZE0dJxGQL5SbHtAQyqO2MlZ_U121M5B8gY"};
const config = {'Authorization': authToken};


const PostNew = () => {
    const navigate = useNavigate();
    const [district, setDistrict] = useState([''])
    const [ward , setWard] = useState([''])
    const [images , setImages] = useState({
        files: [],
        base64: []
    })

    const [location] = useState({
        lat: 10.734363531931315,
        lng: 106.72015766304695
    })
    const getDistricts = async () => {
        console.log("get District")
        try {
            await axios.get(`${locationURL}/districts`).then(res => setDistrict(res.data));
        } catch (error) {
            const customError = new Error();
            customError.message = error.response.data.message;
            console.log(customError.message);
            throw customError;
        }

    };
    const getWards = async (id) => {
        console.log("get Wards " + id)
        try {
            await axios.get(`${locationURL}/districts/${id}/wards`).then(res => setWard(res.data));
        } catch (error) {
            const customError = new Error();
            customError.message = error.response.data.message;
            console.log(customError.message);
            throw customError;
        }

    };

    const handleFileRead = async (event) => {
        const converted = []
        const files = []
        for (var i = 0; i < event.target.files.length; i++) {
            converted[i] = await convertBase64(event.target.files[i])
            files[i] = URL.createObjectURL(event.target.files[i])
        }
        setImages({
            files: [...images.files, ...files],
            base64: [...images.base64, ...converted],
        })

        // const imagesContainer = document.getElementsByClassName("images-container")

        // imagesContainer.length ? imagesContainer.map((image, idx) => {
        //     return (
        //         <img src={image} key={idx} alt={"image" + idx} className="images w-48"/>
        //     )
        // }): "Chưa có ảnh được chọn"
    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file)
        fileReader.onload = () => {
            resolve(fileReader.result);
        }
        fileReader.onerror = (error) => {
            reject(error);
        }
        })
    }
    const handleSubmit = (e) => {
        const postData = {
            title: e.target.title.value,
            desc: e.target.desc.value,
            price: e.target.price.value,
            customer_type: e.target.customer_type.value,
            area: e.target.area.value,
            expDate: e.target.expDate.value,
            phone_num: e.target.phone_num.value,
            images : images.base64,
            street: e.target.street.value,
            ward: e.target.ward.value,
            district: e.target.district.value,
            city: e.target.city.value,
        }

        uploadNewPost(postData)
        navigate('/post-new')
    }

    const uploadNewPost = async (postData) => {
        console.log(postData);
        try {
            const response = await axios.post(`${postsURL}/upload`, postData, {headers: config});
            console.log(response.data);
        } catch (error) {
            const customError = new Error();
            customError.message = error.response.data.message;
            console.log(customError.message);
            throw customError;
        }
    };

    useEffect(() => {
        getDistricts();
        getWards(0);

    }, [])
    return (
        <div>
            <Header></Header>
            <div className="grid grid-cols-8 gap-3 max-w-[1536px] mx-auto">
                <Sidebar item={0}></Sidebar>
                <div className="flex flex-col row-start-1 row-span-7 col-start-3 col-span-6 ml-5">
                    <div className="py-4 mt-6 border-b border-gray rounded-md h-fit text-5xl">
                        Đăng tin mới
                    </div>

                    <form onSubmit={handleSubmit} className="my-10 mr-10">
                        <div className="my-8">
                            <p className="[font-family:'Poppins-Medium',Helvetica] font-medium text-black text-4xl">Dịch vụ</p>
                            <div className="items-center mt-8">
                                <label className="mb-2 block w-full [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px]" htmlFor="service">Gói dịch vụ</label>
                                {/* <input className="px-3 block w-full h-10 outline-none rounded-[4px] border border-solid border-[#cccccc]" type="text" defaultValue="" id="service" name="service"/> */}
                                <select name="service" id="service" className='px-3 block w-full h-10 outline-none rounded-[4px] border border-solid border-[#cccccc]'>
                                    <option value="1">VIP 1</option>
                                    <option value="2">VIP 2</option>
                                    <option value="3">VIP 3</option>
                                    <option value="4">VIP 4</option>
                                </select>
                            </div>
                        </div>

                        <div className="my-8">
                            <p className="[font-family:'Poppins-Medium',Helvetica] font-medium text-black text-4xl">Địa chỉ cho thuê</p>
                            <div className="flex justify-between">
                                <div className="items-center mt-8 w-full mr-4">
                                    <label className="mb-2 block w-full [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px]" htmlFor="city">Tỉnh/ Thành phố</label>
                                    <input className="px-3 block w-full h-10 outline-none rounded-[4px] border border-solid border-[#cccccc]" type="text" defaultValue="Thành phố Hồ Chí Minh" disabled id="city"/>
                                </div>

                                <div className="items-center mt-8 w-full ml-4">
                                    <label className="mb-2 block w-full [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px]" htmlFor="district">Quận/ Huyện</label>
                                    {/* <input className="px-3 block w-full h-10 outline-none rounded-[4px] border border-solid border-[#cccccc]" type="text" defaultValue="" id="service" name="service"/> */}
                                    <select  onChange={e => getWards(e.target.value)} name="district" id="district" className='px-3 block w-full h-10 outline-none rounded-[4px] border border-solid border-[#cccccc]'>
                                        {district.length ? district.map((item, idx)=> {
                                            return (
                                                <option key={idx} value={idx}>{item}</option>
                                            )
                                        }):""}
                                    </select>
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <div className="items-center mt-8 w-full mr-4">
                                    <label className="mb-2 block w-full [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px]" htmlFor="ward">Phường/ Xã</label>
                                    {/* <input className="px-3 block w-full h-10 outline-none rounded-[4px] border border-solid border-[#cccccc]" type="text" defaultValue="" id="service" name="service"/> */}
                                    <select name="ward" id="ward" className='px-3 block w-full h-10 outline-none rounded-[4px] border border-solid border-[#cccccc]'>
                                        {ward.length ? ward.map((item, idx)=> {
                                            return (
                                                <option key={idx} value={idx}>{item}</option>
                                            )
                                        }):""}
                                    </select>
                                </div>

                                <div className="items-center mt-8 w-full mx-4">
                                    <label className="mb-2 block w-full [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px]" htmlFor="street">Đường/ Phố</label>
                                    <input className="px-3 block w-full h-10 outline-none rounded-[4px] border border-solid border-[#cccccc]" type="text" defaultValue="" id="street" name="street"/>
                                </div>

                                <div className="items-center mt-8 w-full ml-4">
                                    <label className="mb-2 block w-full [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px]" htmlFor="number">Số nhà</label>
                                    <input className="px-3 block w-full h-10 outline-none rounded-[4px] border border-solid border-[#cccccc]" type="text" defaultValue="" id="number" name="number"/>
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <div className="items-center mt-8 w-full">
                                    <label className="mb-2 block w-full [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px]" htmlFor="full_address">Địa chỉ chính xác</label>
                                    <input className="px-3 block w-full h-10 outline-none rounded-[4px] border border-solid border-[#cccccc]" type="text" defaultValue="" disabled id="full_address" name="full_address"/>
                                </div>
                            </div>

                            <div className="flex justify-between mt-8">
                                {/* <div className="bg-[#000] w-full h-60 mr-4"></div> */}
                                <div className='w-full h-72 rounded-md overflow-hidden'>
                                        <GoogleMapReact
                                            bootstrapURLKeys={{ key: 'AIzaSyDWTx7bREpM5B6JKdbzOvMW-RRlhkukmVE' }}
                                            defaultCenter={location}
                                            defaultZoom={3}
                                        >
                                            <CiLocationOn lat={location.lat} lng={location.lng} text={"location"}/>
                                        </GoogleMapReact>
                                    </div>
                                <div className="bg-[#E9DDBF] w-full h-72 ml-4 p-6">
                                    <p className="text-[24px] mb-2">Lưu ý khi đăng tin</p>
                                    <p>
                                    * Nội dung phải viết bằng tiếng Việt có dấu.
                                    </p>
                                    <p>
                                    * Tiêu đề tin không dài quá 100 ký tự.
                                    </p>
                                    <p>
                                    * Các bạn nên điền đầy đủ thông tin vào các mục để tin đăng có hiệu quả hơn.
                                    </p>
                                    <p>
                                    * Để tăng độ tin cậy và tin rao được nhiều người quan tâm hơn, hãy sửa vị trí tin rao của bạn trên bản đồ bằng cách kéo icon tới đúng vị trí tin rao.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="my-8">
                            <p className="[font-family:'Poppins-Medium',Helvetica] font-medium text-black text-4xl">Thông tin mô tả</p>
                            <div className="flex justify-between">
                                <div className="items-center mt-8 w-full mr-4">
                                    <label className="mb-2 block w-full [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px]" htmlFor="type">Loại hình</label>
                                    {/* <input className="px-3 block w-full h-10 outline-none rounded-[4px] border border-solid border-[#cccccc]" type="text" defaultValue="" id="service" name="service"/> */}
                                    <select name="type" id="type" className='px-3 block w-full h-10 outline-none rounded-[4px] border border-solid border-[#cccccc]'>
                                        <option value="">Cho thuê phòng trọ</option>
                                        <option value="">Cho thuê nhà</option>
                                        <option value="">Cho thuê căn hộ</option>
                                        <option value="">Tìm người ở ghép</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <div className="items-center mt-8 w-full mr-4">
                                    <label className="mb-2 block w-full [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px]" htmlFor="title">Tiêu đề</label>
                                    <input className="px-3 block w-full h-10 outline-none rounded-[4px] border border-solid border-[#cccccc]" type="text" defaultValue="" id="title" name="title"/>
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <div className="items-center mt-8 w-full">
                                    <label className="mb-2 block w-full [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px]" htmlFor="desc">Nội dung mô tả</label>
                                    <textarea className="p-3 block w-full h-60 outline-none rounded-[4px] border border-solid border-[#cccccc]" type="text" defaultValue="" id="desc" name="desc"/>
                                </div>
                            </div>


                            <div className="flex justify-between">
                                <div className="items-center mt-8 w-full mr-4">
                                    <label className="mb-2 block w-full [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px]" htmlFor="contact">Thông tin liên hệ thêm</label>
                                    <input className="px-3 block w-full h-10 outline-none rounded-[4px] border border-solid border-[#cccccc]" type="text" defaultValue="" id="contact" name="contact"/>
                                </div>

                                <div className="items-center mt-8 w-full ml-4">
                                    <label className="mb-2 block w-full [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px]" htmlFor="price">Giá cho thuê</label>
                                    <input className="px-3 block w-full h-10 outline-none rounded-[4px] border border-solid border-[#cccccc]" type="text" defaultValue="" id="price" name="price"/>
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <div className="items-center mt-8 w-full mr-4">
                                    <label className="mb-2 block w-full [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px]" htmlFor="phone-num">Điện thoại</label>
                                    <input className="px-3 block w-full h-10 outline-none rounded-[4px] border border-solid border-[#cccccc]" type="text" defaultValue="" id="phone-num"/>
                                </div>

                                <div className="items-center mt-8 w-full ml-4">
                                    <label className="mb-2 block w-full [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px]" htmlFor="area">Diện tích</label>
                                    <input className="px-3 block w-full h-10 outline-none rounded-[4px] border border-solid border-[#cccccc]" type="text" defaultValue="" id="area"/>
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <div className="items-center mt-8 w-full mr-4">
                                    <label className="mb-2 block w-full [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px]" htmlFor="customer_type">Đối tượng cho thuê</label>
                                    <input className="px-3 block w-full h-10 outline-none rounded-[4px] border border-solid border-[#cccccc]" type="text" defaultValue="" id="customer_type" name="customer_type"/>
                                </div>

                                <div className="items-center mt-8 w-full ml-4">
                                </div>
                            </div>
                        </div>

                        <div className="my-8">
                            <p className="[font-family:'Poppins-Medium',Helvetica] font-medium text-black text-4xl">Hình ảnh</p>
                            <div className="flex justify-between">
                                <div className="items-center mt-8 w-full mr-4">
                                    <p className="mb-2 block w-full [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px]">Cập nhật hình ảnh cho nơi thuê</p>
                                    <div className="h-60 rounded-[4px] border border-dashed border-[#cccccc] justify-center items-center flex">
                                        <label href="" className="rounded-[4px] border border-solid border-[#cccccc] p-2 cursor-pointer" htmlFor="images">Thêm hình ảnh</label>
                                        <input className="rounded-[4px] border border-solid border-[#cccccc] p-2 hidden" id="images" encType="multipart/form-data" multiple  type="file" name="images" onChange={e => handleFileRead(e)} />

                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <div className="items-center mt-8 w-full mr-4">
                                    <p className="mb-2 block w-full [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[24px]">Ảnh đã chọn</p>
                                    <div className="images-container">
                                        {/* <img src="https://hcmut.edu.vn/img/nhanDienThuongHieu/01_logobachkhoatoi.png" alt="hinh anh" className="images w-48"/> */}
                                        {
                                            images.files.length ? images.files.map((image, idx) => {
                                                return (
                                                    <img src={image} key={idx} alt={"image" + idx} className="images w-48 inline-block pr-3 pt-3"/>
                                                )
                                            }): "Chưa có ảnh được chọn"
                                        }
                                    </div>

                                    <button id="clear"></button>
                                </div>
                            </div>
                        </div>
                    </form>


                    <button className='justify-center items-center rounded-md px-3 py-3 mt-8 mb-16 bg-[#008000]'>
                        <p className='text-sm text-white text-3xl font-semibold'>Tạo mới</p>
                    </button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default PostNew;