import React, { useEffect, useState } from 'react';
import ImageCard from '../components/ImageCard';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import axios from "axios"
import InfiniteScroll from 'react-infinite-scroll-component';

function Dashboard(props) {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch(`https://randomuser.me/api/?page=${page}&results=12&seed=abc`)
      .then(res => res.json())
      .then(data => {
        console.log(data.results)
        setImages(data.results);
        setIsLoading(false);
        setPage(page+1)
      })
      .catch(err => console.log(err));
  }, [term]);

  const fetchStateAlbums = () => {
    setTimeout(() => {
      fetch(`https://randomuser.me/api/?page=${page}&results=12&seed=abc`)
      .then(res => res.json())
      .then(data => {
        console.log([...images,...data.results])
        setImages([...images,...data.results]);
        setIsLoading(false);
        setPage(page+1)
      })
      .catch(err => console.log(err));
    },1000)
  }

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  useEffect(() => {

    if (!user) {
      navigate('/login')
    }

  }, [user, navigate, dispatch])

  // if (isLoading) {
  //   return <Spinner />
  // }

  return(
    <div className="container mx-auto">

      <InfiniteScroll
          dataLength={images.length}
          next={() => fetchStateAlbums()}
          hasMore={true}
          loader={<h3>Loading...</h3>}
          style={{overflow:"hidden"}}
          // className='overflow-y-hidden'
      >
      {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1> }

      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="grid grid-cols-3 gap-4">

        {images.map(image => (
          <ImageCard key={image.id} image={image} />
        ))}

      </div>}
      </InfiniteScroll>
    </div>
  )
}

export default Dashboard;