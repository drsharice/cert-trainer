import QuizEngine from "../components/QuizEngine";
import type { Question } from "../components/QuizEngine";

const gcpQuestions: Question[] = [
  {
    id: 1,
    question: "Which GCP service unifies data, training, and model deployment?",
    options: ["Vertex AI", "Dataflow", "BigQuery", "Looker"],
    correct: 0,
    explanation: "Vertex AI integrates the ML lifecycle from training to deployment."
  },
  {
    id: 2,
    question: "Which GCP service provides serverless data warehousing?",
    options: ["Bigtable", "BigQuery", "Spanner", "Firestore"],
    correct: 1,
    explanation: "BigQuery is a fully-managed serverless data warehouse on GCP."
  },
  {
    id: 3,
    question: "Which tool allows SQL users to create ML models directly within BigQuery?",
    options: ["BigQuery ML", "Vertex AI", "Looker", "Cloud Functions"],
    correct: 0,
    explanation: "BigQuery ML lets analysts use SQL syntax to train ML models directly on BigQuery data."
  },
  {
    id: 4,
    question: "Which GCP service allows you to orchestrate complex data pipelines?",
    options: ["Cloud Composer", "Pub/Sub", "Data Catalog", "Cloud Functions"],
    correct: 0,
    explanation: "Cloud Composer, based on Apache Airflow, manages orchestration of pipelines."
  },
  {
    id: 5,
    question: "Which GCP product allows batch and streaming data processing?",
    options: ["Dataflow", "Dataproc", "Pub/Sub", "Vertex Pipelines"],
    correct: 0,
    explanation: "Dataflow provides unified stream and batch data processing."
  },
  {
    id: 6,
    question: "What’s the main difference between Dataproc and Dataflow?",
    options: ["Dataproc is Hadoop/Spark-based; Dataflow is serverless.", "Dataproc is cheaper.", "Dataflow only does batch jobs.", "Dataproc cannot scale."],
    correct: 0,
    explanation: "Dataproc manages Spark/Hadoop clusters; Dataflow is fully managed and serverless."
  },
  {
    id: 7,
    question: "Which tool in Vertex AI is used to track experiments and compare models?",
    options: ["Vertex Experiments", "Model Registry", "AI Notebooks", "Artifact Registry"],
    correct: 0,
    explanation: "Vertex Experiments records model metadata and performance for comparison."
  },
  {
    id: 8,
    question: "Which GCP service provides feature management for training and serving?",
    options: ["Vertex Feature Store", "Bigtable", "Firestore", "BigQuery ML"],
    correct: 0,
    explanation: "Vertex Feature Store ensures consistent features for model training and inference."
  },
  {
    id: 9,
    question: "Which API provides natural language processing on GCP?",
    options: ["Cloud Natural Language API", "Dialogflow", "Speech-to-Text", "Vertex AI Studio"],
    correct: 0,
    explanation: "Cloud Natural Language API analyzes text sentiment and entities."
  },
  {
    id: 10,
    question: "Which GCP product helps you visualize datasets and results?",
    options: ["Looker", "Data Studio", "Vertex Explainable AI", "BigQuery Console"],
    correct: 1,
    explanation: "Data Studio (now Looker Studio) builds visual dashboards for reporting."
  },
  {
    id: 11,
    question: "Which service monitors deployed ML models for drift and quality?",
    options: ["Vertex Model Monitoring", "BigQuery ML", "AI Notebooks", "Pub/Sub"],
    correct: 0,
    explanation: "Vertex Model Monitoring detects data drift and model performance changes."
  },
  {
    id: 12,
    question: "Which language is primarily used for Vertex AI SDKs?",
    options: ["Python", "Java", "Go", "R"],
    correct: 0,
    explanation: "Python SDK is most commonly used for Vertex AI and other ML SDKs."
  },
  {
    id: 13,
    question: "Which GCP service enables real-time message streaming?",
    options: ["Pub/Sub", "Cloud Functions", "BigQuery", "Composer"],
    correct: 0,
    explanation: "Pub/Sub enables real-time asynchronous messaging between services."
  },
  {
    id: 14,
    question: "What is Explainable AI in Vertex AI?",
    options: ["Tool to interpret model predictions", "A visual dashboard for reports", "A data pipeline manager", "A pricing calculator"],
    correct: 0,
    explanation: "Explainable AI provides insights into feature importance and prediction reasoning."
  },
  {
    id: 15,
    question: "Which GCP service manages trained models for deployment?",
    options: ["Vertex Model Registry", "Vertex Pipelines", "Bigtable", "AI Hub"],
    correct: 0,
    explanation: "Vertex Model Registry stores and versions trained models for deployment."
  }
];

export default function GCPMLE() {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-white to-rose-50 flex flex-col items-center justify-start">
      <h1 className="text-3xl font-bold text-center text-rose-700 mt-10 mb-8">
        Google Machine Learning Engineer
      </h1>
      <QuizEngine questions={gcpQuestions} />
    </div>
  );
}
