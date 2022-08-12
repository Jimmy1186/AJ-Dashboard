import React,{useCallback} from "react";
import MainSide from "../../components/layout/MainSide";
import Card from "../../components/demo/Card";
import Addbtn from "../../components/widget/Addbtn";
import { trpc } from "../../utils/trpc";
import { v4 as uuidv4 } from "uuid";


function projects() {




  const { data: projects, refetch } = trpc.useQuery(["findAllProject"]);

  const deleteProject = trpc.useMutation(["deleteOneProject"], {
    onSuccess: () => refetch(),
  });

  const onDelete = useCallback(
    (id: number) => {
      deleteProject.mutate({
        id: id,
      });
    },
    [projects, deleteProject]
  );

  return (
    <>
      <Addbtn addBtnLink="/projects/addProject" addBtnTitle="新增專案" />



      {projects?.map((payload, index) => {
        return (
      
              <Card {...payload} onDelete={onDelete} key={uuidv4()}/>
      
        
          // <div
          //   className="card bg-base-100 h-fit overflow-visible shadow-xl"
          //   key={uuidv4()}
          // >
          //   <button
          //     onClick={() => onDelete(payload.id)}
          //     title="delete"
          //     className="bg-secondary-focus w-8 h-8 flex justify-center items-center rounded-tr-3xl self-end"
          //   >
          //     <svg
          //       xmlns="http://www.w3.org/2000/svg"
          //       className="h-6 w-6 text-base-100"
          //       fill="none"
          //       viewBox="0 0 24 24"
          //       stroke="currentColor"
          //       strokeWidth={2}
          //     >
          //       <path
          //         strokeLinecap="round"
          //         strokeLinejoin="round"
          //         d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          //       />
          //     </svg>
          //   </button>
          //   <div className="card-body items-center text-center">
          //     <h2 className="card-title">{payload.name}</h2>
          //     <h3>價值:{payload.price}$</h3>
          //     <h3>成本:{payload.cost}$</h3>
          //     <p>{payload.description}</p>
          //     <p>建立人ID:{payload.createrID}</p>
          //   </div>
          // </div>
        );
      })}
  
    </>
  );
}

export default projects;
