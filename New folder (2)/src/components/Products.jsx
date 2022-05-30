import React from "react";
import axios from "axios";
import Product from "./Product";
import {Grid,Flex,} from "@chakra-ui/react"
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";


const Products = () => {
  const[data,setData]=React.useState([])
   const[pageNo,setPageNo]=React.useState(1)
   const [limit,setLimit]=React.useState(3)
  
const handleFirst=()=>{
  setPageNo(1)
}
const handleLast=()=>{
  setPageNo()
}
const handleNext=()=>{
  setPageNo(pageNo+1)
}
const handlePrev=()=>{
  setPageNo(pageNo-1)
}
const handleSelect=(value)=>{
  //console.log(value)
  setLimit(Number(value))
}

  React.useEffect(()=>{
    const getData= async()=>{
      let res= await axios.get(`http://localhost:8080/products?_page=${pageNo}&_limit=${limit}`)
      //console.log(res)
      setData(res.data)
    }
    getData()
  },[pageNo,limit])
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;

  return (

   
    <Flex>
      {/*  AddProduct */}
      <AddProduct/>

      <Grid>{/* List of Products */}
      {data.map((elem)=>{
        return(
          // <div>
          //   <img src={elem.imageSrc}/>
          // </div>
          <Product key={elem.id} {...elem}/>
        )
      })}
     
      
      
      </Grid>
      {/* Pagination */}
      <Pagination pageNo={pageNo}handleFirst={handleFirst} handleLast={handleLast} handleNext={handleNext} handlePrev={handlePrev} handleSelect={handleSelect}/>
      {/* <button onClick={()=>setPageNo(1)}>first</button>
      <button onClick={()=>setPageNo(pageNo-1)}>prev</button>
      <select>
        <option value="3">3</option>
        <option value="4">2</option>
        <option value="5">5</option>
      </select>
      <button onClick={()=>setPageNo(pageNo+1)}>next</button>
      <button onClick={()=>setPageNo(3)}>last</button> */}
    </Flex>

    // <div>
    //   {/* <h1>hello</h1>
    //   <AddProduct/> */}
    //   {/* {data.map((elem)=>{
    //     return(
    //       // <div>
    //       //   <img src={elem.imageSrc}/>
    //       // </div>
    //       <Product key={elem.id} {...elem}/>
    //     )
    //   })} */}
    // </div>
  );
};

export default Products;
