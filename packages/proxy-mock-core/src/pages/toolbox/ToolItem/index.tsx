import { Modal } from 'antd'
import React, { useState } from 'react'

interface ToolItemProps {
  title: React.ReactNode
  icon: React.ReactNode
  desc: React.ReactNode
  children?: React.ReactNode
}
const ToolItem: React.FC<ToolItemProps> = props => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }
  return (
    <React.Fragment>
      <div className="tool-item" onClick={showModal}>
        <div className="icon-area">{props.icon}</div>
        <div className="title">{props.title}</div>
        <div className="desc">{props.desc}</div>
      </div>
      <Modal
        title={props.title}
        width='70vw'
        open={isModalOpen}
        footer={null}
        closable={true}
        onCancel={handleCancel}
      >
        {props.children}
      </Modal>
    </React.Fragment>
  )
}

export default ToolItem
