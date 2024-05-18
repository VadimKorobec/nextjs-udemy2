interface NewsDetailPageProps {
  params: {
    id: string;
  };
}

const NewsDetailPage = ({ params }: NewsDetailPageProps) => {
  return (
    <>
      <h1>News Detail Page</h1>
      <p>News ID : {params.id}</p>
    </>
  );
};

export default NewsDetailPage;
