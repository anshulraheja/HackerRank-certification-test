import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {applyPolyfills, defineCustomElements} from 'h8k-components/loader';

const ARTICLES = [
  {
    title: "A message to our customers",
    upvotes: 11,
    date: "2011-01-24",
  },
  {
    title: "Alphabet earnings",
    upvotes: 12,
    date: "2012-11-23",
  },
  {
    title: "Artificial Mountains",
    upvotes: 31,
    date: "2013-11-22",
  },
  {
    title: "Scaling to 100k Users",
    upvotes: 14,
    date: "2014-01-21",
  },
  {
    title: "the Emu War",
    upvotes: 51,
    date: "2015-10-21",
  },
  {
    title: "What's SAP",
    upvotes: 16,
    date: "2016-11-21",
  },
  {
    title: "Simple text editor has 15k monthly users",
    upvotes: 71,
    date: "2017-12-31",
  },
];

ReactDOM.render(<App articles={ARTICLES} />, document.getElementById('root'));
registerServiceWorker();

applyPolyfills().then(() => {
    defineCustomElements(window);
})
