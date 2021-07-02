import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Layout({ children }) {
  return (
    <div className='content'>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
