$(document).ready(function() {
  $('#example').DataTable({
    'ajax': 'dane/dane.json',
    'columns': [
      { 'data': 'Imie' },
      { 'data': 'Nazwisko' },
      { 'data': 'Grupa' },
      { 'data': 'Telefon' },
    ]
  });
});
