import { createStore } from 'redux';

// 초기값
const initialState = {
  counter: 0,
  text: '',
  list: [],
};

// action type 선언
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

// action creator
const increase = () => ({
  type: INCREASE,
});
const decrease = () => ({
  type: DECREASE,
});
const changeText = (text) => ({
  type: CHANGE_TEXT,
  text,
});
const addToList = (item) => ({
  type: ADD_TO_LIST,
  item,
});

// reducer
// 주의할 점: state = initialState를 꼭 넣어줘야 함!
// (초기에 undefinded가 되지 않도록)
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    default:
      return state;
  }
}

// store 생성
const store = createStore(reducer);
console.log(store.getState());

// listener 함수: subscribe를 위해
const listener = () => {
  const state = store.getState();
  console.log(state);
};

// store를 subscribe하면서 listener함수를 호출하는 것
// 반환되는 unsubscribe는 구독 해제할 때 사용
// 구독 해제하면 state는 변하지만, listener함수가 호출되지 않음
const unsubscribe = store.subscribe(listener);
// unsubscribe();

// action dispatch
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({ id: 1, text: '와우' }));
