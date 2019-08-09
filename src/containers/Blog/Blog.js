import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
// import { Route, Link } from 'react-router-dom';
// import axios from 'axios';
// import axios from '../../axios';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
// import FullPost from './FullPost/FullPost';

class Blog extends Component {


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
                    <Route path="/posts" component={Posts} />
                    <Route path="/new-post" component={NewPost} />
                    {/* <Route path="/:id" exact component={FullPost} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;