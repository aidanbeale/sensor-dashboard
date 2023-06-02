const initialState = {
  sensorData: []
}

export default function appStateReducer(state = initialState, action) {
  switch (action.type) {
    case 'appState/setSensorData': {
      return {
        ...state,
        sensorData: action.payload
      }
    }
    case 'appState/resetSensorData': {
      return {
        ...state,
        sensorData: initialState.sensorData
      }
    }
    case 'appState/reset': {
      return initialState;
    }
    default:
      return state
  }
}
