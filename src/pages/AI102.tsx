import QuizEngine from "../components/QuizEngine";
import type { Question } from "../components/QuizEngine";

const ai102Questions: Question[] = [
  {
    id: 1,
    question: "Which Azure service provides prebuilt AI APIs for vision, speech, and language?",
    options: ["Azure Machine Learning", "Azure Cognitive Services", "Azure Databricks", "Power BI"],
    correct: 1,
    explanation: "Azure Cognitive Services offer REST-based APIs for prebuilt AI models."
  },
  {
    id: 2,
    question: "What service allows training custom computer vision models without coding?",
    options: ["Azure Custom Vision", "Azure ML Studio", "Azure OpenAI", "Azure Data Factory"],
    correct: 0,
    explanation: "Custom Vision lets you train image classifiers through a no-code interface."
  },
  {
    id: 3,
    question: "Which tool in Azure Machine Learning allows managing model experiments?",
    options: ["Designer", "Run History", "Compute Instances", "Pipelines"],
    correct: 1,
    explanation: "Run History stores experiment metrics and logs for reproducibility."
  },
  {
    id: 4,
    question: "Which service allows access to GPT and other large language models on Azure?",
    options: ["Azure OpenAI Service", "Azure Cognitive Search", "Azure Bot Service", "Azure AI Studio"],
    correct: 0,
    explanation: "Azure OpenAI provides API access to GPT, Codex, and other foundation models."
  },
  {
    id: 5,
    question: "What is 'Responsible AI' primarily focused on?",
    options: ["Model speed", "Ethical and fair model behavior", "Cost efficiency", "Data compression"],
    correct: 1,
    explanation: "Responsible AI ensures fairness, accountability, transparency, and privacy in AI systems."
  },
  {
    id: 6,
    question: "Which type of deployment provides continuous availability across multiple regions?",
    options: ["Batch deployment", "Online endpoint", "Active-active deployment", "Pipeline endpoint"],
    correct: 2,
    explanation: "Active-active deployments ensure high availability and load balancing across regions."
  },
  {
    id: 7,
    question: "Which data labeling tool is included in Azure Machine Learning?",
    options: ["Data Labeling Project", "Label Studio", "AutoML", "Compute Clusters"],
    correct: 0,
    explanation: "Azure ML includes a built-in data labeling workspace for supervised learning tasks."
  },
  {
    id: 8,
    question: "What is the benefit of using Prompt Flow in Azure AI Studio?",
    options: ["Build, test, and evaluate prompts for LLMs", "Run Spark jobs", "Query datasets with SQL", "Deploy to Kubernetes"],
    correct: 0,
    explanation: "Prompt Flow helps test and evaluate LLM prompts for reliability and quality."
  },
  {
    id: 9,
    question: "Which service is best suited for text translation and sentiment analysis?",
    options: ["Azure Cognitive Services - Language", "Azure Databricks", "Azure AI Search", "Azure Synapse"],
    correct: 0,
    explanation: "Azure Cognitive Services Language API provides text translation, sentiment, and analytics."
  },
  {
    id: 10,
    question: "What format does Azure ML use to store registered models?",
    options: [".pkl or ONNX", ".zip only", ".sql", ".pb"],
    correct: 0,
    explanation: "Azure ML supports model formats such as Pickle (.pkl) and ONNX for cross-platform deployment."
  },
  {
    id: 11,
    question: "Which Azure tool enables visual pipeline design for AI workflows?",
    options: ["Azure ML Designer", "Logic Apps", "Power Automate", "Synapse Pipelines"],
    correct: 0,
    explanation: "Azure ML Designer is a drag-and-drop tool for visually building machine learning pipelines."
  },
  {
    id: 12,
    question: "Which Azure service integrates enterprise search with AI models?",
    options: ["Azure Cognitive Search", "Azure Bot Service", "Azure ML Hub", "Azure DevOps"],
    correct: 0,
    explanation: "Azure Cognitive Search combines semantic search with AI enrichment."
  },
  {
    id: 13,
    question: "Which API detects faces and identifies individuals in photos?",
    options: ["Face API", "Speech API", "Vision Studio", "Text Analytics"],
    correct: 0,
    explanation: "Face API is part of Cognitive Services used for face detection and recognition."
  },
  {
    id: 14,
    question: "What feature helps explain why an AI model made a certain decision?",
    options: ["Interpretability", "AutoML", "Data Drift", "Bias Detection"],
    correct: 0,
    explanation: "Interpretability tools provide feature importance and SHAP value explanations."
  },
  {
    id: 15,
    question: "Which SDK is most commonly used to interact with Azure AI and ML resources?",
    options: ["Azure SDK for Python", "Azure CLI only", "Node.js SDK", "PowerShell"],
    correct: 0,
    explanation: "Azure’s Python SDK is widely used for AI/ML resource automation and model management."
  }
];

export default function AI102() {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-white to-blue-50 flex flex-col items-center justify-start">
      <h1 className="text-3xl font-bold text-center text-blue-700 mt-10 mb-8">
        Azure AI Engineer (AI-102)
      </h1>
      <QuizEngine questions={ai102Questions} />
    </div>
  );
}
