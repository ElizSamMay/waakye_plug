import Swal from 'sweetalert2'


export function fireSuccessAlert(message){
    Swal.fire({
        title: "Success!",
        text: message,
        icon: "success"
    })
}


export function fireSuccessAlertWithAction(message, action){
    Swal.fire({
        title: "Success!",
        text: message,
        icon: "success"
    }).then(()=>{
        action.call()
    })
}

export function fireFailureAlert(message){
    Swal.fire({
        icon: "error",
        title: "Error",
        text: message,
      });
}

export function fireDeletePrompt(){
    return Swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this item!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
    });
}