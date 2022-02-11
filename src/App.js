import React, { useState } from 'react';
import './App.css';

function App() {
  const [formFields, setFormFields] = useState([{ name: '', age: '' }]);

  // Storing this data back inside the 'formFields()' array using 'setFormFields' method
  // Setting states in the formFields state
  /* Assigning the `handleFormChange()` function into the input field */
  // The code above allows our formFields state into a variable called `data` using the spread operator (the three dots "...") and then target the index of the data variable using the index parameter, and the name of the property too.
  /* Adding the Values rom `formFields()` State */
  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  /* Triger function when we click the `Submit` button */
  // this will log data into the console, from the input fields.
  // `e.preventDefault` method will prevent the page from getting refreshed.
  const submit = (e) => {
    e.preventDefault();
    console.log(formFields);
  };

  /* Adding More Form fields using a button*/
  // Adding `onClick()` event function
  // create an object to be pushed to the formFields state, thus creating a new field
  // Setting `newfield` inside the `formFields` state
  const addFields = () => {
    let newfield = { name: '', age: '' };
    setFormFields([...formFields, newfield]);
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  return (
    <div className="App">
      <form onSubmit={submit}>
        {/* Making the forms Dynamic using 'formFields' state */}
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <input
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={(event) => handleFormChange(event, index)}
              />
              <input
                name="age"
                placeholder="Age"
                value={form.age}
                onChange={(event) => handleFormChange(event, index)}
              />
              <button onClick={() => removeFields(index)}>Remove</button>
            </div>
          );
        })}
        {/* `onClick()` function */}
        <button onClick={addFields}>Add More...</button>
        {/* Creating a Submit button */}
        <button onClick={submit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
