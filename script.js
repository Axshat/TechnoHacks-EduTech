// Existing code...

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let isValid = true;

  // Username validation...
  // Password validation...

  if (!isValid) {
    // Shake animation on invalid login attempt
    document.querySelector('.container').classList.add('shake');
    setTimeout(() => {
      document.querySelector('.container').classList.remove('shake');
    }, 500); // Remove shake animation after 0.5 seconds
  }

  if (isValid) {
    // ** Server-side Scripting would be required here**
    console.log('Form submitted successfully!');
  }
});
