import React, {useState, useEffect} from 'react';

const clickevent = (val) => {
    console.log(val);
};

const renderList = (list) => {

    if(list.length === 0) return null;
    return list.map(item => {
        return <div key={item.label} onClick={() => clickevent(item.label)}>{item.label}</div>;
    });
};

const fetchList = (setDataList) => {
    fetch('https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json')
        .then(response => response.json())
        .then(data => {
            setDataList(data);
        })
        .catch(e => console.log(e));
};

const DataList = () => {
    const [dataList, setDataList] = useState([]);
    useEffect(() => {
        fetchList(setDataList);
    }, []);


    console.log('加载了第一个');
    return <div>
        {renderList(dataList)}
    </div>;
};

export default DataList;
