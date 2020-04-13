import React, { useEffect, useReducer, useMemo, useCallback, lazy, Suspense } from 'react';

const App = () => {
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
       /* const fetchList = async () => {
            const res = await Request('sealApiNew/queryList.json');
            setDataList(res.dataList);
        };
        fetchList()*/
    }, []);
    return <div>
        123
    </div>
}

export default App;
