import { 
  ContactInfo, 
  EducationMilestone, 
  ProfessionalExperience, 
  ProjectExperience, 
  Vendor, 
  TrainingCourse 
} from "./types";

export const PERSONAL_NAME = "JiWon Bang";
export const PERSONAL_ROLE = "Clinical Research Associate II & Registered Nurse";
export const PERSONAL_BIO = "Accomplished Clinical Research Associate II and Registered Professional Nurse with a robust nursing foundation from Korea University Anam Hospital. Demonstrates over 5 years of combined experience in high-density clinical research operations, on-site monitoring, study coordination, and professional patient care. Proven competence managing international and local Phase I-IV trials in Oncology, Pulmonology, Neurology, and Nephrology while guaranteeing protocol accuracy, GCP compliance, and participant safety.";

// Image import path (will correspond to the generated asset)
export const PROFILE_IMAGE_URL = "/src/assets/images/ji_won_bang_profile_1781777445380.jpg";

export const CONTACT_DATA: ContactInfo = {
  phone: "+82 10 3359 7378",
  email: "jiwonbang999@gmail.com",
  emailAlternative: "jiwon.bang@email.com",
  birthday: "06 May 1994 (Seoul, Korea)",
  location: "Dobong-gu, Seoul, Republic of Korea",
  portfolio: "portfolio.com/jiwonbang",
  github: "github.com/jiwonbang999"
};

export const EDUCATION_DATA: EducationMilestone = {
  institution: "The Catholic University of Korea",
  location: "Seoul, Korea",
  degree: "Bachelor of Science in Nursing",
  period: "March 2013 – February 2020",
  licenses: [
    "Registered Professional Nurse (United States of America) — No. 887588",
    "Nursing License (Republic of Korea) — No. 429105"
  ]
};

export const WORK_EXPERIENCE: ProfessionalExperience[] = [
  {
    company: "Worldwide Clinical Trials",
    location: "Seoul, Korea",
    role: "CRA II, Clinical Operations Site Management",
    period: "Aug 2023 - Mar 2026",
    responsibilities: [
      "Perform thorough feasibility studies for potential sites as requested by international sponsors.",
      "Conduct professional pre-study (PSSV), study initiation (SIV), and interim monitoring visits (IMV) in strict adherence to the protocol requirements and ICH-GCP guidelines.",
      "Compile and ensure absolute completeness of regulatory documents and ethical submission documentation for institutional review boards (IRB) and independent ethics committees (IEC).",
      "Coordinate crucial study material (e.g., patient booklets, CRFs, manuals) shipment, delivery, and receipt by study site.",
      "Document site visit findings meticulously via professional written trip reports submitted to global project managers.",
      "Provide technical inputs into the design of protocols, CRFs, and site monitoring plans upon request.",
      "Assess, monitor, and train hospital investigators and study site staff on clinical trial protocol adherence.",
      "Review study subject safety information, eligibility criteria, and informed consent procedures.",
      "Conduct source document verification (SDV) for compliance, patient safety, and absolute veracity of medical data.",
      "Review electronic Case Report Forms (eCRF) using sophisticated electronic data capture systems.",
      "Assist the site clinical staff in the active maintenance of the Investigator Site File (ISF).",
      "Maintain stellar, regular communication with sites to drive recruitment and protocol adherence.",
      "Provide applicable updates for site-related documentation for filing in the Electronic Trial Master File (eTMF).",
      "Assist site study coordinators in rapid clinical data query resolution.",
      "Ensure site compliance with Investigational Product (IP) receipt, strict temperature-log accountability, and return or destruction.",
      "Conduct co-monitoring site visits for quality assessment and structured training of junior CRAs."
    ]
  },
  {
    company: "IQVIA",
    location: "Seoul, Korea",
    role: "CRA, Clinical Functional Service Partnership",
    period: "Sep 2021 – Mar 2023",
    responsibilities: [
      "Performed high-intensity site start-up, site evaluation, and site initiation activities, interim monitoring, and close-out visits ensuring regulatory and protocol compliance.",
      "Reviewed and facilitated rigorous completion of proper informed consent procedures to protect subject autonomy.",
      "Ensured precise data reporting via regular review of medical records and hospital source documents.",
      "Interpreted laboratory and clinical data to identify critical protocol deviations and potential risks to subject safety or data integrity.",
      "Generated clean data queries and proactively managed resolution with clinical site coordinators and investigators.",
      "Performed meticulous investigational product accountability, including shipping audits and temperature log checks per protocol and Study Monitoring Plan.",
      "Obtained, reviewed, and finalized essential regulatory and administrative documents for local and international audits.",
      "Documented all site activities via formal confirmation letters, follow-up letters, trip reports, and communication logs as per SOPs and Study Monitoring Plan.",
      "Maintained thorough knowledge of ICH/GCP Guidelines, local Ministry of Food and Drug Safety (MFDS) regulations, and company SOPs.",
      "Collaborated on project scope, budgets, and timelines, managing site-specific activities to secure project objectives. "
    ]
  },
  {
    company: "Korea University Anam Hospital",
    location: "Seoul, Korea",
    role: "SC (Study Coordinator), Department of Oncology",
    period: "August 2020 – Sep 2021",
    responsibilities: [
      "Coordinated major clinical research trials in the oncology field, centering on lung, breast, and colon cancers.",
      "Partnered with Principal Investigators and global trial sponsors to facilitate daily clinical activities in complete compliance with research protocols.",
      "Participated actively in study initiation visits and investigator meetings, initiating trials under tight study timelines.",
      "Screened patient medical records, oncology databases, and physician referrals to identify prospective candidates for ongoing clinical trials.",
      "Responsible for inputting client data into interactive electronic case report forms (eCRF) and resolving registry queries in a timely manner.",
      "Monitored clinical subjects receiving active chemotherapy, including detailed pre-chemo and post-chemo assessments.",
      "Completed rigorous source documentation of all patient care provided and supervised nursing technicians.",
      "Assisted in drafting IIT (Investigator-Initiated Trial) study designs and prepared submissions for institutional review board (IRB) approvals.",
      "Assisted in assessing Adverse Events (AE) and prepared safety reports for Serious Adverse Events (SAE) and protocol deviations."
    ]
  }
];

