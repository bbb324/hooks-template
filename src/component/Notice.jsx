import React, { useState, useEffect } from 'react';

const list = ['notice1', 'notice2', 'notice3'];


const clickevent = (value) => {
    console.log(value)
}

const setList = () => {
    return list.map(item => {
        return <div key={item} onClick={() => clickevent(item)}>{item}</div>
    })
};

// 通过 memo 的形式实现 pureComponent
const Notice = React.memo(() => {
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        /* const fetchList = async () => {
         const res = await Request('sealApiNew/queryList.json');
         setDataList(res.dataList);
         };
         fetchList()*/
    }, []);
    console.log(1)
    return <div>
        {setList()}
    </div>
})


export default Notice;
