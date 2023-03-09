import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

const Media = props => {
    const { numeros } = props
    const media = (numeros.min + numeros.max) / 2
    return (
        <Card title='Media dos Números' green>
            <div className="Media">
                <span>
                    <span>Resultado: </span>
                    <strong>{media}</strong>
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

export default connect(mapStateToProps)(Media)