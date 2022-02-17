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
    margin-bottom: 70px;

.stripes{
    position:absolute ;
}
            .relogio{
                position: relative;
                display: none;

               @media screen and (min-width:768px){
                   display: flex;
                   justify-content: center;
                   align-items:center;
                }
            }
    div{
        position: relative;
        margin-top:10px;
        width:100px;
        height: 100px;

        @media screen and (min-width:768px){
            margin: 0 150px;
                img{
                    width: 150px;
                }
                .stripes{
                        width: 100%;
                }
        }
    }


`


export const Container2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 100vw;
    img.ground{
    position: relative;
    
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
           
            @media screen and (min-width:768px){
               
                left:40px;
            }
            }
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

