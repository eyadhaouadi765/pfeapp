import React from "react";
import "./AboutPage.css";
import Header from "../Components/homePage/Header";
const AboutPage = () => {
  return (
    <div>
        <Header/>
      <div className="about-container">
        <h1>About Us:</h1>
        <p>
          Our mission is to provide high-quality training that meets the
          specific needs of employees at CNI. We understand the importance of
          continuous learning for professional and personal development, which
          is why we offer a wide range of courses tailored to your expertise and
          career goals.
        </p>
        <h2>What We Offer:</h2>
        <ul>
          <li>
            Interactive online courses taught by experts in their respective
            fields.
          </li>
          <li>
            Up-to-date training content to keep you informed of the latest
            trends and practices.
          </li>
          <li>
            A user-friendly and accessible platform designed to facilitate your
            learning and progress.
          </li>
          <li>
            Certificates of completion to validate your skills and enhance your
            professional journey.
          </li>
          <li>
            Personalized support and follow-up to guide you throughout your
            training journey.
          </li>
        </ul>
        <h2>Our Commitment:</h2>
        <p>
          At our platform, your success is our priority. We are committed to
          providing you with quality training, supporting you in achieving your
          professional goals, and contributing to your personal and professional
          growth within CNI.
        </p>
        <p>
          Join us today and explore our courses to develop your skills, enhance
          your career, and confidently take on new challenges.
        </p>
        <p>
          Feel free to customize this content based on the values, goals, and
          specificities of your platform and target audience.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
