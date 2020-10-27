import React from "react";
import ReactDOM from "react-dom";
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui comments container">
      <ApprovalCard>
        <CommentDetail 
          author="Sam" 
          timeAgo="Today at 4:45PM"   
          commentItself="Hi, I am Sam. Good to meet you!"  
          avatar={faker.image.avatar()} 
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="Lindsay" 
          timeAgo="Yesterday at 1:22AM"
          commentItself="I think Liam is god dame attractive!"
          avatar={faker.image.avatar()}  
        />
      </ApprovalCard>
    </div>
  );
}; 



ReactDOM.render(<App />, document.querySelector("#root"));
