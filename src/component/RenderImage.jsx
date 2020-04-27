import React, {useState, useEffect} from 'react';

const clickevent = (val) => {
    console.log(val);
};


const RenderImage = (props) => {
    if (props.length === 0) return null;
    console.log('加载了第二个');
    return <div>
        <img src={props.data} />
    </div>;
};

export default RenderImage;
