// container component: 상태관리를 위한 컴포넌트
import React from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, setDiff } from '../modules/counter';

function CounterContainer() {
  // 상태 불러오기 (useSelector)
  const { number, diff } = useSelector((state) => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }));

  // dispatch
  const dispatch = useDispatch();
  // dispatch 함수가 호출될 때 action creator가 호출되면서 action이 생성되고 dispatch됨
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

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

export default CounterContainer;
