import React from "react";
import { Stack,Text, Box,Image,Heading,Tag,TagLabel } from '@chakra-ui/react'

const Product = (props) => {
  //console.log(elem)
  //console.log(props)
 // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" src={props.imageSrc} />
      <Text data-cy="product-category">{props.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{props.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{props.title}</Heading>
      <Box data-cy="product-price">{props.price}</Box>
    </Stack>


  );
};

export default Product;
