import React from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Footer from './Footer';


const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <SideBar />

      <div className="content-wrapper">

        <div className="page-content fade-in-up">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;