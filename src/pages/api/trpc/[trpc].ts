import * as trpc from '@trpc/server'
import * as trpcNext from "@trpc/server/adapters/next"
import {z} from "zod"
import { createContext } from '../../../server/context'
import { serverRouter } from '../../../server/router'




export default trpcNext.createNextApiHandler({
    router:serverRouter,
    createContext
})