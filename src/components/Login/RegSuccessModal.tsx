// Libraries
import * as React from 'react'
import { Modal, Button, Icon, Menu, Header } from 'semantic-ui-react'

interface RegSuccessModal {
  showModal: boolean,
  setShowModal: Function
}

const RegSuccessModal = ({ showModal, setShowModal }: RegSuccessModal) => {
  return (
    <Modal
      centered
      basic
      open={showModal}
      style={{
        textAlign: 'center'
      }}>
      <Icon name='mail' size='massive' />
      <Header content='Register Succesful!' />
      <Header content='Verify account from a link in your email' />
      <p> NOTE: mail is most likely in junk folder of your email! </p>
      <Button onClick={() => setShowModal(false)}>ok</Button>
    </Modal>
  )
}


export default RegSuccessModal