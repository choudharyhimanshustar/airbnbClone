import React from 'react'
/* Import icons from reacticons */
import { LiaAirbnb } from "react-icons/lia";
import { FaSearchengin } from "react-icons/fa6";
/* Import index.css containing tailwind directives */
import './index.css'
const App = () => {
    return (
        <div >
            <header className="flex p-5 items-center justify-between">
                <a className='flex items-center gap-2'>
                    <LiaAirbnb className="h-10 w-10 cursor-pointer" />
                    <span className="font-bold text-xl">
                        Airbnb
                    </span>
                </a>
                <div className='flex gap-3 border  border-gray-800 px-4 py-1 rounded-full shadow-md items-center'>
                    <h3 className='border-r px-2 border-gray-400'>
                        Place
                    </h3>
                    <h3 className='border-r px-2 border-gray-400'>
                        Time
                    </h3>
                    <h3 className='border-r px-2 border-gray-400'>
                        Guests
                    </h3>
                    <FaSearchengin className=" cursor-pointer h-6 w-6" />

                </div>
            </header>
        </div>
    )
}

export default App