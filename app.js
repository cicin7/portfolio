document.addEventListener("DOMContentLoaded", function() {
    const ids = ['havefun', 'letstalk', 'solution', 'sec3'];
    
    ids.forEach(id => {
      const element = document.querySelector(`#${id}`);
      const link = document.querySelector(`a[href="#${id}"]`);
    
      link.addEventListener("click", function(event) {
        event.preventDefault();
        
        const elementRect = element.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const middle = elementRect.height / 2;
        const offset = window.innerHeight / 2;
        const above = 20; // Distance above the element
        
        const scrollPosition = absoluteElementTop - (offset - middle) - above;
    
        window.scrollTo({
          top: scrollPosition,
          behavior: "smooth"
        });
      });
    });
  });
  

// modal 
const openModalBtn= document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");

  openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });