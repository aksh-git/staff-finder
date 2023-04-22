import React from 'react'
import { useState } from 'react'

function EducationInput(props) {

  const date = new Date();

  const groupId = props.id ? props.id : '';
  const course = props.data ? props.data.course : '';
  const year = props.data ? props.data.year : '';
  const institution = props.data ? props.data.institution : '';
  const grade = props.data ? props.data.grade : '';
  
  const handleChange = props.handleChange;

  return (
    <div className='border-r-2 mb-4'>
        <div className="md:flex md:items-center mb-4">
            <div className="md:w-1/5">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor={`${groupId}_course`}>
                    Course
                </label>
            </div>
            <div className="md:w-2/3">
                <input 
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-bodyBg " 
                    type="text" 
                    placeholder="Bachelor's in Computer Science"
                    id={`${groupId}_course`}
                    value={course}
                    onChange={handleChange}
                    />
            </div>
        </div>
        <div className="md:flex md:items-center mb-4">
            <div className="md:w-1/5">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor={`${groupId}_institution`}>
                    Instituation
                </label>
            </div>
            <div className="md:w-2/3">
                <input 
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-bodyBg " 
                    type="text" 
                    id={`${groupId}_institution`}
                    value={institution}
                    onChange={handleChange}
                    placeholder="University of Delhi" />
            </div>
        </div>
        <div>
        <div className="md:flex md:items-center mb-4">
            <div className="md:w-1/5">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor={`${groupId}_grade`}>
                    Grade & year
                </label>
            </div>
                <div className="md:w-2/3 sm:w-full inline-flex items-center gap-2">
                    <input 
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-bodyBg" 
                        type="text" 
                        id={`${groupId}_grade`}
                        value={grade}
                        onChange={handleChange}
                        placeholder="Your grade eg. A++"/>
                    <input 
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-bodyBg" 
                        type="month" 
                        id={`${groupId}_year`}
                        value={year}
                        onChange={handleChange}
                        placeholder="Year of Completion"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EducationInput