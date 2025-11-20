import React, { useState, useEffect } from 'react';
import Name from './components/Name';
import Experience from './components/Experience';
import About from './components/About';
import TechStack from './components/TechStack';
import Certification from './components/Certifications';
import Projects from './components/Projects';
import FactsAndTrivia from './components/FactsAndTrivia';
import Socials from './components/Socials';
import Contacts from './components/Contact';
import GetInTouch from './components/GetInTouch';

export default function Portfolio() {
  
  return (
    <>
 
      <Name/>
        <div className='flex gap-3'>
          <About/>
          <Experience/>
        </div>
      <div className='mt-3'>
          <TechStack/>
      </div>
      <div className='flex gap-3 mt-3'>
        <Certification/>
        <Projects/>
      </div>
      <div className='mt-3'>
        <FactsAndTrivia/>
      </div>
      <div className='flex gap-3 mt-3'>
      <Socials/>
      <Contacts/>
      <GetInTouch/>
      </div>
      <div className='mt-12'>
        <hr className='w-full border-1 border-zinc-200' />
        <p className='text-center mt-7'>©2025 Mark James Dinong. All rights reserved.</p>
      </div>

    </>
  );
}