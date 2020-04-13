import React, { useEffect, useState, useReducer, useMemo, useCallback, lazy, Suspense } from 'react';


const fetchList = (setList) => {
    fetch('https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json')
    .then(response => response.json())
    .then(data => {
        setList(data)
    })
    .catch(e => console.log(e));
};

const clickevent = (val) => {
    console.log('inner func')
    console.log(val)
}

const renderList = (list) => {
    console.log('render')
    return list.map(item => {
        return <div key={item.label} onClick={() => clickevent(item.label)}>{item.label}</div>
    })
};

// 这部分启用后，list无法渲染
const renderListWithCallback = (list) => {
    console.log('render')
    return useCallback(() => {
        return list.map(item => {
            return <div key={item.label} onClick={() => clickevent(item.label)}>{item.label}</div>
        })
    }, [list])


}

const clicks = (setcount, count) => {
    console.log(count)
    setcount(++count)
}

const CallTest = () => {
    const [list, setList] = useState([]);
    const [count, setcount] = useState(0);

    useEffect(() => {
        fetchList(setList)
    }, []);
    return <div>
        <span onClick={() => clicks(setcount, count)}> click </span>
        {renderListWithCallback(list)}
    </div>
};

export default CallTest;
