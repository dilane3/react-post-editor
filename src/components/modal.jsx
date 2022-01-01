import React from 'react'
import { Fragment } from 'react'
import "./modal.css"

const image = require("../boules2.png")

const Modal = ({show, file, onCloseModal}) => {
  return (
    <Fragment>
      <section className={`modalContainer ${show && 'showModal'}`}>
        <span className="modal-close" onClick={onCloseModal}>
          <i className="bi bi-x"></i>
        </span>

        <img src={file} />
      </section>

      {
        show && (
          <span className="modalBlur"></span>
        )
      }
    </Fragment>
  )
}

export default Modal