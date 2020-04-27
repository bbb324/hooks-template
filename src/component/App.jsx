import React, {useEffect, useReducer, useMemo, useCallback, lazy, Suspense} from 'react';
import {reducerConfig, initState} from '../reducer';
import Notice from './Notice';
import {

} from '@alifd/next';


const clickevent = (dispatch) => {
    dispatch({type: 'triggerLoading', data: 'loading'});
    setTimeout(() => {
        dispatch({type: 'triggerLoading', data: 'load finish'});
    }, 1000);
};

const clickSwitch = (state, dispatch) => {
    dispatch({type: 'triggerSetSwitch', data: state.switchTo === 1 ? 2 : 1});
};




const fnRender = () => {
    console.log('const that = this;');
};

const dynamicSwitch = (state) => {

    if(state.switchTo === 1) {
        const DataList = lazy(() => import('./DataList'));
        return <DataList />;
    } else {
        const Progress = lazy(() => import('react-progressbar'));
        return <Progress completed={50}/>;
    }/*else {
        const RenderImage = lazy(() => import('./RenderImage'));
        return <RenderImage data={'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png'}/>;
    }*/
};

const App = () => {
    const [state, dispatch] = useReducer(reducerConfig, initState);


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
