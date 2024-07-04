import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginUser } from '../features/authSlice';

import './login.css'; // Import the CSS file
import loginImage1 from './assests/nithya.png';
import loginImage2 from './assests/prathiba.png'; // Import the second image
import loginImage3 from './assests/vasanthi.png';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State to manage current image index
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSucess, isLoading, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user || isSucess) {
      navigate("/dashboard");
    }
  }, [user, isSucess, dispatch, navigate]);

  useEffect(() => {
    // Function to switch images every 2 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3); // Toggle between 0, 1, and 2 (number of images)
    }, 2000); // Interval set to 2000 milliseconds (2 seconds)

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run once on mount

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  const images = [loginImage1, loginImage2, loginImage3];
  const imageTexts = ["NITHYA,B.TECH,M.E CSE", "PRATHIBA ME,CSE", "VASANTHI G M.TECH,(Ph.d)"]; // Texts to display beside images

  return (
    <section className="hero1 is-fullheight">
      <div className="box1">
        <div className="content">
          <form onSubmit={Auth}>
            {isError && <p className='has-text-centered'>{message}</p>}
            <div className="field email">
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  type="password"
                  className="input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="******"
                />
              </div>
            </div>
            <div className="field">
              <button
                type='submit'
                className="button">
                {isLoading ? 'Loading...' : "Login"}
              </button>
            </div>
            <div className="position" style={{ position: 'relative', right: '700px', marginTop: '1700px'}}>
              {images.map((image, index) => (
                <div key={index} style={{ display: index === currentImageIndex ? 'block' : 'none' }}>
                  <img
                    src={image}
                    alt="Login"
                    className="login-image"
                    style={{ width: '150%' }}
                  />
                  <p>{imageTexts[index]}</p>
                </div>
              ))}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;


















































