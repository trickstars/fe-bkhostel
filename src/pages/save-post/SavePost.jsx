import { memo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchLikedPost } from '../../services/post/fetchlikedPost'
import PostList from './components/PostList'
import RentalFilterList from './components/RentalFilterList'
import Pagination from './components/Pagination'

const SavePost = memo((props) => {
    const { isLoading, isFetching, error, data } = useQuery({
      queryKey: ["posts"],
      queryFn: () => fetchLikedPost({
        page: 1,
        userToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NmM0MDAzZmI5MmZlMzM4MGNmOGJkYSIsInRva2VuVmVyc2lvbiI6MCwiaWF0IjoxNzAxNTk2OTgzfQ.m1INfJU-JAgbcXC-hIc-xKC3zqaRcjvjfvBq5NuMGxc"
      })
    })
    if(isFetching) return <h1>Loading...</h1>
    

  
    return (
      <div className='grid grid-cols-[1.6fr_1fr] mx-auto w-full content-center max-w-[1200px] my-5'>
        <PostList postsInfo={data?.result}/> 
        <RentalFilterList />
        <Pagination />
      </div>
    );
});

export default SavePost
