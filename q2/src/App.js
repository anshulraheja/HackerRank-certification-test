import React, {useState}from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';
// import {articles} from './App.test'

const title = "Sorting Articles";

function App({articles}) {
    const [sortArray, setSortArray] = useState(articles);

    function sortByDate (){
        setSortArray( sortArray => {
        return  setSortArray(articles.sort((a, b) => new Date(...a.date.split('-')) - new Date(...b.date.split('-'))).reverse());         
        }) 
    }

    function sortByUpvotes(){
        // console.log('in')
        // let a = articles.sort((a, b) =>  parseInt(b.upvotes) - parseInt(a.upvotes))
        // console.log(a);
        setSortArray( sortArray => {
            return  setSortArray(articles.sort((a, b) => parseInt(b.upvotes) - parseInt(a.upvotes)));
        }) 
    }

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={sortByUpvotes}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick={sortByDate}>Most Recent</button>
            </div>
            <Articles articles={sortArray}/>
        </div>
    );

}

export default App;
