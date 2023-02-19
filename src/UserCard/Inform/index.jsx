import React from 'react'
function Inform(props) {
  return (
    <div>
    <h2>tweets{props.tweets}</h2>
    <h2>subscribers{props.subscribers}</h2>
    <h2>subscriptions{props.subscriptions}</h2>
  </div>
  );
}

export default Inform;