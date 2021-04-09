import Image from 'next/image';
import Masonry from 'react-masonry-css';
import React from 'react';

import Card from 'src/components/Card';
import Perspective from 'src/components/Perspective';
import Layout from "../templates/Layout";

import skills from '../data/mySkills';


const Home = () => {
  const bpCols = {
    default: 2,
    860: 1 
  }
  
  // Trigger wave animation on hover
  const waveHover = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault();
    let target = e.currentTarget;
    target.classList.remove('wave-animation');

    void target.offsetWidth;

    target.classList.add('wave-animation');
  }


  let skillNodes = skills.map((elm, i) => {
    const techKeys = Object.keys(elm.technologies);
    const size = 64;

    return (
      <Card key={ i } className="transform hover:-translate-y-1 -mb-32">
        <>
          <h4 className="text-3xl font-semibold mb-8">{ elm.name }</h4>
          <ul className="flex flex-wrap">
            {techKeys.map((tk, i) => {
              return (
                <li key={ i } className="px-3 py-1">
                  <Image 
                    src={`/technologies/${elm.technologies[tk].image}`} 
                    width={ size } 
                    height={ size } 
                    alt={ tk } 
                    title={ tk } 
                  />
                </li>
              );
            })}
          </ul>
        </>
      </Card>
    );
  });


  return (
    <Layout currPage="Home">
      <section className="hero bg-white h-screen">
        <div className="flex m-auto flex-col lg:flex-row">
          <div className="lg:w-1/2 md:w-full mt-20">
            <h1 className="font-semibold text-8xl text-center mb-4">
              Hi! <span className="wave-emoji wave-animation" onMouseEnter={(e) => waveHover(e)}>👋</span>
            </h1>
            <div className="text-center">
              <span className="font-semibold font-raleway text-5xl text-center">I'm Brian</span><br />
              <span className="font-semibold text-4xl text-gray-800 text-center">Full Stack Software Developer</span>
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-full">
            <div className="flex justify-center relative top-16">
              <div className="p-0 m-0 text-none shadow-md lg:hover:shadow-xl transition-all">
                <Image src="/erk1tmqlej.jpg" width="250" height="375" /> {/* My photo of me. */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full lg:p-24 p-8">
        <h3 className="font-semibold text-5xl text-center">Skills</h3>
        <p className="text-xl text-center pb-12">Here's what I know</p>
        
        <Masonry 
          breakpointCols={ bpCols }
          className="skill-masonry"
          columnClassName="skill-masonry-col lg:px-4"
        >
          { skillNodes }
        </Masonry>
      </section>
    </Layout>
  )
}

export default Home;