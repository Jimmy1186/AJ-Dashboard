
import * as trpc from "@trpc/server";
import { createNextApiHandler } from "@trpc/server/adapters/next";
import { z } from "zod";
import { Context } from "./context";


export const serverRouter = trpc
.router<Context>()
.query("findAllUser",{
    resolve:async({ctx})=>{
        return await ctx.prisma.user.findMany()
    }
})
.query("findAllProject",{
    resolve:async({ctx})=>{
        return await ctx.prisma.project.findMany()
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
        })
    }
})

export type ServerRouter = typeof serverRouter