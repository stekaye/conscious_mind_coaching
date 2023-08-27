
function openModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
  }
  
  function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }
  
  function initModal() {
    setTimeout(() => {
      openModal();
    }, 3000);
  }
  
  // Call the modal initialization function
  initModal();