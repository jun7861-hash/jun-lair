import Image from 'next/image';
import Link from 'next/link';

import Seo from '@/components/Seo';

const NotFound = () => {
  return (
    <>
      <Seo pageTitle="404" />

      <div className="not-found-wrapper">
        <div className="leftpart">
          <div className="leftpart_inner">
            <div className="logo">
              <Link className="navbar-brand" href="/">
                <Image
                  width={126}
                  height={22}
                  priority
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/img/logo/dark.png`}
                  alt="jun's lair"
                />
              </Link>
            </div>
            <div className="copyright">
              <p>&copy; {new Date().getFullYear()} Jun&apos;s Lair</p>
            </div>
          </div>
        </div>

        <div className="rightpart">
          <div className="rightpart_in">
            <div className="jun_lair_section">
              <div className="container">
                <div className="jun_lair_error">
                  <div className="jun_lair_error_inner">
                    <h1>404!</h1>
                    <h3>Page not found</h3>
                    <p>The page you were looking for could not be found.</p>
                    <Link href="/" className="ib-button">
                      Go to Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer-wrapper">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Jun&apos;s Lair</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default NotFound;
