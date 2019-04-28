import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:00 PM"
          content="Nice post"
          avatar={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 9:00 AM"
          content="Great to hear"
          avatar={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 12:00 PM"
          content="Great job!"
          avatar={faker.image.avatar()} />
      </ApprovalCard>


    </div>
  );
};

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);
