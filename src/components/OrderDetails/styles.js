import styled from "styled-components";

export default styled.div`
  background-color:#e8eced;
  border-radius:25px;
  text-align:left;
  color:black;
  h1{
    font-size:18px;
    font-weight:bold;
  }
  
  table{
    th{
      color:#71858b;
      font-size:12px;
    }
    tr{
      th.MuiTableCell-root, td.MuiTableCell-root {
        padding:6px 0 !important;
      }
    }
    
  }
  .MuiTableContainer-root{
    background-color:transparent;
    
  }
  nav{
    display:ruby;
    color:#00704b;
    span{
      font-size:14px;
      font-weight: 600;
    }
    .MuiListItemIcon-root{
      min-width:30px !important;
    }
      svg{
        color:#00704b;
      }
    
  }

  .details-head-div{
    padding:20px;
  }
  .MuiBox-root{
    background-color:white;
    padding-bottom:20px;
  }


 `
