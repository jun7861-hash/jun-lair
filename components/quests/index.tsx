import Quests from '@/components/quests/Quests';

const index = () => {
  return (
    <>
      <div className="container">
        <div className="jun_lair_services">
          <div className="jun_lair_title">
            <div className="title_flex">
              <div className="left">
                <span>Quests</span>
                <h3>Projects</h3>
              </div>
            </div>
          </div>

          <div className="list">
            <ul>
              <Quests />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
