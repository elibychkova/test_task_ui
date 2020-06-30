import * as actions from '../../Actions/compareWizard.action';
import {handleSelection} from '../../../Shared/utils';

export const defaultState = {
    data: [],
    loading: false,
    error: null,
    selectedManufactures: new Set()
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
        case actions.setSelectedManufactures:
            return {
                ...state,
                selectedManufactures: handleSelection(action.payload, state.selectedManufactures) 
            };

        default:
            return state;
    }
};
