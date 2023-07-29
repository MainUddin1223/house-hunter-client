/* eslint-disable react/prop-types */
import Footer from './Footer.jsx';
import Header from './header/Header.jsx';

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
