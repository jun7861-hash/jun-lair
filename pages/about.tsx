import About from '@/components/about';
import Sidebar from '@/components/sidebar';
import Seo from '@/components/Seo';
import Inspiration from '@/components/about/Inspiration';

const index = () => {
  return (
    <>
      <Seo pageTitle="About" />

      <Sidebar />

      <div className="rightpart">
        <div className="rightpart_in">
          <div className="jun_lair_section">
            <div data-aos="fade-right" data-aos-duration="1200">
              <About />
              <Inspiration />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
