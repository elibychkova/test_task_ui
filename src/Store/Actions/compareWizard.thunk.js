import * as actions from './compareWizard.action';
import { Axios, Api } from '../../Core/index';

export const getManufacturers = () => async (dispatch) => {
    dispatch({ type: actions.getManufacturers.request })
    try {
        const response = await Axios.get(Api.cw.getManufacturers);
        dispatch({
            type: actions.getManufacturers.success,
            payload: response.data
        });
    } catch (err) {
        dispatch({
            type: actions.getManufacturers.failure,
            payload: err
        });
    }
};

