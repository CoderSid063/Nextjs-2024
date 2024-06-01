import { Fragment, useState } from "react";
import { buildFeedbackPath, extractFeedback } from "../api/feedback";

export default function FeedbackPage(props) {
  const [feedbackData, setfeedbackData] = useState();

  async function loadFeedbackHandler(id) {
    await fetch(`/api/${id}`)
      .then((res) => res.json())
      .then((data) => setfeedbackData(data.feedback));
  }

  return (
    <Fragment>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {props.feedbackItems.map((item) => (
          <li key={item.id}>
            {item.text}{" "}
            <button onClick={loadFeedbackHandler.bind(null, item.id)}>
              Show details
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return {
    props: {
      feedbackItems: data,
    },
  };
}
