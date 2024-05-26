import styled from "styled-components";

interface IHeader{
    openmenu:boolean;
}

const StyledHeader = styled.header<IHeader>`
    min-width: 375px;
    padding: 0 0 67px;

    nav{
        display: flex;
        flex-direction: column;
    }

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
        display: ${({openmenu}) => openmenu ? "flex" : "none"  };
        flex-direction: column;
        margin-top: 22px;
        position: relative;
        padding: 0 24px ;


            & > div:not(:last-child){
                border-bottom: 1px solid #fff;
            
            }

            div{
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
`

export const Circle = styled.div`
            padding: unset !important;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: ${({color}) => color ? color : ""};
`


export default StyledHeader;