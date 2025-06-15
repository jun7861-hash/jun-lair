import Seo from '@/components/Seo';
import Quests from '@/components/quests';
import Sidebar from '@/components/sidebar';

const index = () => {
  return (
    <>
      <Seo pageTitle="Quests" />
      <Sidebar />

      <div className="rightpart">
        <div className="rightpart_in">
          <div className="jun_lair_section">
            <div data-aos="fade-right" data-aos-duration="1200">
              <Quests />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
