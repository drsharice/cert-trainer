import QuizEngine2 from "../components/QuizEngine2";

type Question = {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
};

const dp900Questions: Question[] = [
  { id: 1, question: "Which Azure service is used for storing structured, relational data?", options: ["Azure Blob Storage", "Azure SQL Database", "Azure Data Lake", "Azure Synapse Analytics"], correct: 1, explanation: "Azure SQL Database is a PaaS service for structured relational data." },
  { id: 2, question: "Which service provides a unified analytics experience combining data engineering, warehousing, and BI?", options: ["Azure Synapse", "Microsoft Fabric", "Power BI Service", "Azure ML"], correct: 1, explanation: "Microsoft Fabric integrates data engineering, warehousing, and analytics." },
  { id: 3, question: "Which Azure service is best suited for unstructured data like images or videos?", options: ["Azure Files", "Azure Blob Storage", "Azure Cosmos DB", "Azure SQL Database"], correct: 1, explanation: "Azure Blob Storage is optimized for large-scale unstructured object storage." },
  { id: 4, question: "What is the primary language used to query relational databases in Azure?", options: ["Python", "SQL", "R", "KQL"], correct: 1, explanation: "SQL is the standard query language for relational databases in Azure." },
  { id: 5, question: "Which Azure service is most appropriate for big data analytics and Spark-based processing?", options: ["Azure Synapse Spark", "Azure Databricks", "Azure Data Factory", "Power BI"], correct: 1, explanation: "Azure Databricks is an Apache Spark-based analytics platform optimized for big data." },
  { id: 6, question: "Which feature in Azure SQL ensures data integrity between tables?", options: ["Foreign Keys", "Blob Indexer", "Stored Procedure", "Trigger"], correct: 0, explanation: "Foreign keys enforce relationships between tables ensuring referential integrity." },
  { id: 7, question: "Which service would you use for creating and scheduling data pipelines?", options: ["Azure Functions", "Azure Logic Apps", "Azure Data Factory", "Azure Synapse"], correct: 2, explanation: "Azure Data Factory enables ETL workflows and orchestrating data pipelines." },
  { id: 8, question: "What type of data is typically stored in Azure Table Storage?", options: ["Document data", "Key-value data", "Graph data", "Blob data"], correct: 1, explanation: "Table Storage stores key-value structured NoSQL data." },
  { id: 9, question: "Which service allows connecting multiple data sources visually for reporting?", options: ["Azure ML", "Power BI", "Azure Monitor", "Data Lake"], correct: 1, explanation: "Power BI is used to visualize and combine data from different sources." },
  { id: 10, question: "What is data redundancy in Azure storage designed for?", options: ["Performance", "Data durability and fault tolerance", "Lower cost", "Encryption"], correct: 1, explanation: "Redundancy ensures data is replicated to protect against hardware failure." },
  { id: 11, question: "What is the benefit of using Azure Data Lake over Blob Storage for analytics?", options: ["Cheaper storage cost", "Integration with HDInsight and Databricks", "Native relational structure", "Higher security"], correct: 1, explanation: "Data Lake is optimized for analytics workloads and integrates with HDInsight, Databricks, and Synapse." },
  { id: 12, question: "Which security feature controls access to Azure SQL Database?", options: ["Firewall rules", "VNet Peering", "Data Encryption", "Diagnostic Logs"], correct: 0, explanation: "Firewall rules allow or block IP addresses from accessing the SQL Database." },
  { id: 13, question: "What is the purpose of partitioning data in large databases?", options: ["Improve query performance", "Reduce query accuracy", "Duplicate tables", "Simplify code"], correct: 0, explanation: "Partitioning improves performance by splitting data across multiple storage segments." },
  { id: 14, question: "What Azure service provides NoSQL document database capabilities?", options: ["Azure SQL Managed Instance", "Azure Data Lake", "Azure Cosmos DB", "Azure Blob Storage"], correct: 2, explanation: "Azure Cosmos DB is a multi-model NoSQL database supporting document and key-value data." },
  { id: 15, question: "Which component of Microsoft Fabric allows you to create datasets and semantic models?", options: ["Data Factory", "Synapse Data Warehouse", "Power BI Workspace", "Data Activator"], correct: 2, explanation: "Power BI Workspaces in Fabric allow building semantic models and datasets for analytics." },
  { id: 16, question: "Your company wants to analyze petabyte-scale IoT telemetry in real time using Spark. Which Azure service should you use first?", options: ["Azure Stream Analytics", "Azure Databricks", "Azure Synapse Data Warehouse", "Azure Logic Apps"], correct: 1, explanation: "Databricks can process streaming data at scale using Spark Structured Streaming." },

{ id: 17, question: "You need to transform raw JSON logs into structured data for querying in Synapse. Which Azure service handles this transformation best?", options: ["Azure Logic Apps", "Azure Data Factory", "Azure Key Vault", "Azure Front Door"], correct: 1, explanation: "ADF supports mapping and data flows for transforming JSON before loading into Synapse." },

{ id: 18, question: "A financial dataset must be queried by many analysts using familiar SQL tools. Which service provides this with minimal setup?", options: ["Azure SQL Database", "Azure Data Lake Storage", "Azure Databricks", "Cosmos DB"], correct: 0, explanation: "Azure SQL Database supports standard SQL queries with PaaS simplicity." },

{ id: 19, question: "You need to store unstructured files and analyze them later using serverless SQL queries. Which two Azure services would you combine?", options: ["Azure Blob Storage + Synapse Serverless", "Azure SQL Database + Power BI", "Cosmos DB + Logic Apps", "Azure Files + App Service"], correct: 0, explanation: "Blob holds data; Synapse Serverless queries it directly using external tables." },

{ id: 20, question: "Which concept best describes ensuring data from multiple systems can be joined correctly through consistent keys?", options: ["Data cleansing", "Data normalization", "Data mapping", "Data integrity"], correct: 3, explanation: "Data integrity ensures accuracy and relationships between datasets." },

{ id: 21, question: "You’re asked to design a data warehouse for slow-changing dimensions. Which schema pattern is commonly used?", options: ["Star schema", "Snowflake schema", "Flat table", "Graph schema"], correct: 1, explanation: "Snowflake schema helps manage normalized dimension hierarchies with version tracking." },

{ id: 22, question: "Which Azure service can process streaming social media data and store output in real time?", options: ["Azure Stream Analytics", "Azure ML", "Azure Automation", "Azure Arc"], correct: 0, explanation: "Stream Analytics can ingest, transform, and output data in real time to Power BI or storage." },

{ id: 23, question: "You want to secure data at rest for Azure SQL Database. What feature do you enable?", options: ["TDE", "TLS", "Row-level Security", "Always Encrypted"], correct: 0, explanation: "Transparent Data Encryption encrypts data files at rest automatically." },

{ id: 24, question: "What’s the main difference between OLTP and OLAP workloads?", options: ["OLTP handles transactions, OLAP handles analytics", "OLTP is read-heavy, OLAP is write-heavy", "OLTP uses NoSQL, OLAP uses SQL", "OLTP is cloud-only"], correct: 0, explanation: "OLTP manages real-time transactions; OLAP supports analytical workloads." },

{ id: 25, question: "Which data format is best for semi-structured data in Azure Data Lake?", options: ["Parquet", "CSV", "TXT", "DOCX"], correct: 0, explanation: "Parquet is columnar and optimized for analytics of semi-structured data." },

{ id: 26, question: "Which service helps create unified datasets and apply transformations for Power BI in Microsoft Fabric?", options: ["Data Factory", "Data Activator", "Synapse Data Engineering", "Power BI Dataflows"], correct: 3, explanation: "Dataflows prepare and model data for visualization and reuse." },

{ id: 27, question: "Your team needs near real-time reporting but wants to avoid large data refreshes. Which technique should you consider?", options: ["DirectQuery", "Dataflow", "Dataset import", "Databricks streaming"], correct: 0, explanation: "DirectQuery connects Power BI directly to the data source for live queries." },

{ id: 28, question: "You need to ensure compliance by masking sensitive data from non-admin users. Which SQL feature enables this?", options: ["Dynamic Data Masking", "Row-level Security", "Auditing", "Data Sync"], correct: 0, explanation: "Dynamic Data Masking hides data dynamically based on user roles." },

{ id: 29, question: "Which service in Microsoft Fabric provides Spark-based notebook environments?", options: ["Synapse Data Engineering", "Power BI", "Data Activator", "Data Factory"], correct: 0, explanation: "Synapse Data Engineering offers Spark notebooks for big data processing." },

{ id: 30, question: "Which term describes copying data from multiple systems into one central repository?", options: ["ETL", "Replication", "Virtualization", "Data sharing"], correct: 0, explanation: "ETL extracts, transforms, and loads data into a centralized store." },

];

export default function DP900() {
  return (
    <main
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        background: "linear-gradient(to right, #ecfdf5 0%, #ffffff 100%)",
        overflow: "hidden",
      }}
    >
      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; transform: translate(-50%, -45%); }
          to { opacity: 1; transform: translate(-50%, -50%); }
        }
        `}
      </style>

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          animation: "fadeIn 1s ease-in-out",
          textAlign: "center",
          width: "100%",
          maxWidth: "600px",
          padding: "1rem",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(1.8rem, 2.5vw + 1rem, 2.5rem)",
            fontWeight: "bold",
            color: "#047857",
            marginBottom: "2rem",
          }}
        >
          Microsoft Azure Data Fundamentals (DP-900)
        </h1>

        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(6px)",
            borderRadius: "1rem",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            padding: "1rem",
          }}
        >
          <QuizEngine2 questions={dp900Questions} />
        </div>
      </div>
    </main>
  );
}
