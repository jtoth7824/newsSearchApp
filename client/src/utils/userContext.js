import React from "react";
console.log("user context");

// context for searchTerm and news to be passed between components
const UserContext = React.createContext({
  searchTerm: "",
  news: [],

  handleBtnClick: () => {}
});

export default UserContext;
