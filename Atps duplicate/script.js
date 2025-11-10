// ---- Contact Form ----
const contactForm = document.getElementById('contactForm');
const contactStatus = document.getElementById('contactStatus');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    contactStatus.textContent = `✅ Thank you, ${name}! Your message has been sent successfully.`;
    contactForm.reset();
  } else {
    contactStatus.textContent = '⚠️ Please fill all fields before sending.';
  }

  contactStatus.style.opacity = '1';
  setTimeout(() => {
    contactStatus.style.opacity = '0';
  }, 4000);
});

// ---- Back to Top Button ----
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});







document.addEventListener("DOMContentLoaded", () => {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty 🛒</p>";
  } else {
    let total = 0;
    cart.forEach((item, index) => {
      total += item.price * item.quantity;
      const div = document.createElement("div");
      div.classList.add("cart-item");
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h4>${item.name}</h4>
        <p>₹${item.price} × ${item.quantity}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
      `;
      cartItemsContainer.appendChild(div);
    });

    cartTotalElement.textContent = total;
  }
});

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}




function addToCart(name, price, image) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let exist = cart.find(i => i.name === name);
  if (exist) exist.quantity++;
  else cart.push({ name, price, image, quantity: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
}
