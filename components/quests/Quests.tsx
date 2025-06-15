import React, { useState } from 'react';
import Image from 'next/image';
import Modal from 'react-modal';

import { servicesData } from '@/data/servicesData';

Modal.setAppElement('#__next');

const Services = () => {
  const [singleData, setSingleData] = useState<
    | {
        id: number;
        no: string;
        title: string;
        url: string;
        text: string;
        largeImg: string;
        largeTitle: string;
        descriptions: React.JSX.Element;
      }
    | undefined
  >(undefined);
  const [isOpen, setIsOpen] = useState(false);

  const handleBServicesData = (id: number) => {
    const find = servicesData.find((item) => item?.id === id);

    if (find) {
      setSingleData({
        id: find.id,
        no: find.no,
        title: find.title,
        url: find.url,
        text: find.text,
        largeTitle: find.largeTitle ?? '',
        largeImg: (find as any).largeImg ?? '', // or a proper default image URL
        descriptions: find.descriptions,
      });
      setIsOpen(true);
    }
  };

  const handleModle = (id: number) => {
    handleBServicesData(id);
  };

  return (
    <>
      {servicesData.map((item) => (
        <li key={item.id}>
          <div className="list_inner" onClick={() => handleModle(item?.id)}>
            <span className="number">{item.no}</span>
            <h3 className="title">{item.title}</h3>
            <p className="text">{item.text}</p>
            <div className="jun_lair_read_more">
              <div className="read-more">
                <span>Read More</span>
              </div>
            </div>
          </div>
        </li>
      ))}

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="jun_lair_modalbox_news">
          <button className="close-modal" onClick={() => setIsOpen(false)}>
            <Image
              src="/img/svg/cancel.svg"
              width={100}
              height={100}
              alt="close icon"
            />
          </button>
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${singleData?.largeImg})`,
                  }}
                ></div>
              </div>
              <div className="details">
                <div className="extra">
                  <p className="url">
                    <a href="#">{singleData?.url}</a>
                  </p>
                </div>
                <h3 className="title">{singleData?.largeTitle}</h3>
              </div>
              <div className="main_content ">
                <div className="descriptions">{singleData?.descriptions}</div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Services;
