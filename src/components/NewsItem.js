import React, { Component } from 'react'

export class NewsItem extends Component {

    

    render() {
        let {title,description,urlToImage, url} = this.props;
        return  (
            <div className="my-3">
                                <div className="card" >
                                    
                        <img src={urlToImage} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description?description.length>30?description.slice(0,30):description:"Error"}</p>
                            <div className="container d-flex justify-content-center">
                            <a href={url}  rel="noreferrer" target="_blank" className="btn btn-dark align-self-end">Show More</a>
                            </div>
                            
                        </div>
                    </div> 
            </div>    
        
        )
    }
}

export default NewsItem
