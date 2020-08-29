import React from 'react';
import './Movie.css';

class Home extends React.Component {
    state = {
        results: this.props.results,
        poster: `http://i2.wp.com/image.tmdb.org/t/p/w780/${this.props.poster}`,
    };
    getTitle() {
        const { results } = this.state;
        for (let i = 0; i < results.length; i++) {
            this.setState({ results: this.props.results });
        }
    }
    render() {
        return (
            //API,내가찜한 콘텐츠,검색기능,추천검색어
            <div className="movies_container">
                <div className="movies_movie">
                    <img src={this.state.poster} alt={this.props.title} />
                    <div className="movie_data">
                        <p className="movie_title">{this.props.title}</p>
                        {/* <ul className="movies_genres">
                    {this.state.genre.map((genre, index) => (
                        <li key={index}>{genre}</li>
                    ))}
                </ul> */}
                        <p className="movie_rating">{this.props.rating}</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;
