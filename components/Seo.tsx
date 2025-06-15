import Head from 'next/head';

type Props = {
  pageTitle: string;
};

const Seo = (props: Props) => {
  const { pageTitle } = props;

  return (
    <Head>
      <title>{pageTitle && `${pageTitle} || Jun's Lair`}</title>
    </Head>
  );
};

export default Seo;
