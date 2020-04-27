import React, {useEffect, useReducer, useMemo, useCallback, lazy, Suspense} from 'react';
import {reducerConfig, initState} from '../reducer';
import Notice from './Notice';



const clickevent = (dispatch) => {
    dispatch({type: 'triggerLoading', data: 'loading'});
    setTimeout(() => {
        dispatch({type: 'triggerLoading', data: 'load finish'});
    }, 1000);
};

const clickSwitch = (state, dispatch) => {
    dispatch({type: 'triggerSetSwitch', data: state.switchTo === 1 ? 2 : 1});
};

const fetchList = (dispatch) => {
    fetch('https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json')
        .then(response => response.json())
        .then(data => {
            dispatch({type: 'triggerSetList', data: data});
        })
        .catch(e => console.log(e));
};


const fnRender = () => {
    console.log('const that = this;');
};

const dynamicSwitch = (state) => {
    console.log(state.switchTo);
    if(state.switchTo === 1) {
        const DataList = lazy(() => import('./DataList'));
        return <DataList data={state.dataList}/>;
    } else {
        const DataList2 = lazy(() => import('./DataList2'));
        return <DataList2 data={state.dataList}/>;
    }
};

const App = () => {
    const [state, dispatch] = useReducer(reducerConfig, initState);

    useEffect(() => {
        fetchList(dispatch);
    }, []);
    return <div>
        {state.status}
        <span onClick={() => clickevent(dispatch)}> click </span>
        <span onClick={() => clickSwitch(state, dispatch)}> click to switch </span>
        <Notice/>
        <span onClick={() => fnRender()}>test</span>
        <Suspense fallback={<h1>is loading</h1>}>
            {dynamicSwitch(state)}
        </Suspense>
    </div>;
};

export default App;
