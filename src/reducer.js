import { combineReducers } from 'redux'

import appStateReducer from './features/appState/appStateSlice'

const rootReducer = combineReducers({
  appState: appStateReducer
})

export default rootReducer
