import styled from "@emotion/styled" 
import { Progress } from '@chakra-ui/react'
import { colors } from "@constants/colors"
import React  from "react"  

type Props = {}

const Bookmark: React.FC<Props> = ({}) => { 
  return ( 
      <StyledWrapper className="common-container">
        <div className="header">
          <div className="lt common-h1-sb">내 작가 등급</div>  
        </div>
        <div className="content">
          <div className="lt"> 
            <div className="my-logo"></div>
            <div className="my-grade">
              <div className="common-h2-sb">(UserName)님은 
                <div className="common-h2-sb">Special Editor</div> 입니다
              </div>
            </div> 
            <div className="progress-bar">
              <div className="logo" />
              <Progress className="percent" value={80}></Progress> 
            </div>
            <div className="cond-box">
              <div className="cond">
                <div className="check" />
                <div className="common-h4-rg">👏 박수 10/10개 달성</div> 
              </div>
              <div className="cond">
                <div className="check" />
                <div className="common-h4-rg">💸 후원금 발생</div> 
              </div>
              <div className="cond"> 
                <div className="check" />
                <div className="common-h4-rg">👥 팔로워 수 4/10명 달성</div>
              </div>
            </div>
          </div> 
          <div className="rt">
            <div className="grade">  
              <div className="logo-img"></div>
              <div className="detail"> 
                <div className="common-h2-sb">Starter</div>
                <div className="common-h3-rg">코컬리티 회원가입</div>
              </div>
            </div> 
            <hr className="hr" />
            <div className="grade">  
              <div className="logo-img"></div> 
              <div className="detail"> 
                <div className="common-h2-sb">Editor</div>
                <div className="common-h3-rg">글 1개 작성</div>
              </div>
            </div> 
            <hr className="hr" />
            <div className="grade">  
              <div className="logo-img"></div> 
              <div className="detail"> 
                <div className="common-h2-sb">Special Editor</div>
                <div className="common-h3-rg">박수 10개와 첫 후원금 발생</div>
              </div>
            </div> 
            <hr className="hr" />
            <div className="grade">  
              <div className="logo-img"></div> 
              <div className="detail"> 
                <div className="common-h2-sb">Professional Editor</div>
                <div className="common-h3-rg">박수 10개•첫 후원금 발생</div>
                <div className="common-h3-rg">팔로워 수 10명 달성</div>
              </div>
            </div>
          </div>  
        </div>
      </StyledWrapper> 
  )
}

export default Bookmark

const StyledWrapper = styled.div`
  padding-top: 70px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 40px; 
  }
  .content {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
    gap: 20px;
    .lt {  
      width: 622px;
      height: 618px; 
      margin-top: 40px;
      gap: 40px; 
      padding: 60px 100px;
      background-color: #000000;
      border-radius: 20px;   
      .my-logo {  
        width: 156px;
        height: 156px; 
        margin: 0 auto;
        background-color: white;
      }
      .my-grade { 
        height: 36px;    
        margin-top: 28px;   
        text-align: center;
        display: flex;
        justify-content: center;
        .common-h2-sb {   
          display: flex; 
          color: white;  
          margin-right: 4px; 
          .common-h2-sb { 
            display: flex;   
            margin-left: 4px;
            color: ${colors.primary500};   
          }
        }  
      } 
      .progress-bar {
        width: 420px;
        height: 50px;
        margin-top: 40px; 
        .logo {
          width: 32px;
          height: 32px;  
          float: right; 
          border-radius: 100%;
          background: white;
        }
        .percent {
          width: 420px;
          height: 10px;
          background: ${colors.grey500}; 
          color-scheme: ${colors.primary500};
          border-radius: 20px;
        }
      }
      .cond-box {  
        width: 422px;
        height: 148px;
        border: 1px solid ${colors.grey700}; 
        border-radius: 10px;
        background: ${colors.grey800};
        display: flex;
        flex-direction: column;
        align-items: flex-start; 
        gap: 18px;
        margin-top: 40px;
        justify-content: center;
        .cond { 
          display: flex;  
          margin-left: 20px;
          align-items: center;  
          .check {   
            width: 16px; 
            height: 16px;
            border-radius: 100%;
            background: ${colors.grey500}; 
            margin-right: 12px; 
          }
          .common-h4-rg {    
            width: 200px;
            height: 27px;
            color: white;   
          } 
        } 
      }
    } 
    .rt {
      position: absolute;
      display: flex;
      width: 347px;
      height: 614px;  
      margin: 40px 733px; 
      flex-direction: column; 
      hr { 
        width: 347px;
        height: 1px;
        background:  ${colors.grey300}; 
        margin-top: -40px;
        margin-bottom: 40px;
      }
      .grade {
        display: flex;
        width: 330px;
        height: 90px; 
        gap: 26px;
        flex-direction: row;
        margin-bottom: 81px;
        .logo-img {
          width: 90px;
          height: 90px;
          border-radius: 16px;
          background-color: black;
          flex: none; 
        }
        .detail { 
          flex-direction: column;   
          .common-h2-sb {  
            width: 220px;
            height: 36px; 
            margin-bottom: 5px; 
          }
          .common-h3-rg {   
            color: ${colors.grey500}; 
          }
        }
      } 
    } 
  }
`