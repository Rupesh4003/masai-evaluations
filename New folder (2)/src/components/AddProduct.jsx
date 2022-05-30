import { ModalBody } from "@chakra-ui/react";
import React from "react";
//import { Button,Modal,ModalBody,Input,Select,RadioGroup,radio } from "@chakra-ui/react";
import { Button, Modal, Input, Select, RadioGroup, Radio } from "@chakra-ui/react";

const AddProduct = () => {
  //TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;
  const[info,setInfo]=React.useState({})
  // const handleSubmit=()=>{
  //   let res= axios.get("http://localhost:8080/products",{method:"POST",
  // headers:{"content-type":"aplication-json"},
  // body:JSON.stringify({
  //   "title": "react tshirt",
  //   "category": "pant",
  //   "gender": "male",
  //   "imageSrc": "https://picsum.photos/seed/picsum6/420/260",
  //   "price": "23.00"
  // })  })
  // let data = res.json()
  // }
  const handleChange=()=>{}

  return (
    <>
      <Button my={4} data-cy="add-product-button"></Button>
      <Modal>
        <ModalBody pb={6}>
          <form>
            <Input data-cy="add-product-title" type="text" name="title" onChange={handleChange}/>
            <Select data-cy="add-product-category" onChange={handleChange}  name="category" >
              <option data-cy="add-product-category-shirt">Shirt</option>
              <option data-cy="add-product-category-pant">Pant</option>
              <option data-cy="add-product-category-jeans">Jeans</option>
            </Select>
            <RadioGroup data-cy="add-product-gender"  name="gender" onChange={handleChange}>
              <Radio data-cy="add-product-gender-male"></Radio>
              <Radio data-cy="add-product-gender-female"></Radio>
              <Radio data-cy="add-product-gender-unisex"></Radio>
            </RadioGroup>
            <Input data-cy="add-product-price" onChange={handleChange} />
            <Button data-cy="add-product-submit-button" type="submit"></Button>
          </form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
