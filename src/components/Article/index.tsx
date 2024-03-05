import { toast } from "react-toastify";
import "./styles.css";

export interface ArticleProps {
  id: string;
  title: string;
  author: string | null;
  description: string;
  urlToImage: string;
}

function Article({ title, author, description, urlToImage }: ArticleProps) {
  const handleClick = () => {
    toast.error("Action not implemented");
  };

  return (
    <div className="article">
      <img src={urlToImage} alt="article image" />

      <div className="article-content">
        <h2 onClick={handleClick}>{title}</h2>
        {author && <p className="article-author">By: {author}</p>}
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Article;
