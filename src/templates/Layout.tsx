import Head from 'next/head';

import Header from "../components/Header";
import Footer from "../components/Footer";
import Social from "src/components/Social";


const Layout = ({ children, currPage }) => {
  return (
    <>
      <Head>
        <title>{ `${currPage? currPage + " -- " : ""}Brian Reich` }</title>
      </Head>
      <Header currPage={ currPage || "" } />
      <Social />
      <main className="bg-gray-100">{ children }</main>
      <Footer />
    </>
  );
}

export default Layout;