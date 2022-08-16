import React, { useCallback, useMemo, useState } from "react";

import {
  useTable,
  usePagination,
  useGlobalFilter,
  useSortBy,
  useAsyncDebounce,
  useRowSelect,
} from "react-table";
import Addbtn from "../../components/widget/Addbtn";
import { trpc } from "../../utils/trpc";
import { projectType } from "./../../utils/Types";
import { format, parseISO } from "date-fns";
import GlobalFilter from "../../components/widget/GlobalFilter";
import CheckboxTable from "../../components/widget/CheckboxTable";
// const columnHelper = createColumnHelper<projectType>();


const column = [
  {
    Header: "id",
    accessor: "id",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "新增日期",
    accessor: "createAt",
    Cell: ({ value }) => {
      return format(new Date(value), "yyyy/MM//dd");
    },
  },
  {
    Header: "價格",
    accessor: "price",
  },
  {
    Header: "EDIT",
    Cell: ({ cell }) => (
      <button
        title="edit"
        onClick={()=>console.log("asd") }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
          <path
            fillRule="evenodd"
            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    ),
  },
];

function projects() {
  const {
    data: events,
    refetch,
    isLoading,
  } = trpc.useQuery(["findAllProject"],{
    refetchOnMount: false
  });
  const columns = useMemo(() => column, []);
    const payload = events ?? [];
  // const payload = useMemo(()=>payloads,[])


  // const deleteProject = trpc.useMutation(["deleteOneProject"], {
  //   onSuccess: () => refetch(),
  // });
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    pageOptions,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    prepareRow,
    gotoPage,
    state,
    setGlobalFilter,
    setPageSize,
    state: { selectedRowIds },
    selectedFlatRows,
  } = useTable(
    {
      data: payload,
      columns,
      debugTable: true,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        // Let's make a column for selection
        {
          id: "selection",
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <CheckboxTable {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <CheckboxTable {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );

  const { globalFilter, pageIndex, pageSize } = state;

  const onDelete = trpc.useMutation(["deleteAll"], {
    onSuccess: () => refetch(),
  });

const onUpdate = trpc.useMutation(['updateProject'],{
  onSuccess: () => refetch(),
})

  const deleteHander = useCallback(()=>{
    onDelete.mutate({ ids: selectedFlatRows.map((d) => d.original.id) });
  },[onDelete,payload])

  const updateHandler = useCallback(()=>{
    
  },[])





  console.log("render") 


  if (isLoading) {
    return <progress className="progress w-56"></progress>
  }


  return (
    <>
      <Addbtn addBtnLink="/projects/addProject" addBtnTitle="新增專案" />
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <button
        disabled={Object.keys(selectedRowIds).length === 0}
        onClick={deleteHander}
        title="delete"
        className={`bg-base-100 rounded-3xl w-10 h-10 flex justify-center items-center transition-all
      ${
        Object.keys(selectedRowIds).length === 0 ? "bg-base-300" : "bg-base-100"
      }
      `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 
          ${
            Object.keys(selectedRowIds).length === 0
              ? "text-primary-content"
              : "text-secondary-focus"
          }
          `}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>

      <div
        className="overflow-x-auto h-full shadow-2xl rounded-3xl flex flex-col gap-5
      md:col-start-1 md:col-span-7"
      >
        <table {...getTableProps()} className="table w-full">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="bg-accent"
                  >
                    {column.render("Header")}

                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )
                    ) : (
                      ""
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center items-center ">
        <div className="btn-group">
          <button
            className="btn"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            {"<"}
          </button>{" "}
          <button
            className="btn"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            {">"}
          </button>{" "}
        </div>

        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>

        <select
          title="page size"
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default projects;
