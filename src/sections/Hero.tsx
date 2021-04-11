import Image from 'next/image';


export interface HeroProps {
    
}
 
const Hero: React.FC<HeroProps> = () => {
  // Trigger wave animation on hover
  const waveHover = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault();
    let target = e.currentTarget;
    target.classList.remove('wave-animation');

    void target.offsetWidth;

    target.classList.add('wave-animation');
  }

  return (
    <section className="hero bg-white h-screen">
      <div className="flex m-auto flex-col lg:flex-row">
        <div className="lg:w-1/2 md:w-full mt-20">
          <div className="flex flex-col justify-center resize-y h-full">
            <h1 className="font-semibold text-8xl align text-center mb-4">
              Hi! <span className="wave-emoji wave-animation" onMouseEnter={(e) => waveHover(e)}>👋</span>
            </h1>
            <div className="text-center">
              <span className="font-semibold font-raleway text-5xl text-center">I'm Brian</span><br />
              <span className="font-semibold text-4xl text-gray-800 text-center">Full Stack Software Developer</span>
            </div>
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
  );
}
 
export default Hero;