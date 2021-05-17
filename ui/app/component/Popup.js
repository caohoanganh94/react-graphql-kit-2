import React from 'react';
import Modal from 'react-modal';
import Scrollbar from 'react-scrollbars-custom';

Modal.setAppElement('#main');

const Popup = ({
  isOpen = false,
  children = null,
  title = '',
  className = '',
  hideCloseButton = false,
  theme = 'default',
  outsideClose = true,
  scrollbar = false,
  onClose = () => {},
}) => {
  const afterOpenModal = () => {};
  const selfClose = (e) => {
    e.preventDefault();
    onClose(e);
  };

  const handleClickOutside = (e) => {
    if (outsideClose) {
      onClose(e);
    }
  };

  const body = (
    <>
      {children && <div className="modal-content">{children}</div>}
    </>
  );

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={handleClickOutside}
      className={`modal-select modal-theme-${theme} ${className}`}
    >
      <div className="modal-wrapper">
        {title && <h3 className="modal-title">{title}</h3>}
        <div className="modal-body">
          {scrollbar ? (
            <Scrollbar noScrollX={true}>{body}</Scrollbar>
          ) : (
            <>{body}</>
          )}
        </div>
        {!hideCloseButton && (
          <a onClick={e => selfClose(e)} className="close" data-dismiss="modal" aria-label="Close" title="Đóng">
            <img src={`/img/icon-close.png`} alt="Đóng" />
          </a>
        )}
      </div>
    </Modal>
  )
};

export default Popup;
