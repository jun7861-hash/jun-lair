import Gigs from '@/components/gigs/Gigs';

const index = () => {
  return (
    <>
      <div className="container">
        <div className="jun_lair_services">
          <div className="jun_lair_title">
            <div className="title_flex">
              <div className="left">
                <span>Gigs</span>
                <h3>What I Did</h3>
              </div>
            </div>
          </div>

          <div className="list">
            <ul>
              <Gigs />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
