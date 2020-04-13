import React, { useEffect, useReducer, useMemo, useCallback, lazy, Suspense } from 'react';
import { reducerConfig, initState } from '../reducer';
import Notice from './Notice';


const fetchList = () => {

};

const clickevent = (dispatch) => {
    dispatch({type: 'triggerLoading', data: 'loading'});
    setTimeout(() => {
        dispatch({type: 'triggerLoading', data: 'load finish'})
    }, 1000)
}


const App = () => {
    const [state, dispatch] = useReducer(reducerConfig, initState);

    useEffect(() => {
        /* const fetchList = async () => {
         const res = await Request('sealApiNew/queryList.json');
         setDataList(res.dataList);
         };
         fetchList()*/
    }, []);
    return <div>
        {state.status}
        <span onClick={() => clickevent(dispatch)}> click </span>
        <Notice/>
    </div>
}

export default App;
