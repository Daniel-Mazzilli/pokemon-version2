/*
  Do not change the line below. If you'd like to run code from this file, you may use the `examplePokemon` variable below to gain access to an array of pokemon.

  Keep in mind that your functions must still have and use a parameter for accepting all pokemon.
*/
const pokemon = require("./pokemon.js");
const examplePokemon = require("./pokemon.js");
// Do not change the line above.

/**
 * getAllPokemonNames()
 * -----------------------------
 * Returns all of  the names from an array of pokemon. If the inputted `pokemon` array is of length 1, throw an error with a message.
 * @param {Object[]} pokemon - An array of pokemon. See the `pokemon.js` file for an example of this array.
 * @returns {string[]|Error} An array of strings, which are pokemon names.
 *
 * NOTE: You must use the `.map()` method.
 * 
 * EXAMPLE:
 *  getAllPokemonNames(pokemon);
 *  //> [
  'bulbasaur',  'ivysaur',    'venusaur',
  'charmander', 'charmeleon', 'charizard',
  'squirtle',   'wartortle',  'blastoise',
  'caterpie',   'metapod',    'butterfree',
  'weedle',     'kakuna',     'beedrill',
  'pidgey',     'pidgeotto',  'pidgeot',
  'rattata',    'raticate',   'spearow',
  'fearow',     'ekans',      'arbok',
  'pikachu',    'raichu',     'sandshrew',
  'sandslash',  'nidoran-f',  'nidorina',
  'nidoqueen',  'nidoran-m',  'nidorino',
  'nidoking',   'clefairy',   'clefable',
  'vulpix',     'ninetales',  'jigglypuff',
  'wigglytuff'
];
 */

function getAllPokemonNames(pokemon) {
  if (pokemon.length === 1) {
    throw `Error: There needs to be more than one element`;
  }
  return pokemon.map(({ name }) => name);
  //reduce version
  // return pokemon.reduce((acc, el) => {
  //   acc = [...acc, el.name];
  //   return acc;
  // }, []);
}

/**
 * checkIfAnyPokemonWeighsLessThan()
 * -----------------------------
 * Returns a boolean, representing whether or not any of the pokemon weighs less than the provided weight.
 * @param {Object[]} pokemon - An array of pokemon. See the `pokemon.js` file for an example of this array.
 * @param {string} [weight= >18] - A weight. Defaults to a number higher than 18.
 * @returns {boolean} Returns `true` if a pokemon exists in the list that weighs less than the provided weight, otherwise returns `false`.
 *
 * NOTE: You must use the `.some()` method.
 *
 * EXAMPLE:
 *  checkIfAnyPokemonWeighsLessThan(pokemon, 60);
 *  //> true
 *
 * EXAMPLE:
 *  checkIfAnyPokemonWeighsLessThan(pokemon, 18);
 *  //> false
 */
function checkIfAnyPokemonWeighsLessThan(pokemon, weight = 19) {
  return pokemon.some((pokemon) => pokemon.weight < weight);
  //reduce version
  // return pokemon.reduce((acc, el) => {
  //   if (el.weight < weight) {
  //     acc = true;
  //   }
  //   return acc;
  // }, false);
}

/**
 * findByName()
 * -----------------------------
 * Returns a pokemon object from an array of objects based on the name. If the name does not match any pokemon, return `null`.
 * @param {Object[]} pokemon - An array of pokemon. See the `pokemon.js` file for an example of this array.
 * @param {string} name - A unique `name`.
 * @returns {Object|null} The pokemon object with the matching `name` or null.
 *
 * NOTE: You must use the `.find()` method.
 * 
 * EXAMPLE:
 *  findByName(pokemon, 36);
 *  //> {
      // clefable
    };
 */
function findByName(pokemon, id) {
  //typo in test. Checks pokeId instead of name
  let val = pokemon.find((el) => el.pokeId === id);
  if (val === undefined) {
    val = null;
  }
  return val;
  //reduce version
  // return pokemon.reduce((acc, el) => {
  //   if(acc !== null){
  //     return acc;
  //   }
  //   if(el.pokeId === id){
  //     acc = el;
  //   }
  //   return acc;
  // }, null);
}

