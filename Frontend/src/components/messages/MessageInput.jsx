import React from 'react'
import { FiSend } from "react-icons/fi";
export default function MessageInput() {
  return (
    <form className='px-4 my-3'>
      <div className='w-full relative'>
        <input type="text" className='border text-sm rounded-lg block w-full p-2.5 bg bg-gray-600 text-white'
        placeholder='Send a message' />
        <button className='absolute inset-y-0  end-0 dlex items-center pe-3' type='submit'>
        <FiSend size={25}/>
        </button>
      </div>
    </form>
  )
}


//STARTED CODE SNIPPET

// import React from 'react'
// import { FiSend } from "react-icons/fi";
// export default function MessageInput() {
//   return (
//     <form className='px-4 my-3'>
//       <div className='w-full '>
//         <input type="text" className='border text-sm rounded-lg block w-full p-2.5 bg bg-gray-600 text-white'
//         placeholder='Send a message' />
//         <button className='absolute inset-y-0 dlex items-center pe-3' type='submit'>
//         <FiSend />
//         </button>
//       </div>
//     </form>
//   )
// }
