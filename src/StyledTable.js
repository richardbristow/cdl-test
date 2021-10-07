import styled from 'styled-components/macro';

const StyledTable = styled.table`
  width: 60%;
  border: 1px solid black;
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;

  th,
  td {
    padding: 10px;
  }

  thead,
  tfoot {
    background-color: black;
    color: white;
  }

  tbody {
    td {
      button {
        background-color: darkgrey;
        width: 100%;
      }
    }

    tr {
      &:nth-child(even) {
        background-color: lightgray;
      }
    }
  }

  tfoot {
    td {
      &:first-child {
        text-align: right;
      }
    }
  }
`;

export default StyledTable;
