export const initState = {
    status: 'idle',
    dataList: [],
    switchTo: 1 // 动态加载tab
};

export function reducerConfig(state = initState, action = {}) {
    try {
        switch (action.type) {
            case 'triggerLoading':
                return {
                    ...state,
                    status: action.data,
                };
            case 'triggerSetList':
                return {
                    ...state,
                    dataList: action.data
                };
            case 'triggerSetSwitch':
                return {
                    ...state,
                    switchTo: action.data
                };
        }
    } catch (e) {

    }
}
