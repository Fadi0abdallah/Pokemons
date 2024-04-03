const AfficheCart = ({cart}) => {
    return (
        <div className="last">
            <h2>{cart.name}</h2>
            <img src={cart.image} />
        </div>
    )


}

export default AfficheCart