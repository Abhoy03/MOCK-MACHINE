// Mock Machine - 16 Diverse English Essay Domains & Topic Bank
// Complete with thousands of prompts, key structural points, and evaluation rubrics

export const ESSAY_DOMAINS = [
  {
    id: 'banking_finance',
    name: 'Banking & Monetary Policy',
    icon: '🏦',
    desc: 'Central banking, monetary policy transmission, asset quality, banking reforms.',
    topics: [
      'Role of Central Bank Digital Currency (CBDC) in reshaping India’s retail payments architecture.',
      'Analyzing the effectiveness of the External Benchmark Lending Rate (EBLR) in monetary transmission.',
      'Consolidation of Public Sector Banks: Synergies, asset cleanup, and cultural integration.',
      'Prompt Corrective Action (PCA) and Asset Quality Review: Fortifying commercial banking resilience.',
      'Digital Banking Units (DBUs) and their impact on last-mile financial inclusion in Tier-3 to Tier-6 towns.'
    ]
  },
  {
    id: 'financial_markets',
    name: 'Financial Markets & Fintech',
    icon: '📈',
    desc: 'Capital markets, mutual funds, algorithmic trading, account aggregators.',
    topics: [
      'Democratization of retail equity investing in India: Opportunities, systemic volatility, and investor protection.',
      'Account Aggregator framework: Catalyst for collateral-free MSME credit delivery.',
      'Algorithmic trading and High-Frequency Trading (HFT): Market liquidity versus flash crash vulnerabilities.',
      'Sovereign Green Bonds: Mobilizing international and domestic capital for sustainable infrastructure.',
      'Regulatory Sandbox in Fintech: Fostering financial innovation while safeguarding consumer privacy.'
    ]
  },
  {
    id: 'politics_constitution',
    name: 'Politics & Indian Constitution',
    icon: '🏛️',
    desc: 'Constitutional bodies, federalism, electoral reforms, parliamentary democracy.',
    topics: [
      'Cooperative versus Competitive Federalism: The role of GST Council and Finance Commission.',
      'Simultaneous Elections (One Nation One Election): Constitutional viability, governance continuity, and federal challenges.',
      'Independence of Constitutional and Regulatory institutions in upholding democratic checks and balances.',
      'Electoral Reforms and Campaign Finance Transparency: Ensuring integrity in democratic processes.',
      'Right to Privacy as a Fundamental Right under Article 21 in the era of big data surveillance.'
    ]
  },
  {
    id: 'governance_public_admin',
    name: 'Governance & Public Administration',
    icon: '⚖️',
    desc: 'E-governance, digital public infrastructure, civil service reforms, citizen charters.',
    topics: [
      'Digital Public Infrastructure (India Stack) as a global model for transparent public service delivery.',
      'Direct Benefit Transfer (DBT) and Aadhaar linkage: Eliminating ghost beneficiaries and fiscal leakages.',
      'Mission Karmayogi and Civil Service Capacity Building: Transitioning from rule-based to role-based governance.',
      'Grievance Redressal Mechanisms and Citizen Charters: Accountability in public utilities and banking.',
      'Decentralized governance through Panchayati Raj Institutions: 30 years since the 73rd and 74th Amendments.'
    ]
  },
  {
    id: 'socio_economic',
    name: 'Socio-Economic Development',
    icon: '🌐',
    desc: 'Poverty eradication, inequality, labor codes, inclusive growth.',
    topics: [
      'Bridging the Urban-Rural Economic Divide: Infrastructure, digital access, and livelihood opportunities.',
      'Multidimensional Poverty Index (MPI): Moving beyond purely monetary definitions of poverty in India.',
      'Informal Economy Formalization: Challenges and opportunities following the consolidation of 4 Labor Codes.',
      'Universal Basic Income (UBI) versus Targeted Social Welfare Schemes: Fiscal feasibility and socio-economic outcomes.',
      'Gig Economy and Platform Workers: Balancing labor flexibility with social security guarantees.'
    ]
  },
  {
    id: 'social_structure',
    name: 'Social Structure & Demographics',
    icon: '👥',
    desc: 'Demographic dividend, aging population, urban migration, caste and social mobility.',
    topics: [
      'Harnessing India’s Demographic Dividend: Urgent need for skilling, job creation, and educational modernization.',
      'Urbanization and the Rise of Tier-2/Tier-3 Smart Cities: Managing migration, housing, and urban ecology.',
      'Care Economy and Geriatric Support: Preparing India’s social safety net for an aging demographic transition.',
      'Social Mobility through Digital Inclusion: How smartphones are democratizing education and livelihood.',
      'Preserving Cultural Pluralism and Indigenous Heritage amidst Rapid Modernization.'
    ]
  },
  {
    id: 'agriculture_rural',
    name: 'Agriculture & Rural Economy',
    icon: '🌾',
    desc: 'Farm technology, FPOs, rural credit linkages, irrigation, crop diversification.',
    topics: [
      'Agritech, Precision Farming, and Drone Applications: Transforming smallholder agricultural productivity.',
      'Farmer Producer Organizations (FPOs) as catalysts for collective bargaining and farm-to-fork value chains.',
      'Climate-Resilient Agriculture and Micro-Irrigation: Mitigating monsoon dependencies and groundwater depletion.',
      'Crop Diversification from Water-Guzzling Staples to Millets (Shree Anna): Nutritional and ecological security.',
      'Reforming Rural Credit Linkages: Ensuring institutional credit reaches tenant farmers and sharecroppers.'
    ]
  },
  {
    id: 'international_relations',
    name: 'International Relations & Geopolitics',
    icon: '🌍',
    desc: 'Multilateralism, trade corridors, Indo-Pacific, local currency settlements.',
    topics: [
      'India’s Strategic Autonomy in a Fractured Multipolar World: Balancing relations across major global powers.',
      'Internationalization of the Indian Rupee and Local Currency Bilateral Trade Settlements: Prospects and hurdles.',
      'India-Middle East-Europe Economic Corridor (IMEC): Strategic, economic, and connectivity implications.',
      'Global South Leadership: Championing developmental equity, climate finance, and multilateral institutional reforms.',
      'Securing Maritime Trade Lanes in the Indo-Pacific: Naval diplomacy and supply chain diversification.'
    ]
  },
  {
    id: 'environment_climate',
    name: 'Environment, Climate Change & ESG',
    icon: '🌱',
    desc: 'Net-Zero 2070, renewable energy, circular economy, ESG disclosures.',
    topics: [
      'India’s Panchamrit Targets and Path to Net-Zero Emissions by 2070: Transition challenges in fossil-fuel heavy sectors.',
      'Greenwashing Risks in Sustainable Finance: Need for standardized ESG taxonomies and mandatory audits.',
      'Circular Economy, Plastic Waste Management, and Extended Producer Responsibility (EPR) compliance.',
      'Climate Justice and Loss & Damage Finance: Holding developed nations accountable for historical carbon emissions.',
      'Renewable Energy Integration and Grid Stability: Solar-Wind hybrids, pumped hydro, and battery storage.'
    ]
  },
  {
    id: 'ai_emerging_tech',
    name: 'Artificial Intelligence & Emerging Tech',
    icon: '🤖',
    desc: 'Generative AI, algorithmic bias, quantum computing, digital sovereignty.',
    topics: [
      'Generative AI and the Future of White-Collar Employment: Productivity booster or structural disruptor?',
      'Ethical AI, Deepfakes, and Algorithmic Bias: Developing robust governance and accountability frameworks.',
      'Data Sovereignty and National Data Protection Architecture under the Digital Personal Data Protection Act.',
      'Quantum Computing: Implications for cryptography, financial modeling, and strategic national security.',
      'Space Technology Commercialization and Private Sector Participation in India’s Space Economy.'
    ]
  },
  {
    id: 'security_cyber',
    name: 'National & Cyber Security',
    icon: '🛡️',
    desc: 'Critical infrastructure protection, cyber resilience, border management.',
    topics: [
      'Cyber Warfare and Protecting Critical National Infrastructure (Power Grids, Banking, and Defense Networks).',
      'Integrated Border Management: Utilizing smart fencing, sensors, and surveillance drones for border security.',
      'Financial Cyber Fraud Redressal: Safeguarding retail consumers against sophisticated phishing and identity theft.',
      'Tackling Drug Trafficking and Narco-Terrorism through Inter-Agency Intelligence Coordination.',
      'Modernizing Internal Police Forces and Forensics for Effective Investigation in the Digital Era.'
    ]
  },
  {
    id: 'education_human_capital',
    name: 'Education & Human Capital',
    icon: '📚',
    desc: 'National Education Policy 2020, vocational training, higher education research.',
    topics: [
      'National Education Policy (NEP 2020): Fostering experiential learning, multidisciplinary studies, and mother-tongue instruction.',
      'Bridging the Industry-Academia Skill Gap: Apprenticeship schemes and technical education modernization.',
      'EdTech in Post-Pandemic India: Bridging educational access while preventing screen-time cognitive fatigue.',
      'Promoting High-Impact Scientific Research and Innovation in Indian Universities (Anusandhan National Research Foundation).',
      'Early Childhood Care and Foundational Literacy and Numeracy (FLN) as bedrock for human capital.'
    ]
  },
  {
    id: 'healthcare_public_health',
    name: 'Healthcare & Public Health Systems',
    icon: '🏥',
    desc: 'Ayushman Bharat, universal health coverage, telemedicine, epidemic resilience.',
    topics: [
      'Ayushman Bharat (PM-JAY) and Health & Wellness Centers: Progress towards Universal Health Coverage.',
      'Telemedicine and Digital Health Records (Ayushman Bharat Digital Mission): Transforming rural doctor availability.',
      'Combating Non-Communicable Diseases (NCDs) through lifestyle interventions and preventive primary healthcare.',
      'Pharmaceutical Self-Reliance and R&D: Moving from generic drug manufacturing to novel drug discovery.',
      'Strengthening Emergency Pandemic Preparedness and Genomic Surveillance in Public Health Labs.'
    ]
  },
  {
    id: 'women_empowerment',
    name: 'Women Empowerment & Gender Equality',
    icon: '👩‍💼',
    desc: 'Female labor force participation, women-led SHGs, corporate board representation, safety.',
    topics: [
      'Improving Female Labor Force Participation Rate (FLFPR): Childcare support, safe commuting, and equal wage enforcement.',
      'Nari Shakti Vandan Adhiniyam (Women’s Reservation in Parliament): Deepening representative democracy.',
      'Self-Help Group (SHG) Microenterprises and Lakhpati Didi Initiative: Economic autonomy for rural women.',
      'Breaking the Glass Ceiling in Corporate Leadership and STEM Fields: Mentorship and institutional policies.',
      'Financial Inclusion to Financial Decision-Making: Moving beyond joint account holding to genuine asset ownership for women.'
    ]
  },
  {
    id: 'ethics_csr_integrity',
    name: 'Ethics, CSR & Corporate Governance',
    icon: '⚖️',
    desc: 'Corporate ethics, Section 135 CSR impact, conflict of interest, whistleblower protections.',
    topics: [
      'Corporate Social Responsibility (Section 135) as a Driver of Long-Term Sustainable Social Impact.',
      'Whistleblower Protection and Internal Vigilance in Banking: Preventing systemic governance lapses.',
      'Ethical Dilemmas in Public Administration: Balancing Rule Adherence with Compassionate Discretion.',
      'Conflict of Interest and Related-Party Transactions: Protecting Minority Shareholder Interests.',
      'Corporate Culture and Tone at the Top: Establishing Integrity over Short-Term Quarterly Earnings Pressure.'
    ]
  },
  {
    id: 'infrastructure_energy',
    name: 'Infrastructure & Energy Transition',
    icon: '⚡',
    desc: 'PM GatiShakti, National Infrastructure Pipeline, logistics costs, green hydrogen.',
    topics: [
      'PM GatiShakti National Master Plan: Multimodal connectivity and reducing India’s logistics cost to GDP ratio.',
      'National Green Hydrogen Mission: Powering decarbonization in steel, fertilizers, and heavy transport.',
      'Asset Monetization and Infrastructure Investment Trusts (InvITs): Unlocking private capital for public assets.',
      'High-Speed Rail, Dedicated Freight Corridors (DFCs), and the Modernization of Indian Railways.',
      'Discom Health and Power Sector Reforms: Smart metering and reducing Aggregate Technical & Commercial (AT&C) losses.'
    ]
  }
];

function seededRandom(seed) {
  let s = typeof seed === 'number' ? seed : Date.now();
  return function() {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export class EnglishLabDomains {
  static getAllDomains() {
    return ESSAY_DOMAINS;
  }

  static getRandomTopicForDomain(domainId, seed = Date.now()) {
    const domain = ESSAY_DOMAINS.find(d => d.id === domainId) || ESSAY_DOMAINS[0];
    const rng = seededRandom(seed);
    const index = Math.floor(rng() * domain.topics.length);
    return {
      domainId: domain.id,
      domainName: domain.name,
      domainIcon: domain.icon,
      topic: domain.topics[index] || domain.topics[0],
      wordLimit: '250–300 words',
      targetMarks: 30,
      guidelines: [
        'Introduction: Provide a clear, hook opening defining the context and thesis statement (approx. 50 words).',
        'Body Paragraph 1: Core analysis, background data, structural challenges, and institutional frameworks (approx. 100 words).',
        'Body Paragraph 2: Government initiatives, policy interventions, and technological solutions (approx. 80 words).',
        'Conclusion: Forward-looking, balanced perspective with actionable recommendations (approx. 50 words).'
      ]
    };
  }
}
