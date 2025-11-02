import QuizEngine2 from "../components/QuizEngine2";

type Question = {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
};

const gcpQuestions: Question[] = [
  { id: 1, question: "Which GCP service unifies data, training, and model deployment?", options: ["Vertex AI", "Dataflow", "BigQuery", "Looker"], correct: 0, explanation: "Vertex AI integrates the ML lifecycle from training to deployment." },
  { id: 2, question: "Which GCP service provides serverless data warehousing?", options: ["Bigtable", "BigQuery", "Spanner", "Firestore"], correct: 1, explanation: "BigQuery is a fully-managed serverless data warehouse on GCP." },
  { id: 3, question: "Which tool allows SQL users to create ML models directly within BigQuery?", options: ["BigQuery ML", "Vertex AI", "Looker", "Cloud Functions"], correct: 0, explanation: "BigQuery ML lets analysts use SQL syntax to train ML models directly on BigQuery data." },
  { id: 4, question: "Which GCP service allows you to orchestrate complex data pipelines?", options: ["Cloud Composer", "Pub/Sub", "Data Catalog", "Cloud Functions"], correct: 0, explanation: "Cloud Composer, based on Apache Airflow, manages orchestration of pipelines." },
  { id: 5, question: "Which GCP product allows batch and streaming data processing?", options: ["Dataflow", "Dataproc", "Pub/Sub", "Vertex Pipelines"], correct: 0, explanation: "Dataflow provides unified stream and batch data processing." },
  { id: 6, question: "What’s the main difference between Dataproc and Dataflow?", options: ["Dataproc is Hadoop/Spark-based; Dataflow is serverless.", "Dataproc is cheaper.", "Dataflow only does batch jobs.", "Dataproc cannot scale."], correct: 0, explanation: "Dataproc manages Spark/Hadoop clusters; Dataflow is fully managed and serverless." },
  { id: 7, question: "Which tool in Vertex AI is used to track experiments and compare models?", options: ["Vertex Experiments", "Model Registry", "AI Notebooks", "Artifact Registry"], correct: 0, explanation: "Vertex Experiments records model metadata and performance for comparison." },
  { id: 8, question: "Which GCP service provides feature management for training and serving?", options: ["Vertex Feature Store", "Bigtable", "Firestore", "BigQuery ML"], correct: 0, explanation: "Vertex Feature Store ensures consistent features for model training and inference." },
  { id: 9, question: "Which API provides natural language processing on GCP?", options: ["Cloud Natural Language API", "Dialogflow", "Speech-to-Text", "Vertex AI Studio"], correct: 0, explanation: "Cloud Natural Language API analyzes text sentiment and entities." },
  { id: 10, question: "Which GCP product helps you visualize datasets and results?", options: ["Looker", "Data Studio", "Vertex Explainable AI", "BigQuery Console"], correct: 1, explanation: "Data Studio (now Looker Studio) builds visual dashboards for reporting." },
  { id: 11, question: "Which service monitors deployed ML models for drift and quality?", options: ["Vertex Model Monitoring", "BigQuery ML", "AI Notebooks", "Pub/Sub"], correct: 0, explanation: "Vertex Model Monitoring detects data drift and model performance changes." },
  { id: 12, question: "Which language is primarily used for Vertex AI SDKs?", options: ["Python", "Java", "Go", "R"], correct: 0, explanation: "Python SDK is most commonly used for Vertex AI and other ML SDKs." },
  { id: 13, question: "Which GCP service enables real-time message streaming?", options: ["Pub/Sub", "Cloud Functions", "BigQuery", "Composer"], correct: 0, explanation: "Pub/Sub enables real-time asynchronous messaging between services." },
  { id: 14, question: "What is Explainable AI in Vertex AI?", options: ["Tool to interpret model predictions", "A visual dashboard for reports", "A data pipeline manager", "A pricing calculator"], correct: 0, explanation: "Explainable AI provides insights into feature importance and prediction reasoning." },
  { id: 15, question: "Which GCP service manages trained models for deployment?", options: ["Vertex Model Registry", "Vertex Pipelines", "Bigtable", "AI Hub"], correct: 0, explanation: "Vertex Model Registry stores and versions trained models for deployment." },
  { id: 16, question: "You need to train an XGBoost model on terabytes of data stored in BigQuery. What’s the most efficient approach?", options: ["Export data to Cloud Storage and train with Vertex Training", "Use BigQuery ML XGBoost directly in SQL", "Stream data through Dataflow into AI Notebooks", "Use AI Platform Pipelines with local CSV files"], correct: 1, explanation: "BigQuery ML can train XGBoost models in place without data movement." },

{ id: 17, question: "Your team wants to track experiment metadata and artifacts across Vertex AI projects. What feature should you use?", options: ["Vertex ML Metadata Store", "Cloud Monitoring", "TensorBoard integration", "Artifact Registry only"], correct: 0, explanation: "Vertex Metadata Store keeps track of artifacts, parameters, and lineage for ML runs." },

{ id: 18, question: "You must deploy multiple versions of a model and gradually shift traffic. Which Vertex feature handles this?", options: ["Traffic splitting in Vertex Endpoints", "Cloud Load Balancer", "Canary deployment via Kubernetes", "Vertex Experiments"], correct: 0, explanation: "Traffic splitting lets you route percentages of requests to different model versions." },

{ id: 19, question: "You need to transform incoming JSON data before prediction in Vertex AI. Where should you implement the logic?", options: ["Custom prediction routine preprocessing script", "Cloud Functions trigger", "Dataflow job", "BigQuery view"], correct: 0, explanation: "A custom prediction routine can include pre- and post-processing inside the deployed container." },

{ id: 20, question: "You want to reduce inference latency for a TensorFlow model. Which deployment option is best?", options: ["Vertex Prediction with GPU accelerators", "Batch prediction with Dataflow", "Vertex Notebook session", "AI Hub demo endpoint"], correct: 0, explanation: "Deploying on GPU-enabled prediction instances reduces latency for TensorFlow models." },

{ id: 21, question: "A model has degraded accuracy because data schema changed. What Vertex AI feature detects this?", options: ["Model Monitoring with schema and feature distribution alerts", "TensorBoard alerts", "BigQuery audit logs", "Pub/Sub dead-letter topic"], correct: 0, explanation: "Model Monitoring detects data drift and schema anomalies in production models." },

{ id: 22, question: "You need a reproducible training environment shared across data scientists. Which option fits best?", options: ["Custom Container Training in Vertex AI", "AI Notebook instances per user", "Cloud Shell", "BigQuery scripting"], correct: 0, explanation: "Custom container training ensures consistent dependencies and reproducibility for shared teams." },

{ id: 23, question: "How can you integrate ML workflow approval steps before deployment?", options: ["Cloud Build + Vertex Pipelines manual approval gates", "BigQuery scheduled queries", "Cloud Scheduler triggers", "Use Terraform only"], correct: 0, explanation: "Vertex Pipelines supports Cloud Build approval stages for governance." },

{ id: 24, question: "Which Vertex service lets you serve explanations alongside predictions?", options: ["Explainable AI", "Model Monitoring", "AI Hub", "BigQuery ML"], correct: 0, explanation: "Explainable AI provides feature attribution and importance for Vertex predictions." },

{ id: 25, question: "You must automate weekly batch predictions on new data. Which tools should you combine?", options: ["Vertex Batch Prediction + Cloud Scheduler", "Dataflow + Pub/Sub", "Looker Studio reports", "Bigtable triggers"], correct: 0, explanation: "Batch Prediction can be triggered by Cloud Scheduler for regular jobs." },

{ id: 26, question: "Your training job times out due to insufficient compute resources. What’s the best remedy?", options: ["Increase machine type or use distributed training with TPUs", "Switch to AI Notebook", "Lower learning rate", "Add more labels"], correct: 0, explanation: "Scaling up compute or using distributed TPU/GPU training reduces runtime bottlenecks." },

{ id: 27, question: "Which GCP service helps control access to sensitive datasets used in training?", options: ["IAM roles on BigQuery and Cloud Storage", "Secret Manager", "Cloud KMS keys", "Dataflow templates"], correct: 0, explanation: "Fine-grained IAM roles secure dataset access for ML workflows." },

{ id: 28, question: "You must version datasets and training code together for audit purposes. What should you use?", options: ["Vertex ML Metadata and Artifact Registry", "Cloud Storage buckets only", "Git branches only", "Looker data modeling"], correct: 0, explanation: "Vertex ML Metadata and Artifact Registry record versions and artifacts for each run." },

{ id: 29, question: "An ML model fails because a feature value is null in production data. How can you prevent this?", options: ["Define feature validation rules in Vertex Feature Store", "Ignore null values during training", "Add synthetic data", "Retry the job"], correct: 0, explanation: "Feature Store validation detects schema violations such as null values before serving." },

{ id: 30, question: "You need to reduce training costs while keeping GPU support for researchers. What’s the best option?", options: ["Use preemptible GPU VMs in Vertex Training", "Lower GPU memory allocation manually", "Train on CPUs only", "Use BigQuery ML"], correct: 0, explanation: "Preemptible GPUs offer up to 80% cost savings for non-critical training jobs." },

];

export default function GCPMLE() {
  return (
    <main
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        background: "linear-gradient(to right, #fff1f2 0%, #ffffff 100%)",
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
            color: "#be123c",
            marginBottom: "2rem",
          }}
        >
          Google Machine Learning Engineer
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
          <QuizEngine2 questions={gcpQuestions} />
        </div>
      </div>
    </main>
  );
}
