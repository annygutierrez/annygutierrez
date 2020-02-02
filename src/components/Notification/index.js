import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #444;
  color: white;
  padding: 16px;
  position: fixed;
  top:${props => props.top}px;
  right: 16px;
  z-index: 10000;
  transition: top 0.5s ease;
`;

const Notification = (props) => {
    const topMessure = props.show ? 16 : -100;
    return(
         <Container top={props.top}>Example text here</Container>
    );
};

export default Notification;