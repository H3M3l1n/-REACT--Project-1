import "./footerauthor.sass";

const FooterAuthor = ({ data }) => {
  return (
    <div className="footer-author">
      <div className="author-name">
        <p className="author-name-text">{data.name}</p>
      </div>
      <div className="author-info">
        <p className="author-info-text">{data.text}</p>
      </div>
    </div>
  );
};

export default FooterAuthor;
