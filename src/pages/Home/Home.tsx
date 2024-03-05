import { useEffect, useState } from "react";
import ArticleList from "../../components/ArticleList";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import NavigationPanel from "../../components/NavigationPanel";
import fakeData from "../../data";
import "./styles.css";

function Home() {
  const [articles, setArticles] = useState(fakeData.fetchArticles());
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search.length > 0) {
      setArticles(fakeData.fetchArticlesBySearch(search));
    }
  }, [search]);

  return (
    <div className="home">
      <Header search={search} setSearch={setSearch} />
      <div className="home-content">
        <div className="home-main-content">
          <NavigationPanel pages={5} />
          <ArticleList articles={articles} />
        </div>
        <SideBar topics={fakeData.fetchTopics()} />
      </div>
    </div>
  );
}

export default Home;
