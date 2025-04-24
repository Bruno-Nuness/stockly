import { db } from "../_lib/prisma";

const ProducsPage = async () => {
  const products = await db.product.findMany();

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="flex flex-col gap-2 border-b p-2">
          <h1 className="text-2xl font-bold">{product.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default ProducsPage;
