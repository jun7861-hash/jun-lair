import Seo from '@/components/Seo';
import Gigs from '@/components/gigs';
import Sidebar from '@/components/sidebar';

const index = () => {
  return (
    <>
      <Seo pageTitle="Gigs" />
      <Sidebar />

      <div className="rightpart">
        <div className="rightpart_in">
          <div className="jun_lair_section">
            <div data-aos="fade-right" data-aos-duration="1200">
              <Gigs />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
