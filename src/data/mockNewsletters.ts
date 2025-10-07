import { Newsletter } from '@/types/newsletter';

export const mockNewsletters: Newsletter[] = [
  {
    id: 'newsletter-003',
    edition_number: 3,
    title: 'Week of October 7, 2025',
    published_date: '2025-10-07',
    description: 'Cloud security incidents, Kubernetes updates, and zero-trust developments',
    items: [
      {
        id: 'item-1',
        title: 'AWS Announces New S3 Security Feature',
        link_url: 'https://aws.amazon.com/blogs/security',
        tldr_summary: 'AWS introduces automatic encryption for all new S3 buckets by default, eliminating a common security misconfiguration that has led to numerous data breaches.',
        is_deep_dive: true,
        deep_dive_content: `This change addresses one of the most frequent cloud security issues. Historically, developers had to manually enable encryption, leading to oversight. 

**Key implications:**
- Existing buckets remain unchanged (manual migration required)
- Performance impact is negligible (<1% overhead)
- Supports both SSE-S3 and SSE-KMS encryption
- Automatic key rotation available with KMS integration

**Migration path:** AWS provides a step-by-step guide for enabling encryption on existing buckets without downtime.`,
        category: 'cloud',
      },
      {
        id: 'item-2',
        title: 'Kubernetes 1.29 Patches Critical CVE',
        link_url: 'https://kubernetes.io/blog/2025/10/security-update',
        tldr_summary: 'A privilege escalation vulnerability in the kubelet API has been patched. All clusters running versions 1.27-1.28 should upgrade immediately.',
        is_deep_dive: false,
        category: 'security',
      },
      {
        id: 'item-3',
        title: 'Zero Trust Architecture: The Google BeyondCorp Refresh',
        link_url: 'https://cloud.google.com/beyondcorp',
        tldr_summary: 'Google updates BeyondCorp with context-aware access controls that integrate device posture, user behavior analytics, and real-time threat intelligence.',
        is_deep_dive: true,
        deep_dive_content: `The refresh represents a shift from static policies to dynamic, context-aware security.

**New capabilities:**
- Continuous authentication based on risk signals
- Device trust verification at every request
- Integration with Chronicle threat detection
- Granular per-resource access policies

**Implementation considerations:** Organizations should start with read-only services and gradually expand. The learning curve is steep but the security benefits are substantial.`,
        category: 'security',
      },
      {
        id: 'item-4',
        title: 'Terraform 1.7 Introduces State Encryption',
        link_url: 'https://www.hashicorp.com/blog/terraform-1-7',
        tldr_summary: 'HashiCorp adds native state file encryption to Terraform, protecting sensitive infrastructure secrets at rest without third-party tools.',
        is_deep_dive: false,
        category: 'devops',
      },
    ],
  },
  {
    id: 'newsletter-002',
    edition_number: 2,
    title: 'Week of September 30, 2025',
    published_date: '2025-09-30',
    description: 'Container security, cloud cost optimization, and compliance updates',
    talent_market_summary: `**NZ Talent Market Update:** Cloud/Infrastructure Security hiring remains competitive in Auckland and Wellington. Three senior Cloud Security Engineer roles opened at major financial institutions this week, requiring AWS/Azure security architecture experience. DevSecOps positions continue to command premium salaries (NZ$140k-180k) with strong demand for Kubernetes security expertise. Remote-first positions are increasing, particularly for mid-level security analysts with certifications (CISSP, AWS Security Specialty).`,
    items: [
      {
        id: 'item-5',
        title: 'Docker Introduces Signed Container Images',
        link_url: 'https://docker.com/blog/signed-images',
        tldr_summary: 'Docker Hub now supports cryptographic signing of container images using Sigstore, enabling supply chain verification for all public images.',
        is_deep_dive: true,
        deep_dive_content: `This integration with Sigstore (the same tech behind npm\'s package signing) brings software supply chain security to containers.

**How it works:**
- Images are signed during the build process
- Verification happens at pull time
- Uses keyless signing (OIDC-based)
- Transparent log of all signatures

**Adoption path:** Start by verifying signatures on critical base images, then extend to your own images. The tooling is mature and well-documented.`,
        category: 'security',
      },
      {
        id: 'item-6',
        title: 'GCP Cloud Run Cuts Cold Start Times by 60%',
        link_url: 'https://cloud.google.com/blog/products/serverless',
        tldr_summary: 'Google improves Cloud Run startup performance through aggressive caching and pre-warming, making serverless more viable for latency-sensitive workloads.',
        is_deep_dive: false,
        category: 'cloud',
      },
    ],
  },
  {
    id: 'newsletter-001',
    edition_number: 1,
    title: 'Week of September 23, 2025',
    published_date: '2025-09-23',
    description: 'Inaugural edition covering IAM best practices and cloud compliance',
    items: [
      {
        id: 'item-7',
        title: 'NIST Updates Cloud Security Guidelines',
        link_url: 'https://csrc.nist.gov/publications/sp800-204d',
        tldr_summary: 'NIST SP 800-204D provides updated guidance for securing microservices and containers in cloud environments, including zero-trust networking and service mesh recommendations.',
        is_deep_dive: true,
        deep_dive_content: `The update reflects the current state of cloud-native architectures and addresses gaps in the previous guidance.

**Key additions:**
- Service mesh security patterns (Istio/Linkerd)
- mTLS configuration best practices  
- Workload identity federation
- Network policy enforcement recommendations

**Compliance impact:** Organizations in regulated industries should review the guidance and update their security controls accordingly. The document is freely available and highly actionable.`,
        category: 'security',
      },
    ],
  },
];
