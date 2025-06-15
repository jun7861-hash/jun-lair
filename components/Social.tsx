import Image from 'next/image';

const socialShare = [
  {
    iconName: 'github',
    link: 'https://github.com/jun7861-hash/',
  },
  {
    iconName: 'linkedin',
    link: 'https://www.linkedin.com/in/jun-estropigan-903750156/',
  },
] as const;

const Social = () => {
  return (
    <>
      <ul className="social">
        {socialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <Image
                className="svg"
                src={`/img/svg/social/${val.iconName}.svg`}
                alt={val.iconName}
                width={100}
                height={100}
              />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Social;
