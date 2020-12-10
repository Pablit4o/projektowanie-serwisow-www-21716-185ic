import { createStore } from 'redux';

const todoList = {
    list: [
      {
        id: 1,
        name: "Chleb",
      },
      {
        id: 2,
        name: "Jabłka",
      },
      {
        id: 3,
        name: "Pomarańcze",
      },
      {
        id: 4,
        name: "Szynka",
      },
      {
        id: 5,
        name: "Masło",
      },
    ]
  }

const reducer = (state=todoList, action) => {
    switch (action.type) {
      case 'LOGIN': 
        localStorage['auth_token'] = action.payload;
        return {...state, token: action.payload}
      case 'SET':
        return {...state, ...action.payload}
      case 'SET_PLUGIN_PROP':
        return {...state, [action.payload.plugin]: { ...state[action.payload.plugin], [action.payload.prop]: action.payload.value }};
      case 'APPLY': 
        return { ...state, ...action.payload(state) }
      default:
        return state
    }
  }


export default createStore(reducer);