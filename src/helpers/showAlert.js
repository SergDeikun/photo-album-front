import Swal from 'sweetalert2';

export const showAlert = (id, handleDelete) => {
  Swal.fire({
    title: 'Are you sure you want to delete it?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  }).then(result => {
    if (result.isConfirmed) {
      handleDelete(id);
      // Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
    }
  });
};
