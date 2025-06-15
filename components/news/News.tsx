import Image from 'next/image';
import { useState } from 'react';
import Modal from 'react-modal';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import ShareSocial from '@/components/social-share/ShareSocial';
import useGetNews from '@/hooks/getNews';
import { Article, Articles } from '@/hooks/getNews/types';
import { formatDate } from '@/utilis/formatDate';

Modal.setAppElement('#__next');

const News = () => {
  const { data, isLoading } = useGetNews();
  const [singleData, setSingleData] = useState<Article>();
  const [isOpen, setIsOpen] = useState(false);

  const example = () => {
    const articles = data?.articles;

    if (!articles || articles.length === 0) return;

    const articleWithLongestTitle = articles.reduce((acc, article) => {
      if (article.title.length > acc.title.length) {
        return article;
      } else {
        return acc;
      }
    }, articles[0]);

    return articleWithLongestTitle.url;
  };

  const handleBlogData = (url: string) => {
    if (!data?.articles && !data) return;
    const articles = data.articles.find((article) => article.url === url);
    setSingleData(articles);
    setIsOpen(true);
  };

  const handleModal = (url: string) => {
    handleBlogData(url);
  };

  return (
    <>
      {isLoading && (
        <ul>
          {[1, 2, 3, 4].map((index: number) => (
            <li key={index}>
              <div className="list_inner">
                <div className="image">
                  <Skeleton width="100%" height="268px" baseColor="#bbb" />
                </div>
                <div className="details">
                  <div className="extra">
                    <Skeleton width="250px" baseColor="#bbb" />
                  </div>

                  <h3 className="title">
                    <Skeleton
                      width="100%"
                      height="100%"
                      count={3}
                      baseColor="#bbb"
                    />
                  </h3>
                  <div className="jun_lair_read_more">
                    <div className="read-more">
                      <span>Read More</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      {!isLoading && (
        <ul>
          {data?.articles.map((item) => (
            <li key={item.url}>
              <div
                className="list_inner"
                onClick={() => handleModal(item?.url)}
              >
                <div className="image">
                  <div
                    className="main "
                    style={{
                      backgroundImage: `url(${item.urlToImage})`,
                    }}
                  ></div>
                </div>
                <div className="details">
                  <div className="extra">
                    <p className="date">
                      By <a href="#">{item.author}</a>
                      <span>{formatDate(item.publishedAt)}</span>
                    </p>
                  </div>

                  <h3 className="title">{item.title}</h3>
                  <div className="jun_lair_read_more">
                    <div className="read-more">
                      <span>Read More</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
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
              width={45}
              height={45}
              src="/img/svg/cancel.svg"
              alt="close icon"
            />
          </button>

          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${singleData?.urlToImage})`,
                  }}
                ></div>
              </div>
              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="#">{singleData?.author}</a>
                    <span>{formatDate(singleData?.publishedAt as string)}</span>
                  </p>
                </div>
                <h3 className="title">{singleData?.title}</h3>
              </div>
              <div className="main_content ">
                <div className="descriptions">{singleData?.description}</div>
                <div className="news_share">
                  <span>Share:</span>
                  <ShareSocial article={singleData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default News;
