import { ReactTyped } from 'react-typed';
import { useRouter } from 'next/router';

import Social from '@/components/Social';

const Home = () => {
  const { basePath } = useRouter();
  return (
    <div className="jun_lair_home">
      <div className="home_content">
        <div className="avatar">
          <div
            className="image avatar_img"
            style={{
              backgroundImage: `url(${basePath}/img/thumbs/prf.png)`,
            }}
          ></div>
        </div>
        <div className="details">
          <h3 className="name">Jun Estropigan</h3>
          <h4 className="typer">
            <ReactTyped
              strings={[
                'Software engineer',
                'Mobile development',
                'Mountaineer',
                'Metalhead',
              ]}
              loop
              typeSpeed={80}
            />
          </h4>

          <p className="job">
            Innovative Software Engineer with expertise in web development based
            in Philippines, Manila and eager to contribute to cutting-edge
            projects worldwide.
          </p>
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Home;
