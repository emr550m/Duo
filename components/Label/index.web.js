
import React from 'react';

export class Label extends React.Component {
    render() {
        return (
            <div style={{
                backgroundColor: 'red',
                display: 'block',
                fontSize: '16px',
                textAlign: 'center',
                paddingTop: "5px",
                paddingBottom: "5px"
            }}>{this.props.children}</div>
        );
    }
}