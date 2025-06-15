import Image from 'next/image';

const KnowledgeInterest = () => {
  const knowledgeContent = [
    {
      id: 1,
      colClass: 'left',
      title: 'Knowledge',
      content: [
        ' ReactJS, NextJS',
        ' Typescript',
        ' Styled component, Sass, Less',
        ' Redux, Valtio',
        ' Webpack',
        ' NodeJS, ExpressJS',
        ' Terraform',
        ' AWS',
        ' Github actions',
        ' Azure DevOps',
        ' Git',
        ' Jest, Playwright, RTL',
      ],
    },
    {
      id: 2,
      colClass: 'right',
      title: 'Interests',
      content: [
        ' Site Optimization',
        ' Custom Website',
        ' Learn Ecommerce',
        ' Community Engagement',
        ' Industry Insights',
        ' Interactive Workshops',
      ],
    },
  ];

  return (
    <>
      {knowledgeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="lair_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="jun_lair_skill_list">
            <ul>
              {item.content.map((val, i) => (
                <li key={i}>
                  <span>
                    <Image
                      width={10}
                      height={10}
                      className="svg"
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH}/img/svg/rightarrow.svg`}
                      alt="arrow"
                    />
                    {val}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default KnowledgeInterest;
