import { PrismaClient } from "./generated/prisma";
const prisma = new PrismaClient();


const seedProducts = async () => {
    const count = await prisma.product.count();
    if (count === 0) {
        await prisma.createMany({
            data: [
                { title: 'Product 1', price: 500, description: "products decs 1" },
                { title: 'Product 2', price: 500, description: "products decs 2" },
                { title: 'Product 3', price: 500, description: "products decs 3" },
                { title: 'Product 4', price: 500, description: "products decs 4" },
            ]
        })
    }
};

seedProducts();


// all products
export async function getProducts() {
    return prisma.product.findMany();
}