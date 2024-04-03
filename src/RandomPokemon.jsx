const RandomPokmon = ({pokemon}) => {

    const randomPokemonby = pokemon[Math.round((Math.random() * 9))]


    return (

        <article>
            <h1>Random Pokemon</h1>
            <h2>{randomPokemonby.name}</h2>
            <img src={randomPokemonby.image} />

        </article>
    )

}
export default RandomPokmon