import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Books from '../pages/books';
import BookDetail from '../pages/detailBook';

class Routing extends Component {
    render() {
        return (
            <Router>
                <Route exact path='/' component={Books} />
                <Route exact path='/bookdetail' component={BookDetail} />
            </Router>
        )
    }
}

export default Routing;