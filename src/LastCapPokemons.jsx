const LastCapPokemons = ({ pokemon }) => {

    let lastpokemonArrey = pokemon.sort((a, b) => {

        return new Date(a.capturedAt) - new Date(b.capturedAt)
        console.log(lastpokemon)

    })
    const lastpokemon = lastpokemonArrey.slice(0, 3)



    return (
        <article className="lastarticle">
            <h1>Last Pokemons capturés</h1>
            {
                lastpokemon.map((Element) => {
                    return (<div className="last">
                        <h2>{Element.name}</h2>
                        <img src={Element.image} />
                    </div>
                    )
                })

            }


        </article>



    )
}
export default LastCapPokemons