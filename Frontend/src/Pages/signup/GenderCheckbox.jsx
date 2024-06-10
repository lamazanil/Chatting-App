import React from "react";

function GenderCheckbox() {
  return (
    <div className="flex">
      <div className="form-control">
        <label className="label cursor-pointer gap-2">
          <span className="label-text">Male</span>
          <input type="checkbox" className="checkbox checkbox-primary checkbox-xs" />
        </label>
      </div>
      <div>
        <label className="label gap-2 cursor-pointer">
          <span className="label-text">Female</span>
          <input type="checkbox" className="checkbox checkbox-primary checkbox-xs" />
        </label>
      </div>
    </div>
  );
}

export default GenderCheckbox;

//STARTED CODE FOR THIS FILE
// function GenderCheckbox() {
//     return (
//       <div className="flex">
//         <div className="form-control">
//           <label className="label cursor-pointer gap-2">
//             <span className="label-text">Male</span>
//             <input type="checkbox" className="checkbox checkbox-primary checkbox-xs" />
//           </label>
//         </div>
//         <div>
//           <label className="label gap-2 cursor-pointer">
//             <span className="label-text">Female</span>
//             <input type="checkbox" className="checkbox checkbox-primary checkbox-xs" />
//           </label>
//         </div>
//       </div>
//     );
//   }
  
//   export default GenderCheckbox;