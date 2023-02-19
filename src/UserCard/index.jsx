import React from 'react';
import Avatar from './Avatar';
import Inform from './Inform';

function UserCard(props) {
  let author = "https://klike.net/uploads/posts/2019-12/1576662785_4.jpg alt Alisa Brant"
  return (
    <>
     <div className='UserPhoto'>
     <Avatar user={props.author} />
     </div>
     <div className='CommentDate'>
     <Inform user={props.date} />
     </div>
    </>
  )
}

export default UserCard;
