$(document).ready(function() {
  $('#example').DataTable({
    'ajax': 'dane/dane.txt',
    'columns': [
      { 'data': 'Imie' },
      { 'data': 'Nazwisko' },
      { 'data': 'Grupa' },
      { 'data': 'Telefon' },
    ]
  });
});
