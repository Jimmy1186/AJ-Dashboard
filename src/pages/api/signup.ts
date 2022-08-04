import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(401).json({ errorMsg: "post only" });
  }
  let userData = req.body
  const prisma = new PrismaClient();
  async function main() {
    let existUser = await prisma.user.count({
        where:{
            username:userData.username
        }
    })

    if(existUser!=0){
        
      res.status(409).json({signError:"HAS_USER"})
      return
    }

      const user = await prisma.user.create({data:userData});
  }

  main()
    .then(async () => {
      res.status(201);
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
};
