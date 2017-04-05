import React from 'react';

let isAdmin = true,
/*    adminComponent = Component => {
    "use strict";
        return class Admin extends React.Component {
            render() {
                if(isAdmin) {
                    return (
                        <div className="callout secondary">
                            <p className="alert label">Private Admin Information</p>
                            <Component {...this.props}/>
                        </div>
                    )
                }
                return null;
            }
        };
    };*/

    adminComponent = Component => {
        "use strict";
        return class Admin extends Component {
            componentDidUpdate() {
                console.log('Admin Component Updated!');
                if(super.componentDidUpdate) {
                    super.componentDidUpdate();
                }
            }
            render() {
                if(isAdmin) {
                    return (
                        <div className="callout secondary">
                            <p className="alert label">Private Admin Information</p>
                            {super.render()}
                        </div>
                    )
                }
                return null;
            }
        };
    };

class ComponentTwo extends React.Component {
    componentDidUpdate () {
        console.log('ComponentTwo Updated!');
    }
    constructor (props) {
        super(props);
        this.state = {
            count: props.count
        };
        this.onClick = this.onClick.bind(this);
    }
    onClick () {
        this.setState({
           count: this.state.count + 1
        });
    }
    render () {
        return (
            <div>
                <h3>Component Two using extension of React Component Class</h3>
                <p>Current Count: {this.state.count}</p>
                <button className="button" onClick={this.onClick}>Increment Count</button>
            </div>
        )
    }
}

ComponentTwo.defaultProps = {
  count: 25
};

ComponentTwo.propTypes = {
  count: React.PropTypes.number
};

export default adminComponent(ComponentTwo);