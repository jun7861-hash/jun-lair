import { useRouter } from 'next/router';

const Intro = () => {
  const { basePath } = useRouter();

  const introContent = {
    image: `${basePath}/img/slider/1.jpg`,
    name: 'Jun Estropigan',
    designation: 'Software Engineer',
    text: (
      <>
        <p>
          Welcome to my Lair, I&apos;m Jun, a seasoned software engineer with
          almost 5 year journey in web development. Since its inception,
          I&apos;ve immersed myself in, requirement analysis, designing,
          programming, testing, and automating sites, channeling most of my
          waking hours into honing my craft.
        </p>
        <p>
          Specializing in transforming concepts into fully functional websites
          with a distinctive, modern aesthetic. Leveraging my in-depth
          understanding of web mechanics, I optimize intricate integrations to
          demand minimal maintenance, ensuring seamless, autonomous operation
          over extended periods.
          <br />
          Let&apos;s build something extraordinary together.
        </p>
      </>
    ),
  } as const;
  return (
    <>
      <div className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className="about_text">{introContent.text}</div>
    </>
  );
};

export default Intro;
