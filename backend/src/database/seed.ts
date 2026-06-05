import { prisma } from "./prisma.js";

await prisma.paymentRecord.upsert({
  where: { externalId: "demo-toda-rail-pay" },
  update: {},
  create: {
    externalId: "demo-toda-rail-pay",
    owner: "GDEMO",
    target: 1000000,
    status: "seeded",
    projectName: "TODA Rail Pay",
  },
});

console.log("Seeded TODA Rail Pay");
await prisma.$disconnect();
