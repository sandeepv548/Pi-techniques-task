import styled from "styled-components";

export default styled.div`
  margin-top:20px;
  h2{
    font-size:18px;
    color:black;
    text-align:left;
  }
  .MuiPaper-root{
    border-radius:0 !important;
  }
  .order-list-details{
    display:Grid;
    text-align:left;
    
    .order-num{
      color:#143a38; 
      font-size:12px;
      font-weight:700;
    }
    .order-name{
      font-size:14px;
      font-weight:700;
    }
    .order-badge{
      font-size:16px;
      background-color:#80e7ff;
      color:#23709f;
      text-align:center;
      border-radius:10px;
      width:50%;
      padding:5px;
      margin:10px 0;
    }
  }
  .order-list{
    background:#e8eced;
    padding:20px;
    border-radius:20px;
    border:1px solid black;
  }
  .icons-badge{
    display:flex;
       align-items: center;
       justify-content: center;
  }
  .service-date{
    font-size:12px;
    font-weight:600;
    color:#798c92;
  }
 `
