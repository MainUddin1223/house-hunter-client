/* eslint-disable react/prop-types */
// Layout.js
// import Footer from './Footer';
import Footer from './Footer.jsx';
import Header from './Header.jsx';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className='min-h-screen'>{children}</div>
      <Footer/>
    </div>
  );
};

export default Layout;
