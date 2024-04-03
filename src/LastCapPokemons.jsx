import AfficheCart from "./AfficheCart"

const LastCapPokemons = ({ pokemons }) => {

    let lastpokemonArrey = pokemons.sort((a, b) => {

        return new Date(a.capturedAt) - new Date(b.capturedAt)
        console.log(lastpokemon)

    })
    const lastpokemon = lastpokemonArrey.slice(0, 3)



    return (
        <>
            <h1>Last Pokemons capturés</h1>

        <article className="lastarticle">
            {
                lastpokemon.map((Element) => {
                    return (
                         <AfficheCart cart={Element} />
                    
                       
                    )
                })

            }


        </article>
        </>


    )
}
export default LastCapPokemons