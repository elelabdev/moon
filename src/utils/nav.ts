// src/utils/nav.ts

export type LinkItem = {
  type: "link";
  label: string;
  href: string;
  /** If provided, item is active when pathname starts with this */
  match?: string;
};

export type GroupItem = {
  type: "group";
  label: string;
  /** Groups are collapsible; open by default? */
  defaultOpen?: boolean;
  items: LinkItem[];
};

export type Section = {
  section: string;
  items: (LinkItem | GroupItem)[];
};

export const NAV: Section[] = [
  {
    section: "Dashboards",
    items: [
      { type: "link", label: "Overview", href: "/dashboard", match: "/dashboard" },
      { type: "link", label: "Analytics", href: "#" },
      { type: "link", label: "System status", href: "/support/system-status" }
    ]
  },
  {
    section: "On-premise",
    items: [
      {
        type: "group",
        label: "Network",
        items: [
          { type: "link", label: "Overview", href: "/network/overview" },
          { type: "link", label: "Private network", href: "/network/private-network" },
          { type: "link", label: "Floating IP", href: "/network/floating-ip" },
          { type: "link", label: "IP Management", href: "/network/ip-management" },
          { type: "link", label: "DDoS IP Protection", href: "/network/ddos-ip-protection" },
          { type: "link", label: "Metrics Report", href: "/network/metrics-report" },
          { type: "link", label: "Aggregation Packs", href: "/network/aggregation-packs" },
          { type: "link", label: "Cloud Connect", href: "/network/cloud-connect" },
          { type: "link", label: "Dedicated Network Equipment", href: "/network/dedicated-network-equipment" },
          { type: "link", label: "Dedicated VPN service", href: "/network/dedicated-vpn-service" },
          { type: "link", label: "IP Performance Measurements", href: "/network/ip-performance-measurements" },
          { type: "link", label: "Wireshark PCAPs", href: "/network/wireshark-pcaps" }
        ]
      },
      {
        type: "group",
        label: "Dedicated or Virtual Servers",
        items: [
          { type: "link", label: "Overview", href: "/bare-metals/overview" },
          { type: "link", label: "High Performance", href: "/bare-metals/high-bandwidth" },
          { type: "link", label: "High Bandwidth", href: "/bare-metals/high-bandwidth" },
          { type: "link", label: "GPU Servers", href: "/bare-metals/high-bandwidth" },
          { type: "link", label: "Storage Servers", href: "/bare-metals/high-bandwidth" },
          { type: "link", label: "Virtual Servers", href: "/bare-metals/vps" }
        ]
      },
      {
        type: "group",
        label: "Private Cloud",
        items: [
          { type: "link", label: "Overview", href: "/private-cloud/overview" },
          { type: "link", label: "OpenStack", href: "/private-cloud/openstack" },
          { type: "link", label: "OpenNebula", href: "/private-cloud/opennebula" },
          { type: "link", label: "Proxmox", href: "/private-cloud/proxmox" },
          { type: "link", label: "VMware vCloud", href: "/private-cloud/vmware-vcloud" },
          { type: "link", label: "VMware vSphere", href: "/private-cloud/vmware-vsphere" }
        ]
      }
    ]
  },
  {
    section: "Public Cloud",
    items: [
      { type: "link", label: "Overview", href: "/public-cloud/overview" },
      { type: "link", label: "Compute", href: "/public-cloud/compute" },
      { type: "link", label: "Storage", href: "/public-cloud/storage" },
      { type: "link", label: "Database", href: "/public-cloud/database" },
      { type: "link", label: "Autoscaling", href: "/public-cloud/autoscaling" },
      { type: "link", label: "Load Balancers", href: "/public-cloud/load-balancers" },
      { type: "link", label: "Cost Management", href: "/public-cloud/cost-management" }
    ]
  },
  {
    section: "Security",
    items: [
      { type: "link", label: "Overview", href: "/security/overview" },
      { type: "link", label: "Analytics", href: "/security/analytics" },
      { type: "link", label: "Security rules", href: "/security/security-rules" },
      { type: "link", label: "Settings", href: "/security/settings" }
    ]
  },
  {
    section: "Developers",
    items: [
      { type: "link", label: "APIs", href: "#" },
      { type: "link", label: "Roadmap", href: "#" }
    ]
  },
  {
    section: "Management",
    items: [
      {
        type: "group",
        label: "Account",
        items: [
          { type: "link", label: "Management", href: "/account/management" },
          { type: "link", label: "Finance", href: "/account/finance" }
        ]
      },
      {
        type: "group",
        label: "Support",
        items: [
          { type: "link", label: "Tickets", href: "/support/tickets" },
          { type: "link", label: "Chat", href: "/support/chat" },
          { type: "link", label: "Monitoring", href: "/support/monitoring" },
          { type: "link", label: "Solution Topology", href: "/support/solution-topology" },
          { type: "link", label: "Knowledge Base", href: "/support/kb" }
        ]
      }
    ]
  }
];
