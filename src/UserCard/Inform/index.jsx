function Inform(props) {
  return (
    <div className="cols">
     <h2 className="tweets"> tweets{props.user.tweets}</h2>
     <h2 className="subscribers"> subscribers  {props.user.subscribers}</h2>
     <h2 className="subscriptions">subscriptions {props.user.subscriptions}
     </h2>
    </div>
  );
}

export default Inform;