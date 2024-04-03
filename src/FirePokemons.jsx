const FirePokemons = ({ pokemon }) => {

    const firePokemonby = pokemon.filter((Element) => {
        return Element.type == "Fire"

    })
    return (

        <article>
            <h1> Fire Pokemon</h1>
            {
                firePokemonby.map((elementFire) => {
                    return (
                        <div>
                            <h2>{elementFire.name}</h2>
                            <img src={elementFire.image} />
                        </div>
                    )
                })



            }


        </article>
    )

}
export default FirePokemons