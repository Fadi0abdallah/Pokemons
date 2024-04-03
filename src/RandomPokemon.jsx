import AfficheCart from "./AfficheCart"
const RandomPokmon = ({pokemons}) => {

    const randomPokemonby = pokemons[Math.round((Math.random() * 9))]


    return (

        <article className="miarticle">
            <h1>Random Pokemon</h1>
            <AfficheCart cart = {randomPokemonby}/>

        </article>
    )

}
export default RandomPokmon