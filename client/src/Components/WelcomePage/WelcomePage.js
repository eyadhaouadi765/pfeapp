import React from "react";

const WelcomePage = () => {
  // List of courses or formations
  const courses = [
    { id: 1, title: "Course 1", description: "Description of Course 1" },
    { id: 2, title: "Course 2", description: "Description of Course 2" },
    { id: 3, title: "Course 3", description: "Description of Course 3" },
  ];

  return (
    <div className="welcome-container">
      <h2>Welcome to Our Training Center</h2>
      <p>Explore our available courses:</p>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WelcomePage;
