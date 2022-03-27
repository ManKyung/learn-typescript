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

// #1 인터페이스의 키값을 이용해서 Partial 생성
type UserUpdate1 = {
  id?: User["id"];
  name?: User["name"];
  profileUrl?: User["profileUrl"];
};

// #2 각각의 키값을 in 처리해서 Partial 생성
type UserUpdate2 = {
  [p in "id" | "name" | "profileUrl"]?: User[p];
};

// #3 keyof를 이용하여 Partial를 생성
type UserUpdate3 = {
  [p in keyof User]?: User[p];
};

// #4 제네릭을 이용한 Partial의 구현 모습
type UserUpdate4<T> = {
  [p in keyof T]?: T[p];
};
