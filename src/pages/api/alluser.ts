import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";


export default async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method!="GET"){
        res.status(401).json({ errorMsg: "post only" });
    }
    const prisma = new PrismaClient()
    async function main(){
        const allUsers = await prisma.user.findMany()
       res.status(200).json(allUsers)
       res.end()
    }

    main()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })
}