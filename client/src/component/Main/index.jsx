import styles from "./styles.module.css";
import { useState } from "react";
import axios from "axios";
import useQuestionsData from "./questionsData";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const [output, setOutput] = useState("");
  // use state to keep track of the question selected
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
  const [questions, setQuestions] = useQuestionsData();

  const handleSubmit = async () => {
    const payload = {
      language: "cpp",
      code: questions[selectedQuestionIndex].code,
    };

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
              // dynamic className kept to apply Css on selected question
              <li
                key={index}
                className={
                  selectedQuestionIndex === index
                    ? styles.selected_question
                    : ""
                }
                onClick={() => setSelectedQuestionIndex(index)}
              >
                {question.title}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.right_container}>
          <textarea
            rows="20"
            cols="75"
            className={styles.textarea}
            value={questions[selectedQuestionIndex].code}
            onChange={(e) => {
              const newQuestion = [...questions];
              newQuestion[selectedQuestionIndex].code = e.target.value;
              setQuestions(newQuestion);
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
