import React from 'react';
import Header from './Header';
import Footer from './Footer';

const PageLayout = ({
  children
}) => {
  return (
    <>
      <Header/>
      <main className="body" id="body">
        {children}
      </main>
      <Footer/>
    </>
  );
};

export default PageLayout;
