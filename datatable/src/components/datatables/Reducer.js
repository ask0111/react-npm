import {PAGE_CHANGED, PAGE_SIZE_CHANGED, PAGE_SORT_CHANGED, PAGE_FILTER_CHANGED, TOTAL_COUNT_CHANGED} from './variable';

const Reducer = (state, { type, payload }) => {
    switch (type) {
      case PAGE_CHANGED:
          return {
              ...state,
              queryPageIndex: payload,
          };
      case PAGE_SIZE_CHANGED:
          return {
              ...state,
              queryPageSize: payload,
          };
      case PAGE_SORT_CHANGED:
          return {
              ...state,
              queryPageSortBy: payload,
          };
      case PAGE_FILTER_CHANGED:
          return {
              ...state,
              queryPageFilter: payload,
          };
      case TOTAL_COUNT_CHANGED:
          return {
              ...state,
              totalCount: payload,
          };
      default:
        throw new Error(`Unhandled action type: ${type}`);
    }
  };

  export {Reducer}