import React from 'react'
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import DOMPurify from "dompurify";
import moment from "moment";
const Single = () => {
    const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async ()=>{
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  }

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }
  return (
    <>
    <Navbar/>
    <div className='single'>
        <div className='content'>
            <img src={`http://ec2-18-237-75-186.us-west-2.compute.amazonaws.com/upload/${[post.img]}`}/>
            
        <div className='user'>
            {post.userImg && <img
                src={`upload/${post.userImg}`}
                alt=""
            />}
            <div className='info'>
                <span>{post.username}</span>
                <p>Posted {moment(post.date).fromNow()}</p>
            </div>
            {currentUser != null && currentUser.username === post.username && (
            <div className='edit'>
                <Link to="/write?edit=2" state={post}>
                    <img src={Edit}/>
                </Link>
                <img onClick={handleDelete} src={Delete}/>
            </div>
            )}
        </div> 
        <h1>{post.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}
        >
        </p>
        </div> 
        <Menu cat={post.cat}/>
    </div>
    <Footer/>
    </>
  )
}

export default Single