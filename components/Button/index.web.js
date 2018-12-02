
import React from 'react';

export class Button extends React.Component {
    render() {
        return (
            <button style={{
                marginRight: "20px",
                marginLeft: "20px",
                marginTop: "10px",
                paddingTop: "10px",
                paddingBottom: "10px",
                backgroundColor: "#FFA500",
                borderRadius: "3px",
                borderWidth: "1px",
                borderColor: "#fff",
                color:'#fff',
                fontSize: "16pt",
                textAlign:'center',
                width:"95%"
            }} onClick={this.props.onClick}>{this.props.children}</button>
        );
    }
}