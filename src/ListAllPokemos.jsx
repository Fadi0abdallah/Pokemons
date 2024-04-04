 import AfficheCart from "./AfficheCart"
 const ListAllPokemons = ({ pokemons }) => {

    return (
        <article className="lastarticle">
                    <h1> List All Pekomons</h1>

            {
                pokemons.map((Element) => {
                    return (
                        <AfficheCart cart={Element}  imgdisplay={false}/>

                    )
                })
            }

        </article>

    )
}
export default ListAllPokemons