import QuizEngine from "../components/QuizEngine";
import type { Question } from "../components/QuizEngine";

const dp900Questions: Question[] = [
  {
    id: 1,
    question: "Which Azure service is used for storing structured, relational data?",
    options: ["Azure Blob Storage", "Azure SQL Database", "Azure Data Lake", "Azure Synapse Analytics"],
    correct: 1,
    explanation: "Azure SQL Database is a PaaS service for structured relational data."
  },
  {
    id: 2,
    question: "Which service provides a unified analytics experience combining data engineering, warehousing, and BI?",
    options: ["Azure Synapse", "Microsoft Fabric", "Power BI Service", "Azure ML"],
    correct: 1,
    explanation: "Microsoft Fabric integrates data engineering, warehousing, and analytics."
  },
  {
    id: 3,
    question: "Which Azure service is best suited for unstructured data like images or videos?",
    options: ["Azure Files", "Azure Blob Storage", "Azure Cosmos DB", "Azure SQL Database"],
    correct: 1,
    explanation: "Azure Blob Storage is optimized for large-scale unstructured object storage."
  },
  {
    id: 4,
    question: "What is the primary language used to query relational databases in Azure?",
    options: ["Python", "SQL", "R", "KQL"],
    correct: 1,
    explanation: "SQL is the standard query language for relational databases in Azure."
  },
  {
    id: 5,
    question: "Which Azure service is most appropriate for big data analytics and Spark-based processing?",
    options: ["Azure Synapse Spark", "Azure Databricks", "Azure Data Factory", "Power BI"],
    correct: 1,
    explanation: "Azure Databricks is an Apache Spark-based analytics platform optimized for big data."
  },
  {
    id: 6,
    question: "Which feature in Azure SQL ensures data integrity between tables?",
    options: ["Foreign Keys", "Blob Indexer", "Stored Procedure", "Trigger"],
    correct: 0,
    explanation: "Foreign keys enforce relationships between tables ensuring referential integrity."
  },
  {
    id: 7,
    question: "Which service would you use for creating and scheduling data pipelines?",
    options: ["Azure Functions", "Azure Logic Apps", "Azure Data Factory", "Azure Synapse"],
    correct: 2,
    explanation: "Azure Data Factory enables ETL workflows and orchestrating data pipelines."
  },
  {
    id: 8,
    question: "What type of data is typically stored in Azure Table Storage?",
    options: ["Document data", "Key-value data", "Graph data", "Blob data"],
    correct: 1,
    explanation: "Table Storage stores key-value structured NoSQL data."
  },
  {
    id: 9,
    question: "Which service allows connecting multiple data sources visually for reporting?",
    options: ["Azure ML", "Power BI", "Azure Monitor", "Data Lake"],
    correct: 1,
    explanation: "Power BI is used to visualize and combine data from different sources."
  },
  {
    id: 10,
    question: "What is data redundancy in Azure storage designed for?",
    options: ["Performance", "Data durability and fault tolerance", "Lower cost", "Encryption"],
    correct: 1,
    explanation: "Redundancy ensures data is replicated to protect against hardware failure."
  },
  {
    id: 11,
    question: "What is the benefit of using Azure Data Lake over Blob Storage for analytics?",
    options: ["Cheaper storage cost", "Integration with HDInsight and Databricks", "Native relational structure", "Higher security"],
    correct: 1,
    explanation: "Data Lake is optimized for analytics workloads and integrates with HDInsight, Databricks, and Synapse."
  },
  {
    id: 12,
    question: "Which security feature controls access to Azure SQL Database?",
    options: ["Firewall rules", "VNet Peering", "Data Encryption", "Diagnostic Logs"],
    correct: 0,
    explanation: "Firewall rules allow or block IP addresses from accessing the SQL Database."
  },
  {
    id: 13,
    question: "What is the purpose of partitioning data in large databases?",
    options: ["Improve query performance", "Reduce query accuracy", "Duplicate tables", "Simplify code"],
    correct: 0,
    explanation: "Partitioning improves performance by splitting data across multiple storage segments."
  },
  {
    id: 14,
    question: "What Azure service provides NoSQL document database capabilities?",
    options: ["Azure SQL Managed Instance", "Azure Data Lake", "Azure Cosmos DB", "Azure Blob Storage"],
    correct: 2,
    explanation: "Azure Cosmos DB is a multi-model NoSQL database supporting document and key-value data."
  },
  {
    id: 15,
    question: "Which component of Microsoft Fabric allows you to create datasets and semantic models?",
    options: ["Data Factory", "Synapse Data Warehouse", "Power BI Workspace", "Data Activator"],
    correct: 2,
    explanation: "Power BI Workspaces in Fabric allow building semantic models and datasets for analytics."
  }
];

export default function DP900() {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-white to-emerald-50 flex flex-col items-center justify-start">
      <h1 className="text-3xl font-bold text-center text-emerald-700 mt-10 mb-8">
        Microsoft Azure Data Fundamentals (DP-900)
      </h1>
      <QuizEngine questions={dp900Questions} />
    </div>
  );
}
