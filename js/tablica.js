//
// Updates "Select all" control in a data table
//
function updateDataTableSelectAllCtrl(table) {
   var $table = table.table().container();
   var $chkbox_all = $('tbody input[type="checkbox"]', $table);
   var $chkbox_checked = $('tbody input[type="checkbox"]:checked', $table);
   var chkbox_select_all = $('thead input[type="checkbox"]', $table).get(0);

   // If none of the checkboxes are checked
   if ($chkbox_checked.length === 0) {
      chkbox_select_all.checked = false;
      if ('indeterminate' in chkbox_select_all) {
         chkbox_select_all.indeterminate = false;
      }

   // If all of the checkboxes are checked
   } else if ($chkbox_checked.length === $chkbox_all.length) {
      chkbox_select_all.checked = true;
      if ('indeterminate' in chkbox_select_all) {
         chkbox_select_all.indeterminate = false;
      }

   // If some of the checkboxes are checked
   } else {
      chkbox_select_all.checked = true;
      if ('indeterminate' in chkbox_select_all) {
         chkbox_select_all.indeterminate = true;
      }
   }
}

$(document).ready(function() {
   // Initialize the table
   var table = $('#example').DataTable({
      ajax: './dane.txt',
      columnDefs: [
         {
            targets: 0,
            orderable: false,
            searchable: false,
            className: 'dt-body-center',
            render: function(data, type, full, meta) {
               return '<input type="checkbox">';
            }
         }
      ],
      select: {
         style: 'multi'
      },
      order: [[1, 'asc']]
   });

   // Handle row selection event
   $('#example').on('select.dt deselect.dt', function(e, api, type, items) {
      if (e.type === 'select') {
         $('tr.selected input[type="checkbox"]', api.table().container()).prop('checked', true);
      } else {
         $('tr:not(.selected) input[type="checkbox"]', api.table().container()).prop('checked', false);
      }

      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(table);
   });

   // Handle click on "Select all" control
   $('#example thead').on('click', 'input[type="checkbox"]', function(e) {
      if (this.checked) {
         table.rows({ page: 'current' }).select();
      } else {
         table.rows({ page: 'current' }).deselect();
      }

      e.stopPropagation();
   });

   // Handle click on heading containing "Select all" control
   $('thead', table.table().container()).on('click', 'th:first-child', function(e) {
      $('input[type="checkbox"]', this).trigger('click');
   });

   // Handle table draw event
   $('#example').on('draw.dt', function() {
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(table);
   });

   // Handle form submission event
   $('#frm-example').on('submit', function(e){
      var form = this;

      // Iterate over all selected checkboxes
      table.rows({ selected: true }).every(function(index){
         // Get row ID
         var rowId = this.data()[0];

         // Create a hidden element
         $(form).append(
             $('<input>')
                .attr('type', 'hidden')
                .attr('name', 'id[]')
                .val(rowId)
         );
      });
   });
});
