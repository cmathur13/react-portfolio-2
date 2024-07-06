import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Get in Touch</h2>
      <div className="my-5 flex justify-center items-center border-neutral-300 rounded flex-col text-sm sm:text-base md:text-lg text-purple-300 ">
        <p>Chavi Mathur</p>
        <p>Seattle University</p>
        <p>8th Ave Seattle, WA, USA</p>
        {/* <p>8th Ave Seattle, Washington</p>
        <p>WA 98104, United States</p> */}
        <a href="mailto:cmathur13@outlook.com">cmathur13@outlook.com</a>
        <div className="m-4 flex item-start justify-center gap-8 text-2xl cursor-pointer">
          <a href="https://www.linkedin.com/in/chavi-mathur/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://github.com/cmathur13" target="_blank">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
