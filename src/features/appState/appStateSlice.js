const initialState = {
  rawSensorData: [],
  filteredSensorData: [],
  openGraphCount: 0
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
    case 'appState/updateOpenGraphCount': {
      return {
        ...state,
        openGraphCount: action.payload
      }
    }
    case 'appState/reset': {
      return initialState;
    }
    default:
      return state
  }
}
