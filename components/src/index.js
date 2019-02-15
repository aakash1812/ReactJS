 import React from 'react';
 import ReactDOM from 'react-dom';
 import faker from 'faker';
 import CommentDetail from './CommentDetail';
 import ApproveCard from './ApprovalCard';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard><div><h1>Warning !</h1></div>Are you sure ?<div><ul><li>A</li><li>B</li><li>C</li></ul></div></ApprovalCard>
            <ApproveCard><CommentDetail avatar={faker.image.avatar()} author="Sam" timeAgo="Today at 5:30 PM" content="Nice Blog Post !"/></ApproveCard>    
            <ApproveCard><CommentDetail avatar={faker.image.avatar()} author="Alex" timeAgo="Today at 9:15 AM" content="Nice Blog Post !"/></ApproveCard>
            <ApproveCard><CommentDetail avatar={faker.image.avatar()} author="Jane" timeAgo="Yesterday at 10:00 PM" content="Nice Blog Post !"/></ApproveCard>  
        </div>
    );
};



ReactDOM.render(<App />, document.querySelector('#root'));

