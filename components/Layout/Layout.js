import { Header, Footer } from '../index';

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
