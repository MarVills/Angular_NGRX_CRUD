import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromInfo from '../reducer/reducer.reducer';

export const selectInfoState = createFeatureSelector<fromInfo.InfoState>(
    fromInfo.infoFeatureKey,
);

export const selectData = createSelector(
    selectInfoState,
    (state: fromInfo.InfoState) => state?.infos
    // value => value
);