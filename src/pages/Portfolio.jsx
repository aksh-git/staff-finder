import React from 'react'

function Portfolio(props) {
  const user = props.user;
  
  const dummyUser = {
    username:'username',
    type : 1,  // employee : 1, employer : 2
    firstname:'Jessica',
    lastname: 'Jone',
    jobTitle : 'Solution Manager',
    dob : new Date(),
    location : 'Bucharest, Romania',
    avatar : '',
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
    <div className='myprofile-area lg:px-16 w-full bg-bodyBg'>
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
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>}
              {dummyUser.avatar && <img src={dummyUser.avatar} alt={`${dummyUser.firstname}'s avatar`} />}
            </div>
          </div>

          <div className="space-x-8 flex justify-center mt-32 md:mt-0 md:justify-center">
            <button
              className="inline-flex justify-center items-center gap-2 text-gray-700 py-2 px-4 uppercase rounded bg-bodyBg shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
            >
              View CV
              <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 6C6 5.44772 6.44772 5 7 5H17C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7H7C6.44771 7 6 6.55228 6 6Z" fill="currentColor"></path><path d="M6 10C6 9.44771 6.44772 9 7 9H17C17.5523 9 18 9.44771 18 10C18 10.5523 17.5523 11 17 11H7C6.44771 11 6 10.5523 6 10Z" fill="currentColor"></path><path d="M7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44771 15 7 15H17C17.5523 15 18 14.5523 18 14C18 13.4477 17.5523 13 17 13H7Z" fill="currentColor"></path><path d="M6 18C6 17.4477 6.44772 17 7 17H11C11.5523 17 12 17.4477 12 18C12 18.5523 11.5523 19 11 19H7C6.44772 19 6 18.5523 6 18Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M2 4C2 2.34315 3.34315 1 5 1H19C20.6569 1 22 2.34315 22 4V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V4ZM5 3H19C19.5523 3 20 3.44771 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4C4 3.44772 4.44771 3 5 3Z" fill="currentColor"></path></svg>
            </button>
            <button
              className="inline-flex justify-center items-center gap-2 text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
            >
              Boost
              <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path></svg>
            </button>
          </div>
        </div>
        {/*Basic info section */}
        <div className="mt-8 lg:mt-20 text-center border-b pb-12 flex flex-col">
          <h1 className="text-4xl font-semibold text-gray-700">{dummyUser.firstname} {dummyUser.lastname}</h1>
          {dummyUser.location && <div className='inline-flex justify-center items-center gap-1 mt-3'>
            <p className='font-light text-gray-400'><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></p>
            <p className="text-gray-400 font-bold uppercase">{dummyUser.location}</p>
          </div>}
          {dummyUser.jobTitle && <div className='inline-flex justify-center items-center gap-1 mt-8'>
            <p className='font-light text-gray-400'><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></p>
            <p className="font-light text-gray-600">{dummyUser.jobTitle}</p>
          </div>}
          {dummyUser.institution && <div className='inline-flex justify-center items-center gap-1 mt-2'>
            <p className='font-light text-gray-400'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z"></path></svg></p>
            <p className="font-light text-gray-600">{dummyUser.institution}</p>
          </div>}
        </div>
        {/*User Bio section */}
        {dummyUser.bio && <div className="mt-12 flex flex-col justify-center border-b pb-12">
          <p className="text-gray-600 text-center font-light lg:px-16 md:px-12 sm:px-12">{dummyUser.bio}</p>
        </div>}
        {/*Education section */}
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
        {/*Skillset & social section */}
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
export default Portfolio