import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
// import { Route, Link } from 'react-router-dom';
// import axios from 'axios';
// import axios from '../../axios';

import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
// import NewPost from './NewPost/NewPost';
// import FullPost from './FullPost/FullPost';
const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true
    }

    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts" exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: 'red',
                                    textDecoration: 'underline'
                                }}>Home</NavLink></li>
                            {/* <li><Link to="/">Home</Link></li> */}
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <p>Home</p>} />
                <Route path="/" render={() => <p>Home 2</p>} /> */}
                <Switch>
                    { this.state.auth ? <Route path="/posts" component={Posts} />: null}
                    <Route path="/new-post" component={AsyncNewPost} />
                    <Route render={() => <h1>Not found</h1>} />
                    {/* <Redirect from="/" to="/posts" /> */}
                    {/* <Route path="/" component={Posts} /> */}
                    {/* <Route path="/:id" exact component={FullPost} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;