interface NewsDetailLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

const NewsDetailLayout = ({ children, modal }: NewsDetailLayoutProps) => {
  return (
    <>
      {modal}
      {children}
    </>
  );
};

export default NewsDetailLayout;
