import { useState } from "react";
import '../App.css'
import { Link } from "react-router-dom";
export default function Root() {

  // title for home header
  const titles = {
    myProfile : 'My Profile',
    jobsExporer : 'Explore jobs',
    aboutUs : 'About',
    help : 'Get help'
  }

  const [page, setpage] = useState('home')
  const [pageTitle, setpageTitle] = useState(false)
  const [sidebarStatus, setsidebarStatus] = useState(false);

  function toggleMenu() {
    setsidebarStatus(!sidebarStatus)
  }   

  function updatePage(page){
    setpageTitle(titles[page]?titles[page]:'')
    setpage(page);
    toggleMenu();
  }


  return (
    <div id="root-content" className="content">
      <div className='root-container'>
        <div className={`p-4 root-menu-sidebar-wrapper bg-darkBg ${sidebarStatus ? 'open':'close'}`}> {/* sidebar */}
          <div className='root-menu-sidebar '>
            <span className='text-sm'>MENU</span>
            <div className='banner'>
              <span className='txt'>STAFF FINDER</span>
            </div>
            <ul className='navItems'>
              <li onClick={()=>updatePage('myProfile')} className='navItem hover:bg-accent'>
                <div className='left'>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path></svg>
                  <div className='title'>
                    My Profile
                  </div>
                </div>
                <div className='r-icon'>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909 17.243 12 7 19.091V4.909z"></path></svg>
                </div>
              </li>
              <li onClick={()=>updatePage('jobsExporer')} className='navItem hover:bg-accent'>
                  <div className='left'>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path></svg>
                      <div className='title'>
                          Explore jobs
                      </div>
                  </div>
                  <div className='r-icon'>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909 17.243 12 7 19.091V4.909z"></path></svg>
                  </div>
              </li>
              <li onClick={()=>updatePage('aboutUs')} className='navItem hover:bg-accent'>
                <div className='left'>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704l1.323-6.208Zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0Z"></path></svg>
                  <div className='title'>
                    About us
                  </div>
                </div>
                <div className='r-icon'>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909 17.243 12 7 19.091V4.909z"></path></svg>
                </div>
              </li>
              <li onClick={()=>updatePage('help')} className='navItem hover:bg-accent'>
                <div className='left'>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 17 17" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g></g><path d="M10.311 14.831c0 0.898-0.73 1.628-1.629 1.628-0.902 0-1.631-0.73-1.631-1.628 0-0.9 0.729-1.63 1.631-1.63 0.898 0 1.629 0.73 1.629 1.63zM11.668 2.373c-0.512-0.645-1.444-1.414-2.983-1.414-4.098 0-4.245 3.758-4.246 3.796l1 0.026c0.003-0.115 0.11-2.822 3.246-2.822 1.14 0 1.825 0.563 2.199 1.035 0.555 0.7 0.7 1.508 0.624 1.833-0.291 1.229-1.011 1.877-1.773 2.563-0.935 0.841-1.9 1.71-1.9 3.558h1c0-1.402 0.692-2.026 1.569-2.815 0.804-0.724 1.715-1.544 2.077-3.078 0.149-0.634-0.083-1.76-0.813-2.682z"></path></svg>
                  <div className='title'>
                    Help
                  </div>
                </div>
                <div className='r-icon'>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909 17.243 12 7 19.091V4.909z"></path></svg>
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
              <div className='root-Content-main p-4 py-3'>
                {/*  MAIN PAGES */}
                {pageTitle}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}