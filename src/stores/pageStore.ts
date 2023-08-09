import { ROWS_PER_PAGE } from '../constants';
import { store } from '../utils/external-state';

export const pageStore = store<number>(0);
export const rowsPerPageStore = store<number>(ROWS_PER_PAGE);
