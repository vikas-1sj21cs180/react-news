import React, { useState, useEffect } from 'react';
import Newsmatter from './Newsmatter';
import Spinner from './spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

function News(props) {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [pagesize, setpagesize] = useState(props.pagesize);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    // const [flagProcess, setFlagProcess] = useState(true);

    props.setProgress(0);
    
    const fetchData = async (page) => {
        // setLoading(true);
        props.setProgress(30) 
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&pageSize=${pagesize}&page=${page}&apiKey=d9b48713b91147d0b81b027e48b1b165`;
        const response = await fetch(url);
        const data = await response.json();
        setArticles((prevArticles) => [...prevArticles, ...data.articles]);
        setHasMore(data.articles.length > 0);
        setLoading(false);
    };

    useEffect(() => {
        fetchData(page);
    }, [page]);

    useEffect(() => {
        document.title = `${props.category}-newstalk`;
    });

        props.setProgress(50);
        props.setProgress(80);
      
        props.setProgress(100);
            
    const fetchMoreData = () => {
        setPage((prevPage) => prevPage + 1);
        props.setProgress(false);
    };

    return (
        <div className='container'>
            <h1 className='text-center' style={{ margin: "25px" }}>NewsTalk - Top Headlines on {props.category}</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<Spinner />}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>!Thank you!</b>
                    </p>
                }
            >
                <div className='row d-flex justify-content-evenly'>
                    {articles.map((article, index) => (
                        <div className='col-md-4' key={index}>
                            <Newsmatter
                                title={article.title ? article.title : ""}
                                description={article.description ? article.description : " "}
                                urlToImage={article.urlToImage}
                                url={article.url}
                                author={article.author}
                                publishedAt={article.publishedAt}
                                source={article.source.name}
                            />
                        </div>
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    );
}

News.defaultProps = {
    country: "in",
    pagesize: 3,
    category: "general"
};

News.propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
};

export default News;
