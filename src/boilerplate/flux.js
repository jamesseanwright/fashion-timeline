import PostStore from '../stores/PostStore';
import postActions from '../actions/postActions';
import { Flux } from 'fluxxor';

const flux = new Flux({ PostStore: new PostStore() }, postActions);

export default flux;