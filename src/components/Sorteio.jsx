import React from 'react'

import Card from './Card'

const Sorteio = props => {

    return (
        <Card title='Sorteio de um Número' purple>
            <div className="Sorteio">
                <span>
                    <span>Resultado: </span>
                    <strong>{10}</strong>
                </span>
            </div>
        </Card>
    )
}

export default Sorteio