import QuizEngine2 from "../components/QuizEngine2";

type Question = {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
};

const ai102Questions: Question[] = [
  { id: 1, question: "Which Azure service provides prebuilt AI APIs for vision, speech, and language?", options: ["Azure Machine Learning", "Azure Cognitive Services", "Azure Databricks", "Power BI"], correct: 1, explanation: "Azure Cognitive Services offer REST-based APIs for prebuilt AI models." },
  { id: 2, question: "What service allows training custom computer vision models without coding?", options: ["Azure Custom Vision", "Azure ML Studio", "Azure OpenAI", "Azure Data Factory"], correct: 0, explanation: "Custom Vision lets you train image classifiers through a no-code interface." },
  { id: 3, question: "Which tool in Azure Machine Learning allows managing model experiments?", options: ["Designer", "Run History", "Compute Instances", "Pipelines"], correct: 1, explanation: "Run History stores experiment metrics and logs for reproducibility." },
  { id: 4, question: "Which service allows access to GPT and other large language models on Azure?", options: ["Azure OpenAI Service", "Azure Cognitive Search", "Azure Bot Service", "Azure AI Studio"], correct: 0, explanation: "Azure OpenAI provides API access to GPT, Codex, and other foundation models." },
  { id: 5, question: "What is 'Responsible AI' primarily focused on?", options: ["Model speed", "Ethical and fair model behavior", "Cost efficiency", "Data compression"], correct: 1, explanation: "Responsible AI ensures fairness, accountability, transparency, and privacy in AI systems." },
  { id: 6, question: "Which type of deployment provides continuous availability across multiple regions?", options: ["Batch deployment", "Online endpoint", "Active-active deployment", "Pipeline endpoint"], correct: 2, explanation: "Active-active deployments ensure high availability and load balancing across regions." },
  { id: 7, question: "Which data labeling tool is included in Azure Machine Learning?", options: ["Data Labeling Project", "Label Studio", "AutoML", "Compute Clusters"], correct: 0, explanation: "Azure ML includes a built-in data labeling workspace for supervised learning tasks." },
  { id: 8, question: "What is the benefit of using Prompt Flow in Azure AI Studio?", options: ["Build, test, and evaluate prompts for LLMs", "Run Spark jobs", "Query datasets with SQL", "Deploy to Kubernetes"], correct: 0, explanation: "Prompt Flow helps test and evaluate LLM prompts for reliability and quality." },
  { id: 9, question: "Which service is best suited for text translation and sentiment analysis?", options: ["Azure Cognitive Services - Language", "Azure Databricks", "Azure AI Search", "Azure Synapse"], correct: 0, explanation: "Azure Cognitive Services Language API provides text translation, sentiment, and analytics." },
  { id: 10, question: "What format does Azure ML use to store registered models?", options: [".pkl or ONNX", ".zip only", ".sql", ".pb"], correct: 0, explanation: "Azure ML supports model formats such as Pickle (.pkl) and ONNX for cross-platform deployment." },
  { id: 11, question: "Which Azure tool enables visual pipeline design for AI workflows?", options: ["Azure ML Designer", "Logic Apps", "Power Automate", "Synapse Pipelines"], correct: 0, explanation: "Azure ML Designer is a drag-and-drop tool for visually building machine learning pipelines." },
  { id: 12, question: "Which Azure service integrates enterprise search with AI models?", options: ["Azure Cognitive Search", "Azure Bot Service", "Azure ML Hub", "Azure DevOps"], correct: 0, explanation: "Azure Cognitive Search combines semantic search with AI enrichment." },
  { id: 13, question: "Which API detects faces and identifies individuals in photos?", options: ["Face API", "Speech API", "Vision Studio", "Text Analytics"], correct: 0, explanation: "Face API is part of Cognitive Services used for face detection and recognition." },
  { id: 14, question: "What feature helps explain why an AI model made a certain decision?", options: ["Interpretability", "AutoML", "Data Drift", "Bias Detection"], correct: 0, explanation: "Interpretability tools provide feature importance and SHAP value explanations." },
  { id: 15, question: "Which SDK is most commonly used to interact with Azure AI and ML resources?", options: ["Azure SDK for Python", "Azure CLI only", "Node.js SDK", "PowerShell"], correct: 0, explanation: "Azure’s Python SDK is widely used for AI/ML resource automation and model management." },
  { id: 16, question: "You deploy a vision model to Azure Container Instances for testing. The container stops automatically after a few hours. How can you ensure continuous availability?", options: ["Deploy to Azure Kubernetes Service (AKS) with autoscaling", "Use Azure Functions with a timer trigger", "Move the model to Azure Batch", "Enable AlwaysOn in the container settings"], correct: 0, explanation: "AKS provides managed orchestration, scaling, and long-running container workloads." },

{ id: 17, question: "You are tuning a model with Azure ML HyperDrive. Which metric type would be most appropriate for a regression task?", options: ["accuracy", "AUC_weighted", "root_mean_squared_error", "F1"], correct: 2, explanation: "RMSE (root mean squared error) is the primary regression evaluation metric in HyperDrive." },

{ id: 18, question: "A customer requires real-time scoring for a chatbot using an NLP model. Which deployment option is ideal?", options: ["Batch endpoint", "Online endpoint with autoscaling", "Pipeline endpoint", "Compute cluster"], correct: 1, explanation: "Online endpoints provide low-latency, autoscaled REST APIs for real-time predictions." },

{ id: 19, question: "You need to trace input data through each stage of an ML pipeline for governance. What Azure ML feature enables this?", options: ["Data lineage", "Experiment tracking", "Dataset snapshotting", "Model versioning"], correct: 0, explanation: "Data lineage captures end-to-end traceability between datasets, runs, and outputs." },

{ id: 20, question: "While deploying a model, you must restrict inference requests to corporate IP ranges only. Which service should enforce this policy?", options: ["Azure Front Door", "Network Security Group", "Azure Application Gateway + VNet", "Azure ML endpoint access policies"], correct: 3, explanation: "Azure ML endpoint access policies restrict allowed IP ranges for scoring endpoints." },

{ id: 21, question: "You need to compare two trained models on latency and accuracy in Azure ML. What’s the most efficient way?", options: ["Run both as separate endpoints and collect metrics via Application Insights", "Use MLflow tracking URIs to compare metrics", "Download both models locally and run perf tests", "Export metrics to Power BI"], correct: 1, explanation: "MLflow tracking integrates with Azure ML runs for model-to-model comparison on metrics and artifacts." },

{ id: 22, question: "A speech-to-text API must adapt to domain-specific vocabulary without retraining. What feature supports this?", options: ["Custom Speech vocabulary lists", "Language Studio translation", "Text Analytics key phrases", "Form Recognizer custom models"], correct: 0, explanation: "Custom Speech allows custom vocab lists and phrases without full retraining." },

{ id: 23, question: "Your team uses Azure OpenAI Service. You need to track prompt latency and cost. Where do you configure this?", options: ["Azure Monitor diagnostic settings", "Application Insights traces for the endpoint", "Usage and billing metrics in Azure OpenAI", "Custom logging in Prompt Flow"], correct: 3, explanation: "Prompt Flow records per-prompt latency, token count, and cost metrics for LLM evaluation." },

{ id: 24, question: "You are asked to deploy a Responsible AI dashboard that explains model fairness and error rates by group. Which tool provides this?", options: ["InterpretML and Fairlearn dashboards", "Azure Data Studio charts", "Power BI embedded", "Azure Synapse notebooks"], correct: 0, explanation: "InterpretML and Fairlearn integrations in Azure ML Studio visualize explainability and fairness metrics." },

{ id: 25, question: "A model drift alert triggers daily, but retraining shows no significant performance loss. What should you adjust?", options: ["Increase drift threshold sensitivity", "Reduce alert frequency or tolerance", "Disable model monitoring", "Use new baseline dataset"], correct: 1, explanation: "Too-sensitive drift thresholds can trigger false positives — adjust tolerance or frequency." },

{ id: 26, question: "You want to export Azure ML experiment logs to external storage. Which approach is recommended?", options: ["Attach Azure Blob storage as a datastore", "Use Local file system mount", "Copy from /runhistory folder", "Enable log analytics workspace"], correct: 0, explanation: "Attaching Blob as a datastore lets you persist run outputs and logs outside the workspace." },

{ id: 27, question: "Which Azure service lets you orchestrate model retraining when new data lands in Data Lake Storage?", options: ["Azure Event Grid + ML Pipeline trigger", "Azure Logic Apps manual workflow", "Synapse Link", "Batch endpoint polling"], correct: 0, explanation: "Event Grid can trigger Azure ML pipelines automatically on storage events." },

{ id: 28, question: "You must manage model versions across environments (Dev/Test/Prod). What feature should you use?", options: ["Model registry with tags", "Separate workspaces only", "GitHub Actions metadata files", "Local model folders"], correct: 0, explanation: "The Azure ML model registry tracks versions and metadata for promotion across environments." },

{ id: 29, question: "You need to capture customer feedback on chatbot responses and feed it back for re-training. What’s the best approach?", options: ["Store ratings in Application Insights", "Push feedback to Azure Table Storage or Cosmos DB and integrate with AutoML retraining pipeline", "Use Key Vault to store feedback securely", "Rebuild the bot daily using Custom Vision"], correct: 1, explanation: "Feedback storage linked to AutoML pipelines supports continual model improvement." },

{ id: 30, question: "You have a dataset with PII that must be anonymized before training. Which tool or service should you use?", options: ["Azure Purview / Microsoft Purview Data Governance", "Form Recognizer", "Data Factory mapping data flows", "Power BI Data Protection"], correct: 0, explanation: "Purview classifies and anonymizes sensitive PII before use in ML workflows." },

];

export default function AI102() {
  return (
    <main
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        background: "linear-gradient(to right, #eff6ff 0%, #ffffff 100%)",
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
            color: "#1e3a8a",
            marginBottom: "2rem",
          }}
        >
          Azure AI Engineer (AI-102)
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
          <QuizEngine2 questions={ai102Questions} />
        </div>
      </div>
    </main>
  );
}
