import * as actions from '../../Actions/compareWizard.action';

export const defaultState = {
    data: [],
    loading: false,
    error: null
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case actions.getManufacturers.request:
            return {
                ...state,
                loading: true
            };
        case actions.getManufacturers.success:
            return {
                ...state,
                data: action.payload,
                loading: false
            };
        case actions.getManufacturers.failure:
            return {
                ...state,
                error: action.error,
                loading: true
            };

        default:
            return state;
    }
};
