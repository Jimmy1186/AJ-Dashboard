import React, { useCallback, useMemo, useState } from "react";
import Addbtn from "../../components/widget/Addbtn";
import { trpc } from "../../utils/trpc";
import { format, parseISO } from "date-fns";
import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";
import type {
  ColumnFiltersState,
  PaginationState,
  SortingState,
} from "@tanstack/react-table";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { projectType } from "../../utils/Types";
// const columnHelper = createColumnHelper<projectType>();
const queryClient = new QueryClient();




function projects() {
  const {
    data: payload,
    isError,
    isFetching,
    isLoading,
    refetch,
  } = trpc.useQuery(["findAllProject"],);

  const onDelete = trpc.useMutation(["deleteAll"], {
    onSuccess: () => refetch(),
  });

  const onUpdate = trpc.useMutation(["updateProject"], {
    onSuccess: () => refetch(),
  });

  // const deleteHander = useCallback(()=>{
  //   onDelete.mutate({ ids: selectedFlatRows.map((d) => d.original.id) });
  // },[onDelete,payload])

  const updateHandler = useCallback(() => {}, []);

  console.log("render");

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "id",
        header: "id",
      },
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "createAt",
        header: "createAt",
      },
      {
        accessorKey: "price",
        header: "price",
      },
    ],
    []
  );


  if(isLoading){
    return <progress className="progress w-56"></progress>
  }
  return (
    <>
      <Addbtn addBtnLink="/projects/addProject" addBtnTitle="新增專案" />

      <div
        className="overflow-x-auto h-auto shadow-2xl rounded-3xl flex flex-col gap-5
      md:col-start-1 md:col-span-7"
      >
        <QueryClientProvider client={queryClient}>
          <MaterialReactTable
            columns={columns}
            data={payload ?? []}
          />
        </QueryClientProvider>
      </div>
    </>
  );
}

export default projects;
