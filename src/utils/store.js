import React, { createContext, useReducer, useContext } from "react";

const TodoContext = createContext();
  const { Provider } = TodoContext;

  function reducer(state, action) {
    switch (action.type) {
      case "searchTerms":
        return (
          {
            searchTerms: state.searchTerms = action.searchTerms
          }
        )
    default:
      return state;
    }
  }

  function TodoProvider({...props }) {
    const [state, dispatch] = useReducer(reducer, {
        searchTerms: [],
      });

    return <Provider value={[state, dispatch]} {...props} />;
  }

  function useTodoContext() {
    return useContext(TodoContext);
  }

  export { TodoProvider, useTodoContext };