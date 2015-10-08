import PostStore from '../stores/PostStore';
import PostActions from '../actions/PostActions';
import { Flux } from 'fluxxor';

const flux = new Flux({ PostStore }, new PostActions());
export default flux;