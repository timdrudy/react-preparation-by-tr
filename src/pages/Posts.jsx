import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Posts = () => {
    const { id } = useParams();

  useEffect(() => {
    async function fetchPosts() {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
        console.log(data);
    }
    fetchPosts();
  }, []);
  return (
    <div>
      Posts
    </div>
  );
}

export default Posts;
