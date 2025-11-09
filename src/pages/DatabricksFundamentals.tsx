import QuizEngine2 from "../components/QuizEngine2";

type Question = {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
};

const databricksQuestions: Question[] = [
  // --- Platform Architecture ---
  { id: 1, question: "Which Azure resource hosts the Databricks control plane?", options: ["Microsoft-managed subscription", "Customer subscription", "Customer VNet", "Azure Active Directory"], correct: 0, explanation: "The Databricks control plane is hosted in a Microsoft-managed subscription that manages cluster orchestration, job scheduling, and notebooks." },
  { id: 2, question: "You need to deploy multiple isolated Databricks workspaces for Dev, Test, and Prod. What’s the best practice?", options: ["Create separate resource groups under one workspace", "Use separate workspaces per environment with consistent configuration via Terraform", "Use separate clusters within a single workspace", "Use single workspace with tags for environments"], correct: 1, explanation: "Each environment should have its own workspace, ideally deployed with IaC to maintain consistent configurations and isolation." },
  { id: 3, question: "What’s the benefit of enabling VNet injection during workspace deployment?", options: ["Improves notebook performance", "Allows Databricks resources to be deployed into your own VNet for controlled networking and security", "Reduces cluster startup time", "Supports auto-scaling"], correct: 1, explanation: "VNet injection allows Databricks compute plane resources to run inside your VNet for isolation and custom routing." },
  { id: 4, question: "Which networking option ensures data exfiltration prevention from the Databricks workspace?", options: ["NSG only", "Private Link with secure cluster connectivity", "Public endpoints with ACLs", "Azure Firewall only"], correct: 1, explanation: "Private Link with SCC routes all traffic privately, preventing public data exfiltration." },
  { id: 5, question: "Which Databricks workspace feature helps manage and monitor workspace deployment configuration across teams?", options: ["Cluster policies", "Unity Catalog", "Workspace configuration templates", "Azure Policy"], correct: 0, explanation: "Cluster policies enforce consistent compute and security configurations across workspaces." },

  // --- Security & Identity ---
  { id: 6, question: "You need to enable single sign-on (SSO) for your Databricks workspace. Which service manages identity?", options: ["Azure Active Directory", "Databricks SCIM API", "Key Vault", "Azure Front Door"], correct: 0, explanation: "Databricks integrates with Azure Active Directory for SSO and role-based access control." },
  { id: 7, question: "Which identity sync feature ensures users and groups in Azure AD are automatically provisioned in Databricks?", options: ["SAML Federation", "SCIM Provisioning", "OAuth 2.0", "Kerberos"], correct: 1, explanation: "SCIM (System for Cross-domain Identity Management) automatically syncs users and groups from Azure AD into Databricks." },
  { id: 8, question: "Where should you store access tokens or credentials securely for jobs?", options: ["Databricks Notebook", "Azure Key Vault backed secret scope", "Environment variables", "Workspace settings"], correct: 1, explanation: "Secrets should be stored in Key Vault-backed secret scopes for secure retrieval at runtime." },
  { id: 9, question: "You must restrict who can create clusters in your workspace. Which control helps with this?", options: ["Cluster access control", "Unity Catalog permissions", "IP access list", "Network security groups"], correct: 0, explanation: "Cluster access control allows workspace admins to define who can create, edit, or attach to clusters." },
  { id: 10, question: "What is Unity Catalog primarily used for?", options: ["Query optimization", "Centralized governance for data and AI assets across workspaces", "Visualizing lineage in Power BI", "Workspace collaboration"], correct: 1, explanation: "Unity Catalog centralizes governance of data, models, and permissions across Databricks workspaces." },

  // --- Data & Storage Integration ---
  { id: 11, question: "To securely mount Azure Data Lake Storage (ADLS Gen2) into Databricks, what is recommended?", options: ["Storage account key", "Service principal with OAuth2", "Shared Access Signature (SAS) token", "Anonymous access"], correct: 1, explanation: "Mounting via service principal with OAuth2 provides secure, auditable access to ADLS." },
  { id: 12, question: "Which feature ensures ACID transactions and schema enforcement in Databricks?", options: ["Parquet", "Delta Lake", "Avro", "CSV"], correct: 1, explanation: "Delta Lake provides ACID transactions, schema enforcement, and time travel for data reliability." },
  { id: 13, question: "Which Databricks tool allows real-time ingestion from Event Hubs or Kafka?", options: ["Structured Streaming with Auto Loader", "Data Factory", "Unity Catalog", "Synapse Link"], correct: 0, explanation: "Structured Streaming with Auto Loader allows scalable, incremental ingestion from streaming sources." },
  { id: 14, question: "What is the best way to track and manage experiment runs and models in Databricks?", options: ["Databricks SQL", "MLflow Tracking and Registry", "Delta Live Tables", "Notebook Tags"], correct: 1, explanation: "MLflow provides experiment tracking and model registry features natively in Databricks." },
  { id: 15, question: "You need to allow Fabric and Synapse to read curated data from Databricks. Which integration works best?", options: ["Synapse Link + Delta Tables", "PolyBase import", "REST API ingestion", "Direct Power BI connection"], correct: 0, explanation: "Synapse Link reads directly from Delta Tables, ensuring consistency with Databricks data." },

  // --- Networking & Governance ---
  { id: 16, question: "Which Databricks network configuration isolates compute from the control plane for private deployments?", options: ["Secure Cluster Connectivity (SCC)", "VNet Peering", "Private Endpoints only", "Firewall only"], correct: 0, explanation: "SCC uses relay-based connectivity, isolating compute from the public internet while maintaining control-plane communication." },
  { id: 17, question: "What is required to enable audit logging in Azure Databricks?", options: ["Azure Monitor Agent", "Diagnostic settings to Log Analytics", "Unity Catalog activation", "Event Hub subscription"], correct: 1, explanation: "Audit logs are sent through Azure diagnostic settings to Log Analytics or a storage account." },
  { id: 18, question: "You want to apply workspace-level data governance across multiple regions. What should you use?", options: ["Multiple Unity Catalog metastores with region mapping", "Global workspace replication", "Cross-region peering", "Azure Blueprints"], correct: 0, explanation: "Unity Catalog allows regional metastores mapped to workspaces for multi-region governance." },
  { id: 19, question: "Which monitoring tool provides workspace-level insights into job runs, cluster metrics, and driver logs?", options: ["Azure Log Analytics", "Databricks Monitoring UI", "Application Insights", "Power BI Dashboards"], correct: 1, explanation: "The Databricks Monitoring UI and metrics API provide cluster and job telemetry directly in the workspace." },
  { id: 20, question: "You must enforce all clusters to use private subnets. What’s the correct approach?", options: ["Apply a cluster policy defining allowed subnets", "Modify notebook permissions", "Restrict NSGs", "Create new VNet"], correct: 0, explanation: "Cluster policies can enforce subnet configurations, ensuring all clusters deploy privately." },

  // --- Operations & Automation ---
  { id: 21, question: "Which method automates workspace deployment and configuration in CI/CD?", options: ["Terraform or Bicep templates", "Manual setup via portal", "ARM templates only", "Notebook scripts"], correct: 0, explanation: "Terraform or Bicep provide IaC automation for consistent and repeatable Databricks deployments." },
  { id: 22, question: "You must schedule nightly ETL jobs that automatically start and terminate clusters. What feature should you use?", options: ["Databricks Jobs with job clusters", "High-concurrency cluster", "Delta Live Tables streaming", "Notebook Tasks"], correct: 0, explanation: "Databricks Jobs with job clusters are ideal for scheduled ETL with automatic lifecycle management." },
  { id: 23, question: "Which API would you use to trigger Databricks jobs from an external service like Azure Logic Apps?", options: ["Jobs REST API 2.1", "Workspace API", "Delta API", "MLflow API"], correct: 0, explanation: "The Jobs REST API allows external services to trigger, monitor, and manage Databricks jobs programmatically." },
  { id: 24, question: "What’s the advantage of using instance pools for job clusters?", options: ["Reduced startup latency and cost by reusing idle instances", "Improved Spark optimization", "Better data caching performance", "Cluster persistence"], correct: 0, explanation: "Instance pools keep ready VMs to reduce cluster startup time and lower provisioning costs." },
  { id: 25, question: "You must run Databricks notebooks in a DevOps release pipeline. Which task is used?", options: ["Databricks CLI + Azure DevOps task", "Azure Function", "Synapse notebook activity", "Manual run"], correct: 0, explanation: "The Databricks CLI and Azure DevOps Databricks task can execute notebooks during release pipelines." },

  // --- Advanced Scenarios ---
  { id: 26, question: "You must ensure Databricks clusters access only private storage endpoints. What’s required?", options: ["Private Link configuration with storage account", "Public endpoint plus firewall rule", "Service principal with SAS token", "VPN connection"], correct: 0, explanation: "Private Link ensures storage access stays on the Azure backbone with no public exposure." },
  { id: 27, question: "Which Databricks architecture component handles metadata and permissions for tables in Delta Lake?", options: ["Unity Catalog Metastore", "Cluster Policy", "SQL Warehouse", "Job Scheduler"], correct: 0, explanation: "The Unity Catalog Metastore manages metadata and permissions across workspaces and data objects." },
  { id: 28, question: "You want to reduce workspace costs without affecting user productivity. Which approach helps?", options: ["Use job clusters and instance pools", "Use interactive clusters only", "Disable auto-termination", "Increase driver node size"], correct: 0, explanation: "Combining job clusters with instance pools balances performance and cost efficiency." },
  { id: 29, question: "You must automate user onboarding and group permissions. Which approach works best?", options: ["Use SCIM API integrated with Azure AD", "Manually create groups in Databricks", "Use Unity Catalog directly", "Use service principals only"], correct: 0, explanation: "The SCIM API automates user and group management via Azure AD provisioning." },
  { id: 30, question: "Which feature provides consistent, auditable data access control across SQL, Python, and Spark?", options: ["Unity Catalog fine-grained ACLs", "Cluster access mode", "Notebook permissions", "SQL endpoints"], correct: 0, explanation: "Unity Catalog fine-grained ACLs unify governance across SQL, Python, and Spark APIs." },
];

export default function DatabricksFundamentals() {
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
          Azure Databricks Fundamentals
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
          <QuizEngine2 questions={databricksQuestions} />
        </div>
      </div>
    </main>
  );
}
