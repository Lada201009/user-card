function Inform(props) {
  return (
    <h2> tweets {props.user.tweets}   subscribers  {props.user.subscribers} subscriptions  {props.user.subscriptions}</h2>
  );
}

export default Inform;