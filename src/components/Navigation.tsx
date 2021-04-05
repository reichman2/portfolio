import Link from 'next/link';
import Image from 'next/image';
import React from 'react';


export interface NaviagionProps {
  currPage: string;
}
 
const Naviagion: React.FC<NaviagionProps> = ({ currPage }) => {
  return (
    <nav className="">
      <span className="block w-16 h-auto"><Image src="/logo-02.svg" width="128" height="128"/></span>
      <div className="">
        <span className=""></span>
      </div>
    </nav>
  );
}
 
export default Naviagion;