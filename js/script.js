// Script for toggling the mobile navigation menu
const menuToggleButton = document.querySelector('header button');
const mobileNav = document.querySelector('header nav:nth-of-type(2)'); // Adjust to match the DOM structure

if (menuToggleButton && mobileNav) {
  menuToggleButton.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden'); // Toggle hidden class for mobile menu visibility
  });
}

// Script for showing product details in a modal (on products.html)
const productBoxes = document.querySelectorAll('.product-box');
const modal = document.getElementById('productModal');
const modalCloseButton = document.getElementById('closeModal');
const modalContent = document.getElementById('modalContent');

// Function to open modal with product details
function openModal(product) {
  if (product && modalContent) {
    const { name, description, price, origin, manufacturer } = product;
    modalContent.innerHTML = `
      <h2 class="text-2xl font-bold text-gray-800 mb-4">${name}</h2>
      <p class="text-gray-600 mb-2"><strong>Description:</strong> ${description}</p>
      <p class="text-gray-600 mb-2"><strong>Price:</strong> $${price}</p>
      <p class="text-gray-600 mb-2"><strong>Origin:</strong> ${origin}</p>
      <p class="text-gray-600"><strong>Manufacturer:</strong> ${manufacturer}</p>
    `;
    modal.classList.remove('hidden'); // Show modal
  }
}

// Event listener for product boxes
productBoxes.forEach((box) => {
  box.addEventListener('click', () => {
    const product = {
      name: box.dataset.name || 'Unknown Product',
      description: box.dataset.description || 'No description available.',
      price: box.dataset.price || 'N/A',
      origin: box.dataset.origin || 'N/A',
      manufacturer: box.dataset.manufacturer || 'N/A',
    };
    openModal(product);
  });
});

// Event listener to close modal
if (modalCloseButton) {
  modalCloseButton.addEventListener('click', () => {
    modal.classList.add('hidden'); // Hide modal on close button click
  });
}

// Close modal when clicking outside of it
if (modal) {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.add('hidden'); // Hide modal on background click
    }
  });
}
