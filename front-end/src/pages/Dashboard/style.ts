import styled from "styled-components";

const DashboardStyle = styled.div`
  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  div button{
    height: 30px;
    width: 30px;
    border: none;
    border-radius: 5px;
    background-color: var(--color3);
    color:var(--color6);
  }

  h2{
    margin: 1rem 0;
  }
`


export { DashboardStyle }