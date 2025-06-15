import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TumblrShareButton,
  TumblrIcon,
} from 'next-share';

import { Article } from '@/hooks/getNews/types';

type Props = {
  article: Article | undefined;
};

const ShareSocial = (props: Props) => {
  const { article } = props;

  return (
    <div className="social-share">
      <FacebookShareButton
        url={article?.url as string}
        quote={article?.title}
        hashtag={`#${article?.source.name}`}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <PinterestShareButton
        url={article?.url as string}
        media={article?.title as string}
      >
        <PinterestIcon size={32} round />
      </PinterestShareButton>

      <TwitterShareButton url={article?.url as string} title={article?.title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <LinkedinShareButton url={article?.url as string}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>

      <TumblrShareButton url={article?.url as string} title={article?.title}>
        <TumblrIcon size={32} round />
      </TumblrShareButton>
    </div>
  );
};

export default ShareSocial;
