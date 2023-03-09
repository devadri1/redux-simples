import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

const Sorteio = props => {
    const { numeros } = props
    const sorteio = parseInt(Math.random() * (numeros.max - numeros.min)) + numeros.min
    return (
        <Card title='Sorteio de um Número' purple>
            <div className="Sorteio">
                <span>
                    <span>Resultado: </span>
                    <strong>{sorteio}</strong>
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = (state) => {
    return {
        numeros: state.numeros
    }
}

export default connect(mapStateToProps)(Sorteio)