// Script for toggling the mobile navigation menu
const menuToggleButton = document.querySelector('header button');
const navLinks = document.querySelector('header nav');

if (menuToggleButton) {
  menuToggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
  });
}

// Script for showing product details in a modal (on products.html)
const productBoxes = document.querySelectorAll('.product-box');
const modal = document.getElementById('productModal');
const modalCloseButton = document.getElementById('closeModal');
const modalContent = document.getElementById('modalContent');

// Function to open modal with product details
function openModal(product) {
  const { name, description, price, origin, manufacturer } = product;
  modalContent.innerHTML = `
    <h2 class="text-2xl font-bold text-gray-800 mb-4">${name}</h2>
    <p class="text-gray-600 mb-2"><strong>Description:</strong> ${description}</p>
    <p class="text-gray-600 mb-2"><strong>Price:</strong> $${price}</p>
    <p class="text-gray-600 mb-2"><strong>Origin:</strong> ${origin}</p>
    <p class="text-gray-600"><strong>Manufacturer:</strong> ${manufacturer}</p>
  `;
  modal.classList.remove('hidden');
}

// Event listener for product boxes
productBoxes.forEach((box) => {
  box.addEventListener('click', () => {
    // Example product details (replace with dynamic data if available)
    const product = {
      name: box.dataset.name,
      description: box.dataset.description,
      price: box.dataset.price,
      origin: box.dataset.origin,
      manufacturer: box.dataset.manufacturer,
    };
    openModal(product);
  });
});

// Event listener to close modal
if (modalCloseButton) {
  modalCloseButton.addEventListener('click', () => {
    modal.classList.add('hidden');
  });
}

// Close modal when clicking outside of it
if (modal) {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.add('hidden');
    }
  });
}
