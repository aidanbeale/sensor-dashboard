const initialState = {
  rawSensorData: [],
  filteredSensorData: []
}

export default function appStateReducer(state = initialState, action) {
  switch (action.type) {
    case 'appState/setRawSensorData': {
      return {
        ...state,
        rawSensorData: action.payload
      }
    }
    case 'appState/resetRawSensorData': {
      return {
        ...state,
        rawSensorData: initialState.rawSensorData
      }
    }
    case 'appState/setFilteredSensorData': {
      return {
        ...state,
        filteredSensorData: action.payload
      }
    }
    case 'appState/resetFilteredSensorData': {
      return {
        ...state,
        filteredSensorData: initialState.filteredSensorData
      }
    }
    case 'appState/reset': {
      return initialState;
    }
    default:
      return state
  }
}
