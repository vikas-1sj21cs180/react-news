import React, { useState } from 'react'

function Newsmatter(props) {
    return (
        // let {title, description}=this.props
        <div className='command'>
            <div className="card">
                <div style={{display:'flex',
                    justifyContent:'flex-end',
                    position:'absolute',
                    right:'0'
                }}>
            {/* <span className="position-absolute top-0 start-10 translate-middle badge rounded-pill bg-danger" style={{ marginRight:"20px", left:'100%',zIndex:1}}>{props.source}</span> */}
             {/* <span className="badge bg-danger">{props.source}</span> */}
             <span class="badge rounded-pill bg-danger" style={{left:'100%',zIndex:1}}>{props.source}</span>
               </div>
                <img src={!props.urlToImage ? "https://thumbs.dreamstime.com/b/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available-236105299.jpg" : props.urlToImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text"><small className="text-muted">By {!props.author ? "unknown" : props.author} on {new Date(props.publishedAt).toGMTString()}</small></p>
                    <a href={props.url} target='_blank' className="btn btn-primary">Read more</a>
                </div>
            </div>
         </div>
    )
}

export default Newsmatter