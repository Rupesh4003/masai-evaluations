import React from "react";
import { ButtonGroup,Button,Select } from "@chakra-ui/react";

const Pagination = ({handleNext,handleFirst,handleLast,handlePrev,handleSelect,pageNo}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const ButtonGroup = () => <div />;
  // const Select = () => <div />;
  //const[pageNo,setPageNo]=React.useState(1)

  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button"  onClick={handleFirst}>first</Button>
      <Button data-cy="pagination-previous-button" disabled={pageNo==1} onClick={handlePrev}>prev</Button>
      <Select data-cy="pagination-limit-select" onChange={(e)=>handleSelect(e.target.value)}>
        <option data-cy="pagination-limit-3" value="3">3</option>
        <option data-cy="pagination-limit-6" value="6">6</option>
        <option data-cy="pagination-limit-9" value="9">9</option>
      </Select>
      <Button data-cy="pagination-next-button" onClick={handleNext}>next</Button>
      <Button data-cy="pagination-last-button" onClick={handleLast}>last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
