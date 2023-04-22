import React from 'react'
import EducationInput from '../inputs/EducationInput';
import AddNewFieldBtn from '../buttons/addNewFieldBtn';
import { useState } from 'react';

function UpdatePortfolioForm(props) {

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
          course : 'Bachelors Of Computer Apllication',
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

    const [eduInputArr, seteduInputArr] = useState(dummyUser.education);

    const addEduInput = () => {
        seteduInputArr(s => {
        return [
          ...s,
          {
            course : '',
            year : '',
            grade : '',
            institution : ''
          },
        ];
      });
    };
    
    const handleEduChange = e => {
        e.preventDefault();
        const elemWithGroupId = e.target.id;
        const index = parseInt(elemWithGroupId.split('_')[1]);
        const elem_id = elemWithGroupId.split('_')[2]
        seteduInputArr(s => {
            const newArr = s.slice();
            newArr[index][elem_id] = e.target.value;
            return newArr;
        });
    };

    

  return (
    <div className='myprofile-area lg:px-16 w-full bg-bodyBg'>
      <div className="lg:p-4">
        <div className='font-bold text-gray-600 text-3xl'>Editing Portfolio</div>
        <div className="lg:p-8 p-8 bg-white shadow mt-4">
            {/**Personal info section */}
            <section className='border-b-2 mb-3'>
                <span className='py-2 font-medium text-gray-600 capitalize text-sm'>Personal information</span>
                <div class="md:flex md:items-center md:justify-start mb-4">
                    <div class="md:w-1/5">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Name
                        </label>
                    </div>
                    
                    <div class="md:w-2/3 sm:w-full inline-flex items-center gap-2">
                        <input 
                            placeholder='First' 
                            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-bodyBg" 
                            id="inline-full-name" 
                            type="text" 
                            />
                        <input 
                            placeholder='Last' 
                            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-bodyBg" 
                            id="inline-full-name" 
                            type="text" 
                            />
                    </div>
                </div>
                <div class="md:flex md:items-start mb-4">
                    <div class="md:w-1/5">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            Bio
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <textarea 
                        class="bg-gray-200 resize-none appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-bodyBg" 
                        type="text" 
                        minLength={10}
                        maxLength={250}
                        placeholder="Write few words about yourself..."/>
                    </div>
                </div>
                <div class="md:flex md:items-center mb-4">
                    <div class="md:w-1/5">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                        Address
                    </label>
                    </div>
                    <div class="md:w-2/3">
                    <input 
                    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-bodyBg" 
                    id="inline-password" 
                    type="text" 
                    placeholder="Mumbai, India"/>
                    </div>
                </div>
                <div class="md:flex md:items-center mb-4">
                    <div class="md:w-1/5">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                        Date of birth
                    </label>
                    </div>
                    <div class="md:w-2/3">
                    <input 
                    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-bodyBg" 
                    id="inline-password" 
                    type="date" 
                    placeholder="Mumbai, India"/>
                    </div>
                </div>
            </section>
             {/**Education info section */}
            <section className='border-b-2 mb-3'>
                <span className='py-2 font-medium text-gray-600 capitalize text-sm'>Educational Information</span>
                {eduInputArr.map((item, i)=>{
                   return <EducationInput 
                    id={`eduInput_${i}`} 
                    data={item} 
                    handleChange={handleEduChange}
                    />
                })}
                <div class="md:flex md:items-center py-4 md:py-0 mb-4">
                    <div class="w-full float-right lg:pr-32">
                        <AddNewFieldBtn clickAction={addEduInput}>
                            Add a new edu. field
                        </AddNewFieldBtn>
                    </div>
                </div>
            </section>
            {/**Social Info Section */}
            {/* <section className='border-b-2 mb-3'>
                <span className='py-2 font-medium text-gray-600 capitalize text-sm'>Social Information</span>
                
            </section> */}
            <div class="md:flex md:items-center mb-4">
                <div class="md:w-1/5"></div>
                <label class="md:w-2/3 block text-gray-500 font-bold">
                <input class="mr-2 leading-tight" type="checkbox"/>
                <span class="text-sm">
                    Send me your newsletter!
                </span>
                </label>
            </div>
            <div class="md:flex md:items-center">
                <div class="md:w-1/5"></div>
                <div class="md:w-1/5">
                <button class="shadow bg-bodyBg text-gray-600 hover:bg-accent focus:shadow-outline focus:outline-none hover:text-textColor font-bold py-2 px-4 rounded" type="button">
                    Save Updates
                </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default UpdatePortfolioForm