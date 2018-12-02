
import React from 'react';
import PropTypes from 'prop-types';

export class Password extends React.Component {
    render() {
        return (
            <input type="password" style={{
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

Password.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func 
  };