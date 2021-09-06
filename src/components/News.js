import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import LoadingSpinner from "./LoadingSpinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      load: true,
      totalResults:0
    };
  }

  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=10`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      load: false,
    
    });
    this.props.setProgress(100);
  }

//   handleNextPage = async () => {
//     if (this.state.page + 1 > Math.ceil(this.totalResults / 10)) {
//     } else {
//       this.setState({
//         load: true,
//         page: this.state.page + 1,
//       });
//       this.updateNews();
//     }
//   };

//   handlePreviousPage = async () => {
//     this.setState({S
//       load: true,
//       page: this.state.page - 1,
//     });
//     this.updateNews();
//   };

fetchMoreData = async() => {
    this.setState({page:this.state.page+1});
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=10`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
    
  };

  componentDidMount() {
    this.updateNews();
  }

  render() {
    return (
      <>
        <div className="container d-flex justify-content-center my-3">
          <h1 style={{marginTop:'50px'}}>Top HeadLines - {this.props.category}</h1>
        </div>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<LoadingSpinner/>}>
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div key={element.url} className="col-md-4">
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      urlToImage={element.urlToImage}
                      url={element.url}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
