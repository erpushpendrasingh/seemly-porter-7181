import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    margin-top: 30px;
    width: 70%;
    & p {
        text-align: left;
        font-size: 20px;
    }

`

export const Wrap2 = styled.div`
    display: grid;
    text-align: left;
    grid-template-columns: repeat(2,1fr);
    margin-top: 30px;
    font-size: 15px;
    
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    cursor: pointer;
    & Link{
        
    }
    & h1{
        
        margin-top: 20px;
    }
    & h1:hover{
        
        text-decoration: underline;
    }
    @media (max-width: 900px) {
       & {
        display: grid;
        grid-template-columns: repeat(1,1fr);
        font-size: 12px;
        
       }
    }
`

export const Wrap3 = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    text-align: left;
    gap:20px;
    margin-top: 30px;
    background-color: lightgray;
    & img {
        width: 100%;
        
    }

`
export const Tag = styled.div`
        background-color: lightgray;
        height: 80px;
        margin-top: 100px;
        & h2 {
            text-align: center;
            font-size: 30px;
            
}
`
export const Child1 = styled.div`
    background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    & img{
        height: 55%;
    }
    & p:nth-child(2){
        font-size: 40px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        margin-left: 10px;
    }
    & p:nth-child(3){
        font-size: 20px;
       margin-top: 10px;
       margin-left: 10px;
    }
    & button{
        cursor: pointer;
        border: none;
        padding: 10px 10px;
        background-color: white;
        font-size: 18px;
    }
    & button:hover{
        text-decoration: underline;
    }
    @media (max-width: 900px) {
        & p:nth-child(2){
            font-size: 15px;
       }
       & p:nth-child(3){
        font-size: 15px;
       }
    }
`
export const Child2 = styled.div`
        background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    & img{
        height: 55%;
    }
    & p:nth-child(2){
        font-size: 40px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        margin-left: 10px;
    }
    & p:nth-child(3){
        font-size: 20px;
       margin-top: 10px;
       margin-left: 10px;
    }
    & button{
        cursor: pointer;
        border: none;
        padding: 10px 10px;
        background-color: white;
        font-size: 18px;
    }
    & button:hover{
        text-decoration: underline;
    }
    @media (max-width: 900px) {
        & p:nth-child(2){
            font-size: 15px;
       }
       & p:nth-child(3){
        font-size: 15px;
       }
    }
`
export const Child3 = styled.div`
        background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    & img{
        height: 55%;
    }
    & p:nth-child(2){
        font-size: 40px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        margin-left: 10px;
    }
    & p:nth-child(3){
        font-size: 20px;
       margin-top: 10px;
       margin-left: 10px;
    }
    & button{
        cursor: pointer;
        border: none;
        padding: 10px 10px;
        background-color: white;
        font-size: 18px;
    }
    & button:hover{
        text-decoration: underline;
    }
    @media (max-width: 900px) {
        & img {
            height: 50%;
        }
        & p:nth-child(2){
            font-size: 15px;
       }
       & p:nth-child(3){
        font-size: 15px;
       }
    }
`