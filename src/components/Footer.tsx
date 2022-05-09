import Link from "next/link";

 
const Footer: React.FC<{}> = () => {
  const socialSpanClassNames = "mx-2 transition-all transform hover:text-teal-600";

  return (
    <footer className="h-screen-1/2 bg-gray-100 flex flex-col">
      <div className="flex-grow"></div>
      <div className="flex mb-8">
        <div className="flex m-auto justify-between">
          <a href="https://github.com/reichman2"><span className={ socialSpanClassNames }>GitHub</span></a>
          <a href="https://linkedin.com/in/brianwreich"><span className={ socialSpanClassNames }>LinkedIn</span></a>
          <Link href="/Brian%20Reich%20-%20Resume.pdf"><span className={ `${socialSpanClassNames} cursor-pointer` }>Resume</span></Link>
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;