import iso from 'simple-iso';
import express from 'express'
import exphbs from 'express-handlebars';
import React from 'react';
import ReactDOM from 'react-dom/server';
import postActions from './actions/postActions';
import PostList from './components/PostList';
import flux from './boilerplate/flux';

const app = express();
const port = process.env.PORT || 3000;

app.engine('handlebars', exphbs());
app.set('views', './build');
app.set('view engine', 'handlebars');
app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
	res.status(200).render('view', {
		posts: ReactDOM.renderToString(<PostList flux={flux} />),
		appState: iso.serialise()
	});
}).listen(port);

flux.actions.listen();
iso.add(flux.store('PostStore'));

console.info(`Listening on ${port}`);