import Image from 'next/image';
import React from 'react';

import { inspirationData } from '@/data/inspirationData';

const Partners = () => {
  return (
    <>
      <div className="jun_lair_partners">
        <div className="container">
          <div className="lair_section_title">
            <h3>Inspired By</h3>
          </div>
          <div className="partners_inner">
            <ul>
              {inspirationData.map((data, i) => (
                <li key={i}>
                  <div className="list_inner">
                    <Image
                      width={123}
                      height={37}
                      src={data.path}
                      alt={data.brand}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
