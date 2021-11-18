import { createSelector } from "reselect";

const mainSelector = (state: Store) => state.main;

export const newDietIDSelector = createSelector(
  mainSelector,
  (state) => state.newDietID
);

export const adminAccessSelector = createSelector(mainSelector, state => state.adminAccess)

export const modalOpenSelector = createSelector(mainSelector, state => state.isModalOpen)

export const LOADING = createSelector(mainSelector, state => state.loader)

export const CurrentUser = createSelector(mainSelector, state => state.currentUser)

export const ConstacUS = createSelector(mainSelector, state => state.contactUsBackRoute)


