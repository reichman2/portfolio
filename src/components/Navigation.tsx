import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Button from './Button';


type NavigationProps = {
  currPage: string;
}

type NavigationState = {
  collapsed: boolean;
};


class Navigation extends React.Component<NavigationProps, NavigationState> {
  constructor(props: NavigationProps) {
    super(props);

    this.state = {
      collapsed: true
    }
  }

  render() {
    return (
      <nav className="flex p-4 flex-nowrap  justify-between items-center">
        <span className="block w-20 h-auto"><Link href="/"><a><Image src="/logo-02.svg" width="128" height="128"/></a></Link></span>
        <div className="inline-flex self-center content-between">
          <span className="px-8 flex justify-center items-center"><Link href="/blog"><a className="hover:text-teal-600 transition-colors">Blog</a></Link></span>
          <Link href="/contact"><a><span className="px-8"><Button>Contact</Button></span></a></Link>
        </div>
      </nav>
    );
  }
}
 
export default Navigation;