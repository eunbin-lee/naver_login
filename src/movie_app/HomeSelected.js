import React from "react";

class HomeSelected extends React.Component {
  render() {
    const { dish } = this.props;
    return (
      <div>
        <h1>{dish.genre}</h1>
        <div className="forBtn">
          <button
            className="left btn"
            onClick={
              ("click",
              (e) => {
                e.preventDefault();
                e.target.nextSibling.scrollLeft -= 300;
              })
            }
          >
            &lt;
          </button>
          <div className="genre">
            {dish.movie.map((dish) =>
              dish.backdrop_path ? (
                <div className="genre_contents">
                  <img
                    src={`http://i2.wp.com/image.tmdb.org/t/p/w780/${dish.poster_path}`}
                    alt={dish.poster_path}
                    className="imgsrc"
                  />
                  {dish.original_title}
                </div> //content
              ) : null
            )}
          </div>
          <button
            className="right btn"
            onClick={
              ("click",
              (e) => {
                e.preventDefault();
                e.target.previousSibling.scrollLeft += 300;
              })
            }
          >
            &gt;
          </button>
        </div>
      </div>
    );
  }
}

export default HomeSelected;
