import styled from "styled-components";

const FormStyled = styled.form`
  background-color: var(--color5);
  width: 100%;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  label{
    display: none;
  }

  .div-label-input{
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
  }

  .button-default{
    margin-top: 20px;
    width: 100%;
    height: 30px;
  }

  .header-register{
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export { FormStyled }