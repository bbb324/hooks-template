export const initState = {
    status: 'idle',
    dataList: [],
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
        }
    } catch (e) {

    }
}
