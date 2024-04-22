 import { createSelector } from "reselect";

 const selectAdmin = state => state.admin;

export const selectIsAdminFetching = createSelector(
    [selectAdmin],
    admin => admin.isFetching
  );