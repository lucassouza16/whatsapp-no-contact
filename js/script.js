const form = document.querySelector('#send');

form.addEventListener('submit', e => {
   e.preventDefault();

   window.open(`https://wa.me/${form.contact.value.replace(/[^\d]/g, '')}`, '_blank').focus();
});