import React, { useState, useEffect } from 'react';

const clickevent = (val) => {
    console.log(val)
}

const renderList = (list) => {
    return list.map(item => {
        return <div key={item.label} onClick={() => clickevent(item.label)}>{item.label}</div>
    })
}

const DataList = (props) => {
   if(props.length === 0) return null;
    return <div>
        {renderList(props.data)}
    </div>
}

export default DataList;
