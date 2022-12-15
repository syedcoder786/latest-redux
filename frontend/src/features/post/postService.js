import axios from 'axios'

const API_URL = '/api/users/'

// Register user
const createPost = async (post, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.post(API_URL, post,config)

    return response.data
}

// Login user
const getPosts = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.get(API_URL + 'get',config)

    return response.data
}

// Login user
const deletePost = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.get(API_URL + 'delete', id, config)

    return response.data
}


const postService = {
  createPost,
  getPosts,
  deletePost,
}

export default postService