import React from 'react'

import Card from './Card'

const Media = props => {
    const { min, max } = props
    const media = (min + max) / 2

    return (
        <Card title='Media dos Números' green>
            <div className="Media">
                <span>
                    <span>Resultado: </span>
                    <strong>{media} </strong>
                </span>
            </div>
        </Card>
    )
}

export default Media