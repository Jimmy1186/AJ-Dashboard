import * as z from "zod";



export type projectType = {
    id:number;
    name: string;
    description: string;
    price: any;
    cost: any;
    createAt:Date;
    createrID: number;
  };


export const projectSchema = z
  .object({
    name: z.string().max(50, "太長"),
    description: z.string().max(999, "太長"),
    price: z.number(),
    cost:z.number(),
    createrID: z.number(),
  })


export type projectsType = z.infer<typeof projectSchema>;

