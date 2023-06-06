// Espera a que el documento HTML se cargue completamente
document.addEventListener('DOMContentLoaded', function() {
  console.log('Cargando documento');
  // Obtén el formulario y los campos del formulario
  var form = document.querySelector('form');
  var nameInput = document.querySelector('input[type="text"][placeholder="Nombre"]');
  var destinationInput = document.querySelector('input[type="text"][placeholder="Destino"]');
  var experienceTextarea = document.querySelector('textarea');

  // Agrega un evento de escucha al formulario para el evento de envío
  form.addEventListener('submit', function(event) {
    // Detiene el envío del formulario
    event.preventDefault();

    // Valida los campos del formulario
    var name = nameInput.value.trim();
    var destination = destinationInput.value.trim();
    var experience = experienceTextarea.value.trim();

    if (name === '') {
      alert('Por favor, ingresa tu nombre.');
      nameInput.focus();
      return;
    }

    if (destination === '') {
      alert('Por favor, ingresa el destino.');
      destinationInput.focus();
      return;
    }

    if (experience === '') {
      alert('Por favor, ingresa tu experiencia.');
      experienceTextarea.focus();
      return;
    }

    // Si los campos son válidos, puedes enviar el formulario o realizar otras acciones aquí
    // form.submit();
    // Otra lógica adicional...

    // Restablece los valores de los campos del formulario después del envío
    nameInput.value = '';
    destinationInput.value = '';
    experienceTextarea.value = '';
  });
});
