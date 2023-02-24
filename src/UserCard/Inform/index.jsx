function Inform(props) {
  return (
    <div className="cols">
     <h2 className="tweets"> tweets 
     <li>{props.user.tweets}</li>
     </h2> 
     <h2 className="subscribers"> subscribers 
     <li>{props.user.subscribers}</li>
     </h2>
     <h2 className="subscriptions">subscriptions 
     <li>{props.user.subscriptions}</li>
     </h2>
    </div>
  );
}

export default Inform;