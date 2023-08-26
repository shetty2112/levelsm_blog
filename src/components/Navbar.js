import React, { useContext } from 'react'
import '../css/styles.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const {currentUser, logout} = useContext(AuthContext)
  return (
    <div className='navbar'>
        <h1>Level Blogs</h1>
        <div className='links'>
            <Link className="link" to="/?cat=arts">
                <h4>Arts</h4>
            </Link>
            <Link className="link" to="/?cat=science">
                <h4>Science</h4>
            </Link>
            <Link className="link" to="/?cat=spirituality">
                <h4>Spirituality</h4>
            </Link>
            <Link className="link" to="/?cat=cinema">
                <h4>Cinema</h4>
            </Link>
            <Link className="link" to="/?cat=design">
                <h4>Design</h4>
            </Link>
            <Link className="link" to="/?cat=technology">
                <h4>Technology</h4>
            </Link>
            {currentUser ? <Link><button onClick={logout}>Logout</button></Link> : <Link to="/login"><button>Login</button></Link>}
            <Link to="/write">
                <button>Write</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar