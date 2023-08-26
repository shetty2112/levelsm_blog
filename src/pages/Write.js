import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import axios from "axios"
import { useLocation, useNavigate } from 'react-router-dom';
import moment from "moment";

const Write = () => {
    const state = useLocation().state;
    const [value, setValue] = useState(state?.desc || "");
    const [title, setTitle] = useState(state?.title || "");
    const [file, setFile] = useState(state?.file);
    const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate();

    const upload = async () => {
        try {
          const formData = new FormData();
          formData.append("file", file);
          const res = await axios.post("/upload", formData);
          return res.data;
        } catch (err) {
          console.log(err);
        }
      };

    const handleSubmit = async e=> {
        e.preventDefault();
        const imgUrl = await upload();

        try {
            state
              ? await axios.put(`/posts/${state.id}`, {
                  title,
                  desc: value,
                  cat,
                  img: file ? imgUrl : "",
                })
              : await axios.post(`/posts/`, {
                  title,
                  desc: value,
                  cat,
                  img: file ? imgUrl : "",
                  date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
                }); 
                navigate("/")
          } catch (err) {
            console.log(err);
          }
    }
  return (
    <>
    <Navbar/>
    <div className='add'>
        <div className='write_content'>
            <input type="text" value={title} placeholder='Title' onChange={e=>setTitle(e.target.value)}/>
            <div className='editor_container'>
                <ReactQuill theme="snow" value={value} onChange={setValue}/>
            </div>
        </div>
        <div className='menup'>
            <div className='item'>
                <h1>Publish</h1>
                <span>
                    <b>Status: </b> Draft
                </span>
                <span>
                    <b>Visibility: </b> Public
                </span>
                <input style={{display: 'none'}} type='file' id='file' onChange={e=>setFile(e.target.files[0])}/>
                <label className='file' htmlFor='file'>Upload Image</label>
                <div className='buttons'>
                    <button className='draft_btn'>Save as a draft</button>
                    <button className='update_btn' onClick={handleSubmit}>Publish</button>
                </div>
            </div>
            <div className='item'>
                <h1>Category</h1>
                <div className='cat'>
                    <input type="radio" checked={cat === "arts"} name="cat" value="arts" id="art" onChange={e=>setCat(e.target.value)}/>
                    <label htmlFor='art'>Arts</label>
                </div>
                <div className='cat'>
                    <input type="radio" checked={cat === "science"} name="cat" value="science" id="science" onChange={e=>setCat(e.target.value)}/>
                    <label htmlFor='Science'>Science</label>
                </div>
                <div className='cat'>
                    <input type="radio" checked={cat === "spirituality"} name="cat" value="spirituality" id="spirituality" onChange={e=>setCat(e.target.value)}/>
                    <label htmlFor='spirituality'>Spirituality</label>
                </div>
                <div className='cat'>
                    <input type="radio" checked={cat === "cinema"} name="cat" value="cinema" id="cinema" onChange={e=>setCat(e.target.value)}/>
                    <label htmlFor='cinema'>Cinema</label>
                </div>
                <div className='cat'>
                    <input type="radio" checked={cat === "design"} name="cat" value="design" id="design" onChange={e=>setCat(e.target.value)}/>
                    <label htmlFor='design'>Design</label>
                </div>
                <div className='cat'>
                    <input type="radio" checked={cat === "technology"} name="cat" value="technology" id="technology" onChange={e=>setCat(e.target.value)}/>
                    <label htmlFor='technology'>Technology</label>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Write