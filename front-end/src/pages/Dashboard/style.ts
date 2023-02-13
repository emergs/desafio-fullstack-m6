import styled from "styled-components";

const DashboardStyle = styled.div`
  padding-bottom: 50px;

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

const ContentDashboard = styled.div`
  height: 100%;
  width: 100%;
  max-width: 600px;
  padding:20px;
  padding-bottom: 50px;

  .settings-profile{
    display: flex;
    justify-content: flex-end;
    gap:5px;
  }
`


export { DashboardStyle, ContentDashboard }