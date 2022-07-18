import styled from "styled-components";

export const InputContainer = styled.div`
display: flex;
flex-direction: column;
gap: 3px;
width: 100%;
padding: 0;
input{
width: 100%;
margin-top: 5px;
padding: 8px 0 8px 8px;
border: 1px solid black;
border-radius: 5px;
}
span{
    color: red;
}
`