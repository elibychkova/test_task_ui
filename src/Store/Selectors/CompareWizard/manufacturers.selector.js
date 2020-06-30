import { createSelector } from 'reselect';
// import clonedeep from 'lodash.clonedeep';

export const getManufacturersData = (state) => state.CW.manufacturers;

export const selected = createSelector(
    getManufacturersData,
    (state) => state.CW.manufacturers.data,
    (state) => state.CW.manufacturers.selectedManufactures,
     (data, selected) => {
         console.log('data :>> ', data);
//   data.filter((item) => {
//       console.log('item :>> ', item);
//   });
  //   return changeCategoriesForDpd(currentData, []);
});
