import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";


export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(401).json({ errorMsg: "post only" });
  }
  let {data} = req.body

  const prisma = new PrismaClient();
  async function main() {
    let existUser = await prisma.user.count({
        where:{
            username:data.username
        }
    })
    if(existUser!=0){
        
      return res.status(409).send({signMsg:"HAS_USER"})
    }

      const user = await prisma.user.create({data:data});
      return res.status(200).send({signMsg:user})

  }

  main()
    .then(async () => {
      res.status(201);
      await prisma.$disconnect();
      res.end()
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
};
