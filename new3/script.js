const scrollBox = document.getElementById("scrollBox");

if (scrollBox) {
  // Create an Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add 'visible' class when the box is in the viewport
        scrollBox.classList.add("visible");
        observer.unobserve(entry.target); // Stop observing once it’s visible
      }
    });
  }, { threshold: 0.05 }); // Trigger when 8% of the box is visible

  // Start observing the box
  observer.observe(scrollBox);
}
const scrollBox2 = document.getElementById("scrollBox2");
const steps = document.getElementById("steps");

function observeElement(element, callback) {
  if (element) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(element);
  }
}

function addVisibleClass(element) {
  element.classList.add("visible");
}

observeElement(scrollBox2, addVisibleClass);
observeElement(steps, addVisibleClass);
