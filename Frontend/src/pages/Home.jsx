import { useState } from "react";
import axios from "axios";
import "./Home.css";

function Home() {

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const submit = async () => {
    await axios.post("https://mern-feedback-backend-szf4.onrender.com/api/feedback", { name, message });
    setName("");
    setMessage("");
  };

  return (
    <div>

      <h2>Feedback Form</h2>

      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        placeholder="Message"
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={submit}>Submit</button>

    </div>
  );
}

export default Home;