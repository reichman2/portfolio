import Image from 'next/image';
import Masonry from 'react-masonry-css';
import React from 'react';

import Card from 'src/components/Card';
import Perspective from 'src/components/Perspective';
import Layout from "../templates/Layout";



const skills = [
  {
    name: "JavaScript",
    technologies: {
      "TypeScript": { image: 'typescript-logo.svg' },
      "React": { image: 'react-logo.svg' },
      "NextJS": { image: 'next-logo.svg' },
      "ExpressJS": { image: 'expressjs-logo.svg' },
      "GraphQL": { image: 'graphql-logo.svg' },
      "Sass": { image: 'sass-logo.svg' },
      "Tailwind": { image: 'tailwindcss-logo.svg' },
    }
  },
  {
    name: "Python",
    technologies: {
      "Django": { image: 'django-logo.png' },
      "Flask": { image: 'flask-logo.svg' },
    }
  },
  {
    name: "Game Development",
    technologies: {
      "Unity": { image: 'unity-logo.png' },
    }
  },
  {
    name: "Design",
    technologies: {
      "Adobe Illustrator": { image: 'illustrator-logo.svg' },
      "Adobe Photoshop": { image: 'photoshop-logo.svg' },
      "Blender": { image: 'blender-logo.svg' }
    }
  },
  {
    name: "Other",
    technologies: {
      "Java": { image: 'java-logo.svg' },
      "C#": { image: '' },
      "Bukkit": { image: '' },
    }
  },
];

const Home = () => {
  const bpCols = {
    default: 2,
    500: 1 
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
    const size = 96;

    return (
      <Card key={ i } className="transform hover:-translate-y-1 -mb-32">
        <>
          <h4 className="text-3xl font-semibold">{ elm.name }</h4>
          <ul>
            {techKeys.map((tk, i) => {
              return (
                <li key={ i }><Image src={`/technologies/${elm.technologies[tk].image}`} width={ size } height={ size } alt={ tk } title={ tk } /></li>
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
                <Image src="/erk1tmqlej.jpg" width="250" height="375" className="" /> {/* My photo of me. */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full p-24">
        <h3 className="font-semibold text-5xl text-center">Skills</h3>
        <p className="text-xl text-center pb-12">Here's what I know</p>
        
        <Masonry 
          breakpointCols={ bpCols }
          className="skill-masonry "
          columnClassName="skill-masonry-col"
        >
          { skillNodes }
        </Masonry>
      </section>
    </Layout>
  )
}

export default Home;