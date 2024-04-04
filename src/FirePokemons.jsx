import AfficheCart from "./AfficheCart"
const FirePokemons = ({ pokemons }) => {

    const firePokemonby = pokemons.filter((Element) => {
        return Element.type == "Fire"

    })
    return (
        <>
            <h1> Fire Pokemon</h1>
            <article className="lastarticle">
                {
                    firePokemonby.map((pokemonsFire) => {
                        return (
                            <AfficheCart cart={pokemonsFire}  imgdisplay={true}/>
                        )
                    })



                }


            </article>
        </>
    )

}
export default FirePokemons