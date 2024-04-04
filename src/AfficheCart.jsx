const AfficheCart = ({ cart , imgdisplay }) => {
 
    return (
        <div className="last">
            <h2>{cart.name}</h2>
          {  imgdisplay && <img src={cart.image} />} 
            <h3> Type :{cart.type}</h3>
        </div>
    )


}

export default AfficheCart