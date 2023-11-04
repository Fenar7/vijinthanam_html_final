function toggleActive(clickedElement) {
    // Remove the "active" class from all divs
    const divs = document.querySelectorAll('.plan');
    divs.forEach((div) => {
      div.classList.remove('active');
    });

    // Add the "active" class to the clicked div
    clickedElement.classList.add('active');
  }