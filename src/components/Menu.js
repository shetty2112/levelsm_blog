import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Menu = ({cat}) => {
    const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
    // const posts = [
    //     {
    //         id: 1,
    //         title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //         image: "https://media.istockphoto.com/id/153562656/photo/kiwi-or-lemon.jpg?s=612x612&w=0&k=20&c=OgfyaBuDaP7HwEIIB5OsAPkGZ3_AyxlJ4rzU2SUIo7k="
    //     },
    //     {
    //         id: 2,
    //         title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //         image: "https://media.istockphoto.com/id/153562656/photo/kiwi-or-lemon.jpg?s=612x612&w=0&k=20&c=OgfyaBuDaP7HwEIIB5OsAPkGZ3_AyxlJ4rzU2SUIo7k="
    //     },
    //     {
    //         id: 3,
    //         title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //         image: "https://media.istockphoto.com/id/153562656/photo/kiwi-or-lemon.jpg?s=612x612&w=0&k=20&c=OgfyaBuDaP7HwEIIB5OsAPkGZ3_AyxlJ4rzU2SUIo7k="
    //     },
    //     {
    //         id: 4,
    //         title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //         image: "https://media.istockphoto.com/id/153562656/photo/kiwi-or-lemon.jpg?s=612x612&w=0&k=20&c=OgfyaBuDaP7HwEIIB5OsAPkGZ3_AyxlJ4rzU2SUIo7k="
    //     },
    //     {
    //         id: 5,
    //         title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //         image: "https://media.istockphoto.com/id/153562656/photo/kiwi-or-lemon.jpg?s=612x612&w=0&k=20&c=OgfyaBuDaP7HwEIIB5OsAPkGZ3_AyxlJ4rzU2SUIo7k="
    //     },
    // ];
  return (
    <div className='menu'>
        <h1>Other posts you may like</h1>
        {posts.map(post => (
            <div className='menu_post' key={post.id}>
                <img src={`http://ec2-18-237-75-186.us-west-2.compute.amazonaws.com/upload/${post.img}`}/>
                <h2>{post.title}</h2>
                <Link className='menu_post_link' to={`/post/${post.id}`}><button>Read More</button></Link>
            </div>
        ))}
    </div>
  )
}

export default Menu