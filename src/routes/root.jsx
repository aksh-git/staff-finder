import React, { useState, useEffect } from "react"
import '../App.css'
import MyPortfolio from "../components/myPortfolio"
import config from "../../config"
import UpdatePortfolioForm from "../components/forms/updatePortfolio"
import { useNavigate } from 'react-router-dom';
import JobsExplorer from "../pages/JobsExplorer"
import CreateNewJob from "../components/forms/createNewJob"

export default function Root() {

  const token = localStorage.getItem(config.token_var) 
  const navigate = useNavigate()
  const base_url = config.BACKEND_HOST+config.BACKEND_PORT;

  const [user, setuser] = useState({})

  useEffect(() => {
    if(!token){
      return navigate('/login')
    }
    getLoggedUser()
  }, [token])
  
  function getLoggedUser(){
    apiCall()
  }
  async function apiCall(){
    let response = await fetch(`${base_url}/api/user/getLoggedUser`, { 
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'auth-token':token
      },
    });

    let data = await response.json()
    if(data.success){
      setuser(data.data)
    }
  }
  // title for home header
  const titles = {
    myPortfolio : 'My Portfolio',
    createNewJob : 'Add New Job',
    updateMyPortfolio : 'Update Portfolio',
    jobsExporer : 'Explore Jobs',
    aboutUs : 'About',
    help : 'Get help'
  }

  const [page, setpage] = useState('myPortfolio')
  const [pageTitle, setpageTitle] = useState(false)
  const [sidebarStatus, setsidebarStatus] = useState(false)

  function toggleMenu() {
    setsidebarStatus(!sidebarStatus)
  }   

  function returnToHome(){
    setpage('myPortfolio')
  }
  function updatePage(page){
    setpageTitle(titles[page]?titles[page]:'')
    setpage(page);
    setsidebarStatus(false)
  }

  function logout(){
    toggleMenu() 
    localStorage.removeItem(config.token_var)
  }

  return (
    <div id="root-content" className="content">
      <div className='root-container'>
        <div className={`px-4 py-2 root-menu-sidebar-wrapper bg-darkBg ${sidebarStatus ? 'open':'close'}`}> {/* sidebar */}
          <div className='root-menu-sidebar '>
            <div className="w-full inline-flex justify-between items-center">
              <span className='text-sm'>MENU</span>
              <div onClick={()=>logout()} className="text-lg cursor-pointer p-2 hover:bg-red-800 rounded-full" title="Logout">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.985 9.985 0 0 1 8 4h-2.71a8 8 0 1 0 .001 12h2.71A9.985 9.985 0 0 1 12 22zm7-6v-3h-8v-2h8V8l5 4-5 4z"></path></g></svg>
              </div>
            </div>
            <div className='banner'>
              <span className='txt'>STAFF FINDER</span>
            </div>
            <ul className='navItems'>
              <li onClick={()=>updatePage('myPortfolio')} className='navItem hover:bg-accent'>
                <div className='left'>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path></svg>
                  <div className='title'>
                    My Portfolio
                  </div>
                </div>
                <div className='r-icon'>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909 17.243 12 7 19.091V4.909z"></path></svg>
                </div>
              </li>
              <li onClick={()=>updatePage('jobsExporer')} className='navItem hover:bg-accent'>
                  <div className='left'>
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    <div className='title'>
                      Explore jobs
                    </div>
                  </div>
                  <div className='r-icon'>
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909 17.243 12 7 19.091V4.909z"></path></svg>
                  </div>
              </li>
              <li onClick={()=>updatePage('createNewJob')} className='navItem hover:bg-accent'>
                <div className='left'>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path></svg>
                  <div className='title'>
                    Create New job
                  </div>
                </div>
                <div className='r-icon'>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909 17.243 12 7 19.091V4.909z"></path></svg>
                </div>
              </li>
              <li onClick={()=>updatePage('aboutUs')} className='navItem hover:bg-accent'>
                <div className='left'>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704l1.323-6.208Zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0Z"></path></svg>
                  <div className='title'>
                    About us
                  </div>
                </div>
                <div className='r-icon'>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909 17.243 12 7 19.091V4.909z"></path></svg>
                </div>
              </li>
              <li onClick={()=>updatePage('help')} className='navItem hover:bg-accent'>
                <div className='left'>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 17 17" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g></g><path d="M10.311 14.831c0 0.898-0.73 1.628-1.629 1.628-0.902 0-1.631-0.73-1.631-1.628 0-0.9 0.729-1.63 1.631-1.63 0.898 0 1.629 0.73 1.629 1.63zM11.668 2.373c-0.512-0.645-1.444-1.414-2.983-1.414-4.098 0-4.245 3.758-4.246 3.796l1 0.026c0.003-0.115 0.11-2.822 3.246-2.822 1.14 0 1.825 0.563 2.199 1.035 0.555 0.7 0.7 1.508 0.624 1.833-0.291 1.229-1.011 1.877-1.773 2.563-0.935 0.841-1.9 1.71-1.9 3.558h1c0-1.402 0.692-2.026 1.569-2.815 0.804-0.724 1.715-1.544 2.077-3.078 0.149-0.634-0.083-1.76-0.813-2.682z"></path></svg>
                  <div className='title'>
                    Help
                  </div>
                </div>
                <div className='r-icon'>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909 17.243 12 7 19.091V4.909z"></path></svg>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={`root-content ${sidebarStatus ? 'close':'open'}`}> 
          <div className='root-header'> {/* header */}
            <div className='inner bg-accent'>
              <div onClick={()=>toggleMenu()} className='menu-btn-wrapper'>
                <div  className={`menu-btn ${sidebarStatus ? 'close':'open'}`}>
                  <div className="btn-line"></div>
                  <div className="btn-line"></div>
                  <div className="btn-line"></div>
                </div> 
              </div> 
              <div className='header-banner'>
                <span className='txt text-textColor'>{pageTitle ? pageTitle + ' - ' : ''} STAFF FINDER</span>
              </div>
            </div>
          </div> 
          <div className='root-main bg-bodyBg'>
            <div className='root-main-container'>
              <div className='root-Content-main p-4 py-3 lg:px-16'>
                {/*  MAIN PAGES */}
                {page === 'jobsExporer' && <JobsExplorer /> }
                {page === 'myPortfolio' && <MyPortfolio user={user} update={updatePage} /> }
                {page === 'updateMyPortfolio' && <UpdatePortfolioForm user={user} /> }
                {page === 'createNewJob' && <CreateNewJob goback={returnToHome}/> }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}