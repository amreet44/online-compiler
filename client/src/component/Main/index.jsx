import styles from "./styles.module.css";
import { useState } from "react";
import axios from "axios";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const questions = [
    "Add two numbers",
    // Add more questions as needed
  ];

  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = async () => {
    const payload = { language: "cpp", code };

    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/gen/run",
        payload
      );
      console.log(data);
      setOutput(data.output);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>Online Code Compiler</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <select className={styles.select_box}>
        <option value="cpp">C++</option>
      </select>
      <br />
      <div className={styles.code_container}>
        <div className={styles.left_container}>
          <h2>List of Questions</h2>
          <ul>
            {questions.map((question, index) => (
              <li key={index}>{question}</li>
            ))}
          </ul>
        </div>
        <div className={styles.right_container}>
          <textarea
            rows="20"
            cols="75"
            className={styles.textarea}
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
            }}
          ></textarea>
          <button className={styles.submit_button} onClick={handleSubmit}>
            Submit
          </button>
          {output && (
            <div className="styles.outputbox">
              <p>{output}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
