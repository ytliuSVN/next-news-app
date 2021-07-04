import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.back();
      // router.push('/');
    }, 3000);
  }, []);

  return (
    <div className='not-found container'>
      <h2>Page Not Found</h2>
      <h4>We could not find what you were looking for.</h4>
      <p>
        Go back to the{' '}
        <Link href='/'>
          <a>Home page</a>
        </Link>
      </p>
    </div>
  );
}

export default NotFound;
