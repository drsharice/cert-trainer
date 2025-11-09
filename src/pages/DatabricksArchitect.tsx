import QuizEngine2 from "../components/QuizEngine2";

type Question = {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
};

const databricksArchitectQuestions: Question[] = [
  // --- Secure Network & Deployment ---
  { id: 1, question: "You must deploy Databricks with full network isolation from the public internet. Which configuration ensures this?", options: ["Secure Cluster Connectivity (SCC) + Private Link", "VNet Peering only", "Public IPs with NSG rules", "Hub-Spoke topology without Private Link"], correct: 0, explanation: "SCC with Private Link isolates compute and control planes using Azure backbone traffic only." },
  { id: 2, question: "Which network design supports a single workspace with private connectivity to both storage and control planes?", options: ["Private Link for both control and data planes", "ExpressRoute to the control plane only", "VNet Peering between Databricks subnets", "Service Endpoints for control plane"], correct: 0, explanation: "Private Link connections can be configured for both data (ADLS) and control planes for full isolation." },
  { id: 3, question: "You are tasked to deploy Databricks to multiple regions under the same tenant. How should you manage configuration consistency?", options: ["Use Terraform with environment variables and regional workspaces", "Manually configure each workspace", "Export portal templates for each region", "Use ARM templates separately"], correct: 0, explanation: "Terraform supports parameterized multi-region workspace deployment with reusable IaC modules." },
  { id: 4, question: "Which component provides egress control for Databricks compute plane traffic?", options: ["NAT Gateway", "Azure Firewall", "VNet Peering", "UDR only"], correct: 0, explanation: "NAT Gateway centralizes and controls outbound internet access for compute plane traffic." },
  { id: 5, question: "You need to integrate Databricks with on-premises systems via ExpressRoute. Which design principle should you follow?", options: ["Hub-and-Spoke VNet design with Databricks in the spoke", "Peer all VNets directly", "Deploy Databricks in hub VNet", "Use public endpoints with IP whitelisting"], correct: 0, explanation: "Placing Databricks in a spoke VNet connected through a secured hub allows ExpressRoute traffic flow via the hub." },

  // --- Unity Catalog & Governance ---
  { id: 6, question: "Your company has multiple Azure regions and wants one governance framework for data access. How should you architect Unity Catalog?", options: ["Deploy one metastore per region and assign it to each workspace", "Create a single global metastore shared across all workspaces", "Use separate Unity Catalogs for each team", "Enable data sharing only"], correct: 0, explanation: "Each Azure region requires its own metastore; these are linked to workspaces for governance consistency." },
  { id: 7, question: "Which permission model enables fine-grained access to specific columns and rows in Unity Catalog?", options: ["Row-level and column-level security", "Table ownership only", "Workspace ACLs", "Cluster access mode"], correct: 0, explanation: "Unity Catalog supports row- and column-level security policies for granular governance." },
  { id: 8, question: "You must enforce all workspaces to use Unity Catalog-managed tables. What is the recommended enforcement method?", options: ["Enable Unity Catalog at workspace creation using Terraform", "Apply workspace ACLs post-deployment", "Use SQL commands to convert tables", "Manually configure per cluster"], correct: 0, explanation: "Workspaces should be provisioned with Unity Catalog enabled through Terraform or API for full governance from day one." },
  { id: 9, question: "A business unit needs its own isolation for governance and billing but must use shared datasets. What pattern fits best?", options: ["Separate workspaces linked to the same Unity Catalog metastore", "Shared workspace with multiple catalogs", "Single workspace with ACL-based access", "Export datasets manually"], correct: 0, explanation: "Multiple workspaces can share a single Unity Catalog metastore to allow isolation while maintaining shared governance." },
  { id: 10, question: "How do you enable data lineage tracking in Databricks Unity Catalog?", options: ["Enable automatic lineage tracking in the metastore", "Manually log data sources", "Use MLflow tracking only", "Configure audit logs"], correct: 0, explanation: "Unity Catalog supports automatic lineage tracking across SQL, notebooks, and jobs for governance visibility." },

  // --- Security, Identity & Compliance ---
  { id: 11, question: "You must implement least-privilege access for data engineers and analysts. Which integration is essential?", options: ["Azure Active Directory group-based access mapping", "Custom token management", "Unity Catalog table ownership", "Workspace ACL overrides"], correct: 0, explanation: "Azure AD group mapping enables centralized role-based access aligned with organizational policies." },
  { id: 12, question: "Which Databricks feature prevents admins from accessing user data in clusters?", options: ["Customer-managed keys (CMK) with envelope encryption", "Unity Catalog permissions", "Cluster access control", "SCIM provisioning"], correct: 0, explanation: "CMK encrypts data such that even Databricks administrators cannot read user data." },
  { id: 13, question: "You must ensure compliance with GDPR data deletion requirements. What Databricks feature supports this?", options: ["Delta Lake VACUUM retention configuration", "Cluster termination", "Notebook revision history", "Unity Catalog policy export"], correct: 0, explanation: "Delta Lake VACUUM and retention control ensure old data is permanently deleted to comply with retention laws." },
  { id: 14, question: "How do you ensure logs and audit data are immutable for compliance?", options: ["Forward logs to an append-only Azure Storage account with immutability policies", "Use workspace logs only", "Save logs in notebooks", "Disable VACUUM"], correct: 0, explanation: "Storing logs in immutable storage (WORM) ensures compliance and tamper-proof auditing." },
  { id: 15, question: "What service integrates with Databricks to store workspace audit logs centrally?", options: ["Azure Monitor via Diagnostic Settings", "Azure Log Analytics agent", "Application Insights SDK", "Event Hub sink only"], correct: 0, explanation: "Azure Monitor’s diagnostic settings route audit logs to Log Analytics, Event Hub, or Storage." },

  // --- Automation & CI/CD ---
  { id: 16, question: "What’s the best practice for managing Databricks workspace configuration in code?", options: ["Infrastructure as Code using Terraform", "Manual portal setup", "Script-based CLI only", "Azure ARM templates manually"], correct: 0, explanation: "Terraform modules automate Databricks configuration, improving repeatability and version control." },
  { id: 17, question: "You need to integrate Databricks notebook testing into a CI/CD pipeline. What tool fits best?", options: ["Databricks CLI + pytest + Azure DevOps", "PowerShell automation only", "Manual cluster run", "Notebook Tasks"], correct: 0, explanation: "Databricks CLI and pytest can be orchestrated within Azure DevOps or GitHub Actions pipelines for automated testing." },
  { id: 18, question: "What’s the main benefit of using Repos in Databricks for CI/CD workflows?", options: ["Git-based version control and integration with DevOps tools", "Centralized library management", "Job monitoring", "Cluster auto-scaling"], correct: 0, explanation: "Databricks Repos integrates Git directly into the workspace, enabling CI/CD version control for notebooks." },
  { id: 19, question: "Which API allows automation of cluster lifecycle management?", options: ["Clusters API", "Workspace API", "Jobs API", "Libraries API"], correct: 0, explanation: "The Clusters API supports programmatic creation, modification, and deletion of clusters." },
  { id: 20, question: "You need to enforce consistent workspace governance settings for all environments. What’s the right tool?", options: ["Azure Policy with Terraform deployment enforcement", "Manual workspace reviews", "Notebook tagging", "SCIM configuration"], correct: 0, explanation: "Azure Policy combined with Terraform templates ensures consistent workspace and network governance." },

  // --- Performance & Multi-Workspace Strategy ---
  { id: 21, question: "Which Databricks feature improves cluster startup time across multiple jobs?", options: ["Instance Pools", "High-Concurrency Mode", "Autoscaling Clusters", "Delta Cache"], correct: 0, explanation: "Instance pools maintain a warm set of VMs for quick cluster provisioning." },
  { id: 22, question: "To reduce costs, you want a multi-workspace architecture that shares governance and libraries. What’s the right setup?", options: ["Multiple workspaces connected to one Unity Catalog metastore", "Separate metastores per workspace", "Single workspace for all teams", "Use notebooks for governance"], correct: 0, explanation: "Unity Catalog allows multiple workspaces to share one metastore for consistent governance and shared assets." },
  { id: 23, question: "Which feature ensures cluster right-sizing for performance optimization?", options: ["Autoscaling policy", "Cluster pools", "Instance templates", "Cluster size presets"], correct: 0, explanation: "Autoscaling adjusts workers dynamically to optimize cost and performance based on workload." },
  { id: 24, question: "You must isolate workloads by department while using shared data assets. Which design supports this?", options: ["Departmental workspaces connected to one Unity Catalog metastore", "Separate Azure tenants", "Shared cluster ACLs", "Data replication per workspace"], correct: 0, explanation: "Multiple departmental workspaces under a shared metastore maintain data consistency with governance isolation." },
  { id: 25, question: "What’s the key design difference between job clusters and all-purpose clusters?", options: ["Job clusters are ephemeral and terminate after completion", "All-purpose clusters cost less", "Job clusters cannot use Delta Lake", "All-purpose clusters support scheduling"], correct: 0, explanation: "Job clusters are created for each job run and terminate automatically, optimizing cost and isolation." },
  { id: 26, question: "To manage large-scale deployment across 20 workspaces, how do you minimize configuration drift?", options: ["Use Terraform modules with variable inputs and remote state", "Export ARM templates manually", "Use workspace UI snapshots", "Configure via CLI each time"], correct: 0, explanation: "Terraform remote state ensures consistent, version-controlled configurations across environments." },
  { id: 27, question: "You need to track workspace usage costs by department. Which approach works best?", options: ["Use cluster tags and export billing data to Log Analytics", "Separate storage accounts", "Unity Catalog tagging", "Manual report exports"], correct: 0, explanation: "Cluster tags propagate to Azure billing data, enabling cost attribution per department." },
  { id: 28, question: "You’re designing a Databricks platform for sensitive data workloads. Which configuration is mandatory?", options: ["Private Link + CMK + Unity Catalog", "VNet Peering only", "Public endpoints + ACLs", "SAS Tokens only"], correct: 0, explanation: "Combining Private Link, customer-managed keys, and Unity Catalog ensures full data protection and governance." },
  { id: 29, question: "Which Databricks feature supports compliance with internal SLAs for resource provisioning?", options: ["Cluster Pools with autoscaling", "Interactive clusters", "Notebook pinning", "Workspace snapshots"], correct: 0, explanation: "Cluster pools enable predictable provisioning times for critical workloads." },
  { id: 30, question: "What’s the best way to audit changes to workspace configuration and Terraform deployments?", options: ["Track Terraform state and enable diagnostic logs for workspace changes", "Enable notebook revision history", "Use cluster event logs only", "Rely on Azure AD sign-in logs"], correct: 0, explanation: "Terraform state captures IaC changes; diagnostic logs track all workspace modifications for auditing." },
];

export default function DatabricksArchitect() {
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
          Azure Databricks Architect
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
          <QuizEngine2 questions={databricksArchitectQuestions} />
        </div>
      </div>
    </main>
  );
}
