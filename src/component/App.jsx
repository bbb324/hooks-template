import React, { useEffect, useReducer, useMemo, useCallback, lazy, Suspense } from 'react';
import { reducerConfig, initState } from '../reducer';
import Notice from './Notice';

const DataList = lazy(() => import('./DataList'));

const clickevent = (dispatch) => {
    dispatch({type: 'triggerLoading', data: 'loading'});
    setTimeout(() => {
        dispatch({type: 'triggerLoading', data: 'load finish'})
    }, 1000)
};

const fetchList = (dispatch) => {
    fetch('https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json')
    .then(response => response.json())
    .then(data => {
        dispatch({type: 'triggerSetList', data: data})
    })
    .catch(e => console.log(e));
};


const fnRender = () => {
    console.log('const that = this;')
}

const App = () => {
    const [state, dispatch] = useReducer(reducerConfig, initState);

    useEffect(() => {
         fetchList(dispatch)
    }, []);
    return <div>
        {state.status}
        <span onClick={() => clickevent(dispatch)}> click </span>
        <Notice/>
        <span onClick={() => fnRender()}>test</span>
        <Suspense fallback={<h1>is loading</h1>}>
            <DataList data={state.dataList}/>
        </Suspense>

    </div>
};

export default App;
