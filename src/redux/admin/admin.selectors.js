 import { createSelector } from "reselect";

 const selectAdmin = state => state.admin;

 export const selectAdminHidden = createSelector(
    [selectAdmin],
    admin => admin.hideContent
)