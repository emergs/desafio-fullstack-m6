import styled from "styled-components";

const GroupList = styled.ul`

  .contact-details{
    display: block;
    overflow: auto;
  }

  .buttons-group{
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }

  .buttons-group button{
    width: 20%;
  }
`

const List = styled.li`
  padding: 5px;

  :nth-child(2n+1){
    background-color: var(--color5); 
    color: var(--color3)
  }
`

const GroupListDetails = styled.ul`
  padding: 5px;

  li{
    display: flex;
    padding: 3px 0;
  }

  li span:first-child{
    width: 25%;
  }

  li span:last-child{
    width: 75%;
  }

  /* li:last-child{
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  } */

  li button{
    width: 30%;
  }



`

export { GroupList, List, GroupListDetails }