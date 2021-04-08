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
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true
    }
  }

  render() {
    return (
      <nav className="flex p-4 flex-nowrap  justify-between items-center">
        <span className="block w-20 h-auto"><Image src="/logo-02.svg" width="128" height="128"/></span>
        <div className="inline-flex self-center content-between">
          <span className="px-8 flex justify-center items-center"><Link href="/blog">Blog</Link></span>
          <span className="px-8"><Link href="/contact"><Button bgColor="teal-600">Contact</Button></Link></span>
        </div>
      </nav>
    );
  }
}
 
export default Navigation;