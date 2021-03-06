import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import CounterPage from './components/counter/CounterPage';
import PostPage from './components/post/PostPage';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
        <Route path="courses" component={CoursesPage} />
        <Route path="counter" component={CounterPage} />
        <Route path="posts" component={PostPage} />
    </Route>
);