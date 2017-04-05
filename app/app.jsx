const React = require('react'),
    ReactDOM = require('react-dom'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router');

import ComponentOne from './components/Component1.jsx';
import ComponentTwo from './components/Component2.jsx';

//Load Foundation and Custom CSS
require('style!css!sass!applicationStyles');
$('document').foundation();

ReactDOM.render(
    <div>
        <ComponentOne count={15}/>
        <ComponentTwo count={35}/>
    </div>,
    document.getElementById('app')
);