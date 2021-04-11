import Masonry from "react-masonry-css";

export interface ProjectsProps {
  
}
 
const Projects: React.FC<ProjectsProps> = () => {
  const bpCols = {
    default: 2,
    860: 1 
  }

  return (
    <section className="w-full lg:p-24 p-8 h-screen bg-white slant-top" id="projects">
      <div className="mt-20">
        <h3 className="font-semibold text-5xl text-center">Projects</h3>
        <p className="text-xl text-center pb-12">Here's what I've been working on</p>
      </div>

      <Masonry
        breakpointCols={ bpCols }
        className="skill-masonry"
        columnClassName="skill-masonry-col lg:px-4"
      >

      </Masonry>
    </section>
  );
}
 
export default Projects;