/**
 * filterByType()
 * -----------------------------
 * Returns all pokemon objects with a matching type. Case-insensitive. If no pokemon match the inputted `genre`, return `[]`.
 * @param {Object[]} pokemon - An array of pokemon. See the `pokemon.js` file for an example of this array.
 * @param {string} genre - The type of a pokemon. (e.g. "Fantasy")
 * @returns {Object[]} An array of pokemon where at least one of the types matches the `type` inputted.
 *
 * NOTE: You must use the `.filter()` method.
 * 
 * EXAMPLE:
 *  filterByType(pokemon, "water");
 *  //> [
      {
        // squirtle
        // wartortle
        // blastoise
      }
    ]
 *
 * EXAMPLE:
 *  filterByType(pokemon, "psychic")
 *  //> []
 */
function filterByType(pokemon, genre) {
  return pokemon.filter((poke) => {
    return poke.types.find(
      (el) => el.type.name.toUpperCase() === genre.toUpperCase()
    );
  });

  //reduce version
  // return pokemon.reduce((acc, el) => {
  //   let val = el.types.reduce((acc2, el2) =>{
  //     if(el2.type.name.toUpperCase() === genre.toUpperCase()) {
  //       acc2 = el
  //       return acc2
  //     }
  //   }, undefined)
  //   //console.log(`val: `, val)
  //   if(val !== undefined){
  //         acc.push(val);
  //   }
  //   //console.log(`acc: `, acc)
  //   return acc
  // }, []);

  //JD's version :)
  // return pokemon.reduce((acc, el) => {
  //   const val = el.types.reduce((acc2, el2) => {
  //     if (acc2 != null) return acc2;
  //     if (el2.type.name.toUpperCase() === genre.toUpperCase()) {
  //       acc2 = el;
  //       return acc2;
  //     }
  //   }, null);

  //   if (val !== undefined) {
  //     return [...acc, val];
  //   }

  //   return acc;
  // }, []);
}
//console.log(filterByType(pokemon, `water`));

/**
 * checkMinBaseExperience()
 * -----------------------------
 * Returns either true or false depending whether all pokemon have a minimum metascore. If the pokemon array is empty, throw an error with a message.
 * @param {Object[]} pokemon - An array of pokemon. See the `pokemon.js` file for an example of this array.
 * @param {number} baseExperience - A minimum metascore number. (e.g. 80)
 * @returns {Boolean|Error} A boolean
 *
 * NOTE: You must use the .every()` method.
 *
 * EXAMPLE:
 *  checkMinBaseExperience(pokemon, 90));
 *  //>  false
 */

function checkMinBaseExperience(pokemon, baseExperience) {
  return pokemon.every((el) => el.base_experience > baseExperience);
  //reduce method
  // return pokemon.reduce((acc, { base_experience }) => {
  //   if(base_experience <= baseExperience){
  //     acc = false;
  //   }
  //   return acc;
  // }, true);
}

/**
 * findType()
 * -----------------------------
 * Returns an array of pokemon where the key is the name and the value is the FIRST type in the array of types. If the pokemon array is empty, throw an error
 * @param {Object[]} pokemon - An array of pokemon. See the `pokemon.js` file for an example of this array.
 * @returns {Boolean|Error} An array of pokemon || Error
 *
 * NOTE: You must use the .map() & find() methods.
 *
 * EXAMPLE:
 *  findType(pokemon));
 *  //>  
 *  [
      { bulbasaur: 'grass' },
      { ivysaur: 'grass' },
      { venusaur: 'grass' },
      { charmander: 'fire' },
      { charmeleon: 'fire' },
      { charizard: 'fire' },
      { squirtle: 'water' },
      { wartortle: 'water' },
      { blastoise: 'water' },
      { caterpie: 'bug' },
      { metapod: 'bug' },
      { butterfree: 'bug' },
      { weedle: 'bug' },
      { kakuna: 'bug' },
      { beedrill: 'bug' },
      { pidgey: 'normal' },
      { pidgeotto: 'normal' },
      { pidgeot: 'normal' },
      { rattata: 'normal' },
      { raticate: 'normal' },
      { spearow: 'normal' },
      { fearow: 'normal' },
      ...
    ]
 */

const findType = (pokemon) => {
  if (!pokemon.length) {
    throw `Error: There are no pokemon`;
  }
  //different way
  // return pokemon.map((el) =>{
  //   let val = undefined;
  //   el.types.find((inEl) => {
  //     val = inEl.type.name;
  //     return val;
  //   })
  //   return {[el.name] : val};
  // })

  //better way to solve
  return pokemon.map((el) => {
    const slotOne = el.types.find((type) => type.slot === 1);
    return { [el.name]: slotOne.type.name };
  });
};

module.exports = {
  getAllPokemonNames,
  checkIfAnyPokemonWeighsLessThan,
  findByName,
  filterByType,
  checkMinBaseExperience,
  findType,
};
