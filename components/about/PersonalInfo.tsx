const PersonalInfo = () => {
  const personalInfoContent = [
    {
      id: 1,
      colClass: 'left',
      info: [
        {
          id: 1,
          name: 'Address',
          content: 'Bulacan, Philippines',
        },
        {
          id: 2,
          name: 'Email',
          content: (
            <>
              <a href="mailto:jun.estropigan@gmail.com">
                jun.estropigan@gmail.com
              </a>
            </>
          ),
        },
        {
          id: 3,
          name: 'Phone',
          content: (
            <>
              <a href="tel:+77 022 177 05 05">+63 905 522 7693</a>
            </>
          ),
        },
        {
          id: 4,
          name: 'Nationality',
          content: 'Filipino',
        },
      ],
    },
    {
      id: 2,
      colClass: 'right',
      info: [
        {
          id: 1,
          name: 'Study',
          content: 'University of Caloocan City',
        },
        {
          id: 2,
          name: 'Degree',
          content: 'Bachelor',
        },
        {
          id: 3,
          name: 'Interest',
          content: 'Mountain Hiking',
        },
        {
          id: 4,
          name: 'Freelance',
          content: 'Available',
        },
      ],
    },
  ] as const;

  return (
    <>
      {personalInfoContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="jun_lair_info">
            <ul>
              {item.info.map((value) => (
                <li key={value.id}>
                  <span>{value.name}:</span>
                  <span>{value.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default PersonalInfo;
