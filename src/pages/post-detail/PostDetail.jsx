import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import RentalDetail from './components/RentalDetail'
import OwnerDetail from './components/OwnerDetail'
import { fetchPostDetail } from '../../services/post/fetchPostDetail';

const PostDetail = () => {
    const { id } = useParams()
    const {data: rentalDetail, isFetching} = useQuery({
        queryKey: ["post", id],
        queryFn: async () => await fetchPostDetail(id)
    })

    if(isFetching) return <h1>Loading...</h1>

    return (
        <div className='grid grid-cols-[1.6fr_1fr] mx-auto w-full content-center max-w-[1200px] my-5'>
            <RentalDetail {...rentalDetail} />
            <OwnerDetail owner={rentalDetail?.created_by} />
        </div>
  )
}

export default PostDetail
