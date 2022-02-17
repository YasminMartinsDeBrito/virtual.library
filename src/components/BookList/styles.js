import styled from "styled-components";
export const Main = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;

    @media screen and (min-width:769px){
                display: flex;
                flex-direction: row-reverse;
            }
`
export const Container = styled.div`
display: flex ;
justify-content: center;
margin-top: 10px;

/* @media screen and (min-width:768px){
              margin-top: 10%;
            } */

            .relogio{
                display: none;

               @media screen and (min-width:768px){
                   display: flex;
                   justify-content: center;
                   align-items:center;
                }
            }
div{
    background-color:#7209b7;
    border:#3a0ca3 solid 2px;
    border-radius: 100%;
    width:100px;
    height: 100px;
    margin-top:10px;
    

    @media screen and (min-width:768px){
        margin: 0 150px;
    }
}
p{
        text-align:center;
        font-size:20px;
        color:#fff;
        display: block;
    }
    strong{
        text-align:center;
        font-size:22px;
        font-weight: 700;
    }
    span{
        text-align:center;
        font-size:19px;
        font-style:italic;
        font-weight: 900;
        margin-bottom: 10px;
    }

`


export const Container2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 100vw;
    height: 300px;
    img.ground{
    position: relative;
    background-size:cover;
    
}

    div.container{
        /* position: relative; */
        position: fixed;
        position: absolute;
        margin-top: 120px;
      
        width: 300px;
        height: 200px;

        @media screen and (min-width:768px){
                 margin-top: 290px;
                 width: 350px;
                 left: 0;
            }

        img.vovo{
            position:absolute;
            width: 150px;
            height: 170px;
        }
    }
    div.box{
        margin: 10px auto;
        background-color:#fff;
        border-radius: 10px;
        height: 160px;
        padding-left:150px;
        width: 150px;
        
        p{
            text-align: center;
            color:#8b8c89;
        }
        .number, .alphabet, .color{ 
            border: none;
            margin: 6px ;
            border-radius: 20%;
            width: 30px;
            height: 30px;
            background-color:#e7ecef;  
            cursor: pointer;
            :hover{
                background-color:  #fff;
            }
        }

        .organize{
            margin: 10px;
            width: 120px;
            border-radius: 10px;
            cursor: pointer;
        }
        
    }

    @media screen and (min-width:768px){
              margin-top: 20%;

              .organize{
                  width: 150px;
              }
            }

`
export const BookItem = styled.div`
position: absolute;
margin: 10px  auto;
padding-top: 5px;
max-width:1000px;
width: 280px;
display: flex;
justify-content:center;

img.bookcase{
position: absolute;
border-radius: 15px;
margin: 0 auto;
max-width:1000px;
width: 250px;
    top:-38px;
    left:70px;
}

   li{
       position: relative;
       display: flex;
        
       margin: 1px;
       width: 10px;
       height: 30px;
       list-style: none;
       
       
    }
    
    @media screen and (min-width:768px){

        width: 400px;
        li{
            margin: 5px;
                width: 30px;
                height: 100px;
            }

            img.bookcase{
                position: absolute;
                border-radius: 15px;
                margin: 0 auto;
                top:-85px;
                left:-15px;
                width: 650px;
                }
        }
        
        `

