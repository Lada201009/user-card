function Avatar(props) {
  return (
    <img className='Avatar' 
    src={props.user.photo}
    alt={props.user.name}/>
  );
}

export default Avatar;