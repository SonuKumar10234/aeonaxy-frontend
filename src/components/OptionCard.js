import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const OptionCard = ({option, optionHandler}) => {
    const [isChecked, setIsChecked] = useState(false);
    // console.log(isChecked);

    return (
        <label className="relative flex flex-col items-center p-3 rounded-full cursor-pointer" htmlFor={option.option}>


            <input type="checkbox"
            className="peer absolute appearance-none w-5 h-5 bottom-4 left-2/4 -translate-y-2/4 -translate-x-2/4
            border rounded-full border-pink-400  peer z-10
            cursor-pointer  
            checked:bg-pink-600"
            id={option.option}
            onChange={({target : {checked, id}})=>{
                 optionHandler(checked, id);
                 setIsChecked(checked);
            }}
            />

            <span
                className="absolute text-white transition-opacity opacity-0 pointer-events-none z-10 bottom-[12px] left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <FontAwesomeIcon icon={faCheck} size='sm' />
            </span>


            <div className=' p-2  rounded-lg bg-white border border-gray-200 ring ring-transparent peer-checked:ring-pink-500  transition-all pb-8'>
                <div className={` ${isChecked ? 'absolute left-2 -top-[20%]' : 'mt-2'} p-2 transition-all`}>
                    <img src={option.image} alt="" className='w-full h-full object-cover' />
                </div>
                <header className={` ${isChecked ? 'mt-24' : ''} p-2.5 text-center`}>
                    <p className='text-lg font-bold tracking-wide text-gray-700 mb-3'>{option.option}</p>
                    <span className={`${isChecked ? 'block' : 'hidden'} text-sm text-gray-400 font-medium`}>{option.description}</span>
                </header>

            </div>


        </label>
    )
}

export default OptionCard