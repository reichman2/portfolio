import Masonry from "react-masonry-css";
import Card from "src/components/Card";
import projects from "src/data/myWork";

import Image from 'next/image';
import Link from "next/link";

 
const Projects: React.FC<{}> = () => {
  const bpCols = {
    default: 2,
    860: 1 
  }

  let projNodes = projects.map((elm, i) => {
    return (
      <Card key={ i } className="transform hover:-translate-y-1 -mb-32">
        <>
          <Link href={ elm.link }><h4 className="text-3xl font-semibold mb-8 cursor-pointer">{ elm.name }</h4></Link>
          <p>{ elm.description }</p>
          <div>
            { elm.image?
              <Image 
                src={ elm.image.src } 
                width={ elm.image.width / 2}
                height={ elm.image.height / 2}
                className="rounded-sm"
                alt={ elm.image.alt || elm.name}
              /> 
          
            : null 
            }
          </div>
        </>
      </Card>
    );
  });

  return (
    <section className="w-full lg:p-24 p-8 h-screen bg-white" id="projects">
      <h3 className="font-semibold text-5xl text-center">Projects</h3>
      <p className="text-xl text-center pb-12">Here's what I've been working on</p>

      <Masonry
        breakpointCols={ bpCols }
        className="skill-masonry"
        columnClassName="skill-masonry-col lg:px-4"
      >
        { projNodes }
      </Masonry>
    </section>
  );
}
 
export default Projects;