import { createSelector } from 'reselect'

const selectMobileMenu = (state) => state.menu

export const selectMenuHidden = createSelector(
    [selectMobileMenu],
    menu => menu.hidden

);