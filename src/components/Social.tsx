import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodepen, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';


export interface SocialProps {
  
}
 
const Social: React.FC<SocialProps> = () => {
  let liClass = "py-2 transition-all transform hover:text-teal-600 hover:-translate-y-1";

  return (
    <>
      <div className="hidden lg:block fixed bottom-0 left-8 z-20">
        <ul className="text-gray-800">
          <li className={ liClass }><a href="https://github.com/reichman2/"><FontAwesomeIcon size="lg" icon={ faGithub } /></a></li>
          <li className={ liClass }><a href="https://www.linkedin.com/in/brian-reich-425518203/"><FontAwesomeIcon size="lg" icon={ faLinkedin } /></a></li>
          <li className={ liClass }><a href="https://instagram.com/reichman2/"><FontAwesomeIcon size="lg" icon={ faInstagram } /></a></li>
          <li className={ liClass }><a href="https://twitter.com/dbrianr"><FontAwesomeIcon size="lg" icon={ faTwitter } /></a></li>
          <li className={ liClass }><a href="https://codepen.io/reichman2/"><FontAwesomeIcon icon={ faCodepen } size="lg" /></a></li>
          {/* <li className={ liClass }><a href="https://www.fiverr.com/dbrianr"><Image width="21.33" height="21.33" src="/icons/fiverr-icon.svg" /></a></li> */}
        </ul>

        <span className="w-0.25 h-24 bg-gray-900 block my-0 mx-auto mt-5"></span>
      </div>

      <div className="hidden lg:block fixed bottom-0 right-8 z-20 text-gray-800">
        <span className="v-text hover:text-teal-600 transform hover:-translate-y-1 transition-all font-mono">
          <a href="mailto:brian@dbrianr.com">brian@dbrianr.com</a>
        </span>
        <span className="w-0.25 h-24 bg-gray-900 block my-0 mx-auto mt-5"></span>
      </div>
    </>
  );
}

export default Social;