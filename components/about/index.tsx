import Modal from 'react-modal';

import Intro from '@/components/about/Intro';
import KnowledgeInterest from '@/components/about/KnowledgeInterest';
import PersonalInfo from '@/components/about/PersonalInfo';
import Resume from '@/components/about/Resume';

Modal.setAppElement('#__next');

const AboutMain = () => {
  return (
    <>
      <div className="container">
        <div className="jun_lair_about">
          <div className="jun_lair_title">
            <div className="title_flex">
              <div className="left">
                <span>About</span>
                <h3>About Me</h3>
              </div>
            </div>
          </div>

          <Intro />
          <div className="jun_lair_short_info">
            <PersonalInfo />
          </div>

          <div className="jun_lair_button" data-position="left">
            <a href="/img/junr.pdf" download>
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>

      <div className="jun_lair_skillbox">
        <div className="container">
          <div className="in">
            <KnowledgeInterest />
          </div>
        </div>
      </div>

      <div className="jun_lair_resumebox">
        <div className="container">
          <div className="in">
            <Resume />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMain;
