import React, {useState, useEffect, useMemo} from "react"
import { useTable, usePagination, useSortBy } from "react-table"
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'


import { USERS_COLUMNS } from "./Columns"
import SortIcon from 'mdi-react/SortIcon'
import SortAscendingIcon from 'mdi-react/SortAscendingIcon'
import SortDescendingIcon from 'mdi-react/SortDescendingIcon'
import ReactTablePagination from './ReactTablePagination'
import UsersFilter  from "./UsersFilter"

import {PAGE_CHANGED, PAGE_SIZE_CHANGED, PAGE_SORT_CHANGED, PAGE_FILTER_CHANGED, TOTAL_COUNT_CHANGED} from './variable';
import { Reducer } from "./Reducer";
import { FetchUsersData } from "./FetchUsersData"

const queryClient = new QueryClient()

const initialState = {
    queryPageIndex: 0,
    queryPageSize: 5,
    totalCount: 0,
    queryPageFilter:"",
    queryPageSortBy: [],
};


const DataTable = () => {
    const [keyword, setKeyword] = useState('');
    const [useFilter, setUseFilter] = useState(false);


    const onClickFilterCallback = ( filter ) => {
        if(filter.trim() === "") {
            alert('Please enter a keyword to search!')
            return
        }
        if(filter === keyword)   {
            alert('No change in search')
            return
        }
        setUseFilter(true)
        setKeyword(filter)
    }


    let columns = useMemo( () => USERS_COLUMNS, [])

    const [{ queryPageIndex, queryPageSize, totalCount, queryPageFilter, queryPageSortBy }, dispatch] =
    React.useReducer(Reducer, initialState);


    const { isLoading, error, data, isSuccess } = useQuery(
        ['users', queryPageIndex, queryPageSize, queryPageFilter, queryPageSortBy],
        () => FetchUsersData(queryPageIndex, queryPageSize, queryPageFilter, queryPageSortBy),
        {
            keepPreviousData: false,
            staleTime: Infinity,
        }
    );

    const totalPageCount = Math.ceil(totalCount / queryPageSize)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        page,
        pageCount,
        pageOptions,
        gotoPage,
        previousPage,
        canPreviousPage,
        nextPage,
        canNextPage,
        setPageSize,
        state: { pageIndex, pageSize, sortBy }
    } = useTable({
        columns,
        data: data?.results || [],
        initialState: {
            pageIndex: queryPageIndex,
            pageSize: queryPageSize,
            sortBy: queryPageSortBy,
        },
        manualPagination: true,
        pageCount: data ? totalPageCount : null,
        autoResetSortBy: false,
        autoResetExpanded: false,
        autoResetPage: false
    },
    useSortBy,
    usePagination,
    );
    const manualPageSize = []
    
    useEffect(() => {
        dispatch({ type: PAGE_CHANGED, payload: pageIndex });
    }, [pageIndex]);

    useEffect(() => {
        dispatch({ type: PAGE_SIZE_CHANGED, payload: pageSize });
        gotoPage(0);
    }, [pageSize, gotoPage]);

    useEffect(() => {
        dispatch({ type: PAGE_SORT_CHANGED, payload: sortBy });
        gotoPage(0);
    }, [sortBy, gotoPage]);

    useEffect(() => {
        if ( useFilter ) {
            dispatch({ type: PAGE_FILTER_CHANGED, payload: keyword });
            gotoPage(0);
        }
    }, [keyword, gotoPage, useFilter]);

    React.useEffect(() => {
        if (data?.count) {
            dispatch({
            type: TOTAL_COUNT_CHANGED,
            payload: data.count,
            });
        }
    }, [data?.count]);

    const HandlerD = (e)=>{
        console.log(e, 'ue')
    }

    if (error) {
        return <p>Error</p>;
    }

    if (isLoading) {
        return <p>Loading...</p>;
    }
    if(isSuccess)
    return (
            <>
                <div className='table react-table'>
                    <form className="form form--horizontal">
                        <div className="form__form-group">
                            <div className="col-md-9 col-lg-9">
                                <UsersFilter onClickFilterCallback={onClickFilterCallback} defaultKeyword={keyword} />
                            </div>
                            <div className="col-md-3 col-lg-3 text-right pr-0">
                                {/* <Link style={{maxWidth:'200px'}}
                                className="btn btn-primary account__btn account__btn--small"
                                to="/users/add"
                                >Add new user
                                </Link> */}
                            </div>
                        </div>
                    </form>
                    {
                        typeof data?.count === 'undefined' && <p>No results found</p>
                    }
                    {data?.count && 
                    <>
                    <table {...getTableProps()} className="table">
                        <thead>
                            {headerGroups.map( (headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map( column => (
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                            {column.render('Header')}
                                            {column.isSorted ? <Sorting column={column} /> : ''}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody className="table table--bordered" {...getTableBodyProps()}>
                            {console.log(page , 'page')}
                            {page.map( (row) => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()}>
                                        {
                                            row.cells.map( (cell, i) => {
                                                {console.log(cell, 'cell')}
                                                return <td {...cell.getCellProps()}><span>{cell.render('Cell')}</span></td>
                                            })
                                        }
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    </>
                }
                </div>
                {(rows.length > 0) && (
                    <>
                        <ReactTablePagination
                            page={page}
                            gotoPage={gotoPage}
                            previousPage={previousPage}
                            nextPage={nextPage}
                            canPreviousPage={canPreviousPage}
                            canNextPage={canNextPage}
                            pageOptions={pageOptions}
                            pageSize={pageSize}
                            pageIndex={pageIndex}
                            pageCount={pageCount}
                            setPageSize={setPageSize}
                            manualPageSize={manualPageSize}
                            dataLength={totalCount}
                        />
                        <div className="pagination justify-content-end mt-2">
                            <span>
                            Go to page:{' '}
                            <input
                                type="number"
                                value={pageIndex + 1}
                                onChange={(e) => {
                                   
                                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                                gotoPage(page);
                                }}
                                style={{ width: '100px' }}
                            />
                            </span>{' '}
                            <select
                            value={pageSize}
                            onChange={(e) => {
                                setPageSize(Number(e.target.value));
                            }}
                            >
                            {[5, 10, 30, 40, 50].map((pageSize) => (
                                <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                                </option>
                            ))}
                            </select>
                        </div>
                    </>
                )}
            </>
    )
}

const Sorting = ({ column }) => (
    <span className="react-table__column-header sortable">
        {console.log(column, 'sort')}
      {column.isSortedDesc === undefined ? (
        <SortIcon />
      ) : (
        <span>
          {column.isSortedDesc
            ? <SortAscendingIcon />
            : <SortDescendingIcon />}
        </span>
      )}
    </span>
  );

const TableWrapper = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <DataTable />
        </QueryClientProvider>
    )
}

export default TableWrapper;