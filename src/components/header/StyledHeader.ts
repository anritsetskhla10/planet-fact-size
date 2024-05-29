import styled from "styled-components";

interface IHeader{
    $openmenu:boolean;
}

const StyledHeader = styled.header<IHeader>`

    nav{
        display: flex;
        flex-direction: column;
       
        div{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 16px 24px 17px;
    
            h1{
                font-size: 28px;
                font-weight: 500;
                letter-spacing: -1.05px;
                color: #fff;
            }
    
            button{
                background-color: transparent;
                border: none;
                cursor: pointer;
    
                img{
                    width: 24px;
                    height: 17px;
                }
            }
    
        }
    
        hr{
            height: 1px;
            width: 100%;
            color: #fff;
        }
    
        ul{
            display: ${({$openmenu}) => $openmenu ? "flex" : "none"  };
            flex-direction: column;
            margin-top: 24px;
            position: relative;
            padding: 0 24px ;
    
    
                & > div:not(:last-child){
                    border-bottom: 1px solid #fff;
                
                }
    
             & >  div{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                    gap: 25px;
                    padding: 20px 0;
                }
    
                
                a{
                    font-size: 15px;
                    font-family: "League Spartan", sans-serif;
                    font-weight: bold;
                    line-height: 1.67;
                    letter-spacing: 1.36px;
                    color: #fff;
                }
    
                button{
                background-color: transparent;
                border: none;
                cursor: pointer;
                    img{
                        width: 6px;
                        height: 8px;                
                        position: absolute;
                        right: 32px;
                    }
            }  
        }
    }

    @media only screen and (min-width:768px){
       nav{
        div{
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 32px 0 39px;
    
            button{
                display: none;
            }
    
        }
    
        hr{
           display:none;
        }
    
        ul{
            display: flex ;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-top: 0;
            position: relative;
            padding: 0 51px 27px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    
    
                & > div:not(:last-child){
                    border-bottom: unset
                }
    
                & >  div{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 33px;
                    padding:0;
                }
    
                
                a{
                    font-size: 11px;
                    line-height: 2.27;
                    letter-spacing: 1px;
                    color: rgba(255, 255, 255, 0.75);
                }
    
                button{
                display: none;
                }  
        }
    }
    }

    @media only screen and (min-width:1440px){
        nav{
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 22px 41px 27px 32px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            
            div{
            padding: 0;
            }

    
        ul{ 
            display: flex ;
            flex-direction: row;
            align-items: center;
            gap: 33px;
            padding: 0;
            border-bottom: unset;
    
                & >  div{
                    gap: 33px;
                }
    
        }
    }
    }

`

export const Circle = styled.div`
            padding: unset !important;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: ${({color}) => color ? color : ""};

            @media only screen and (min-width:768px){
                display: none !important;
            }

`

interface IBorder{
    $bordercolor?: string;
  }
  
 export const StyledLI = styled.li<IBorder>` 
      
      a:focus{
          padding-top: 29px;
          border-top: 4px solid ${({ $bordercolor }) => $bordercolor };
      }
  
  
  `


export default StyledHeader;