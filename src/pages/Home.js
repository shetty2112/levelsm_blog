import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
import DOMPurify from 'dompurify';
import {proxy} from "../../package.json"

const Home = () => {
    const [posts, setPosts] = useState([]);

    const cat = useLocation().search

    useEffect(() => {
        const fetchData = async () => {
        try {
            const res = await axios.get(`/posts${cat}`);
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
    <>
        <Navbar/>
        <div>
        <div className='posts'>
            {posts.map((post) => (
                <div className='post' key={post.id}>
                    <div className='posts_image'>
                        <img className='post_image' src={`http://ec2-18-237-75-186.us-west-2.compute.amazonaws.com/upload/${post.img}`}/>
                    </div>
                    <div className='posts_content'>
                        <Link className='post_link' to={`/post/${post.id}`}>
                            <h1>{post.title}</h1>
                        </Link>
                        <p dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}></p>
                        
                        <Link className='post_link' to={`/post/${post.id}`}>
                            <button>Read More</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
        </div>
        <Footer/>
    </>
  )
}

export default Home