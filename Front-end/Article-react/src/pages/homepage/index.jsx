import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import './index.css'
import { Link,Route } from "react-router-dom";

function index() {
  const [articles, setArticles] = useState("");
  const [articleId, setArticleId ] = useState("")
  const fetchArticles = async () => {
    const response = await axios.get("http://localhost:4000/api/Article");
    setArticles(response.data);
  };
  console.log(articles);

  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <div className="container-homepage">
      <p>
        <strong>Our Articles</strong>{" "}
      </p>

      <div className="AllArticles-homepage">
        {articles&& articles.map((article,index) => (
            <div className="specifique-article-homepage">

                <h1 className="author-title-homePage">{article.author}</h1>
                <h4  className="author-title-homePage">{article.title}</h4>
                <p  className="author-body-homePage">{article.body}</p>
                <Link to={`http://localhost:4000/api/Article/${article.id}`}>
                 <button className="button">Show Article</button>
                 </Link>
                    </div>

        ))}
      </div>
    </div>
  );
}

export default index;
