import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    margin: 20px auto;
    
`
export const BookItem = styled.ul`
    display: flex;
    justify-content:center;
    margin: 10px auto;

    li{
        /* margin: 0 auto; */
        width: 40px;
        height: 120px;
        list-style: none;
    }
`

export const BookItem2 = styled.ul`
    display: flex;
    justify-content:center;
    margin: 120px auto;

    li{
        /* margin: 0 auto; */
        display: flex;
        justify-content:flex-end;
        width: 40px;
        height: 120px;
        list-style: none;
    }
`