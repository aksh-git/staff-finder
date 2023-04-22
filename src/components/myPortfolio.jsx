import React from 'react'
import SocialButton from './buttons/SocialButton';

function myPortfolio(props) {

  const updatePage = props.update;
  const user = props.user;
  const dummyUser = {
    username:'username',
    type : 1,  // employee : 1, employer : 2
    firstname:'Jessica',
    lastname: 'Jone',
    jobTitle : 'Solution Manager',
    dob : new Date(),
    location : 'Bucharest, Romania',
    avatar : null,
    institution : 'University of Computer Science ',
    projects : [], // array of objects :  Project
    email:'dummy@email.com',
    bio : 'An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.',
    skills : [
      {
        logo : 'https://python.org/favicon.ico',
        title : 'Python'
      }
    ],
    education : [
      {
        title : 'Bachelors Of Computer Apllication',
        year : '2023',
        grade : 'A+',
        institution : 'University of computer Science'
      },
    ],
    certifications :[
      {
        title : '',
        organization : '',
        time : 'Month, 3000',
      }
    ],
    social : [
      {
        title : 'facebook',
        url : ''
      },
    ], // social profiles links
    cv_link : 'https://example.com',
    boost : 0,
    reputation : 8,
    comments : 0
  }

  const dummyUserCopy = {
    username:'username',
    type : 1,  // employee : 1, employer : 2
    firstname:'Jessica',
    lastname: 'Jone',
    jobTitle : 'Solution Manager',
    dob : new Date(),
    location : 'Bucharest, Romania',
    avatar : '/avatar/1.png',
    institution : 'University of Computer Science ',
    projects : [], // array of objects :  Project
    email:'dummy@email.com',
    bio : 'An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.',
    skills : [
      {
        logo : 'https://python.org/favicon.ico',
        title : 'Python'
      }
    ],
    education : [
      {
        title : 'Bachelors Of Computer Apllication',
        year : '2023',
        grade : 'A+',
        institution : 'University of computer Science'
      },
    ],
    certifications :[
      {
        title : '',
        organization : '',
        time : 'Month, 3000',
      }
    ],
    social : [
      {
        title : 'facebook',
        url : ''
      },
    ], // social profiles links
    cv_link : 'https://example.com',
    boost : 0,
    reputation : 8,
    comments : 0
  }
  
  return (
    <div className='myprofile-area lg:px-16 w-full'>
    <div className="lg:p-4">
      <div className="lg:p-8 md:p-4 sm:p-8 bg-white shadow mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="grid grid-cols-3 text-center order-last md:order-first mt-8 md:mt-0">
            <div>
              <p className="font-bold text-gray-700 text-xl">{dummyUser.boost}</p>
              <p className="text-gray-400">Boosts</p>
            </div>
            <div>
              <p className="font-bold text-gray-700 text-xl">{dummyUser.comments}</p>
              <p className="text-gray-400">Comments</p>
            </div>
            <div title='Reputation Score'>
              <p className="font-bold text-gray-700 text-xl">{dummyUser.reputation}</p>
              <p className="text-gray-400">Repus</p>
            </div>
          </div>
          <div className="relative">
            <div className="w-32 h-32 lg:w-48 lg:h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-14 lg:-mt-24 flex items-center justify-center text-bodyBg">
              {/* Avatar */}
              {!dummyUser.avatar && <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
              </svg>}
              {dummyUser.avatar && <img src={dummyUser.avatar} alt="avatar" />}
            </div>
          </div>

          <div className="space-x-8 flex justify-center mt-32 md:mt-0 md:justify-center">
            <button 
              className="inline-flex justify-center items-center gap-2 text-white py-2 px-4 uppercase rounded bg-accent hover:bg-darkBg shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              onClick={()=>updatePage('updateMyPortfolio')}
            >
              Update Portfolio
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h274.9c-2.4-6.8-3.4-14-2.6-21.3l6.8-60.9 1.2-11.1 7.9-7.9 77.3-77.3c-24.5-27.7-60-45.5-99.9-45.5zm45.3 145.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8 137.9-137.9-71.7-71.7-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-37.8 37.8-4.1 4.1 71.8 71.7 41.8-41.8c9.3-9.4 9.3-24.5 0-33.9z"></path></svg>
            </button>
          </div>
        </div>
        {/*Basic info section */}
        <div className="mt-8 lg:mt-20 text-center border-b pb-12 flex flex-col">
          <h1 className="text-4xl font-semibold text-gray-700">{dummyUser.firstname} {dummyUser.lastname}</h1>
          {dummyUser.location && <div className='inline-flex justify-center items-center gap-1 mt-3'>
            <p className='font-light text-gray-400'><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></p>
            <p className="text-gray-400 font-bold uppercase">{dummyUser.location}</p>
          </div>}
          {dummyUser.jobTitle && <div className='inline-flex justify-center items-center gap-1 mt-8'>
            <p className='font-light text-gray-400'><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></p>
            <p className="font-light text-gray-600">{dummyUser.jobTitle}</p>
          </div>}
          {dummyUser.institution && <div className='inline-flex justify-center items-center gap-1 mt-2'>
            <p className='font-light text-gray-400'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z"></path></svg></p>
            <p className="font-light text-gray-600">{dummyUser.institution}</p>
          </div>}
        </div>
        {/**User Bio section */}
        {dummyUser.bio && <div className="mt-12 flex flex-col justify-center border-b pb-12">
          <p className="text-gray-600 text-center font-light lg:px-16 md:px-12 sm:px-12">{dummyUser.bio}</p>
        </div>}
        {/**Education section */}
        {dummyUser.education && <div className="mt-4 p-4">
          <div className='text-gray-700 text-lg font-bold capitalize'>Education</div>
          <div className='courses'>
            {dummyUser.education.map((course)=>{
              return(
                <div className='border-l border-bodyBg pl-3 py-1 course md:w-2/5 sm:w-full'>
                  <div className='w-full flex justify-between items-center'>
                    <span className='text-gray-800 font-semibold capitalize'>{course.title}</span>
                    <span className='text-gray-900'>—</span>
                    <span className='text-gray-500 font-semibold'>{course.year}</span>
                  </div>
                  <div className='text-gray-500'>{course.institution}</div>
                  <div className='text-gray-500 font-semibold'>Grade : {course.grade}</div>
                </div>
              )
            })}
          </div>
        </div>}
        {/**Skill-set & Education section */}
        <div className='p-4 grid w-full space-y-6 lg:grid-cols-2 lg:space-x-6 lg:space-y-0'>
          {/**Skill-set section */}
          {dummyUser.skills && <div className='skills'>
            <div className='text-gray-700 text-lg font-bold capitalize'>Skill-Set</div>
            <div className='skills flex flex-wrap items-center gap-3 mt-4'>
              {dummyUser.skills.map((skill)=>{
                return (
                  <div className="has-tooltip skill w-10  cursor-pointer ">
                    <img src={skill.logo} alt="Pyhton" width='100%' height='100%' />
                    <span class="tooltip rounded shadow-lg p-1 px-4 bg-accent text-sm font-bold text-textColor -mt-14 ml-4">{skill.title}</span>
                  </div>
                )
              })}
            </div>
          </div>}
          {/**Social section */}
          {dummyUser.social && <div className='socials'>
            <div className='text-gray-700 text-lg font-bold capitalize'>Social Connections</div>
            <div className='flex flex-wrap items-center gap-3 mt-4 '>

            </div>
          </div>}
        </div>
      </div>
    </div>
  </div>
  )
}

export default myPortfolio