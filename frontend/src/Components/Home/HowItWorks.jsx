import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import "./HowItWorks.css"

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How Job Board Works</h3>
          <div className="banner">
            <div className="card" style={{ cursor: 'pointer' }} >
              < FaUserPlus />
              <p>Create Account</p>
              
              <p>
                Create an account as a User or an Employer any get/post your jobs
              </p>
            </div>
            <div className="card"  style={{ cursor: 'pointer' }}>
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
                You can Find/Post your jobs in one click on Job Board.
              </p>
            </div>
            <div className="card"  style={{ cursor: 'pointer' }}>
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
                Once you apply for a job the Employer will be able to see your candidature.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
