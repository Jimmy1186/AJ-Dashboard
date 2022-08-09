
import * as trpc from "@trpc/server";
import { createNextApiHandler } from "@trpc/server/adapters/next";
import { z } from "zod";
import { Context } from "./context";


export const serverRouter = trpc
.router<Context>()
.query("findAll",{
    resolve:async({ctx})=>{
        return await ctx.prisma.user.findMany()
    }
})
.mutation("insertOne",{
    input:z.object({
        name:z.string(),
        description:z.string(),
        price:z.number(),
        createrID: z.number(),
    }),
    resolve:async({input,ctx})=>{
        return await ctx.prisma.project.create({
            data:input
            // data:{
            //     name:input.name,
            //     description:input.description,
            //     price:input.price,
            //     createrID: 2,
            // }
        })
    }
})

export type ServerRouter = typeof serverRouter