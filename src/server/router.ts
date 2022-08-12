import { Prisma } from "@prisma/client";
import * as trpc from "@trpc/server";
import { createNextApiHandler } from "@trpc/server/adapters/next";
import { string, z } from "zod";
import { Context } from "./context";

type newDataType = {
  createID: number;
  sum: number;
}[];

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
        take: 5,
      });
    },
  })
  .query("findAllProjectEarnMoney", {
    resolve: async ({ ctx }) => {
      const payload = await ctx.prisma.project.groupBy({
        by: ["createrID"],
        _sum: {
          price: true,
        },
      });

      let newData = payload.map((values) => ({
        name: values.createrID,
        value: values._sum.price,
      }));

      return newData;
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
  })
  .mutation("inertOneUser", {
    input: z.object({
      username: z.string(),
      role: z.string(),
      password: z.string(),
    }),
    resolve: async ({ input, ctx }) => {
      const sameUserError = new trpc.TRPCError({
        code: "CONFLICT",
        message: "已有使用者使用該名稱",
      });
      try {
        let existUser = await ctx.prisma.user.count({
          where: {
            username: input.username,
          },
        });

        if (existUser != 0) {
          throw sameUserError;
        }

        return await ctx.prisma.user.create({
          data: input,
        });
      } catch (e) {
   
        if (e != sameUserError) {
          throw new trpc.TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "後端出狀況 請聯絡工程師",
            cause: e,
          });
        }
        throw e
      }
    },
  })
  .mutation("deleteOneProject",{
    input:z.object({
      id:z.number()
    }),
    resolve:async({input,ctx})=>{
      return await ctx.prisma.project.delete({
        where:{
          id:input.id
        }
      })
    }
  })

export type ServerRouter = typeof serverRouter;
