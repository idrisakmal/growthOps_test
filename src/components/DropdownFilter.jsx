import React, { useState, useEffect } from "react";
import { Listbox, ListboxOption } from "@reach/listbox";
import "@reach/listbox/styles.css";

export default function Filter(props) {
  return (
    <div className="bg-white px-12 md:px-24 pt-8 pb-2">
      <h1 className="mb-2">Filter by Age</h1>
      <Listbox
        defaultValue="select"
        className="md:w-1/3"
        value={props.Filter}
        onChange={props.setFilter}
      >
        <ListboxOption value="select" disabled>
          Select age
        </ListboxOption>
        <ListboxOption value="all">All</ListboxOption>
        <ListboxOption value="20">20 and below</ListboxOption>
        <ListboxOption value="21">21 to 39</ListboxOption>
        <ListboxOption value="40">40 and above</ListboxOption>
      </Listbox>
      <hr className="my-12 border-t-2" />
    </div>
  );
}