export const PROJECTS_DATA: ProjectExperience[] = [
  {
    phase: "II",
    indication: "IgA Nephropathy",
    therapeuticArea: "Nephrology",
    type: "IP / Global",
    role: "CRA",
    period: "Oct 2025 – Current",
    responsibilities: "Pre-Study site visit, Start-up activities, site initiation visit and on-site monitoring visit for 6 sites."
  },
  {
    phase: "I/II",
    indication: "Solid tumor with MSI or dMMR",
    therapeuticArea: "Oncology",
    type: "IP / Global",
    role: "CRA",
    period: "Aug 2025 – Oct 2025",
    responsibilities: "Pre-Study site visit for 3 sites."
  },
  {
    phase: "I/IIa",
    indication: "Liver Cancer",
    therapeuticArea: "Oncology",
    type: "IP / Global",
    role: "CRA",
    period: "Apr 2025 – Current",
    responsibilities: "On-site monitoring visit and close out activities for 6 sites."
  },
  {
    phase: "I/II",
    indication: "Metastatic Breast Cancer",
    therapeuticArea: "Oncology",
    type: "IP / Global",
    role: "CRA",
    period: "Nov 2024 – Current",
    responsibilities: "On-site monitoring visit for 3 sites."
  },
  {
    phase: "III",
    indication: "Head and Neck Squamous Cell Carcinoma",
    therapeuticArea: "Oncology",
    type: "IP / Global",
    role: "Unblind CRA",
    period: "Nov 2024 – Current",
    responsibilities: "Unblind monitoring, managing investigational product handling, compounding, and IP accountability for 7 sites."
  },
  {
    phase: "II",
    indication: "Multifocal Motor Neuropathy",
    therapeuticArea: "Neurology",
    type: "IP / Global",
    role: "CRA",
    period: "Sep 2023 – Dec 2023",
    responsibilities: "Pre-Study site visit for 5 sites."
  },
  {
    phase: "III",
    indication: "Chronic Inflammatory Demyelinating Polyneuropathy",
    therapeuticArea: "Neurology",
    type: "IP / Global",
    role: "CRA",
    period: "Sep 2023 – Dec 2023",
    responsibilities: "Pre-Study site visit for 5 sites."
  },
  {
    phase: "II",
    indication: "Head and Neck Squamous Cell Carcinoma",
    therapeuticArea: "Oncology",
    type: "IP / Global",
    role: "CRA",
    period: "Sep 2023 – Dec 2023",
    responsibilities: "Pre-Study site visit for 5 sites."
  },
  {
    phase: "II/III",
    indication: "Alzheimer's disease",
    therapeuticArea: "Neurology",
    type: "IP / Global",
    role: "CRA",
    period: "Sep 2023 – Dec 2023",
    responsibilities: "Pre-Study site visit for 5 sites."
  },
  {
    phase: "II",
    indication: "IgA Nephropathy",
    therapeuticArea: "Nephrology",
    type: "IP / Global",
    role: "CRA",
    period: "Aug 2023 – Current",
    responsibilities: "Start-up activities, site initiation visit and on-site monitoring visit for 6 sites."
  },
  {
    phase: "I/II",
    indication: "Locally Advanced or Metastatic Solid Tumor Malignancies",
    therapeuticArea: "Oncology",
    type: "IP / Global",
    role: "CRA",
    period: "Sep 2023 – Nov 2025",
    responsibilities: "Start-up activities, site initiation visit, on-site monitoring visit and close out activities for 4 sites."
  },
  {
    phase: "III",
    indication: "Eosinophilic Asthma",
    therapeuticArea: "Pulmonology",
    type: "IP / Global",
    role: "CRA",
    period: "Aug 2023 – Nov 2024",
    responsibilities: "Pre-Study Site Visit, Start-up activities, site initiation visit and on-site monitoring visit for 4 sites."
  },
  {
    phase: "III",
    indication: "Eosinophilic Asthma (Target 8)",
    therapeuticArea: "Pulmonology",
    type: "IP / Global",
    role: "CRA",
    period: "Aug 2023 – Nov 2024",
    responsibilities: "Pre-Study Site Visit, Start-up activities, site initiation visit and on-site monitoring visit for 8 sites."
  },
  {
    phase: "III",
    indication: "Alzheimer's disease (Start-up)",
    therapeuticArea: "Neurology",
    type: "IP / Global",
    role: "CRA",
    period: "Dec 2021 – Mar 2023",
    responsibilities: "Start-up activities, site initiation visit and close out activities for 3 sites."
  },
  {
    phase: "III",
    indication: "Alzheimer's disease (Monitoring)",
    therapeuticArea: "Neurology",
    type: "IP / Global",
    role: "CRA",
    period: "Dec 2021 – Mar 2023",
    responsibilities: "On-site monitoring visit for 5 sites."
  },
  {
    phase: "III",
    indication: "Breast Cancer (4 Sites)",
    therapeuticArea: "Oncology",
    type: "IP / Global",
    role: "CRA",
    period: "Oct 2021 – Mar 2023",
    responsibilities: "On-site monitoring visit and site close out visit for 4 sites."
  },
  {
    phase: "III",
    indication: "Breast Cancer (2 Sites)",
    therapeuticArea: "Oncology",
    type: "IP / Global",
    role: "CRA",
    period: "Sep 2021 – Mar 2023",
    responsibilities: "On-site monitoring visit and site close out visit for 2 sites."
  },
  {
    phase: "IV",
    indication: "Breast Cancer",
    therapeuticArea: "Oncology",
    type: "IP / Global",
    role: "SC",
    period: "Jun 2021 – Sep 2021",
    responsibilities: "Full study coordination, ICF review, and patient assessment before/after active treatment."
  },
  {
    phase: "III",
    indication: "Colon Cancer",
    therapeuticArea: "Oncology",
    type: "IP / Global",
    role: "SC",
    period: "Feb 2021 – Sep 2021",
    responsibilities: "Screening patient records, managing laboratory sample shipments, SAE reporting."
  },
  {
    phase: "III",
    indication: "Breast Cancer Study Group",
    therapeuticArea: "Oncology",
    type: "IP / Global",
    role: "SC",
    period: "Feb 2021 – Sep 2021",
    responsibilities: "Liaising with sponsors, inputting high-density clinical data into EDC portals, resolving queries."
  },
  {
    phase: "IV",
    indication: "Colon Cancer (Local)",
    therapeuticArea: "Oncology",
    type: "IP / Local",
    role: "SC",
    period: "Dec 2020 – Sep 2021",
    responsibilities: "Coordinating clinical research, on-site patient monitoring, safety logs preparation."
  },
  {
    phase: "III",
    indication: "Colon Cancer (Global Registry)",
    therapeuticArea: "Oncology",
    type: "IP / Global",
    role: "SC",
    period: "Dec 2020 – Sep 2021",
    responsibilities: "Study coordination, data input on vendor portals, clinical audits readiness."
  },
  {
    phase: "IV",
    indication: "Cancer treated with Immunotherapy",
    therapeuticArea: "Oncology",
    type: "IP / Local",
    role: "SC",
    period: "Aug 2020 – Sep 2021",
    responsibilities: "Monitoring patients during active immunotherapy infusions, drafting IRB approval documents for investigator-initiated studies."
  }
];

