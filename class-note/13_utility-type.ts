interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

function fetchProducts(): Promise<Product[]> {
  return new Promise((resolve) => {
    resolve([
      {
        id: 1,
        name: "상품",
        price: 1000,
        brand: "노브랜드",
        stock: 20,
      },
    ]);
  });
}

type ShoppingPickItem = Pick<Product, "id" | "name" | "price">;
type ShoppingOmitItem = Omit<Product, "id" | "brand">;
type UpdateProduct = Partial<Product>;

function displayProductPickDetail(shoppingItem: ShoppingPickItem) {
  const item: ShoppingPickItem = {
    id: 3,
    name: "휴지",
    price: 1000,
  };
  console.log(item);
}
function displayProductOmitDetail(shoppingItem: ShoppingOmitItem) {
  const item: ShoppingOmitItem = {
    name: "휴지",
    price: 1000,
    stock: 30,
  };
  console.log(item);
}

function updateProductDetail(shoppingItem: UpdateProduct) {
  const item: UpdateProduct = {
    id: 4,
    price: 1000,
    stock: 30,
  };
  console.log(item);
}

interface User {
  id: number;
  name: string;
  profileUrl: string;
}

// #1
interface UserUpdate1 {
  id?: User["id"];
  name?: User["name"];
  profileUrl?: User["profileUrl"];
}

// #2
interface UserUpdate2 {
  [(p in "id") | "name" | "profileUrl"]?: User[p];
}
