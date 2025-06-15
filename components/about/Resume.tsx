const Resume = () => {
  const resumeContent = [
    {
      id: 1,
      colClass: 'left',
      title: 'Education',
      resume: [
        {
          id: 1,
          year: '2015 - 2019',
          institute: 'University of Caloocan City',
          degree: 'Bachelors Degree',
        },
      ],
    },
    {
      id: 2,
      colClass: 'right',
      title: 'Experience',
      resume: [
        {
          id: 1,
          year: 'May 2022 - Now',
          institute: 'Satellite Office',
          degree: 'Frontent Developer',
        },
        {
          id: 2,
          year: 'June 2021 - May 2022',
          institute: 'Accenture Inc.',
          degree: 'Software Engineer',
        },
        {
          id: 3,
          year: 'January 2021 - June 2021',
          institute: 'Summit Publishing Co., Inc.',
          degree: 'Frontend Developer',
        },
        {
          id: 4,
          year: 'May 2019 - January 2021',
          institute: 'Transcosmos Asia Philippines',
          degree: 'Frontend Developer',
        },
      ],
    },
  ] as const;

  return (
    <>
      {resumeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="lair_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="jun_lair_resume_list">
            <ul>
              {item.resume.map((value) => (
                <li key={value.id}>
                  <div className="list_inner">
                    <div className="time">
                      <span>{value.year}</span>
                    </div>
                    <div className="place">
                      <h3>{value.institute}</h3>
                      <span>{value.degree}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Resume;
