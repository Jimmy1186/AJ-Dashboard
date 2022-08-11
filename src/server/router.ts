import * as trpc from "@trpc/server";
import { createNextApiHandler } from "@trpc/server/adapters/next";
import { z } from "zod";
import { Context } from "./context";

type newDataType ={
  createID:number,
  sum:number
}[]

export const serverRouter = trpc
  .router<Context>()
  .query("findAllUser", {
    resolve: async ({ ctx }) => {
      return await ctx.prisma.user.findMany();
    },
  })
  .query("findAllProject", {
    resolve: async ({ ctx }) => {
      return await ctx.prisma.project.findMany();
    },
  })
  .query("findLimitProject", {
    resolve: async ({ ctx }) => {
      return await ctx.prisma.project.findMany({
        take:5
      });
    },
  })
  .query("findAllProjectEarnMoney", {
    resolve: async ({ ctx }) => {
      const payload =  await ctx.prisma.project.groupBy({
        by: ["createrID"],
        _sum: {
          price: true,
        },
      });



      let newData = payload.map((values)=>({
        name:values.createrID,
      value:values._sum.price
      }))

      return  newData
    },
  })
  .mutation("insertOne", {
    input: z.object({
      name: z.string(),
      description: z.string(),
      price: z.number(),
      cost: z.number(),
      createrID: z.number(),
    }),
    resolve: async ({ input, ctx }) => {
      return await ctx.prisma.project.create({
        data: input,
      });
    },
  });

export type ServerRouter = typeof serverRouter;
