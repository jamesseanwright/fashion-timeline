import React from 'react';
import ReactDOM from 'react-dom';
import PostList from '../components/PostList';
import flux from '../boilerplate/flux';

const postsContainer = document.querySelector('.posts');
ReactDOM.render(<PostList flux={flux} />, postsContainer);
flux.actions.listen();