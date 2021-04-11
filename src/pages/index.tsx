import React from 'react';

import Layout from "../templates/Layout";

import Hero from 'src/sections/Hero';
import Skills from 'src/sections/Skills';
import Projects from 'src/sections/Projects';


const Home = () => {
  return (
    <Layout currPage="Home">
      <Hero />      { /* The hero section is a short section with my image and a greeting. */ }
      <Skills />    { /* The skills section shows what skills I have and what I am learning. */ }
      <Projects />  { /* The projects section shows what projects I have been working on and showcases my capabilities. */ }
    </Layout>
  )
}

export default Home;