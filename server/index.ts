import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const allHabits = await prisma.habits.findMany();
    console.log(allHabits);
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
