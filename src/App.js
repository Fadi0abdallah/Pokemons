import './App.css';
import Header from './Header';
import Footer from './Footer';
import LastCapPokemons from './LastCapPokemons';
import FirePokemons from './FirePokemons';
import RandomPokmon from './RandomPokemon';
import ListAllPokemons from './ListAllPokemos';

function App() {
  const pokemonsData = [
    {
        id: 1,
        name: "Bulbasaur",
        type: "Grass",
        capturedAt: "2021-09-01",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    },
    {
        id: 2,
        name: "Ivysaur",
        type: "Grass",
        capturedAt: "2021-09-02",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
    },
    {
        id: 3,
        name: "Venusaur",
        type: "Grass",
        capturedAt: "2021-09-12",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
    },
    {
        id: 4,
        name: "Charmander",
        type: "Fire",
        capturedAt: "2021-09-20",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    },
    {
        id: 5,
        name: "Charmeleon",
        type: "Fire",
        capturedAt: "2021-09-05",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
    },
    {
        id: 6,
        name: "Charizard",
        type: "Fire",
        capturedAt: "2021-09-06",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
    },
    {
        id: 7,
        name: "Squirtle",
        type: "Water",
        capturedAt: "2021-10-07",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    },
    {
        id: 8,
        name: "Wartortle",
        type: "Water",
        capturedAt: "2022-09-08",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
    },
    {
        id: 9,
        name: "Blastoise",
        type: "Water",
        capturedAt: "2023-09-09",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
    },
    {
        id: 10,
        name: "Caterpie",
        type: "Bug",
        capturedAt: "2021-10-10",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
    },
];

  return (
   <>
   <Header />
   <LastCapPokemons  pokemons = {pokemonsData}/>
   <RandomPokmon   pokemons = {pokemonsData}/>
   <FirePokemons   pokemons = {pokemonsData}/>
   <ListAllPokemons pokemons={pokemonsData}/>
   <Footer />
   
   </>
  );
}

export default App;
