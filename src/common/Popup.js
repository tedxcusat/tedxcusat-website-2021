import React from "react"
import styled from "styled-components"
import FeatherIcons from "feather-icons-react"

const Popup = ({ popupVisible, setPopupVisible }) => {
  if (!popupVisible) return null

  return (
    <Modal>
      <header>
        <p>TEDxCUSAT 2022</p>
        <FeatherIcons
          icon="x"
          size={22}
          color="white"
          onClick={() => setPopupVisible(false)}
        />
      </header>

      <StyledButton
        onClick={() => {
          window.location.href =
            "https://www.eventbrite.com/e/beyond-the-talk-tickets-190196832847"
        }}
      >
        Register for Pre-Event
      </StyledButton>
    </Modal>
  )
}

export default Popup

let Modal = styled.div`
  width: 320px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.473);
  backdrop-filter: blur(20px);
  box-shadow: 0px 12px 48px rgba(0, 0, 0, 0.623);
  position: fixed;
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  top: 50%;
  left: 50%;

  z-index: 99;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  animation: modal 0.3s ease-in;

  @keyframes modal {
    from {
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
    }
    to {
      top: 50%;
      left: 50%;
      opacity: 1;
    }
  }

  header {
    width: 100%;
    height: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    font-weight: 600;
    letter-spacing: 1px;

    svg {
      cursor: pointer;
    }
  }
`

let StyledButton = styled.button`
  padding: 8px 10px;
  background-color: #d92002;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  color: white;
`
