
import axios from "axios";
import { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { UserContext } from "../../context/userContext";
import unAuth from "../../assets/unauth.jpg"
import { useContext } from "react";


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

 const TableList = () => {
  const classes = useStyles();
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [showMore, setShowMore] = useState(false);

  const getProductData = async () => {
    try {
      const data = await axios.get(
        "https://dev.dashmed.in/sample-data"
      );
      console.log(data.data.data);
      setProduct(data.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);
  const {user}=useContext(UserContext)


  const [toggled, setToggled] = useState({});
  const toggleHandler = (id) => {
    setToggled((ids) => ({
      ...ids,
      [id]: !ids[id],
    }));
  };

 
  return (
    <>
    {!user?(
      <div style={{textAlign:"center", color:"Black"}}>
        <h1>Please Login</h1>
        <img src={unAuth}  width="40%" alt="" />
        
      </div>
    ):(
    
    <div className="App">
    <div className="heading" style={{textAlign:"center", color:"Black"}}>
    <h1>Tap to find</h1></div>
     

      {/* {product
        .filter((item) => {
          if (search == "") {
            return item;
          } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
            return item;
          }
        })
        .map((item) => {
          return (
            <p>
              {item.name} - {item.price}
            </p>
          );
        })} */}

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Medicine Name</StyledTableCell>
              <StyledTableCell align="center">Salt Name</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product
              .filter((item) => {

                  return item;
                
              })
              .map((item) => {
                return (
                  <>
    
      <StyledTableRow key={item.medName}>
      
          <StyledTableCell onClick={() => toggleHandler(item.medName)} component="th" scope="row">
            {item.medName}
          </StyledTableCell>
      
        {toggled[item.medName] && ( 
          <StyledTableCell align="center">
            {item.saltName}
          </StyledTableCell>
        ) } 
      </StyledTableRow>
    </>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    )}
</>);
            }





export default TableList;













// import React, { useState, useEffect } from 'react';
// import MaterialTable from 'material-table'


// function App() {

//   const [data, setData] = useState([])
//   const columns = [
//     { title: "ID", field: "id" },
//     { title: "Username", field: "username" },
//     { title: "Name", field: "name" },
//     { title: "Email", field: "email" },
//     { title: "Phone", field: "phone" },
//     { title: "Web Link", field: 'website' }
//   ]
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(resp => resp.json())
//       .then(resp => {
//         setData(resp)
//       })
//   }, [])

//   return (
//     <div className="App">
//       <h1 align="center">React-App</h1>
//       <h4 align='center'>Material Table</h4>
//       <MaterialTable
//         title="Employee Data"
//         data={data}
//         columns={columns}
//       />
//     </div>
//   );
// }

// export default App;
































// import React, { Component } from 'react'
// import axios from 'axios'
// import MaterialTable from 'material-table'

// export default class javascriptMap extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//           data: []
//         }
//       }
    
//       getData(){
//         axios.get('https://dev.dashmed.in/sample-data').then(res => {
//           const data = res.data.data
//             this.setState({data : data})
//         })
//       }
//       componentDidMount(){
//         this.getData()
//       }
//     render() {
//         return (
//             <>
          
//              <ul>
//         {this.state.data.map(d => (<li key={d.medName}>{d.saltName}</li>))} 
//                 </ul>
//             </>
//         )
//     }
// }
















// import Axios from 'axios'
// import React,{useState,useEffect} from 'react';

// const fakeData=[ 
//     {medName: "Augmentin 625 Duo Tablet", saltName: "Amoxycillin  (500mg) +  Clavulanic Acid (125mg)",
//     manufacturer: "Glaxo SmithKline Pharmaceuticals Ltd",
//     manufacturerAlternate: "Glaxo SmithKline Pharmaceuticals Ltd"},
//     {
//         medName: "Ascoril D Plus Syrup Sugar Free",
//         saltName: "Phenylephrine (5mg) + Chlorpheniramine Maleate (2mg) + Dextromethorphan Hydrobromide (10mg)",
//         manufacturer: "Glenmark Pharmaceuticals Ltd",
//         manufacturerAlternate: "Glenmark Pharmaceuticals Ltd"
//     }
//   ]


// function Table() {
//   const [comments,setComments]=useState([])

//   useEffect(() => {
//     fetchComments();
//   }, [])
//   useEffect(() => {
//     console.log(comments,"hello")
//   }, [comments])
//   const fetchComments=async()=>{
//     const response=await Axios('https://dev.dashmed.in/sample-data');
//     setComments(response.data)  
//     console.log("hello")
      
//   }


//   return (
//     <table>
//       <tr key={"header"}>
//         {Object.keys(comments.data).map((key) => (
//           <th>{key}</th>
//         ))}
//       </tr>
//       {comments.data.map((item) => (
//         <tr key={item.id}>
//           {Object.values(item).map((val) => (
//             <td>{val}</td>
//           ))}
//         </tr>
//       ))}
//     </table>
//   );
// }



            