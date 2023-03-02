import React from 'react'

import Card from './Card'

const Soma = props => {

    const { min, max } = props
    const soma = (min + max)

    return (
        <Card title='Soma dos Números' blue>
            <div className="Soma">
                <span>
                    <span>Resultado: </span>
                    <strong>{soma}</strong>
                </span>
            </div>
        </Card>
    )
}

export default Soma