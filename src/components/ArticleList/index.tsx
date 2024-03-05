import Article, { ArticleProps } from "../Article";
import "./styles.css";

interface ArticleListProps {
  articles: ArticleProps[];
}

function ArticleList({ articles }: ArticleListProps) {
  return (
    <div className="article-list">
      {articles.length === 0 && <h2 className="no-results">No Results</h2>}
      {articles.length > 0 &&
        articles.map((article, index) => (
          <Article
            key={index}
            id={article.id}
            title={article.title}
            description={article.description}
            urlToImage={article.urlToImage}
            author={article.author}
          />
        ))}
    </div>
  );
}

export default ArticleList;
