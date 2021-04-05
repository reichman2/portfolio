import Header from "../components/Header";
import Footer from "../components/Footer";


const Layout = ({ children, currPage }) => {
  return (
    <>
      <Header currPage={ currPage || "" } />
      <main>{ children }</main>
      <Footer />
    </>
  );
}

export default Layout;