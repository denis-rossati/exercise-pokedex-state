import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';


class Pokedex extends React.Component {
    constructor(props) {
        super(props)
        this.nextPokemon = this.nextPokemon.bind(this);
        this.state = {
            indexPokemon: 0,
        }
    }

    nextPokemon() {
        if (this.state.indexPokemon === 8) {
            this.setState( _ => ({ indexPokemon: 0 }))
        }

        this.setState((prevState) => ({ indexPokemon: prevState.indexPokemon + 1 }));
    }

    render() {
        return (
            <div className="pokedex">
                
                <section className='pokemonCard'>
                    <Pokemon pokemon={ pokemons[this.state.indexPokemon] } />
                </section>
                <br />
                <button onClick={ this.nextPokemon }>Próximo</button>
            </div>
        );
    }
}

export default Pokedex;