
import React from 'react';
import PropTypes from 'prop-types';

export class Text extends React.Component {
    render() {
        return (
            <input type="text" style={{
                display: 'block',
                fontSize: '16px',
                textAlign: 'center',
                paddingTop: "5px",
                paddingBottom: "5px",
                marginTop: "3px",
                marginBottom: "3px",
                borderWidth: "1px",
                borderColor: "black",
                height: "40px",
                width: "100%"
            }} value={this.props.value} onChange={(e)=>{
                this.props.onChange(e.target.value);
            }}></input>
        );
    }
}

Text.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func 
  };