import styled from "styled-components";

const ContentStyle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  padding: 2rem;
  color: var(--color6);
  height: 100%;
  width: 100%;
  max-width: 600px;
`

const ProfileStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;

  Button{
    width: 100px;
  }

  .div-btn-exit{
    height: 10%;
    display: flex;
    justify-content: flex-end;
  }

  .div-btn-exit Button{
    width: 50px;
  }

  ul{
    background-color: var(--color5);
    color: var(--color3);
    height: 70%;
    display: flex;
    flex-direction: column;
    gap:2rem;
    padding: 1rem;
  }

  ul li span:first-child{
    font-weight: bold;
    margin-right: 0.5rem;
  }

  .div-btn-group{
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`

export { ContentStyle, ProfileStyle }