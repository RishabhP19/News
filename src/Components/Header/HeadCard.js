import React from "react";

import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { IconContext } from "react-icons";

import "./HeadCard.css";

const HeadCard = (props) => {
  return (
    <div>
      {!props.loading && (
        <div
          className=" mb-3"
          style={{
            maxWidth: "540px",
            position: "absolute",
            top: "150px",
            left: "300px",
          }}
        >
          <div className="row g-5">
            <div className="col-md-8 ">
              <img
                src={props.imageUrl}
                className="img-fluid profile "
                alt="..."
              />
            </div>
            <div className="col-md-4">
              <div className="card-body  cardBody">
                <span className="badge rounded-pill bg-danger">
                  {props.source}
                </span>
                <p className="card-text">{props.title}</p>
                <p className="card-text">{props.desc}</p>
                <p className="card-text">
                  <small className=" text_head1">
                    By- {props.author}, Published At-
                    {new Date(props.publishedAt).toGMTString()}
                  </small>
                </p>
                <a
                  href={props.newsurl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-danger btn-sm"
                >
                  Read More!!
                </a>
              </div>
            </div>
          </div>
          <button
            disabled={props.page <= 1}
            className="carousel-control-prev but_1"
            type="button"
            onClick={() => props.handlePrevClick()}
          >
            <span aria-hidden="true">
              <IconContext.Provider value={{ color: "#DC3545", size: "75px" }}>
                <div>
                  <MdNavigateBefore />
                </div>
              </IconContext.Provider>
            </span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next but_2 "
            type="button"
            onClick={() => props.handleNextClick()}
          >
            <span className="icon_red" aria-hidden="true">
              <IconContext.Provider value={{ color: "#DC3545", size: "75px" }}>
                <div>
                  <MdNavigateNext />
                </div>
              </IconContext.Provider>
            </span>
            <span className="visually-hidden ">Next</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default HeadCard;
