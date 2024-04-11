import React, { forwardRef } from "react";
import { FixedSizeList as List } from "react-window";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


const PADDING_SIZE = 10;
const ITEM_SIZE = 35;

const Row = ({ index, style, data }) => (
  <div
    className={index % 2 === 0 ? "RowEven" : "RowOdd"}
    style={{
      ...style,
      top: `${parseFloat(style.top) + PADDING_SIZE}px`,
    }}
  >
    <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableBody>
          <StyledTableRow key={data?.da[index]?.name}>
          <StyledTableCell component="th" scope="row">
              {index}
            </StyledTableCell>
            <StyledTableCell component="th" scope="row">
              {data?.da[index]?.name}
            </StyledTableCell>
            {data?.da[index]?.email && <StyledTableCell component="th" scope="row">{data?.da[index]?.email}</StyledTableCell>}
            {data?.da[index]?.price && <StyledTableCell component="th" scope="row">{data?.da[index]?.price}</StyledTableCell>}
            {data?.da[index]?.age &&<StyledTableCell align="right">{data?.da[index]?.age}</StyledTableCell>}
            {data?.da[index]?.category && <StyledTableCell align="right">{data?.da[index]?.category}</StyledTableCell>}
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  </div>
);

const Example = ({ da,cool }) => (
  <div style={{ marginTop: '10px', width: '74%', margin: 'auto' }}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
           <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell component="th" scope="row">{cool ?"Price" :"Email"}</StyledTableCell>
            <StyledTableCell align="right">{cool ?"category" :"Age"} </StyledTableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
    {console.log(da[0])}
    <List
      className="List"
      height={600}
      innerElementType={innerElementType}
      itemCount={da.length}
      itemSize={ITEM_SIZE}
      width={1000}
      itemData={{ da }}
    >
      {Row}
    </List>
  </div>
);

const innerElementType = forwardRef(({ style, ...rest }, ref) => (
  <div
    ref={ref}
    style={{
      ...style,
      height: `${parseFloat(style.height) + PADDING_SIZE * 2}px`,
    }}
    {...rest}
  />
));

export default Example;
