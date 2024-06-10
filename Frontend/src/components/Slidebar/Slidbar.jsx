import React from 'react'
import SearchInput from './SearchInput'
import Conversation from '../conversation/Conversation'
import LogoutButton from '../logout/LogoutButton'

export default function Slidbar() {
  return (
    <div className='border-right border-slate-500 p-4 flex flex-col'>
      <SearchInput/>
      <div className='divider px-3'></div>
      <Conversation/>
      <LogoutButton/>
    </div>
  )
}


// STARTED CODE 
// import React from 'react'
// import SearchInput from './SearchInput'
// import Conversation from '../conversation/Conversation'
// import LogoutButton from '../logout/LogoutButton'

// export default function Slidbar() {
//   return (
//     <div className='border-right border-slate-500 p-4 flex flex-col'>
//       <SearchInput/>
//       <div className='divider px-3'></div>
//       <Conversation/>
//       <LogoutButton/>
//     </div>
//   )
// }
