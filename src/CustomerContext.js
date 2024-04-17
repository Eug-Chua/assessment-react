import React, { useState, createContext } from "react";

// create the customer context
export const CustomerContext = createContext();

// create component that can pass down the context data to its children
export default function CustomerContextData(props) {
  const [customers, setCustomers] = useState([
    {
      // keys must match the ones in the backend (except for those)
      // with many:many relationships
      'customer_id': 1,
      'first_name': "Linus",
      'last_name': "Chan",
      'company_id': 1,
      'employee': [1],
    },
    {
      'customer_id': 2,
      'first_name': "Jack",
      'last_name': "Lang",
      'company_id': 2,
      'employee': [1],
    },
    {
      'customer_id': 3,
      'first_name': "Mozart",
      'last_name': "Koh",
      'company_id': 1,
      'employee': [2],
    }
  ]);

  const dataOperations =  {
    getCustomers: () => {
      return customers
    },
    addCustomer: (firstName, lastName, companyId, rating, employees) => {
      const newCustomer = {
        customer_id: Math.floor(Math.random() * 10000 + 1), 
        first_name: firstName,
        last_name: lastName,
        company_id: companyId,
        rating: rating,
        employees: employees
      }
      const modified = [...customers, newCustomer]; // spread the prev state and then add newCustomer to the array
      setCustomers(modified);
    }
  }

  // JSX
  return (
    // The value of the CustomerContext is the 'context' object
    // 'Provider' enables any child component to gain access to the value `dataOperations`
    <CustomerContext.Provider value={dataOperations}>
      {props.children}
    </CustomerContext.Provider> 
  )
}
