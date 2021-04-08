import Image from 'next/image';

import Card from 'src/components/Card';
import Perspective from 'src/components/Perspective';
import Layout from "../templates/Layout";


const Home = () => {
  return (
    <Layout currPage="Home">
      <section className="hero bg-white pb-52">
        <div className="flex m-auto flex-col lg:flex-row">
          <div className="lg:w-1/2 md:w-full mt-20">
            <h1 className="font-semibold text-8xl text-center mb-4">Hi! 👋</h1>
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
      <section className="w-full h-screen p-24">
        <h3 className="font-semibold text-5xl text-center">Skills</h3>
        <p className="text-xl text-center pb-12">Here's what I know</p>

        <div className="flex">
          <Card className="w-96 h-56 transform hover:-translate-y-1">
            <h4>Javascript</h4>
          </Card>
          <Card className="w-96 h-56 transform hover:-translate-y-1">
            <h4>Python</h4>
          </Card>
          <Card className="w-96 h-56 transform hover:-translate-y-1">
            <h4>Game Development</h4>
          </Card>
          <Card className="w-96 h-56 transform hover:-translate-y-1">
            <h4>Other</h4>
          </Card>
        </div>
      </section>
    </Layout>
  )
}

export default Home;