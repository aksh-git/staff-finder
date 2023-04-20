import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loder from '../../components/Loder';
import config from '../../../config';

function Login() {

  const base_url = 'http://127.0.0.1:'+config.BACKEND_PORT;

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [error, setError] = useState({error:"",eerror:"hidden"});
  const [loderVisible, setLoderVisible] = useState("none");
  const navigate = useNavigate();
  const handleEmailChange = (e)=>{
    var val = e.target.value.trim()
    setemail(val)
  }
  const handlePasswordChange = (e) =>{
    var val = e.target.value.trim()
    setpassword(val)
  }

  async function handleLoginFormSubmit(e){
    setLoderVisible("block");
    e.preventDefault();
    
    let response = await fetch(`${base_url}/api/auth/login`, { 
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      }),
    });
    
    let data = await response.json();
    setLoderVisible("none");
    if(data.success){
      return navigate("/");
    }else{
      setError({eerror:'',error:data.error})
    }
  }


  return (
    <div className='login-page bg-bodyBg'>
      
     <div
      className="max-w-screen bg-bodyBg shadow flex justify-center flex-1 login-page-wrapper">
      <div className="lg:w-1/2 p-6 sm:p-12">
        
        <div>
          {/* LOGO <img
            src=""
            className="w-32 mx-auto"
          /> */}
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl xl:text-3xl font-extrabold text-accent">
            Login - Staff-Finder
          </h1>
          <div className="w-full flex-1 mt-8">
            <div className="flex flex-col items-center">
              <button
                className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-accent flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                <div className="bg-bodyBg p-2 rounded-full">
                  <svg className="w-4" viewBox="0 0 533.5 544.3">
                    <path
                      d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                      fill="#4285f4"
                    />
                    <path
                      d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                      fill="#34a853"
                    />
                    <path
                      d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                      fill="#fbbc04"
                    />
                    <path
                      d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                      fill="#ea4335"
                    />
                  </svg>
                </div>
                <span className="ml-4 text-primary">
                  Continue with Google
                </span>
              </button>
            </div>
            <Loder visible={loderVisible} />
            <div className="my-4 border-b text-center">
              <div
                className="leading-none px-2 inline-block text-sm text-accent tracking-wide font-medium bg-bodyBg transform translate-y-1/2"
              >
                Or Login with e-mail
              </div>
            </div>
            
            
            <div className="mx-auto max-w-xs py-4">
            <div className={`mb-5 py-2 w-full rounded-sm text-center text-sm bg-red-800 text-white font-semibold ${error.eerror}`}>{error.error}</div>
              <form onSubmit={(e)=>handleLoginFormSubmit(e)}>
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-bodyBg border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-gray-100 "
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-bodyBg border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-gray-100  mt-5"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              
              <button
                className="mt-5 tracking-wide font-semibold bg-primary text-gray-100 w-full py-4 rounded-lg hover:bg-accent transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              >

                <span className="">
                  Login
                </span>
              </button>
              <p className="mt-6 text-sm text-gray-600 text-center">
                Not a member?
                <a href="/signup" className="border-b border-gray-500 border-dotted text-accent"> Join Staff-finder</a>
              </p>
              </form>
            </div>
          </div>
        </div>
        
      </div>
      <div className="flex-1 bg-accent text-center hidden lg:flex">
        <div
          className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
          id="loginImage"
        ></div>
      </div>
    </div>
    
    </div>
  )
}

export default Login