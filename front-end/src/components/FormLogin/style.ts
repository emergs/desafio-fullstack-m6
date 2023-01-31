import styled from "styled-components";

const FormStyle = styled.form`
  background-color: white;
  width: 100%;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h1{
    width: 100%;
    height: 30%;
    display: flex;
    justify-content:center;
    align-items: center;
  }
`

const DivLabelInput = styled.div`
  width: 100%;
  height: 30%;
  padding:0 10%;
  display: flex;
  flex-direction:column;
  justify-content:space-around;

  label{
    display: none;
  }

  input{
    height: 30px;
  }
`

const ButtonForm = styled.div`
  width: 100%;
  height: 40%;
  padding:0 10%;

  button{
    margin-top: 20px;
    width: 100%;
    height: 30px;
  }
`

export { FormStyle, DivLabelInput, ButtonForm }