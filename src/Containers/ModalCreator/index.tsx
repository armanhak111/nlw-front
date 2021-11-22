import React from 'react';
import Modal from "react-modal";
import { useDispatch, useSelector } from 'react-redux';
import { ModalTypes } from '../../Constants';
import { modalOpenSelector } from '../../store/selector';
import { setModalOpenAction } from '../../store/slice';
import { SuccessModalComponent, ErrorModalComponent, InfoModalComponent, SuccessGetNextModal } from './modal';
import './styles.css'

interface ModalPropTypes {
  type?: string
}
export const ModalCreator: React.FC<ModalPropTypes> = ({ type }) => {
  const modalOpen = useSelector(modalOpenSelector)
  const dispatch = useDispatch();


  const toggleModal = () => {
    dispatch(setModalOpenAction({}))
  }
  console.log(modalOpen)
  return (
    <Modal
      isOpen={modalOpen.status}
      onRequestClose={toggleModal}
      contentLabel="My dialog"
      className="mymodal"
      ariaHideApp={false}
      overlayClassName="myoverlay"
      closeTimeoutMS={500}
    >
      {modalOpen.type === ModalTypes.success &&
        (
          <SuccessModalComponent />
        )}
      {modalOpen.type === ModalTypes.error &&
        (
          <ErrorModalComponent />
        )}
      {modalOpen.type === ModalTypes.info &&
        (
          <InfoModalComponent childrenInfo={modalOpen.message} />
        )}
      {modalOpen.type === ModalTypes.getNext &&
        (
          <SuccessGetNextModal />
        )}
    </Modal>
  )
}