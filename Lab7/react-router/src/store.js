import { createStore } from 'redux';

const todoList = {
    list: [
      {
        id: 1,
        name: "Chleb",
        description: "pieczywo otrzymywane z wypieku ciasta, będącego jednorodnym połączeniem mąki zbożowej różnego gatunku i wody, poddanego najczęściej, ale nie zawsze, fermentacji alkoholowej, wyrobionego w bochny różnego kształtu i wielkości.",
      },
      {
        id: 2,
        name: "Jabłka",
        description: "jadalny, kulisty owoc drzew z rodzaju jabłoń Malus. Jabłka odmian uprawnych o mieszańcowym pochodzeniu, uznawanych za gatunek jabłoń domowa Malus domestica, są istotnym komercyjnie owocem o soczystym i chrupkim miąższu. Są spożywane na surowo, a także po obróbce kulinarnej.",
      },
      {
        id: 3,
        name: "Pomarańcze",
        description: "nazwa, jaką określa się niektóre gatunki roślin należące do rodzaju cytrus, zwykle o pomarańczowej skórce i włóknistym miąższu. Jest to nazwa tylko zwyczajowa, nie stanowi ona odrębnej jednostki taksonomicznej. Gatunki pomarańczy pochodzą z Chin i wschodniej Azji.",
      },
      {
        id: 4,
        name: "Szynka",
        description: "wyrób garmażeryjny pozyskiwany z tuszy wieprzowej, schłodzony lub mrożony z kością lub bez. Barwa mięśni może być jasnoróżowa do czerwonej, dopuszcza się zmatowienia.",
      },
      {
        id: 5,
        name: "Masło",
        description: "tłuszcz jadalny w postaci zestalonej, otrzymywany ze śmietany z mleka krowiego. Masło tradycyjnie wyrabia się w urządzeniach zwanych maselnicami.",
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