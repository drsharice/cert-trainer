import QuizEngine from "../components/QuizEngine";
import type { Question } from "../components/QuizEngine";

const dp900Questions: Question[] = [
  {
    id: 1,
    question: "Which Azure service is used for storing structured, relational data?",
    options: [
      "Azure Blob Storage",
      "Azure SQL Database",
      "Azure Data Lake",
      "Azure Synapse Analytics"
    ],
    correct: 1,
    explanation: "Azure SQL Database is a PaaS service for structured relational data."
  },
  {
    id: 2,
    question: "Which tool allows you to run serverless data queries on files stored in Data Lake?",
    options: ["Azure Synapse Serverless SQL", "Azure Databricks", "Power BI", "HDInsight"],
    correct: 0,
    explanation: "Serverless SQL pools in Synapse let you query files directly using T-SQL."
  },
  {
    id: 3,
    question: "In Azure, what is the difference between structured and unstructured data?",
    options: [
      "Structured data is numeric, unstructured is text",
      "Structured data fits tables, unstructured lacks a fixed schema",
      "Structured is faster to store, unstructured is slower",
      "There is no difference"
    ],
    correct: 1,
    explanation: "Structured data fits into predefined tables; unstructured data doesn’t."
  },
  {
    id: 4,
    question: "Which service provides a unified analytics experience combining data engineering, warehousing, and BI?",
    options: ["Azure Synapse", "Microsoft Fabric", "Power BI Service", "Azure ML"],
    correct: 1,
    explanation: "Microsoft Fabric integrates data engineering, warehousing, and analytics."
  },
  {
    id: 5,
    question: "What is the primary query language used for relational databases in Azure?",
    options: ["Python", "T-SQL", "Scala", "KQL"],
    correct: 1,
    explanation: "T-SQL is used for querying relational data in SQL Database and Synapse."
  },
];

export default function DP900() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-emerald-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-emerald-700">
        Microsoft Azure Data Fundamentals (DP-900)
      </h1>
      <QuizEngine questions={dp900Questions} />
    </div>
  );
}
