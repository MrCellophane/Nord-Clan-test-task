import { path } from 'ramda';

export default name => path(['env', name], process);
