import React from 'react'

import Card from './Card'

const Media = props => {
    
    return (
        <Card title='Media dos Números' green>
            <div className="Media">
                <span>
                    <span>Resultado: </span>
                    <strong>{10}</strong>
                </span>
            </div>
        </Card>
    )
}

export default Media