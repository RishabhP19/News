import React, { useState, useEffect } from "react";
import bg from "./bg.jpg";
import logo from "./newsLogo.png";

import HeadCard from "./HeadCard";
import "./NavBar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset < 500 ? false : true);
    return () => (window.onscroll = null);
  };

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=70cc9c009afe4f9aab9a99824ff7b7f5&page=${page}&pageSize=1`;
    setLoading(true);
    let data = await fetch(url);

    let parsedData = await data.json();

    setArticles(parsedData.articles);

    setLoading(false);
  };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, []);

  const handlePrevClick = async () => {
    setPage(page - 1);
    updateNews();
  };

  const handleNextClick = async () => {
    setPage(page + 1);
    updateNews();
  };
  return (
    <>
      <div>
        {articles.map((element) => {
          return (
            <div className="col-md-4 my-2" key={element.url}>
              <HeadCard
                handlePrevClick={handlePrevClick}
                handleNextClick={handleNextClick}
                title={element.title ? element.title : ""}
                imageUrl={element.urlToImage ? element.urlToImage : ""}
                newsurl={element.url}
                author={element.author}
                publishedAt={element.publishedAt}
                source={element.source.name}
                loading={loading}
                page={page}
              />
            </div>
          );
        })}
      </div>
      {loading && (
        <div className="spinner-border text-danger spin" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      <h1 className="headline">Top Headlines</h1>
      <div>
        <img className="img2 overlay" src={bg} alt="" />
      </div>

      <div className="nav">
        <div className={isScrolled ? "navbar2" : "navbar"}>
          <div className="container1">
            <div className="left">
              <img className="logo" src={logo} alt="" />
              <span>
                <Link className="text_head" aria-current="page" to="/">
                  Homepage
                </Link>
              </span>
              <span>
                <Link className="text_head" to="/business">
                  Business
                </Link>
              </span>
              <span>
                <Link className="text_head" to="/entertainment">
                  Entertainment
                </Link>
              </span>
              <span>
                <Link className="text_head" to="/health">
                  Health
                </Link>
              </span>
              <span>
                <Link className="text_head" to="/science">
                  Science
                </Link>
              </span>
              <span>
                <Link className="text_head" to="/sports">
                  Sports
                </Link>
              </span>
              <span>
                <Link className="text_head" to="/technology">
                  Technology
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
