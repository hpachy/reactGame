import React, { Component } from 'react'

interface Props {
    
}
interface State {
    
}

export default class Map extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div
            style={{
                width: '800px',
                height: '600px',
                backgroundColor: 'green',
                border: '4px solid brown'
            }}
            />
        )
    }
}
