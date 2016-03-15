$(document).ready(function() {
  $('#example').DataTable({
    'ajax': 'dane/dane.json',
    'columns': [
      'Imie',
      'Nazwisko',
      'Grupa',
      'Telefon'
    ]
  });
});
