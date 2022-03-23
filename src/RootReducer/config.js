import { combineReducers, createStore } from "redux";

import {gameReducer} from './GameReducer'

const rootReducer = combineReducers({

  gameReducer
}) 
export const store = createStore(rootReducer)