import React, { useState, useEffect } from 'react';


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
        <div>notice 1</div>
        <div>notice 2</div>
        <div>notice 3</div>
    </div>
})

/*const Notice = () => {
    useEffect(() => {

    }, []);
    console.log(1)
    return <div>
        <div>notice 1</div>
        <div>notice 2</div>
        <div>notice 3</div>
    </div>
}*/


export default Notice;
