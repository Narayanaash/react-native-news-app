export const fetchData = async (newsURI) => {
  try {
    let articles = await fetch(newsURI);

    let result = await articles.json();
    articles = null;

    const news = result.articles;

    return news;
  } catch (error) {
    throw error;
  }
};
