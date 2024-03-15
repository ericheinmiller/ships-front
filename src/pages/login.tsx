import styled from "styled-components";

// components
import Input from "../Components/input";
import { KeyboardEvent, useState } from "react";

const Logindiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Login() {
  const [inputValue, setInputValue] = useState("");

  const userInputChangeHandler = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  const enterKeyHandler = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      console.log(inputValue);

      fetch("http://localhost:8080/user/register", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: inputValue,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(
            "There was a problem with your fetch operation:",
            error
          );
        });

      //end
      setInputValue("");
    }
  };

  return (
    <Logindiv>
      <p>Name: </p>
      <Input
        value={inputValue}
        onChange={(event) => {
          userInputChangeHandler(event);
        }}
        onKeyDown={enterKeyHandler}
      />
    </Logindiv>
  );
}

export default Login;
