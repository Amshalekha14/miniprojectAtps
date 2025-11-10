document.addEventListener("DOMContentLoaded", () => {
  const c = JSON.parse(localStorage.getItem("cart")) || [];
  const box = document.getElementById("cart-items");
  const total = document.getElementById("cart-total");
  if (!c.length) return (box.innerHTML = "<p>Cart empty 🛒</p>");
  let sum = 0;
  c.forEach((i, x) => {
    sum += i.price * i.quantity;
    box.innerHTML += `<div><img src="${i.image}" width="80"> ${i.name} - ₹${i.price} × ${i.quantity}
    <button onclick="remove(${x})">❌</button></div>`;
  });
  total.textContent = sum;
});
function remove(i){
  let c=JSON.parse(localStorage.getItem("cart"))||[];
  c.splice(i,1);localStorage.setItem("cart",JSON.stringify(c));location.reload();
}


document.addEventListener("DOMContentLoaded", () => {
  const buyNowBtn = document.getElementById("buy-now");

  if (buyNowBtn) {
    buyNowBtn.addEventListener("click", () => {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      if (cart.length === 0) {
        alert("Your cart is empty! ");
      } else {
        alert("✅ Order placed successfully! Thank you for shopping 💚");
        localStorage.removeItem("cart"); // clear cart after order
        location.reload(); // refresh to show empty cart
      }
    });
  }
});
