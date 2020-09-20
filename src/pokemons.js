// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
const getAllFirePokemons = (array) => {
    return array.filter((pokemon) => pokemon.type.includes("Fire"))
}

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
const shortestPokemon = (array) => {
    if (!array.length) return 0;
    else {
        let shortestPokemonHeight = Infinity;
        let shortestPokemonName = " ";

        array.forEach((pokemon) => {

            let pokemonHeightNumber = Number(pokemon.height.split(" ")[0]);

            if (pokemonHeightNumber < shortestPokemonHeight) {
                shortestPokemonHeight = pokemonHeightNumber
                shortestPokemonName = pokemon.name
            }
        })
        return shortestPokemonName
    }
}

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
const candyAverage = (array) => {
    if (!array.length) return 0
    else {
        let avg = array.reduce((acc, pokemon) => {
            return acc + (pokemon.candy_count || 0)
        }, 0)
        return Number((avg / array.length).toFixed(2))
    }
}

// Iteration 4: images for the first 10 `Ground`  Pokemons
const getGroundPokeImg = (array) => {
    if (!array.length) return 0
    else {
        return array.filter((pokemon) => {
            return pokemon.type.includes("Ground")
        }).map((pokemon) => {
            return pokemon.img
        }).slice(0, 10)
    }
}

// Iteration 5: Find all pokemon names heavier than Pikachu
const getHeavyPokemons = (array) => {
    let newPokemons = JSON.parse(JSON.stringify(array));
    if (!newPokemons.length) return 0
    else {
        let heavierThanPikachuArray = []

        let pikachuWeight = newPokemons.filter((pokemon) => {
            return pokemon.name.includes("Pikachu")
        }).map((pokemon) => {
            return pokemon.weight.split(" ")[0]
        })

        newPokemons.forEach((pokemon) => {
            let pokemonWeight = Number(pokemon.weight.split(" ")[0]);
            if (pokemonWeight > pikachuWeight) {
                heavierThanPikachuArray.push(pokemon.name)
            }
        })
        return heavierThanPikachuArray
    }
}

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names
const orderAlphabetically = (array) => {
    let newPokemons = JSON.parse(JSON.stringify(array));

    newPokemons.sort((a, b) => {
        if (a.name > b.name) {
            return 1
        } else if (a.name < b.name) {
            return -1
        } else {
            return 0
        }
    })
    return newPokemons.map((pokemon) => {
        return pokemon.name
    }).slice(0, 20)
}

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them
const strongPokemons = (array) => {
    return array.filter((pokemon) => {
        return pokemon.weaknesses.length <= 1
    }).map((pokemon) => {
        return pokemon.name
    }).slice(0, 15)
}
console.log(strongPokemons(pokemons));