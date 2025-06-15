import Seo from '@/components/Seo';
import Contact from '@/components/contact';
import Sidebar from '@/components/sidebar';

const index = () => {
  return (
    <>
      <Seo pageTitle="Contact" />
      <Sidebar />

      <div className="rightpart">
        <div className="rightpart_in">
          <div className="jun_lair_section">
            <div data-aos="fade-right" data-aos-duration="1200">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
