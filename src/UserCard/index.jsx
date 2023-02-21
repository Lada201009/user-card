import React from 'react';
import Avatar from './Avatar';
import Inform from './Inform';


function UserCard() {
  let avatar =
  {
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl97b4mFpZx50dTK1QT_kyOHHiEcA2e8jx2Oflb1QIh0AFCo9ohvKOR6r-g1RmHqwFhRo&usqp=CAU',
    name: 'Emma Braun'};
  let inform =
    {
      tweets: 341,
      subscribers: 3421,
      subscriptions: 6254
    };
return (
    <div className='container'>
       <div className='blockavatar'>
         <Avatar user={avatar} />
         <h1>Emma Braun</h1>
       </div>
       <div className='information'><Inform user={inform} />
       </div>
    </div>
  )
};



export default UserCard;
