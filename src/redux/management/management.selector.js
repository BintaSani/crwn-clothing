import { createSelector } from "reselect";

const selectManagement = state => state.management;

export const selectManagementHidden = createSelector(
    [selectManagement],
    management => management.hide
)