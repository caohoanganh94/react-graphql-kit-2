import React from 'react';
import Modal from 'react-modal';
import Scrollbar from 'react-scrollbars-custom';

Modal.setAppElement('#main');

const Popup = ({
  isOpen = false,
  onClose = () => {},
  body = null,
  className = '',
  hideCloseButton = false,
  theme = 'default',
  outsideClose = false
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
  }

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={handleClickOutside}
      className={`modal-select modal-theme-${theme} ${className}`}
    >
      <div className="modal-wrapper">
        {body && (
          <div className="modal-body">
            {theme === 'default' ? (
              <Scrollbar noScrollX={true}>
                <div className="modal-content">
                  {body}
                </div>
              </Scrollbar>
            ) : (
              <div className="modal-content">
                {body}
              </div>
            )}
          </div>
        )}
        {!hideCloseButton && (
          <a onClick={e => selfClose(e)} className="close" data-dismiss="modal" aria-label="Close" title="Đóng">
            <img src="/img/icon-close.png" alt="Đóng" />
          </a>
        )}
      </div>
    </Modal>
  )
};

export default Popup;
