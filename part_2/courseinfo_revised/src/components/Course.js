import React from 'react';

const Header = ({ course }) => {
    return <h1>{course.name}</h1>;
  };
  
  const Total = ({ course }) => {
    const total = course.parts.reduce((last, part) => last + part.exercises, 0);
    return (
      <p>
        <strong>total of {total} exercises</strong>
      </p>
    );
  };
  
  const Part = ({ part }) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>
    );
  };
  
  const Content = ({ course }) => {
    return (
      <div>
        {course.parts.map((part, i) => (
          <Part key={part.id} part={part} />
        ))}
      </div>
    );
  };
  
  const Course = ({ course }) => {
    return (
      <>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
      </>
    );
  };

  export default Course;