import { PostService } from '../services/post.service';

const postService = new PostService();

export const getPosts = async (req, res) =>{
  try {
    const response =  await postService.getPosts(req.query)
    return res.status(200).json(response.data);
  } catch (error) {
    console.log(error)
  }
}