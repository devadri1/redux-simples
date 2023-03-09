import './Interval.css'
import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'
import { alterarNumeroMinimo, alterarNumMax } from '../store/actions/numeros'

const Interval = props => {
    const { numeros, alterarMinimo, alterarMaximo } = props
    return (
        <Card title='Interval de Números' red>
            <div className="Interval">
                <span>
                    <strong>Mínimo: </strong>
                    <input type="number" value={numeros.min} onChange={e => alterarMinimo(+e.target.value)}/>
                </span>
                <span>
                    <strong>Máximo: </strong>
                    <input type="number" value={numeros.max} onChange={e => alterarMaximo(+e.target.value)}/>
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

const mapDispatchToProps = (dispatch) => {
    return {
        alterarMinimo(novoNumero) {
            // action Creator -> action
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        },

        alterarMaximo(novoNumero) {
            const action = alterarNumMax(novoNumero)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Interval)