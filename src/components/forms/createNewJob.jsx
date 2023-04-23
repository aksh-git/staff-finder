import React, { useState } from 'react'
import Loder from '../Loder'
import config from '../../../config'

function CreateNewJob(props) {

  const goback = props.goback
  const token = localStorage.getItem(config.token_var) 
  const base_url = config.BACKEND_HOST+config.BACKEND_PORT;

  const [loading, setloading] = useState(false)

  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')
  const [location, setlocation] = useState('')
  const [type, settype] = useState('')
  const [role, setrole] = useState('')
  const [contact_email, setcontact_email] = useState('')
  const [contact_phone, setcontact_phone] = useState('')
  const [note, setnote] = useState('')
  const [extra_note, setextra_note] = useState('')

  async function addNewJob(e){
    e.preventDefault();
    setloading(true)
    let response = await fetch(`${base_url}/api/job/postNewJob`, { 
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'auth-token':token
      },
      body : JSON.stringify({
        title : title,
        description : description,
        location : location,
        type : type,
        role : role,
        contact_email : contact_email,
        contact_phone : contact_phone,
        note : note,
        extra_note : extra_note, 
      })
    });

    let data = await response.json()
    console.log(data.error);
    if(data.success){
      alert("job added successfully");
      goback()
    }else{
      alert(data.error[0].msg)
    }
    setloading(false)
  }

  return (
    <div className='myprofile-area lg:px-16 w-full bg-bodyBg'>
      <div className="lg:p-4">
        <div className='font-bold text-gray-600 text-3xl'>Add a new job</div>
          <div className="lg:p-8 p-8 bg-white shadow mt-4">
            <form onSubmit={addNewJob}>
              <div className='border-b-2 mb-3'>
                <span className='py-2 font-medium text-gray-600 capitalize text-sm'>Creating a new job</span>
                <div className="md:flex md:items-center mb-4">
                  <div className="md:w-1/5">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor='inline-title'>
                      Title
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input 
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-bodyBg" 
                      id="inline-title" 
                      type="text" 
                      required={true}
                      value={title}
                      onChange={(e)=>settitle(e.target.value)}
                      placeholder="Provide a title"/>
                  </div>
                </div>
                <div className="md:flex md:items-center md:justify-start mb-4">
                  <div className="md:w-1/5">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-role-name">
                      Role & Type
                    </label>
                  </div>
                  <div className="md:w-2/3 sm:w-full md:inline-flex items-center gap-2 ">
                    <input 
                      placeholder='Write a role of the job' 
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-bodyBg" 
                      id="inline-role" 
                      required={true}
                      value={role}
                      onChange={(e)=>setrole(e.target.value)}
                      type="text" 
                      />
                    <input 
                      placeholder='Type e.g Remote, Full-time..' 
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-bodyBg" 
                      id="inline-type" 
                      required={true}
                      value={type}
                      onChange={(e)=>settype(e.target.value)}
                      type="text" 
                      />
                  </div>
                </div>
                <div className="md:flex md:items-start mb-4">
                  <div className="md:w-1/5">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                      Description
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <textarea 
                      className="bg-gray-200 resize-none appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-bodyBg" 
                      type="text" 
                      minLength={10}
                      maxLength={2000}
                      required={true}
                      value={description}
                      onChange={(e)=>setdescription(e.target.value)}
                      placeholder="Write description about the job..."/>
                  </div>
                </div>
                <div className="md:flex md:items-center mb-4">
                  <div className="md:w-1/5">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor='inline-location' >
                      Location
                    </label>
                  </div>
                  <div className="md:w-2/3">
                  <input 
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-bodyBg" 
                    id="inline-location" 
                    type="text" 
                    required
                    value={location}
                    onChange={(e)=>setlocation(e.target.value)}
                    placeholder="Mumbai, India"/>
                  </div>
                </div>
                <div className="md:flex md:items-center md:justify-start mb-4">
                  <div className="md:w-1/5">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-email">
                      Contact
                    </label>
                  </div>
                  <div className="md:w-2/3 sm:w-full inline-flex items-center gap-2">
                    <input 
                      placeholder='Email' 
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-bodyBg" 
                      id="inline-email" 
                      type="email" 
                      required
                      value={contact_email}
                      onChange={(e)=>setcontact_email(e.target.value)}
                      />
                    <input 
                      placeholder='Phone (optional)' 
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-bodyBg" 
                      id="inline-tel" 
                      type="tel" 
                      value={contact_phone}
                      onChange={(e)=>setcontact_phone(e.target.value)}
                      />
                  </div>
                </div>
              </div>
              <div className='border-b-2 mb-3'>
                <span className='py-2 font-medium text-gray-600 capitalize text-sm'>Optional</span>
                <div className="md:flex md:items-start mb-4">
                  <div className="md:w-1/5">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                      Note 
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <textarea 
                      className="bg-gray-200 resize-none appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-bodyBg" 
                      type="text" 
                      maxLength={500}
                      value={note}
                      onChange={(e)=>setnote(e.target.value)}
                      placeholder="Here put the things that applicants must pay attention. (optional)"/>
                  </div>
                </div>
                <div className="md:flex md:items-start mb-4">
                    <div className="md:w-1/5">
                      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                        Light note
                      </label>
                    </div>
                    <div className="md:w-2/3">
                      <textarea 
                        className="bg-gray-200 resize-none appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-bodyBg" 
                        type="text" 
                        maxLength={500}
                        value={extra_note}
                        onChange={(e)=>setextra_note(e.target.value)}
                        placeholder="On a lighter note... (optional)"/>
                    </div>
                </div>
              </div>
              <div className="md:flex md:items-center mb-4">
                <div className="md:w-1/5"></div>
                <label className="md:w-2/3 block text-gray-500 font-bold">
                  <input className="mr-2 leading-tight" type="checkbox"/>
                  <span className="text-sm">
                    Send this job updates on my email.
                  </span>
                </label>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/5"></div>
                <div className="md:w-1/5">
                  <button type='submit' className="shadow bg-bodyBg text-gray-600 hover:bg-accent focus:shadow-outline focus:outline-none hover:text-textColor font-bold py-2 px-4 rounded">
                    Create Job
                  </button>
                </div>
              </div>
            </form>
            {loading && <div className='text-center'><Loder/><span>Please wait...</span></div>}
          </div>
      </div>
    </div>
  )
}

export default CreateNewJob