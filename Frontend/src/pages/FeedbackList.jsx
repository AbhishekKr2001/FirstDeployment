import { useEffect, useState } from "react";
import axios from "axios";

function FeedbackList(){

  const [feedbacks,setFeedbacks] = useState([]);

  const loadFeedback = async ()=>{
    const res = await axios.get("http://localhost:5000/api/feedback");
    setFeedbacks(res.data);
  };

  useEffect(()=>{
    loadFeedback();
  },[]);

  return (
    <div>

      <h2>All Feedback</h2>

      {feedbacks.map(f => (
        <div key={f._id}>
          <b>{f.name}</b>
          <p>{f.message}</p>
        </div>
      ))}

    </div>
  );
}

export default FeedbackList;