import React from "react";
class MyList extends React.Component {
  state = {
    title: this.props.results,
  };
  // getTitle() {
  //   const { title } = this.state;
  //   for (let i = 0; i < title.length; i++) {
  //     this.setState({ title: this.props.results });
  //   }
  // }
  render() {
    return (
      //API,내가찜한 콘텐츠,검색기능,추천검색어
      <div className="content">
        Bye{this.props.title}
        <img
          src={`http://i2.wp.com/image.tmdb.org/t/p/w780/${this.props.img}`}
          alt={this.props.title}
          className="imgsrc"
        />
      </div>
    );
  }
}
export default MyList;
