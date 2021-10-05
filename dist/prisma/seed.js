"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const fruits_1 = require("./fruits");
const prisma = new client_1.PrismaClient();
async function main() {
    for (const fruit of fruits_1.fruits) {
        await prisma.fruitAndVege.create({
            data: fruit,
        });
    }
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map