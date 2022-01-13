import React from 'react';

import './App.scss';
import Header from './Components/Layout/Header';
import Content from './Components/Layout/Content';


// const CommentListWithSubscription = withSubscription(
//   CommentList,
//   (DataSource) => DataSource.getComments()
// );

// const BlogPostWithSubscription = withSubscription(
//   BlogPost,
//   (DataSource, props) => DataSource.getBlogPost(props.id)
// );




function App() {

  return (
    <div className="App">
      
      <Header />
      <Content />
      
    </div>
  );
}

export default App;


