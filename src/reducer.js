export const initState = {
    status: 'idle',

};

export function reducerConfig(state = initState, action = {}) {
    try {
        switch (action.type) {
            case 'triggerLoading':
                return {
                    ...state,
                    status: action.data,
                };
        }
    } catch (e) {

    }
}
