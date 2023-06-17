import React from 'react'
import './About.css'

function AboutHeader() {
    return (
        <div>
            <h2 className='aboutHeader'>About</h2>
        </div>  
    );
}

function AboutParagraph() {
  return (
    <div>
      <p className='aboutParagraph'>
        This is practice portfolio website to learn React.js and other web development skills.
        The website is built using React.js, React Router, and CSS. The next step is to add,
        a backend to the website to make it a full stack application.
      </p>
    </div>
  );
}

export default function About() {
  return (
    <div>
        <AboutHeader />
        <AboutParagraph />
    </div>
  );
}
