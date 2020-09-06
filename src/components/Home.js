import React from "react";
class Home extends React.Component {
  state = {
    title: this.props.results,
  };
  getTitle() {
    const { title } = this.state;
    for (let i = 0; i < title.length; i++) {
      this.setState({ title: this.props.results });
    }
  }
  render() {
    return (
      //API,내가찜한 콘텐츠,검색기능,추천검색어
      <div>Bye{this.props.title}</div>
    );
  }
}
export default Home;
