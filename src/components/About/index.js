import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          I am a network technician that specializes in full stack web development, with experience building single page applications, progressive web applications, and MERN stacks. My main programming language is JavaScript, but i can also build html with css from scratch, i have some experience working with C# as well as python but i am better suited with ecma script.
          With a combination of creative technology and a passion for coding, My aim is to deliver exceptional service in the industry. Ive worked with big names and tech giants for a few years in Los Angeles, and Hollywood California. I have a variety of skills and practical application in the field, thank you for taking the time to read this short paragraph about myself.
        </p>
      </div>
    </section>
  );
}

export default About;
