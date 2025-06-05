const selectBox = document.getElementById('testBookletSelect');
const codeSection = document.getElementById('codeSection');
const codeContent = document.getElementById('codeContent');
const selectedBooklet = document.getElementById('selectedBooklet');
const copyButton = document.getElementById('copyButton');

selectBox.addEventListener('change', async () => {
  const value = selectBox.value;
  if (!value) {
    codeSection.classList.remove('show');
    return;
  }

  const fileName = `${value}.js`;
  try {
    const response = await fetch(fileName);
    if (!response.ok) throw new Error('Script file not found');
    const scriptText = await response.text();
    codeContent.textContent = scriptText;
    selectedBooklet.textContent = value;
    codeSection.classList.add('show');
    codeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } catch (error) {
    codeContent.textContent = 'Error: Unable to load the script file. Please ensure the script files are available in the same directory.';
    selectedBooklet.textContent = value;
    codeSection.classList.add('show');
  }
});

copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(codeContent.textContent);
    const originalText = copyButton.innerHTML;
    copyButton.innerHTML = `
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Copied!
                `;
    copyButton.style.background = 'linear-gradient(135deg, #10B981, #059669)';

    setTimeout(() => {
      copyButton.innerHTML = originalText;
      copyButton.style.background = 'linear-gradient(135deg, #3B82F6, #1E40AF)';
    }, 2000);
  } catch (error) {
    alert('Failed to copy code to clipboard. Please select and copy manually.');
  }
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-slide");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("active");
  }
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].classList.add("active");
}

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });

  const slides = document.getElementsByClassName("carousel-slide");
  if (slides.length > 0) {
    slides[0].style.display = "block";
    slides[0].classList.add("active");
  }

  let slideInterval = setInterval(() => {
    plusSlides(1);
  }, 3000);

  const carouselContainer = document.querySelector('.carousel-container');

  if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', () => {
      clearInterval(slideInterval);
    });

    carouselContainer.addEventListener('mouseleave', () => {
      slideInterval = setInterval(() => {
        plusSlides(1);
      }, 3000);
    });
  }
});
window.plusSlides = plusSlides;
