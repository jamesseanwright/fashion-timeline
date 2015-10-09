import PostStore from '../stores/PostStore';
import postActions from '../actions/postActions';
import iso from 'simple-iso';
import { Flux } from 'fluxxor';
const isBrowser = typeof global.document !== undefined;
const postStore = isBrowser ? iso.hydrate(PostStore) : new PostStore();

const flux = new Flux({ PostStore: postStore }, postActions);

export default flux;