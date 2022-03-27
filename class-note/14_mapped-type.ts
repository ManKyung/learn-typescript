type Food = "kimchi" | "kimbab" | "lamen";
type FoodColor = {
  [K in Food]: string;
};

const obj: FoodColor = {
  kimchi: "red",
  kimbab: "black",
  lamen: "orange",
};
