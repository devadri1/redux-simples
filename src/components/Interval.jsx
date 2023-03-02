import './Interval.css'
import React from 'react'
import Card from './Card'

const Interval = props => {

    const { min, max, onMinChanged, onMaxChanged } = props

    return (
        <Card title='Interval de Números' red>
            <div className="Interval">
                <span>
                    <strong>Mínimo: </strong>
                    <input type="number" value={min} 
                        onChange={e => onMinChanged(+e.target.value)}/>
                </span>
                <span>
                    <strong>Máximo: </strong>
                    <input type="number" value={max} 
                        onChange={e => onMaxChanged(+e.target.value)}/>
                </span>
            </div>
        </Card>
    )
}

export default Interval