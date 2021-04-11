import Masonry from "react-masonry-css";
import Image from 'next/image';

import Card from "src/components/Card";
import skills from "src/data/mySkills";


interface SkillsProps {
    
}
 
const Skills: React.FC<SkillsProps> = () => {
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

  const bpCols = {
    default: 2,
    860: 1 
  }

  return (
    <section className="w-full lg:p-24 p-8" id="skills">
      <h3 className="font-semibold text-5xl text-center">Skills</h3>
      <p className="text-xl text-center pb-12">Here's what I can do</p>
    
      <Masonry 
        breakpointCols={ bpCols }
        className="skill-masonry"
        columnClassName="skill-masonry-col lg:px-4"
      >
        { skillNodes }
      </Masonry>
    </section>
  );
}
 
export default Skills;