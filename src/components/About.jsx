// import React from "react";
// import aboutImg from "../assets/about-me3.jpg";
// import { ABOUT_TEXT } from "../constants";

// const About = () => {
//   return (
//     <div className="border-b border-neutral-900 pb-4">
//       <h2 className="my-20 text-center text-4xl">
//         About <span className="text-neutral-400">Me</span>
//       </h2>
//       <div className="flex flex-wrap">
//         <div className="w-full lg:w-1/2 lg:p-8">
//           <div className="flex items-center justify-center">
//             {/* <img src={aboutImg} alt="about" className="w-full lg:w-2/3" /> */}
//           </div>
//         </div>
//         <div className="w-full lg:w-1/2 lg:p-8">
//           <div className="flex justify-center lg:justify-start flex-col">
//             {ABOUT_TEXT.split("\n\n").map((paragraph, index) => (
//               <p key={index} className="my-2 max-w-xl py-2 text-lg">
//                 {paragraph}
//               </p>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-400">Me</span>
      </h2>
      <div className="flex justify-center items-center flex-col lg:flex-row lg:justify-center">
        <div className="w-full lg:w-3/4 p-8">
          {/* <div className="flex justify-center flex-col items-center text-center lg:items-start lg:text-center"> */}
          <div className="flex justify-center flex-col items-center text-center">
            {ABOUT_TEXT.split("\n\n").map((paragraph, index) => (
              <p key={index} className="my-2 max-w-xl py-2 text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
