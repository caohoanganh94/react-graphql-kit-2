import Swal from 'sweetalert2';

export function getCookie(cname) {
  var name = cname + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

export function showError(code, title = 'Thông báo') {
  let msg = '';

  switch (code) {
    default:
      msg = 'Không thể thực hiện tác vụ này, vui lòng thử lại sau!';
      break;
  }

  return Swal.fire({
    title: `<span class="popup-alert__title">${title}</span>`,
    html: `<p class="popup-alert__message">${msg}</p>`,
    showConfirmButton: false,
    showCancelButton: false,
    showCloseButton: true,
    closeButtonHtml: '<img src="/img/icon-close.png" alt="Đóng"/>',
    target: 'body',
    customClass: {
      popup: 'popup-alert popup-error'
    },
    showClass: {
      popup: 'animate__animated animate__fadeInDown animate__faster'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp animate__faster'
    },
  })
}

export function showSuccess(code, title = 'Thông báo') {
  let msg = '';

  switch (code) {
    default:
      msg = 'Thực hiện thao tác thành công!';
      break;
  }

  return Swal.fire({
    title: `<span class="popup-alert__title">${title}</span>`,
    html: `<p class="popup-alert__message">${msg}</p>`,
    showConfirmButton: false,
    showCancelButton: false,
    showCloseButton: true,
    closeButtonHtml: '<img src="/img/icon-close.png" alt="Đóng"/>',
    target: 'body',
    customClass: {
      popup: 'popup-alert popup-success'
    },
    showClass: {
      popup: 'animate__animated animate__fadeInDown animate__faster'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp animate__faster'
    },
  })
}
