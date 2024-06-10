import React from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchInput() {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
      <CiSearch size={30}/>
      </button>
    </form>
  );
}

// STARTED CODE FOR THIS FILE

// import React from "react";
// import { CiSearch } from "react-icons/ci";

// export default function SearchInput() {
//   return (
//     <form className="flex items-center gap-2">
//       <input
//         type="text"
//         placeholder="Search..."
//         className="input input-bordered rounded-full"
//       />
//       <button type="submit" className="btn btn-circle bg-sky-500 text-white">
//       <CiSearch size={30}/>
//       </button>
//     </form>
//   );
// }
