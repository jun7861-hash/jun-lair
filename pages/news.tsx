import Seo from '@/components/Seo';
import News from '@/components/news/News';
import Sidebar from '@/components/sidebar';

const index = () => {
  return (
    <>
      <Seo pageTitle="Blog" />

      <Sidebar />

      <div className="rightpart">
        <div className="rightpart_in">
          <div className="jun_lair_section">
            <div data-aos="fade-right" data-aos-duration="1200">
              <div className="container">
                <div className="jun_lair_news">
                  <div className="jun_lair_title">
                    <div className="title_flex">
                      <div className="left">
                        <span>News</span>
                        <h3>Latest News</h3>
                      </div>
                    </div>
                  </div>
                  <News />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
