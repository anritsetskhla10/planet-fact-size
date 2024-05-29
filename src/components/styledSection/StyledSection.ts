import styled from "styled-components"

interface SectionProps {
  $planetsize?: {
    mobile: {
      width: string;
      height: string;
    };
    tablet: {
      width: string;
      height: string;
    };
    desktop: {
      width: string;
      height: string;
    };
  };
  $planetcolor?: string;
  $surfacedist?:string;
}

export const StyledSection = styled.section<SectionProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0 0;
    margin: 0 0 47px;

  .pages{
        min-width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0 24px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);

      & > button{
            border: none;
            background-color: transparent;
            font-family: 'Spartan';
            font-size: 9px;
            font-weight: bold;
            letter-spacing: 1.93px;
            text-align: center;
            color: #fff;
            padding-bottom: 16px;
            
            &:hover{
              cursor: pointer;
              background-color: #d8d8d8;
            }

            &:focus{
              background-color:transparent;
              border-bottom: 4px solid ${({ $planetcolor }) => $planetcolor || ''};
              padding-bottom: 12px;
            }

            & > span{
              display: none;
            }
        }
       
    }

    .image-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 95px;

    img {
      width: ${({ $planetsize }) => $planetsize?.mobile.width || 'auto'};
      height: ${({ $planetsize }) => $planetsize?.mobile.height || 'auto'};
    }

    .surface-image {
      position: absolute;
      width: 101px; 
      height: 130px;
      top: 70%;
    }
  }
    h2{
      font-size: 40px;
      font-weight: 500;
      color: #fff;
      margin: 98px 0 16px;
      padding: 0 24px;
    }

    p{
        width: 327px;
        padding: 0 24px;
        font-size: 11px;
        font-family: "Spartan";
        line-height: 2;
        text-align: center;
        color: #fff;
    }

    .source-container{
      display: flex;
      flex-direction: row;
      gap: 4px;
      align-items: center;
      margin: 32px 0 28px;

     & > a{
      text-decoration: none;
      opacity: 0.5;
      font-family: 'Spartan';
      font-size: 12px;
      line-height: 2.08;
      color: #fff;

        & > span{
          text-decoration: underline;
        }
      }
    }

    .info-container{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      padding: 0 24px;

      & > div{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 327px;
        padding: 9px 24px 13px;
        border: solid 1px rgba(255, 255, 255, 0.2);

        & > span{
          font-family: 'Spartan';
          font-size: 8px;
          font-weight: bold;
          line-height: 2;
          letter-spacing: 0.73px;
          color: rgba(255, 255, 255, 0.5);
        }

        & > p{
          all: unset;
          font-size: 20px;
          font-weight: 500;
          letter-spacing: -0.75px;
          color: #fff;
        }
        }
      }

      @media only screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2 , 1fr);
        justify-content: start;
        padding: 0;
        margin-bottom: 36px;

        .pages{
            grid-area: 3/2/3/2;
            justify-self:center;
            align-items: end;
            flex-direction: column;
            gap: 16px;
            padding:0 39px;
            border-bottom: none;

                & > button{
                width: 281px;
                border: solid 1px rgba(255, 255, 255, 0.2);
                padding: 8px 0 7px 20px;
                text-align:start;

                    &:focus{
                    padding: 8px 0 7px 20px;
                    border-bottom: none;
                    background-color:${({$planetcolor})=> $planetcolor};
                    }

                    & > span{
                      display: inline-block;
                        font-family: 'Spartan';
                        font-size: 9px;
                        font-weight: bold;
                        line-height: 2.78;
                        letter-spacing: 1.93px;
                        color: rgba(255, 255, 255, 0.5);
                        margin-right: 17px;
                    }
            }
        }
        .image-container {
        position: relative;
        margin-top: 96px;
        grid-area: 1 / 1 / 1 / 3;
        justify-self: center;

        img {
          width: ${({ $planetsize }) => $planetsize?.tablet.width || 'auto'};
            height: ${({ $planetsize }) => $planetsize?.tablet.height || 'auto'};
        }

        .surface-image {
          position: absolute;
          width: 122px; 
          height: 156px;
          top :75%;
        }
      }


        h2{
            grid-area:  2/ 1 / 2 / 1;
            font-size: 48px;
            margin: 79px 0 0;
            padding: 0 0 0 39px;
        }

        p{  
            grid-area: 3/1/3/1;
            width: 339px;
            padding: 0 0 0 39px;
            text-align:start
        }

        .source-container{
            grid-area: 4/1/4/1;
            margin: 0 0 27px;
            padding: 0 0 0 39px;
        }

        .info-container{
            grid-area: 5/1/5/3;
            justify-self: center;
            flex-direction: row;
            gap: 11px;
            padding: 0 39px;

        & > div{
            flex-direction: column;
            align-items: start;
            width: 164px;
            padding: 16px 0 19px 15px;


            & > p{
                font-size: 24px;
                letter-spacing: -0.9px;
                }
            }
        }
    }

    @media only screen and (min-width: 1440px){

        grid-template-columns: 3fr 1fr;
        justify-content: start;
        padding: 0;
        margin-bottom: 56px;


        .pages{
            grid-area: 4/2/4/2;
            justify-self:center;
            align-items: end;
            flex-direction: column;
            gap: 16px;
            padding:0;
            margin-bottom: 87px;
            border-bottom: none;

                & > button{
                width: 350px;
                padding: 12px 0 11px 28px;
                text-align:start;
                font-size: 12px;
                line-height: 2.08;
                letter-spacing: 2.57px;

                    &:focus{
                    padding: 12px 0 11px 28px;
                    }

                    & > span{
                        font-size: 12px;
                        line-height: 2.08;
                        letter-spacing: 2.57px;
                        margin-right: 28px;
                    }
            }
        }

        .image-container {
          grid-area: 1 / 1 / 5 / 1;
            justify-self: center;
            align-self:center;
            margin-top: 0;

        img {
          width: ${({ $planetsize }) => $planetsize?.desktop.width || 'auto'};
            height: ${({ $planetsize }) => $planetsize?.desktop.height || 'auto'};
        }

        .surface-image {
          width: 163px; 
          height: 199px;
          top: ${({$surfacedist}) => $surfacedist};
        }
        }

       

        h2{
            grid-area:  1/ 2 / 1 / 2;
            font-size: 80px;
            margin: 126px 0 23px;
            padding: 0 ;
        }

        p{  
            grid-area: 2/2/2/2;
            width: 350px;
            font-size: 14px;
            line-height: 1.79;
            padding: 0 ;
        }

        .source-container{
            grid-area: 3/2/3/2;
            margin: 24px 0 39px;
            padding: 0 ;

            & > a{
                font-size: 14px;
                line-height: 1.79;
            }
        }

        .info-container{
            gap: 30px;
            padding: 0;

        & > div{
            width: 275px;
            padding: 20px 0 27px 23px;

            & > span{
                font-size: 11px;
                line-height: 2.27;
                letter-spacing: 1px;
            }

            & > p{
                font-size: 40px;
                letter-spacing: -1.5px;
                }
            }
        }
    }

`