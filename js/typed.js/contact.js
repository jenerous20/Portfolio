
  document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent form from submitting normally

      // Display success message
      document.getElementById('successMessage').style.display = 'block';

      // Optionally, you can reset the form after submission
      setTimeout(function() {
          document.getElementById('contactForm').reset();
          document.getElementById('successMessage').style.display = 'none';
      }, 3000); // Success message disappears after 3 seconds
  });
