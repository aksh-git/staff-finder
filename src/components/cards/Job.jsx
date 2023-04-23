import React from 'react'

function Job(props) {

  const { job } = props
  

  return (
    <div class="w-full my-3">
      <div class="bg-white p-4 py-4">
        <div class="header px-4 flex flex-col justify-start items-start border-b pb-3 lg:mx-4 sm:mx-2">
          <div class="text-gray-700 font-bold text-xl md:text-2xl mb-3 capitalize">{job.title}</div>
          <div class="flex items-center -mt-1">
            <img class="w-10 h-10 mr-3 bg-bodyBg" src="/img/jonathan.jpg" alt=""/>
            <div class="text-sm ">
              <p class="text-gray-800 leading-none">Jonathan Reinink</p>
              <p class="text-gray-600">sdasd</p>
            </div>
          </div>
          <div className='inline-flex justify-between items-center gap-1 mt-1'>
            <svg className='font-light text-gray-400' stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <p className="text-gray-400 font-semibold">{job.location}</p>
          </div>
          <div className='text-gray-600 inline-flex justify-between items-center gap-1 mt-1'>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></svg>
            <p className="font-semibold">{new Date(job.createdAt).toString().split(' ').slice(0,4).join(' ')}</p>
          </div>
          <div className='text-gray-600 inline-flex justify-between items-center gap-1 mt-3'>
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 8a3 3 0 0 1 0 6"></path><path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5"></path><path d="M12 8h0l4.524 -3.77a.9 .9 0 0 1 1.476 .692v12.156a.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8"></path></svg>
            <p className="font-semibold">{job.type}</p>
          </div>
          <div className='text-gray-600 inline-flex justify-between items-center gap-1 mt-1'>
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            <p className="font-semibold capitalize">{job.role}</p>
          </div>
          <div class="w-full inline-flex justify-between items-center md:-mt-4 mt-4 md:justify-end md:space-x-3">
            {job.contact_email && <div>
              <button onClick={()=>window.open(`mailto:${job.contact_email}`)} type='button' className='inline-flex items-center gap-x-1 py-1 px-4 rounded-3xl font-semibold text-sm capitalize bg-accent text-textColor shadow hover:shadow-lg transition transform hover:-translate-y-0.5'>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 17 17" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g></g><path d="M0 2v13h17v-13h-17zM8.494 9.817l-6.896-6.817h13.82l-6.924 6.817zM5.755 8.516l-4.755 4.682v-9.383l4.755 4.701zM6.466 9.219l2.026 2.003 1.996-1.966 4.8 4.744h-13.677l4.855-4.781zM11.201 8.555l4.799-4.725v9.467l-4.799-4.742z"></path></svg>
                contact email
              </button>
            </div>}
            {job.contact_phone && <div>
              <button onClick={()=>window.open(`tel:${job.contact_phone}`)}  type='button' className='inline-flex items-center gap-x-1 py-1 px-4 rounded-3xl font-semibold text-sm capitalize bg-accent text-textColor shadow hover:shadow-lg transition transform hover:-translate-y-0.5'>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M426.666 330.667a250.385 250.385 0 0 1-75.729-11.729c-7.469-2.136-16-1.073-21.332 5.333l-46.939 46.928c-60.802-30.928-109.864-80-140.802-140.803l46.939-46.927c5.332-5.333 7.462-13.864 5.332-21.333-8.537-24.531-12.802-50.136-12.802-76.803C181.333 73.604 171.734 64 160 64H85.333C73.599 64 64 73.604 64 85.333 64 285.864 226.136 448 426.666 448c11.73 0 21.334-9.604 21.334-21.333V352c0-11.729-9.604-21.333-21.334-21.333z"></path></svg>
                contact Phone
              </button>
            </div>}
          </div>
        </div>
        {/* Desc section */}
        <div class="px-4 flex flex-col justify-start items-start mt-4 mx-4">
          <span className='text-gray-600 font-bold text-base capitalize'>Job description</span>
          <div>
            <p className='text-gray-600 py-2 hyphens-auto'>{job.description}</p>
          </div>
          <div className='mt-2'>
            <p className='text-gray-600 text-base font-bold'>Please Note :</p>
            <p className='text-gray-500 hyphens-auto pb-2'>{job.note}</p>
          </div>
          <div className='my-2'>
            <p className='text-gray-500 py-1 hyphens-auto italic border-l-2 pl-3 border-bodyBg'>"{job.extra_note}"</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Job