export const VENDORS_DATA: Vendor[] = [
  {
    category: "CTMS",
    names: ["Oracle Siebel CTMS", "PHP Clinical", "Bioclinica", "BSI CTMS"]
  },
  {
    category: "EDC Systems",
    names: ["iMedidata", "Inform", "cubeCDMS", "Zelta", "Veeva EDC"]
  },
  {
    category: "IWRS",
    names: ["Signant Health", "Almac IXRS", "Suvoda", "Endpoint", "Calyx IRT"]
  },
  {
    category: "ePRO",
    names: ["Signant Health", "Medavante", "Clario"]
  },
  {
    category: "eTMF",
    names: ["Rosa eTMF", "Veeva Vault", "Trial Interactive"]
  },
  {
    category: "Safety Information Systems",
    names: ["SIP (Shared Investigator Platform)", "Investigator Space"]
  },
  {
    category: "Central Labs",
    names: ["Labcorp", "Icon", "Medpace", "Precision for Medicine", "PPD"]
  },
  {
    category: "Image Analysis",
    names: ["Bioclinica", "Invicro", "Median", "Calyx"]
  },
  {
    category: "Cardiac Safety",
    names: ["Clario ERT"]
  }
];

export const TRAININGS_DATA: TrainingCourse[] = [
  {
    id: 1,
    organization: "KCDA",
    courseName: "Continuing Course for Clinical Research Associate",
    date: "26 Jun 2025"
  },
  {
    id: 2,
    organization: "KONCET",
    courseName: "Continuing Course for Good Clinical Practice Training",
    date: "04 Dec 2024"
  },
  {
    id: 3,
    organization: "KONCET",
    courseName: "Continuing Course for Clinical Research Associate",
    date: "04 Dec 2024"
  },
  {
    id: 4,
    organization: "IQVIA",
    courseName: "MFDS Required Training (Korea Ministry of Food & Drug Safety)",
    date: "01 Jan 2023 ~ 01 Mar 2023"
  },
  {
    id: 5,
    organization: "IQVIA",
    courseName: "MFDS Required Training (Compliance & Audits)",
    date: "01 Jan 2022 ~ 31 Dec 2022"
  },
  {
    id: 6,
    organization: "IQVIA",
    courseName: "MFDS Required Annual Training",
    date: "27 Sep 2021 ~ 31 Dec 2021"
  },
  {
    id: 7,
    organization: "KCSG (Korean Cancer Study Group)",
    courseName: "1st Oncology Academy [Day 2]",
    date: "17 Jun 2021"
  },
  {
    id: 8,
    organization: "KCSG (Korean Cancer Study Group)",
    courseName: "1st Oncology Academy [Day 1]",
    date: "12 Jun 2021"
  },
  {
    id: 9,
    organization: "KCSG (Korean Cancer Study Group)",
    courseName: "39th Clinical Trial Education Workshop [Basic]",
    date: "06 Feb 2021"
  },
  {
    id: 10,
    organization: "KONCET",
    courseName: "2nd Primary Course for Clinical Research Coordinator",
    date: "01 and 02 Dec 2020"
  },
  {
    id: 11,
    organization: "KONCET",
    courseName: "Oncology Drug Development",
    date: "12 Nov 2020"
  },
  {
    id: 12,
    organization: "KONCET",
    courseName: "Biostatistics in Clinical Trial",
    date: "11 Aug 2020"
  },
  {
    id: 13,
    organization: "KONCET",
    courseName: "Clinical Research Coordinator (Includes KGCP Guidelines)",
    date: "28 Jul 2020"
  },
  {
    id: 14,
    organization: "KONECT",
    courseName: "Clinical Research Associate Advanced - Online Course",
    date: "16 Jan 2020 ~ 17 Jan 2020"
  },
  {
    id: 15,
    organization: "KONCET",
    courseName: "6th Primary Course for Clinical Research Associate",
    date: "03 Dec 2019 ~ 06 Dec 2019"
  },
  {
    id: 16,
    organization: "KONCET",
    courseName: "Pfizer R&D University 13th Intensive Training Project",
    date: "16 Nov 2019"
  },
  {
    id: 17,
    organization: "KONECT",
    courseName: "4th Introductory Course for Clinical Research Associate",
    date: "13 Aug 2019"
  }
];
