import React, {useState} from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {
    const [sortedby, setSortedBy] = useState();

    let refinedArticles = function(){
        if(sortedby === 0){
            return articles.sort((a,b) => (b.upvotes > a.upvotes) ? 1 : ((a.upvotes > b.upvotes) ? -1 : 0));
        }else{
            return articles.sort((a,b) => (new Date(b.date) > new Date(a.date)) ? 1 : ((new Date(a.date) > new Date(b.date)) ? -1 : 0));
        }
    }
    articles  = refinedArticles();
    
    //2nd method 
    // const [articleList, setArticleList] = useState(articles);

    // const sortByUpvote = () => {
    //     let newArticle = [];
    //     Object.assign(newArticle, articleList);
    //     newArticle.sort((a,b) => {
    //         if(a.upvotes > b.upvotes)
    //             return -1;
    //         if(a.upvotes < b.upvotes)
    //             return 1;
    //         else 
    //             return 0;
    //     })
    //     setArticleList(newArticle);
    // }

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button onClick={()=>refinedArticles(setSortedBy(0))} data-testid="most-upvoted-link" className="small">Most Upvoted</button>
                <button onClick={()=>refinedArticles(setSortedBy(1))} data-testid="most-recent-link" className="small">Most Recent</button>
            </div>
            <Articles articles={articles}/>
        </div>
    );

}

export default App;