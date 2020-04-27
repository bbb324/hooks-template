/**
 * Created by junxie on 18/5/27.
 */
import React from 'react';
import ReactDom from 'react-dom';
import App from './component/App';
//import CallTest from './component/CallTest'; // useCallback 测试
import './style.less';
ReactDom.render(<App />,
    document.getElementById('app')
);
