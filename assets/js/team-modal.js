/**
 * Team member modal functionality
 * Handles displaying team member content in a modal popup
 */

document.addEventListener('DOMContentLoaded', function () {
  // Get modal elements
  const modal = document.getElementById('teamModal');
  if (!modal) return;

  const modalClose = document.getElementById('teamModalClose');
  const modalOverlay = document.getElementById('teamModalOverlay');
  const modalBody = document.getElementById('teamModalBody');
  const modalTitle = document.getElementById('teamModalTitle');

  // Get all clickable team cards
  const teamCards = document.querySelectorAll('.team-card[data-content]');

  // Function to open modal
  function openModal(title, content, schemeImage) {
    modalTitle.textContent = title;
    modalBody.innerHTML = content;
    
    // Set background image if scheme exists
    const modalContent = document.querySelector('.team-modal-content');
    if (schemeImage) {
      modalContent.style.setProperty('--modal-bg-image', `url('${schemeImage}')`);
      modalContent.classList.add('has-background');
    } else {
      modalContent.style.removeProperty('--modal-bg-image');
      modalContent.classList.remove('has-background');
    }
    
    modal.classList.add('active');
    // document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  // Function to close modal
  function closeModal() {
    modal.classList.remove('active');
    // document.body.style.overflow = ''; // Restore scrolling
  }

  // Add click handlers to team cards with content
  teamCards.forEach((card) => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', function () {
      const title = card.getAttribute('data-title');
      const content = card.getAttribute('data-content');
      const scheme = card.getAttribute('data-scheme');
      openModal(title, content, scheme);
    });
  });

  // Close modal on close button click
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  // Close modal on overlay click
  if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModal);
  }

  // Close modal on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
});
