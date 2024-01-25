let products = [
  "Headphones",
  "Tv",
  "Laptop",
  "Webcam",
  "Keyboard",
  "Mouse",
  "Mousepad",
  "Wire",
  "Wallet",
  "Socket",
  "Chess",
  "Kent",
  "Card",
  "Bag",
];

function generateProduct(productName) {
  const product = document.createElement("div");
  product.classList.add("product");
  const spaner = document.createElement("span");
  spaner.textContent = productName[0].toUpperCase();
  const paragraph = document.createElement("p");
  paragraph.textContent = productName;
  product.appendChild(spaner);
  product.appendChild(paragraph);

  return product;
}
