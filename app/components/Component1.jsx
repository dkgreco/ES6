import React from 'react';

let ComponentOne;
ComponentOne = React.createClass({
    getDefaultProps: function () {
        "use strict";
        return {
            count: 10
        }
    },
    getInitialState: function () {
        "use strict";
        return {
            count: this.props.count
        };
    },
    propTypes: {
        count: React.PropTypes.number
    },
    onClick: function () {
        "use strict";
        this.setState({
            count: this.state.count + 1
        })
    },
    render: function () {
        "use strict";
        return (
            <div>
                <h3>Component One using React.createClass</h3>
                <p>Current Count: {this.state.count}</p>
                <button className="button" onClick={this.onClick}>Increment Count</button>
            </div>
        )
    }
});

export default ComponentOne;