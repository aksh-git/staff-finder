import React, { useState, useEffect } from 'react'
import Job from '../components/cards/Job'
import config from '../../config'
import Loder from '../components/Loder'

function JobsExplorer() {

  const base_url = config.BACKEND_HOST+config.BACKEND_PORT
  var token = localStorage.getItem(config.token_var)

  const [loading, setLoading] = useState(false)
  const [jobsData, setjobsData] = useState([])

  useEffect(() => {
    getJobs()
  }, [])

  async function getJobs(){
    setLoading(true)
    let response = await fetch(`${base_url}/api/job/getJobs`, { 
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token
      },
    });

    let data = await response.json()
    console.log(data);
    if(data.success){
      setjobsData(data.data)
    }
    setLoading(false)
  }

  return (
    <div className='lg:px-16 w-full bg-bodyBg'>
      <div className="lg:p-4">
        <div className='font-bold text-gray-600 text-3xl capitalize'>Jobs explorer</div>
          <div className="py-3">
            {loading && <div className='text-center py-4'>
              <Loder/>
            </div>}
            {jobsData.map((job)=>{
              return <Job job={job} />
            })}
          </div>
      </div>
    </div>
  )
}

export default JobsExplorer