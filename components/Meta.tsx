import Head from 'next/head';

interface MetaProps {
  title?: string;
  description?: string;
  image?: string;
}

export default function Meta({ title, description, image }: MetaProps): JSX.Element {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
    </Head>
  );
}

Meta.defaultProps = {
  title: '제타스텝 :: ZetaStep',
  description: 'ZetaStep',
  image: '/images/open_graph.jpg',
};