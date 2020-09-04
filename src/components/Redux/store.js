import {createStore} from 'redux'
import {bookReducer} from './Book/bookReducer'


export const store = createStore(bookReducer);