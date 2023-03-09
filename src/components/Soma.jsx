import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

const Soma = props => {
    const { numeros } = props
    return (
        <Card title='Soma dos Números' blue>
            <div className="Soma">
                <span>
                    <span>Resultado: </span>
                    <strong>{numeros.min + numeros.max}</strong>
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

export default connect(mapStateToProps)(Soma)