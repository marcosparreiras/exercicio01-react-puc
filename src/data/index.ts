import { ArticleProps } from "../components/Article";
import { fakeTopics } from "./fake-topics";
import { fakeArticles } from "./fake-articles";

class FakeData {
  constructor(private topics: string[], private articles: ArticleProps[]) {}

  public fetchTopics(): string[] {
    return this.topics;
  }

  public fetchArticlesBySearch(search: string): ArticleProps[] {
    const searchedArticles = this.articles.filter(
      (article) =>
        article.title.toLowerCase().includes(search) ||
        article.description.toLowerCase().includes(search)
    );

    return searchedArticles;
  }

  public fetchArticles(): ArticleProps[] {
    return this.articles;
  }
}

const fakeData = new FakeData(fakeTopics, fakeArticles);
export default fakeData;
