import * as actions from './compareWizard.action';
// import { Axios, Api } from '../../Core/index';
// import { data } from '../MockData';
import manufacturers from '../../manufacturers.json';

export const getManufacturers = () => async (dispatch) => {
    dispatch({ type: actions.getManufacturers.request })
    try {
        // const response = await Axios.get(Api.cw.getManufacturers);
        dispatch({
            type: actions.getManufacturers.success,
            payload: manufacturers
        });
    } catch (err) {
        dispatch({
            type: actions.getManufacturers.failure,
            payload: err
        });
    }
};

