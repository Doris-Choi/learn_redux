// container component: 상태관리를 위한 컴포넌트
import React from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { increase, decrease, setDiff } from '../modules/counter';
import { bindActionCreators } from 'redux';

function CounterContainer({ number, diff, onIncrease, onDecrease, onSetDiff }) {
  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

const mapStateToProps = (state) => ({
  number: state.counter.number,
  diff: state.counter.diff,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrease: () => dispatch(increase()),
  onDecrease: () => dispatch(decrease()),
  onSetDiff: (diff) => dispatch(setDiff()),
});
/* 이런 경우 props명을 onIncrese -> increase, ... 등으로 바꾸어야 함
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      increase,
      decrease,
      setDiff,
    },
    dispatch,
  );
  또는 mapDispatchToProps = {
    increase,
    decrease,
    setDiff, 
  }
*/
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
