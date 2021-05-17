import Swal from 'sweetalert2';
import * as dayjs from 'dayjs';

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

export function showError(code, title = 'Thông báo', onClose = () => {}) {
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
    onClose: () => {
      onClose();
    },
    customClass: {
      popup: `popup-alert popup-error ${title.length ? '' : 'popup-no-title'}`
    },
  })
}

export function showSuccess(code, data = {}, title = 'Chúc mừng', onClose = () => {}) {
  let msg = '';

  switch (code) {
    default:
      msg = 'Thực hiện thao tác thành công!';
      break;
  }

  return Swal.fire({
    title: `<span class="popup-alert__title">${title}</span>`,
    html: `
      ${data.image ? `<div class="popup-alert__image"><img src="${data.image}"/></div>` : ''}
      <p class="popup-alert__message">${msg}</p>
      ${data.actionLabel ? `<a class="popup-alert__action" href="${data.actionLink}">${data.actionLabel}</a>` : ''}
    `,
    showConfirmButton: false,
    showCancelButton: false,
    showCloseButton: true,
    closeButtonHtml: '<img src="/img/icon-close.png" alt="Đóng"/>',
    target: 'body',
    onClose: () => {
      onClose();
    },
    customClass: {
      popup: `popup-alert popup-success ${title.length ? '' : 'popup-no-title'}`
    },
  })
}

export function showConfirm(msg = 'Bạn có chắc chắn không?', callback = () => {}, title = 'Thông báo') {
  return Swal.fire({
    title: `<span class="popup-alert__title">${title}</span>`,
    html: `<p class="popup-alert__message">${msg}</p>`,
    confirmButtonText: 'Có',
    showCancelButton: true,
    cancelButtonText: 'Không',
    showCloseButton: true,
    closeButtonHtml: '<img src="/img/icon-close.png" alt="Đóng"/>',
    target: 'body',
    reverseButtons: true,
    customClass: {
      popup: `popup-alert popup-confirm ${title.length ? '' : 'popup-no-title'}`
    },
  }).then(res => {
    if (res.value) {
      callback();
    }
  });
}

export function getDateTime(dateTime, format = 'HH:mm DD/MM/YYYY') {
  return dayjs(dateTime).format(format);
};

export function isCurrentAfter(date) {
  return dayjs().isAfter(dayjs(date));
}

export function isCurrentBefore(date) {
  return dayjs().isBefore(dayjs(date));
}
