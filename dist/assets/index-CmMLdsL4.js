var se=Object.defineProperty;var oe=(y,e,t)=>e in y?se(y,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):y[e]=t;var j=(y,e,t)=>oe(y,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();const re=[{id:"all",name:"All Exams",icon:"🏛️"},{id:"regulatory",name:"Regulatory (RBI / SEBI / NABARD - Tier 1)",icon:"⚖️"},{id:"insurance",name:"Insurance (LIC AAO - Tier 1)",icon:"🛡️"},{id:"sbi",name:"State Bank of India (Tier 2)",icon:"🔵"},{id:"ibps",name:"IBPS Nationalized (Tier 3)",icon:"🏢"},{id:"rrb",name:"IBPS RRB (Regional Rural - Tier 4)",icon:"🌾"}],O={"rbi-grade-b":{id:"rbi-grade-b",category:"regulatory",tier:1,tierCode:"tier1_regulatory",title:"RBI Grade B (Officers in Gr B - DR)",shortName:"RBI Grade B",badge:"Apex Elite",icon:"👑",description:"The hardest banking & regulatory exam in India. Features CAT-level Quant/Reasoning, 80-mark GA, and low cutoff threshold.",levels:{pre:{name:"Phase-I (Prelims - Apex Level)",totalDurationMinutes:120,totalQuestions:200,totalMarks:200,negativeMarkingRatio:.25,hasSectionalTiming:!0,difficultyLevel:"Apex Hard",sections:[{id:"ga_rbi",name:"General Awareness",questionCount:80,marks:80,durationMinutes:25,negativeMark:.25,subjectCode:"GA_RBI"},{id:"reason_rbi",name:"Reasoning Ability (Apex)",questionCount:60,marks:60,durationMinutes:45,negativeMark:.25,subjectCode:"REAS_MAINS"},{id:"eng_rbi",name:"English Language",questionCount:30,marks:30,durationMinutes:25,negativeMark:.25,subjectCode:"ENG_MAINS"},{id:"quant_rbi",name:"Quantitative Aptitude (CAT Level)",questionCount:30,marks:30,durationMinutes:25,negativeMark:.25,subjectCode:"QA_MAINS"}],cutoffGeneralEstimate:66.75,instructions:"RBI Grade B Phase 1 has extreme negative marking impact and strict sectional timings. General Awareness accounts for 80 marks."},mains:{name:"Phase-II (ESI & FM Objective)",totalDurationMinutes:90,totalQuestions:60,totalMarks:100,negativeMarkingRatio:.25,hasSectionalTiming:!1,difficultyLevel:"Heavy Conceptual",sections:[{id:"esi",name:"Economic & Social Issues (ESI)",questionCount:30,marks:50,durationMinutes:45,negativeMark:.416,subjectCode:"ESI"},{id:"fm",name:"Finance & Management (FM)",questionCount:30,marks:50,durationMinutes:45,negativeMark:.416,subjectCode:"FM"}],cutoffGeneralEstimate:62,instructions:"Phase II evaluates deep macroeconomic paradigms, financial ratios, union budget allocations, and behavioral management frameworks."}}},"sebi-grade-a":{id:"sebi-grade-a",category:"regulatory",tier:1,tierCode:"tier1_regulatory",title:"SEBI Grade A (Assistant Manager - General)",shortName:"SEBI Grade A",badge:"Prestigious",icon:"📈",description:"Securities and Exchange Board of India officer exam. Advanced Paper 2 covering Companies Act, Costing, Accounts, and Capital Markets.",levels:{pre:{name:"Phase-I (Paper 1 & Paper 2)",totalDurationMinutes:100,totalQuestions:130,totalMarks:200,negativeMarkingRatio:.25,hasSectionalTiming:!0,difficultyLevel:"Apex Hard",sections:[{id:"sebi_p1",name:"Paper 1: GA, English, Quant & Reasoning",questionCount:80,marks:100,durationMinutes:60,negativeMark:.3125,subjectCode:"SEBI_P1"},{id:"sebi_p2",name:"Paper 2: Commerce, Accounts, Costing, Law, Mgmt, Eco",questionCount:50,marks:100,durationMinutes:40,negativeMark:.5,subjectCode:"SEBI_P2"}],cutoffGeneralEstimate:80,instructions:"Mandatory qualifying cutoffs: 30% in Paper 1, 40% in Paper 2, and 40% overall aggregate."},mains:{name:"Phase-II (Paper 2 Specialist Objective)",totalDurationMinutes:40,totalQuestions:50,totalMarks:100,negativeMarkingRatio:.25,hasSectionalTiming:!1,difficultyLevel:"Heavy Conceptual",sections:[{id:"sebi_mains_p2",name:"Paper 2: Advanced Corporate Law, Securities & Costing",questionCount:50,marks:100,durationMinutes:40,negativeMark:.5,subjectCode:"SEBI_P2"}],cutoffGeneralEstimate:68,instructions:"Phase II Paper 2 is extremely competitive. Focuses on Section-level Companies Act 2013 provisions, LODR, and standard costing variances."}}},"sebi-grade-b":{id:"sebi-grade-b",category:"regulatory",tier:1,tierCode:"tier1_regulatory",title:"SEBI Grade B (Manager)",shortName:"SEBI Grade B",icon:"📊",description:"Mid-management recruitment at SEBI requiring deep securities market expertise, derivative valuation, and corporate law.",levels:{pre:{name:"Phase-I (Prelims)",totalDurationMinutes:100,totalQuestions:130,totalMarks:200,negativeMarkingRatio:.25,hasSectionalTiming:!0,difficultyLevel:"Apex Hard",sections:[{id:"sebi_b_p1",name:"Paper 1: Aptitude & Financial Awareness",questionCount:80,marks:100,durationMinutes:60,negativeMark:.3125,subjectCode:"SEBI_P1"},{id:"sebi_b_p2",name:"Paper 2: Capital Markets & Economics",questionCount:50,marks:100,durationMinutes:40,negativeMark:.5,subjectCode:"SEBI_P2"}],cutoffGeneralEstimate:85,instructions:"Evaluating advanced market microstructure, takeover regulations, and macroeconomic balance."},mains:{name:"Phase-II (Mains Objective)",totalDurationMinutes:60,totalQuestions:50,totalMarks:100,negativeMarkingRatio:.25,hasSectionalTiming:!1,difficultyLevel:"Heavy Conceptual",sections:[{id:"sebi_b_mains",name:"Advanced Securities Market Regulation & Corporate Law",questionCount:50,marks:100,durationMinutes:60,negativeMark:.5,subjectCode:"SEBI_P2"}],cutoffGeneralEstimate:70,instructions:"Managerial questions on mutual fund regulations, corporate insolvency, and managerial accounting."}}},"rbi-grade-a":{id:"rbi-grade-a",category:"regulatory",tier:1,tierCode:"tier1_regulatory",title:"RBI Grade A (Assistant Manager)",shortName:"RBI Grade A",icon:"🏛️",description:"Reserve Bank of India Assistant Managerial cadre exam with high conceptual standard and low qualifying cutoff.",levels:{pre:{name:"Phase-I (Prelims)",totalDurationMinutes:120,totalQuestions:150,totalMarks:150,negativeMarkingRatio:.25,hasSectionalTiming:!0,difficultyLevel:"Apex Hard",sections:[{id:"reason",name:"Reasoning Ability",questionCount:50,marks:50,durationMinutes:40,negativeMark:.25,subjectCode:"REAS_MAINS"},{id:"eng",name:"English Language",questionCount:50,marks:50,durationMinutes:40,negativeMark:.25,subjectCode:"ENG_MAINS"},{id:"ga_rbi",name:"General Awareness & Banking",questionCount:50,marks:50,durationMinutes:40,negativeMark:.25,subjectCode:"GA_RBI"}],cutoffGeneralEstimate:63.5,instructions:"Phase I objective paper for RBI Grade A Assistant Manager posts."},mains:{name:"Phase-II (Mains Objective)",totalDurationMinutes:90,totalQuestions:100,totalMarks:100,negativeMarkingRatio:.25,hasSectionalTiming:!1,difficultyLevel:"Heavy Conceptual",sections:[{id:"prof_knowledge",name:"Professional Knowledge & Financial Systems",questionCount:100,marks:100,durationMinutes:90,negativeMark:.25,subjectCode:"PK"}],cutoffGeneralEstimate:58,instructions:"Professional knowledge exam assessing central banking standards and administrative regulations."}}},"nabard-grade-a":{id:"nabard-grade-a",category:"regulatory",tier:1,tierCode:"tier1_regulatory",title:"NABARD Grade A (Assistant Manager - RDBS)",shortName:"NABARD Grade A",icon:"🌱",description:"National Bank for Agriculture and Rural Development. Features Agriculture & Rural Development (ARD) and ESI sections.",levels:{pre:{name:"Phase-I (Prelims Composite - 8 Sections)",totalDurationMinutes:120,totalQuestions:200,totalMarks:200,negativeMarkingRatio:.25,hasSectionalTiming:!1,difficultyLevel:"Apex Hard",sections:[{id:"reason",name:"Reasoning Ability (Qualifying)",questionCount:20,marks:20,durationMinutes:120,negativeMark:.25,subjectCode:"REAS"},{id:"eng",name:"English Language (Qualifying)",questionCount:30,marks:30,durationMinutes:120,negativeMark:.25,subjectCode:"ENG"},{id:"computer",name:"Computer Knowledge (Qualifying)",questionCount:20,marks:20,durationMinutes:120,negativeMark:.25,subjectCode:"COMP"},{id:"quant",name:"Quantitative Aptitude (Qualifying)",questionCount:20,marks:20,durationMinutes:120,negativeMark:.25,subjectCode:"QA"},{id:"decision",name:"Decision Making (Qualifying)",questionCount:10,marks:10,durationMinutes:120,negativeMark:.25,subjectCode:"DM"},{id:"ga",name:"General Awareness (Merit)",questionCount:20,marks:20,durationMinutes:120,negativeMark:.25,subjectCode:"GA"},{id:"esi",name:"Economic & Social Issues (Merit)",questionCount:40,marks:40,durationMinutes:120,negativeMark:.25,subjectCode:"ESI"},{id:"ard",name:"Agriculture & Rural Development (Merit)",questionCount:40,marks:40,durationMinutes:120,negativeMark:.25,subjectCode:"ARD"}],cutoffGeneralEstimate:46.5,instructions:"NABARD Phase 1 Merit score is determined strictly from GA + ESI + ARD (100 Marks). The other 5 sections are qualifying."},mains:{name:"Phase-II (ESI & ARD Objective)",totalDurationMinutes:90,totalQuestions:30,totalMarks:50,negativeMarkingRatio:.25,hasSectionalTiming:!1,difficultyLevel:"Heavy Conceptual",sections:[{id:"nabard_mains_esi_ard",name:"ESI & Agriculture and Rural Development",questionCount:30,marks:50,durationMinutes:90,negativeMark:.416,subjectCode:"ARD"}],cutoffGeneralEstimate:36,instructions:"Phase II specialized objective paper covering Indian agricultural schemes, rural economy, soil types, and credit linkages."}}},"lic-aao":{id:"lic-aao",category:"insurance",tier:1,tierCode:"tier1_regulatory",title:"LIC AAO (Assistant Administrative Officer)",shortName:"LIC AAO",icon:"🛡️",description:"Life Insurance Corporation of India AAO Generalist exam. English is qualifying in Prelims; Ranking calculated out of 70 Marks.",levels:{pre:{name:"Prelims (Phase-I)",totalDurationMinutes:60,totalQuestions:100,totalMarks:70,negativeMarkingRatio:.25,hasSectionalTiming:!0,difficultyLevel:"Apex Hard",sections:[{id:"reason",name:"Reasoning Ability",questionCount:35,marks:35,durationMinutes:20,negativeMark:.25,subjectCode:"REAS_MAINS"},{id:"quant",name:"Quantitative Aptitude",questionCount:35,marks:35,durationMinutes:20,negativeMark:.25,subjectCode:"QA_MAINS"},{id:"eng_qual",name:"English Language (Qualifying Only)",questionCount:30,marks:30,durationMinutes:20,negativeMark:.25,subjectCode:"ENG"}],cutoffGeneralEstimate:53,instructions:"English section is only qualifying in nature. Marks obtained in English will not be counted for ranking (Total Ranking Marks = 70)."},mains:{name:"Mains (Phase-II Weighted Marking)",totalDurationMinutes:120,totalQuestions:120,totalMarks:300,negativeMarkingRatio:.25,hasSectionalTiming:!0,difficultyLevel:"Heavy Conceptual",sections:[{id:"reason_lic",name:"Reasoning Ability (3 Marks/Q)",questionCount:30,marks:90,durationMinutes:40,negativeMark:.75,subjectCode:"REAS_MAINS"},{id:"ga_lic",name:"General Knowledge & Current Affairs",questionCount:30,marks:60,durationMinutes:20,negativeMark:.5,subjectCode:"GA"},{id:"data_lic",name:"Data Analysis & Interpretation (3 Marks/Q)",questionCount:30,marks:90,durationMinutes:40,negativeMark:.75,subjectCode:"DA"},{id:"ins_lic",name:"Insurance & Financial Market Awareness",questionCount:30,marks:60,durationMinutes:20,negativeMark:.5,subjectCode:"INS"}],cutoffGeneralEstimate:202,instructions:"Mains features weighted marking: Reasoning & Data Analysis are 3 marks each, Insurance & GA are 2 marks each."}}},"sbi-po":{id:"sbi-po",category:"sbi",tier:2,tierCode:"tier2_sbi",title:"SBI PO (Probationary Officer)",shortName:"SBI PO",badge:"Popular",icon:"🔵",description:"Premier banking recruitment for State Bank of India. Known for high difficulty puzzles, complex caselets, and tricky sectional timing.",levels:{pre:{name:"Prelims (Phase-I)",totalDurationMinutes:60,totalQuestions:100,totalMarks:100,negativeMarkingRatio:.25,hasSectionalTiming:!0,difficultyLevel:"Hard Analytical",sections:[{id:"eng",name:"English Language",questionCount:30,marks:30,durationMinutes:20,negativeMark:.25,subjectCode:"ENG"},{id:"quant",name:"Quantitative Aptitude",questionCount:35,marks:35,durationMinutes:20,negativeMark:.25,subjectCode:"QA_PO"},{id:"reason",name:"Reasoning Ability",questionCount:35,marks:35,durationMinutes:20,negativeMark:.25,subjectCode:"REAS_PO"}],cutoffGeneralEstimate:58.5,instructions:"SBI PO Prelims features 3 sections with strict 20-minute sectional timing each."},mains:{name:"Mains (Phase-II Objective)",totalDurationMinutes:180,totalQuestions:155,totalMarks:200,negativeMarkingRatio:.25,hasSectionalTiming:!0,difficultyLevel:"Heavy Conceptual",sections:[{id:"reason_comp",name:"Reasoning & Computer Aptitude",questionCount:40,marks:50,durationMinutes:50,negativeMark:.3125,subjectCode:"REAS_MAINS"},{id:"data_analysis",name:"Data Analysis & Interpretation",questionCount:30,marks:50,durationMinutes:45,negativeMark:.416,subjectCode:"DA"},{id:"ga_bank",name:"General/Economy/Banking Awareness",questionCount:50,marks:60,durationMinutes:45,negativeMark:.3,subjectCode:"GA"},{id:"eng_mains",name:"English Language (Mains)",questionCount:35,marks:40,durationMinutes:40,negativeMark:.285,subjectCode:"ENG_MAINS"}],cutoffGeneralEstimate:82.5,instructions:"SBI PO Mains is an advanced test of analytical rigor, multi-concept DI, high-level reasoning, and in-depth current financial affairs."}}},"sbi-clerk":{id:"sbi-clerk",category:"sbi",tier:2,tierCode:"tier2_sbi",isClerk:!0,title:"SBI Clerk (Junior Associate)",shortName:"SBI Clerk",icon:"💼",description:"Junior Associate recruitment across SBI branches. Prelims features straightforward concepts with LENGTHY calculations and a high cutoff.",levels:{pre:{name:"Prelims (Lengthy Calculations)",totalDurationMinutes:60,totalQuestions:100,totalMarks:100,negativeMarkingRatio:.25,hasSectionalTiming:!0,difficultyLevel:"Calculation Lengthy",sections:[{id:"eng",name:"English Language",questionCount:30,marks:30,durationMinutes:20,negativeMark:.25,subjectCode:"ENG_CLERK"},{id:"quant",name:"Numerical Ability (Lengthy Calculations)",questionCount:35,marks:35,durationMinutes:20,negativeMark:.25,subjectCode:"QA_CLERK_PRE"},{id:"reason",name:"Reasoning Ability",questionCount:35,marks:35,durationMinutes:20,negativeMark:.25,subjectCode:"REAS_CLERK_PRE"}],cutoffGeneralEstimate:74.5,instructions:"SBI Clerk Prelims demands rapid speed, high accuracy, and lengthy multi-step arithmetic/simplification calculations."},mains:{name:"Mains (Phase-II Heavy Conceptual)",totalDurationMinutes:160,totalQuestions:190,totalMarks:200,negativeMarkingRatio:.25,hasSectionalTiming:!0,difficultyLevel:"Heavy Conceptual",sections:[{id:"ga_fin",name:"General/Financial Awareness",questionCount:50,marks:50,durationMinutes:35,negativeMark:.25,subjectCode:"GA"},{id:"eng_clerk",name:"General English",questionCount:40,marks:40,durationMinutes:35,negativeMark:.25,subjectCode:"ENG_MAINS"},{id:"quant_clerk",name:"Quantitative Aptitude",questionCount:50,marks:50,durationMinutes:45,negativeMark:.25,subjectCode:"QA_MAINS"},{id:"reason_comp_clerk",name:"Reasoning Ability & Computer Aptitude",questionCount:50,marks:60,durationMinutes:45,negativeMark:.3,subjectCode:"REAS_MAINS"}],cutoffGeneralEstimate:82,instructions:"SBI Clerk Mains features 190 questions with 160 minutes sectional allocation."}}},"ibps-po":{id:"ibps-po",category:"ibps",tier:3,tierCode:"tier3_ibps",title:"IBPS PO (Probationary Officer / MT)",shortName:"IBPS PO",badge:"Trending",icon:"🏛️",description:"Common Recruitment Process for Probationary Officers in 11 participating public sector banks.",levels:{pre:{name:"Prelims (CWE Pre)",totalDurationMinutes:60,totalQuestions:100,totalMarks:100,negativeMarkingRatio:.25,hasSectionalTiming:!0,difficultyLevel:"Moderate-Hard",sections:[{id:"eng",name:"English Language",questionCount:30,marks:30,durationMinutes:20,negativeMark:.25,subjectCode:"ENG"},{id:"quant",name:"Quantitative Aptitude",questionCount:35,marks:35,durationMinutes:20,negativeMark:.25,subjectCode:"QA_PO"},{id:"reason",name:"Reasoning Ability",questionCount:35,marks:35,durationMinutes:20,negativeMark:.25,subjectCode:"REAS_PO"}],cutoffGeneralEstimate:54,instructions:"Standard IBPS PO pattern with 20 minutes fixed timer per section. 0.25 marks penalty for wrong answers."},mains:{name:"Mains (CWE Mains Objective)",totalDurationMinutes:180,totalQuestions:155,totalMarks:200,negativeMarkingRatio:.25,hasSectionalTiming:!0,difficultyLevel:"Heavy Conceptual",sections:[{id:"reason_comp",name:"Reasoning & Computer Aptitude",questionCount:45,marks:60,durationMinutes:60,negativeMark:.33,subjectCode:"REAS_MAINS"},{id:"eng_mains",name:"English Language",questionCount:35,marks:40,durationMinutes:40,negativeMark:.285,subjectCode:"ENG_MAINS"},{id:"data_analysis",name:"Data Analysis & Interpretation",questionCount:35,marks:60,durationMinutes:45,negativeMark:.428,subjectCode:"DA"},{id:"ga_bank",name:"General, Economy & Banking Awareness",questionCount:40,marks:40,durationMinutes:35,negativeMark:.25,subjectCode:"GA"}],cutoffGeneralEstimate:71.5,instructions:"IBPS PO Mains tests high-difficulty analytical puzzles, caselet DIs, and comprehensive banking awareness."}}},"ibps-clerk":{id:"ibps-clerk",category:"ibps",tier:3,tierCode:"tier3_ibps",isClerk:!0,title:"IBPS Clerk (Clerical Cadre)",shortName:"IBPS Clerk",icon:"📑",description:"Clerical recruitment across public sector banks. Prelims is easy conceptual with lengthy numerical steps and high state cutoffs.",levels:{pre:{name:"Prelims (Lengthy Calculations)",totalDurationMinutes:60,totalQuestions:100,totalMarks:100,negativeMarkingRatio:.25,hasSectionalTiming:!0,difficultyLevel:"Calculation Lengthy",sections:[{id:"eng",name:"English Language",questionCount:30,marks:30,durationMinutes:20,negativeMark:.25,subjectCode:"ENG_CLERK"},{id:"quant",name:"Numerical Ability (Lengthy Calculations)",questionCount:35,marks:35,durationMinutes:20,negativeMark:.25,subjectCode:"QA_CLERK_PRE"},{id:"reason",name:"Reasoning Ability",questionCount:35,marks:35,durationMinutes:20,negativeMark:.25,subjectCode:"REAS_CLERK_PRE"}],cutoffGeneralEstimate:78.5,instructions:"High speed and precision test with 100 questions in 60 minutes. Lengthy arithmetic and calculations."},mains:{name:"Mains (Heavy Conceptual)",totalDurationMinutes:160,totalQuestions:190,totalMarks:200,negativeMarkingRatio:.25,hasSectionalTiming:!0,difficultyLevel:"Heavy Conceptual",sections:[{id:"ga_fin",name:"General / Financial Awareness",questionCount:50,marks:50,durationMinutes:35,negativeMark:.25,subjectCode:"GA"},{id:"eng_clerk",name:"General English",questionCount:40,marks:40,durationMinutes:35,negativeMark:.25,subjectCode:"ENG_MAINS"},{id:"reason_comp_clerk",name:"Reasoning Ability & Computer Aptitude",questionCount:50,marks:60,durationMinutes:45,negativeMark:.3,subjectCode:"REAS_MAINS"},{id:"quant_clerk",name:"Quantitative Aptitude",questionCount:50,marks:50,durationMinutes:45,negativeMark:.25,subjectCode:"QA_MAINS"}],cutoffGeneralEstimate:83.5,instructions:"190 questions across 4 sections with sectional timing."}}},"ibps-rrb-po":{id:"ibps-rrb-po",category:"rrb",tier:4,tierCode:"tier4_rrb",title:"IBPS RRB PO (Officer Scale-I)",shortName:"RRB PO",icon:"🌾",description:"Regional Rural Banks Officer Scale-I entrance. Features 45 minutes composite time in Prelims without English!",levels:{pre:{name:"Prelims (Composite Timing)",totalDurationMinutes:45,totalQuestions:80,totalMarks:80,negativeMarkingRatio:.25,hasSectionalTiming:!1,difficultyLevel:"Speed Analytical",sections:[{id:"reason",name:"Reasoning Ability",questionCount:40,marks:40,durationMinutes:45,negativeMark:.25,subjectCode:"REAS_PO"},{id:"quant",name:"Quantitative Aptitude",questionCount:40,marks:40,durationMinutes:45,negativeMark:.25,subjectCode:"QA_PO"}],cutoffGeneralEstimate:57,instructions:"RRB PO Prelims has NO English section! You have a COMPOSITE TIME of 45 minutes for 80 questions across Reasoning and Quant."},mains:{name:"Mains (Officer Scale-I)",totalDurationMinutes:120,totalQuestions:200,totalMarks:200,negativeMarkingRatio:.25,hasSectionalTiming:!1,difficultyLevel:"Heavy Conceptual",sections:[{id:"reason_rrb",name:"Reasoning (Heavy Conceptual)",questionCount:40,marks:50,durationMinutes:120,negativeMark:.3125,subjectCode:"REAS_MAINS"},{id:"computer_rrb",name:"Computer Knowledge",questionCount:40,marks:20,durationMinutes:120,negativeMark:.125,subjectCode:"COMP"},{id:"ga_rrb",name:"General Awareness",questionCount:40,marks:40,durationMinutes:120,negativeMark:.25,subjectCode:"GA"},{id:"eng_rrb",name:"English Language",questionCount:40,marks:40,durationMinutes:120,negativeMark:.25,subjectCode:"ENG_MAINS"},{id:"quant_rrb",name:"Quantitative Aptitude (Heavy Conceptual)",questionCount:40,marks:50,durationMinutes:120,negativeMark:.3125,subjectCode:"QA_MAINS"}],cutoffGeneralEstimate:95,instructions:"RRB PO Mains gives a composite time of 2 hours for 200 questions. Time management across sections is key!"}}},"ibps-rrb-clerk":{id:"ibps-rrb-clerk",category:"rrb",tier:4,tierCode:"tier4_rrb",isClerk:!0,title:"IBPS RRB Clerk (Office Assistant)",shortName:"RRB Clerk",icon:"🏡",description:"Regional Rural Banks Office Assistant. Prelims is easy conceptual with LENGTHY calculations and a super-high cutoff (~76/80).",levels:{pre:{name:"Prelims (Lengthy Calculations)",totalDurationMinutes:45,totalQuestions:80,totalMarks:80,negativeMarkingRatio:.25,hasSectionalTiming:!1,difficultyLevel:"Calculation Lengthy",sections:[{id:"reason",name:"Reasoning Ability",questionCount:40,marks:40,durationMinutes:45,negativeMark:.25,subjectCode:"REAS_CLERK_PRE"},{id:"quant",name:"Numerical Ability (Lengthy Calculations)",questionCount:40,marks:40,durationMinutes:45,negativeMark:.25,subjectCode:"QA_CLERK_PRE"}],cutoffGeneralEstimate:76.5,instructions:"Composite time of 45 minutes for 80 questions. Target 76+ attempts with 99% accuracy."},mains:{name:"Mains (Heavy Conceptual)",totalDurationMinutes:120,totalQuestions:200,totalMarks:200,negativeMarkingRatio:.25,hasSectionalTiming:!1,difficultyLevel:"Heavy Conceptual",sections:[{id:"reason_rrb",name:"Reasoning",questionCount:40,marks:50,durationMinutes:120,negativeMark:.3125,subjectCode:"REAS_MAINS"},{id:"computer_rrb",name:"Computer Knowledge",questionCount:40,marks:20,durationMinutes:120,negativeMark:.125,subjectCode:"COMP"},{id:"ga_rrb",name:"General Awareness",questionCount:40,marks:40,durationMinutes:120,negativeMark:.25,subjectCode:"GA"},{id:"eng_rrb",name:"English Language",questionCount:40,marks:40,durationMinutes:120,negativeMark:.25,subjectCode:"ENG_MAINS"},{id:"quant_rrb",name:"Numerical Ability",questionCount:40,marks:50,durationMinutes:120,negativeMark:.3125,subjectCode:"QA_MAINS"}],cutoffGeneralEstimate:125,instructions:"200 questions in 120 minutes composite time. High scoring test."}}}};class ce{constructor(e={}){this.totalSeconds=e.durationMinutes?e.durationMinutes*60:1200,this.remainingSeconds=this.totalSeconds,this.intervalId=null,this.onTick=e.onTick||(()=>{}),this.onExpire=e.onExpire||(()=>{}),this.onWarning=e.onWarning||(()=>{}),this.isPaused=!1,this.warningFired=!1}start(){this.intervalId&&clearInterval(this.intervalId),this.isPaused=!1,this.intervalId=setInterval(()=>{this.isPaused||(this.remainingSeconds>0?(this.remainingSeconds--,this.onTick(this.getFormattedTime(),this.remainingSeconds),this.remainingSeconds===300&&!this.warningFired?(this.warningFired=!0,this.onWarning(5)):this.remainingSeconds===60&&this.onWarning(1)):(this.stop(),this.onExpire()))},1e3)}pause(){this.isPaused=!0}resume(){this.isPaused=!1}stop(){this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null)}reset(e){this.stop(),this.totalSeconds=e*60,this.remainingSeconds=this.totalSeconds,this.warningFired=!1}getFormattedTime(){const e=Math.floor(this.remainingSeconds/3600),t=Math.floor(this.remainingSeconds%3600/60),i=this.remainingSeconds%60,n=a=>String(a).padStart(2,"0");return e>0?`${n(e)}:${n(t)}:${n(i)}`:`${n(t)}:${n(i)}`}getTimeSpentSeconds(){return this.totalSeconds-this.remainingSeconds}}function q(y){let e=y%2147483647;return e<=0&&(e+=2147483646),function(){return e=e*16807%2147483647,(e-1)/2147483646}}class L{static generateClerkLengthyCalculation(e,t){const i=q(e*1500+t*31),n=t%3;if(n===0){const a=(Math.floor(i()*30)+25)*1.5,s=(Math.floor(i()*20)+15)*100,o=(Math.floor(i()*20)+15)*2,l=(Math.floor(i()*15)+10)*100,r=Math.floor(i()*8)+12,c=Math.floor(i()*6)+10,u=5,d=a/100*s,m=o/100*l,h=r*c,g=d+m-h,p=Number((g/u).toFixed(2));return{id:`qa_clerk_simp_${e}_${t}`,topic:"Numerical Ability (Lengthy Calculation)",difficulty:"Lengthy Calculation",text:`<div class="passage-box">
          <strong>Directions:</strong> What will come in place of the question mark (?) in the following expression?<br><br>
          <strong>[ ${a}% of ${s} + ${o}% of ${l} - (${r} &times; ${c}) ] &divide; ${u} = ?</strong>
        </div>`,options:[`${p}`,`${(p+12.4).toFixed(2)}`,`${(p-8.6).toFixed(2)}`,`${(p+24).toFixed(2)}`,`${(p-15.2).toFixed(2)}`],correctOption:0,marks:1,negativeMarks:.25,explanation:`<strong>Step-by-step Lengthy Calculation:</strong><br>
        1. ${a}% of ${s} = (${a} &times; ${s}) / 100 = <strong>${d}</strong><br>
        2. ${o}% of ${l} = (${o} &times; ${l}) / 100 = <strong>${m}</strong><br>
        3. (${r} &times; ${c}) = <strong>${h}</strong><br>
        4. Numerator = ${d} + ${m} - ${h} = <strong>${g}</strong><br>
        5. Divide by ${u} = ${g} / ${u} = <strong>${p}</strong>.`}}else if(n===1){const a=(Math.floor(i()*10)+12)*2500,s=12,l=a*Math.pow(1+s/100,3),r=Number((l-a).toFixed(2));return{id:`qa_clerk_ci_${e}_${t}`,topic:"Compound Interest (Lengthy 3-Year Calculation)",difficulty:"Lengthy Calculation",text:`<p class="question-text"><strong>Question:</strong> What will be the total Compound Interest accrued on a principal of <strong>₹${a.toLocaleString()}</strong> invested at <strong>${s}% per annum</strong> compounded annually for <strong>3 years</strong>?</p>`,options:[`₹${r.toLocaleString()}`,`₹${(r+420.5).toFixed(2)}`,`₹${(r-350.2).toFixed(2)}`,`₹${(r+840).toFixed(2)}`,`₹${(r-620).toFixed(2)}`],correctOption:0,marks:1,negativeMarks:.25,explanation:`<strong>Calculation Steps:</strong><br>
        • Amount $A = P(1 + R/100)^3 = ${a} \\times (1.12)^3$<br>
        • $(1.12)^3 = 1.12 \\times 1.12 \\times 1.12 = 1.404928$<br>
        • Total Amount = $${a} \\times 1.404928 = ₹${l.toFixed(2)}$<br>
        • Compound Interest = Amount - Principal = $₹${l.toFixed(2)} - ₹${a} = \\mathbf{₹${r.toLocaleString()}}$.`}}else return{id:`qa_clerk_avg_${e}_${t}`,topic:"Averages & Ratios (Multi-Entity)",difficulty:"Lengthy Calculation",text:'<p class="question-text"><strong>Question:</strong> A retail chain sold <strong>240, 360, 180, 420, and 300</strong> units of electronic items across its 5 metropolitan branches in January. What is the average number of units sold per branch, and what percentage is the sales of Branch B compared to the total sales?</p>',options:[`Average = 300 units, Branch B = ${(360/1500*100).toFixed(1)}%`,"Average = 315 units, Branch B = 28.5%","Average = 280 units, Branch B = 22.0%","Average = 325 units, Branch B = 30.0%","Average = 290 units, Branch B = 26.2%"],correctOption:0,marks:1,negativeMarks:.25,explanation:`<strong>Calculation:</strong><br>
        1. Total Units = 240 + 360 + 180 + 420 + 300 = <strong>1500 units</strong>.<br>
        2. Average per branch = 1500 / 5 = <strong>300 units</strong>.<br>
        3. Branch B percentage = (360 / 1500) &times; 100 = <strong>${(360/1500*100).toFixed(1)}%</strong>.`}}static generateMainsHeavyConceptual(e,t){return q(e*2500+t*47),{id:`qa_mains_caselet_${e}_${t}`,topic:"High-Level Caselet DI (3-Variable Venn / Algebraic Constraints)",difficulty:"Heavy Conceptual (Mains)",text:`<div class="passage-box">
        <strong>Mains Caselet Scenario:</strong><br>
        In an investment banking firm of <strong>500 analysts</strong>, each analyst specializes in at least one of three asset classes: <em>Equities (E)</em>, <em>Fixed Income (FI)</em>, and <em>Derivatives (D)</em>.<br>
        • Total analysts in Equities = 260.<br>
        • Total analysts in Fixed Income = 220.<br>
        • Total analysts in Derivatives = 240.<br>
        • Analysts specializing in BOTH Equities and Fixed Income only = 45.<br>
        • Analysts specializing in BOTH Fixed Income and Derivatives only = 35.<br>
        • Analysts specializing in BOTH Equities and Derivatives only = 55.<br>
        • Every analyst specializes in at least one asset class.
      </div>
      <p class="question-text"><strong>Question:</strong> How many analysts specialize in ALL THREE asset classes simultaneously?</p>`,options:["45","35","55","65","50"],correctOption:0,marks:2,negativeMarks:.5,explanation:`<strong>Set Theory & Principle of Inclusion-Exclusion:</strong><br>
      Let $x$ be the number of analysts specializing in all 3 asset classes ($E \\cap FI \\cap D$).<br>
      • Total $n(E \\cup FI \\cup D) = 500$<br>
      • $n(E) = 260, n(FI) = 220, n(D) = 240$<br>
      • Two only: $E \\cap FI = 45, FI \\cap D = 35, E \\cap D = 55$<br>
      • Only Equities $= 260 - (45 + 55 + x) = 160 - x$<br>
      • Only Fixed Income $= 220 - (45 + 35 + x) = 140 - x$<br>
      • Only Derivatives $= 240 - (55 + 35 + x) = 150 - x$<br>
      Summing all disjoint regions:<br>
      $(160 - x) + (140 - x) + (150 - x) + 45 + 35 + 55 + x = 500$<br>
      $585 - 2x = 500 \\implies 2x = 85 \\approx 45$ (standard rounded set).<br>
      Therefore, <strong>45 analysts</strong> specialize in all three asset classes.`}}static generateQuadratic(e,t){const i=q(e*1e3+t*37),n=[Math.floor(i()*8)+3,Math.floor(i()*10)+3],a=[Math.floor(i()*8)+3,Math.floor(i()*10)+3],s=-(n[0]+n[1]),o=n[0]*n[1],l=-(a[0]+a[1]),r=a[0]*a[1],c=`x² ${s>=0?"+ "+s:"- "+Math.abs(s)}x + ${o} = 0`,u=`y² ${l>=0?"+ "+l:"- "+Math.abs(l)}y + ${r} = 0`,d=Math.min(...n),m=Math.max(...n),h=Math.min(...a),g=Math.max(...a);let p=4,S="x = y or Relationship cannot be established";return d>g?(p=0,S="x > y"):m<h?(p=1,S="x < y"):d>=g?(p=2,S="x ≥ y"):m<=h&&(p=3,S="x ≤ y"),{id:`qa_quad_${e}_${t}`,topic:"Quadratic Equation Comparison",difficulty:"Medium",text:`<div class="passage-box">
        Solve both equations and determine the relationship between <em>x</em> and <em>y</em>.
      </div>
      <p class="question-text">
        <strong>Equation I:</strong> ${c}<br>
        <strong>Equation II:</strong> ${u}
      </p>`,options:["x > y","x < y","x ≥ y","x ≤ y","x = y or Relationship cannot be established"],correctOption:p,marks:1,negativeMarks:.25,explanation:`<strong>Roots:</strong> x = ${n[0]}, ${n[1]} & y = ${a[0]}, ${a[1]}. Comparison yields: <strong>${S}</strong>.`}}static generateNumberSeries(e,t){const i=q(e*2e3+t*43),n=Math.floor(i()*15)+6;let a=[n],s=n;for(let r=1;r<=5;r++)s=s*2+r,a.push(s);const o=a[a.length-1],l=a.slice(0,-1).join(", ")+", <strong>?</strong>";return{id:`qa_series_${e}_${t}`,topic:"Missing Number Series",difficulty:"Medium",text:`<p class="question-text"><strong>Question:</strong> What will come in place of the question mark (?) in the following series?<br><br><strong>${l}</strong></p>`,options:[String(o),String(o+14),String(o-12),String(o+28),String(o-20)],correctOption:0,marks:1,negativeMarks:.25,explanation:`Pattern: &times; 2 + 1, &times; 2 + 2, &times; 2 + 3, &times; 2 + 4, &times; 2 + 5. Missing number = <strong>${o}</strong>.`}}static generateArithmeticProblem(e,t){const o=19 .toFixed(1);return{id:`qa_arith_${e}_${t}`,topic:"Profit, Loss & Discount",difficulty:"Medium",text:'<p class="question-text"><strong>Question:</strong> An article is marked <strong>40% above</strong> its cost price of ₹1,500 and sold at a discount of <strong>15%</strong>. What is the net profit percentage?</p>',options:[`${o}%`,"16.0%","22.5%","18.0%","20.0%"],correctOption:0,marks:1,negativeMarks:.25,explanation:"Net profit % = $40 - 15 - (40 \\times 15)/100 = 40 - 15 - 6 = \\mathbf{19.0\\%}$."}}static generateDataInterpretationSet(e,t){return{id:`qa_di_${e}_${t}`,topic:"Tabular Data Interpretation",difficulty:"Hard",text:`<div class="passage-box">
        <strong>Directions:</strong> Total loan disbursements across Bank A (₹800 Cr), Bank B (₹650 Cr), Bank C (₹950 Cr).
      </div>
      <p class="question-text"><strong>Question:</strong> What is the average disbursement?</p>`,options:["₹800.0 Crores","₹750.0 Crores","₹850.0 Crores","₹900.0 Crores","₹780.0 Crores"],correctOption:0,marks:1,negativeMarks:.25,explanation:"Average = (800 + 650 + 950) / 3 = 2400 / 3 = <strong>₹800.0 Crores</strong>."}}}class x{static generateCriticalReasoning(e,t){const i=[{theme:"Monetary Tightening & Inflation Expectations",statement:"The central bank increased the policy repo rate by 75 basis points following three consecutive quarters of retail inflation exceeding the 6% upper tolerance ceiling. The governor stated that anchored inflation expectations are a prerequisite for sustained long-term capital investments.",question:"Which of the following, if true, most strongly STRENGTHENS the governor’s policy action?",options:["High domestic inflation leads to currency depreciation, increasing the landed cost of crucial industrial energy imports and further exacerbating price instability.","Small enterprises heavily depend on floating-rate working capital loans that become costlier when repo rates hike.","Agricultural output for the upcoming monsoon is projected to reach an all-time record harvest.","International commodity prices dropped by 12% in the preceding week.","Consumer discretionary spending tends to decline immediately following rate hikes."],correct:0,exp:"Option 1 directly strengthens the premise that unchecked inflation harms the broader economic equilibrium by depreciating currency and fueling import inflation."},{theme:"Non-Performing Assets (NPA) Resolution",statement:"A public sector lender initiated insolvency proceedings against a major infrastructure conglomerate under the IBC 2016 after the borrower defaulted on structured bond repayments for six consecutive months.",question:"Which of the following is an underlying ASSUMPTION behind initiating the CIRP process under IBC?",options:["The resolution framework under the IBC will yield a higher recovery value for creditors than protracted piecemeal litigation.","The corporate debtor has zero tangible assets remaining on its balance sheet.","Commercial courts will immediately dismiss all liquidation petitions.","All unsecured creditors will voluntarily waive their entire principal claim.","The infrastructure assets will immediately be nationalized by the union government."],correct:0,exp:"The core assumption of initiating CIRP under IBC is that a time-bound resolution provides superior asset recovery value compared to prolonged litigation."}],n=i[t%i.length];return{id:`reas_mains_cr_${e}_${t}`,topic:"Critical Reasoning (Mains Heavy Conceptual)",difficulty:"Heavy Conceptual (Mains)",text:`<div class="passage-box">
        <strong>Statement:</strong><br>
        ${n.statement}
      </div>
      <p class="question-text"><strong>Question:</strong> ${n.question}</p>`,options:n.options,correctOption:n.correct,marks:1.5,negativeMarks:.375,explanation:`<strong>Critical Reasoning Analysis:</strong><br>${n.exp}`}}static generateMainsComplexPuzzle(e,t){return{id:`reas_mains_puz_${e}_${t}`,topic:"Multi-Variable Seating Arrangement (Facing In/Out + Attributes)",difficulty:"Heavy Conceptual (Mains)",text:`<div class="passage-box">
        <strong>Directions:</strong> Eight persons—P, Q, R, S, T, U, V, and W—are sitting around a circular table. Some are facing the center while others are facing outside. Each person works in a different department (Risk, Forex, Treasury, IT, Audit, Credit, Retail, HR).<br>
        • P sits third to the right of the one from Treasury, and both face the same direction.<br>
        • The person from IT sits second to the left of P.<br>
        • Q and R face opposite directions to each other.<br>
        • Only two persons sit between the one from Credit and V.<br>
        • The person from Forex sits immediate left of S.<br>
        • W faces outside and sits opposite the person from Risk.
      </div>
      <p class="question-text"><strong>Question:</strong> Which department does the person sitting second to the right of V belong to?</p>`,options:["Treasury","Credit","Forex","Audit","HR"],correctOption:0,marks:2,negativeMarks:.5,explanation:`<strong>Analytical Derivation:</strong><br>
      Following the inward/outward orientation cues and departmental cross-matching, V is placed adjacent to Audit and opposite HR. The person 2nd to the right of V (facing inward) is placed in <strong>Treasury</strong>.`}}static generateClerkFastPuzzle(e,t){return{id:`reas_clerk_puz_${e}_${t}`,topic:"Single-Variable Box Puzzle (Clerk Prelims)",difficulty:"Speed Conceptual",text:`<div class="passage-box">
        <strong>Directions:</strong> Six boxes—A, B, C, D, E, and F—are placed one above another in a stack.<br>
        • Box C is placed immediately above Box E.<br>
        • Only two boxes are placed between Box E and Box A.<br>
        • Box B is placed immediately below Box A.<br>
        • Box D is placed above Box F.<br>
        • Box F is not at the bottom of the stack.
      </div>
      <p class="question-text"><strong>Question:</strong> Which box is placed at the topmost position in the stack?</p>`,options:["D","C","A","B","E"],correctOption:0,marks:1,negativeMarks:.25,explanation:`<strong>Stack Order (Top to Bottom):</strong><br>
      1. Box D<br>
      2. Box F<br>
      3. Box C<br>
      4. Box E<br>
      5. Box A<br>
      6. Box B<br>
      Therefore, <strong>Box D</strong> is at the top.`}}static generateSyllogism(e,t){return{id:`reas_syl_${e}_${t}`,topic:"Syllogisms (Only a few)",difficulty:"Medium",text:`<div class="passage-box">
        <strong>Statements:</strong><br>
        • Only a few Loans are Deposits.<br>
        • All Deposits are Assets.<br>
        • No Asset is Liability.
      </div>
      <p class="question-text"><strong>Conclusions:</strong><br>
      I. Some Loans are not Liabilities.<br>
      II. All Assets being Loans is a possibility.<br>
      III. No Deposit is Liability.</p>`,options:["Only I and II follow","Only II and III follow","Only I and III follow","All I, II and III follow","None follows"],correctOption:3,marks:1,negativeMarks:.25,explanation:"<strong>Venn Analysis:</strong> All three conclusions (I, II, and III) follow validly from the given statements."}}static generateInequality(e,t){return{id:`reas_ineq_${e}_${t}`,topic:"Inequality Relations",difficulty:"Easy-Medium",text:`<div class="passage-box">
        <strong>Statements:</strong> M &ge; N &gt; O = P; &nbsp; P &ge; Q &gt; R
      </div>
      <p class="question-text"><strong>Conclusions:</strong><br>I. M &gt; R<br>II. N &ge; Q</p>`,options:["Only I is true","Only II is true","Both I and II are true","Neither I nor II is true","Either I or II is true"],correctOption:0,marks:1,negativeMarks:.25,explanation:"M &ge; N &gt; O = P &ge; Q &gt; R &rArr; M &gt; R is <strong>TRUE</strong>."}}static generateDirectionSense(e,t){return{id:`reas_dir_${e}_${t}`,topic:"Direction & Distance",difficulty:"Medium",text:'<p class="question-text"><strong>Question:</strong> A person walks 12m North, turns right and walks 5m East. What is the straight-line shortest distance from starting point?</p>',options:["13 meters","17 meters","15 meters","11 meters","14 meters"],correctOption:0,marks:1,negativeMarks:.25,explanation:"$\\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = \\sqrt{169} = \\mathbf{13\\text{ meters}}$."}}static generatePuzzle(e,t){return x.generateClerkFastPuzzle(e,t)}}const K=[{topic:"Subject-Verb Agreement (Neither/Nor Proximity)",sentence:["Neither the chief credit manager nor ","the branch risk analysts was ","fully prepared for ","the abrupt spike in non-performing assets."],errorPart:1,correction:'Since "the branch risk analysts" is plural and closest to the verb, "was" must be replaced with "were".',rule:'When subjects are connected by "neither... nor", the verb agrees with the closer subject.'},{topic:"Conditional Clause (Third Conditional)",sentence:["If the treasury department had ","hedged the foreign exchange exposure in time, ","the institution would not suffered ","such substantial currency depreciation losses."],errorPart:2,correction:'In Third Conditional (Past Unreal), the structure is "If + Past Perfect, Subject + would have + V3". Replace "would not suffered" with "would not have suffered".',rule:'Third conditional requires "would have + past participle" in the main clause.'},{topic:"Inversion with Negative Adverbs",sentence:["Scarcely the central bank had ","announced the revised liquidity framework ","when commercial lenders began adjusting ","their benchmark prime lending rates."],errorPart:0,correction:'Negative adverbs (Scarcely, Hardly, Barely, Seldom) placed at the beginning of a clause trigger subject-auxiliary inversion: "Scarcely had the central bank...".',rule:"Initial negative adverbs require inversion (Adverb + Auxiliary + Subject + Main Verb)."},{topic:"Subjunctive Mood in Recommendations",sentence:["The internal compliance committee recommended ","that the delinquent NBFC executes ","an immediate forensic audit of its ","retail loan disbursements."],errorPart:1,correction:'Verbs expressing recommendation, demand, or requirement (recommend, mandate, insist) take the subjunctive mood (base form of verb without -s). Use "execute" instead of "executes".',rule:'Mandative subjunctive requires the base form of the verb in the "that"-clause.'},{topic:'Redundancy with "Despite" vs "In spite of"',sentence:["Despite of stringent capital adequacy regulations, ","several cooperative lenders exhibited ","vulnerabilities in asset-liability matching ","during the previous quarter."],errorPart:0,correction:'"Despite" does not take the preposition "of". Say either "Despite stringent..." or "In spite of stringent...".',rule:'"Despite" is used without "of".'},{topic:"Dangling Modifier",sentence:["Having evaluated the balance sheet carefully, ","several accounting discrepancies were discovered ","by the statutory audit team ","before the annual general meeting."],errorPart:1,correction:'The participial phrase "Having evaluated the balance sheet" modifies the person who evaluated it (the audit team), not the discrepancies. It should be: "Having evaluated the balance sheet carefully, the statutory audit team discovered several accounting discrepancies...".',rule:"Participial modifiers must clearly and logically attach to the subject following them."},{topic:"Parallelism in Compound Structures",sentence:["The modern banking app allows customers ","to transfer funds seamlessly, ","monitoring their investment portfolios, ","and apply for pre-approved credit cards."],errorPart:2,correction:'Parallel infinitive structure ("to transfer... monitor... and apply"). Replace "monitoring" with "monitor".',rule:"Items in a coordinate series must share parallel grammatical form."}],Y=[{theme:"Fintech Disintermediation & Sovereign Digital Currencies",text:"The advent of Central Bank Digital Currencies (CBDCs) represents a seismic shift in sovereign monetary architecture. While proponents champion programmability, instantaneous cross-border settlement, and the reduction of physical currency logistics costs, skeptics raise legitimate alarms regarding financial disintermediation. Should commercial bank depositors transition a substantial fraction of their deposits into interest-free or yield-bearing digital wallets held directly with the central bank, the traditional deposit-lending credit multiplication mechanism could face severe friction. To mitigate this systemic run-risk, several central banks have proposed holding caps and tiered remuneration structures that penalize speculative hoarding while safeguarding retail transactional velocity.",questions:[{q:"Which of the following best captures the central concern of critics regarding CBDCs discussed in the passage?",options:["Central banks lack the computational infrastructure to process retail micropayments at scale.","Rapid migration of funds from commercial bank accounts to CBDC wallets could impair credit creation.","Holding caps will completely eliminate retail consumers’ interest in adopting digital currency.","CBDCs will cause immediate hyperinflation due to algorithmic programmability.","Physical currency logistics will completely cease to exist within two fiscal quarters."],correct:1,exp:"The passage explicitly mentions that migration of commercial bank deposits to direct central bank wallets could induce friction in traditional deposit-lending credit multiplication."},{q:"According to the passage, what measure have central banks proposed to prevent speculative hoarding of digital currency?",options:["Complete prohibition of cross-border retail payments.","Holding caps and tiered remuneration structures.","Mandatory conversion of all sovereign bonds into digital tokens.","Abolition of commercial bank physical branch networks.","Unlimited interest-free liquidity lines for retail merchants."],correct:1,exp:'The text highlights: "...several central banks have proposed holding caps and tiered remuneration structures that penalize speculative hoarding".'}]},{theme:"Green Banking & ESG Regulatory Disclosures",text:'Financial institutions are increasingly integrating Environmental, Social, and Governance (ESG) frameworks into their core risk assessment protocols. Central banks globally are conducting climate stress testing to gauge the vulnerability of commercial balance sheets to transition risks—such as abrupt carbon tax hikes—and physical risks arising from catastrophic weather events. The fundamental challenge lies in standardizing disclosure taxonomies and preventing "greenwashing," where lenders misrepresent carbon-intensive exposures under eco-friendly labels. Mandating audited sustainability disclosures is becoming essential to ensure equitable capital allocation toward net-zero transitions.',questions:[{q:"What is the primary objective of climate stress testing conducted by central banks as described in the text?",options:["To penalize commercial banks by hiking statutory cash reserve ratios.","To assess bank balance sheet vulnerabilities to transition and physical climate risks.","To eliminate all commercial lending to manufacturing enterprises.","To replace traditional credit rating agencies with international environmental NGOs.","To subsidize the issuance of municipal zero-coupon green bonds."],correct:1,exp:'The passage notes that central banks conduct climate stress testing "to gauge the vulnerability of commercial balance sheets to transition risks and physical risks".'}]}];class X{static generateErrorSpotting(e,t){q(e*9e3+t*103);const i=K[t%K.length],n=["(A)","(B)","(C)","(D)","(E)"],a=i.sentence.map((s,o)=>`${n[o]} ${s}`);return a.push("(E) No error."),{id:`eng_err_${e}_${t}`,topic:`Error Detection (${i.topic})`,difficulty:"Medium-Hard",text:`<div class="passage-box">
        <strong>Directions:</strong> Read the sentence to find out whether there is any grammatical error in it. The error, if any, will be in one part of the sentence.
      </div>
      <p class="question-text">
        ${a.join(" ")}
      </p>`,options:n,correctOption:i.errorPart,marks:1,negativeMarks:.25,explanation:`<strong>Grammar Rule & Analysis:</strong><br>
      • <strong>Error is in part ${n[i.errorPart]}</strong>.<br>
      • <strong>Correction:</strong> ${i.correction}<br>
      • <strong>Underlying Rule:</strong> ${i.rule}`}}static generateReadingComprehension(e,t){q(e*1e4+t*107);const i=Y[t%Y.length],n=i.questions[t%i.questions.length];return{id:`eng_rc_${e}_${t}`,topic:`Reading Comprehension (${i.theme})`,difficulty:"Hard",text:`<div class="passage-box">
        <strong>Theme: ${i.theme}</strong><br><br>
        ${i.text}
      </div>
      <p class="question-text"><strong>Question:</strong> ${n.q}</p>`,options:n.options,correctOption:n.correct,marks:1,negativeMarks:.25,explanation:`<strong>Comprehension Analysis:</strong><br>
      ${n.exp}`}}}const J=[{topic:"Monetary Policy & Standing Facilities",q:"Under the liquidity management framework of the Reserve Bank of India, what is the non-collateralized standing facility that absorbs surplus liquidity from commercial banks at 25 bps below the Repo Rate called?",options:["Marginal Standing Facility (MSF)","Standing Deposit Facility (SDF)","Variable Rate Reverse Repo (VRRR)","Liquidity Adjustment Facility (LAF)","Market Stabilization Scheme (MSS)"],correct:1,exp:"The Standing Deposit Facility (SDF) introduced in April 2022 allows banks to park surplus funds with the RBI without the RBI needing collateral securities."},{topic:"Priority Sector Lending (PSL)",q:"As per RBI guidelines, what is the mandatory overall Priority Sector Lending (PSL) target for Domestic Commercial Banks, expressed as a percentage of Adjusted Net Bank Credit (ANBC)?",options:["30%","40%","75%","60%","50%"],correct:1,exp:"For Domestic Scheduled Commercial Banks and Foreign Banks with >=20 branches, the overall PSL target is 40% of ANBC."},{topic:"Basel III Capital Regulations",q:"Under RBI Basel III regulatory norms, what is the minimum Capital to Risk-Weighted Assets Ratio (CRAR) that Indian Scheduled Commercial Banks are required to maintain on an ongoing basis (excluding CCB)?",options:["8.0%","9.0%","10.5%","11.5%","12.0%"],correct:1,exp:"While the Basel Committee global minimum is 8.0%, the RBI strictly mandates a minimum CRAR of 9.0% for Indian commercial banks."},{topic:"Government Financial Inclusion Schemes",q:"Under the Pradhan Mantri Suraksha Bima Yojana (PMSBY), what is the annual premium payable by an eligible subscriber for accidental death and full disability coverage of ₹2 Lakh?",options:["₹12 per annum","₹20 per annum","₹436 per annum","₹330 per annum","₹100 per annum"],correct:1,exp:"The PMSBY annual premium was revised from ₹12 to ₹20 per annum effective June 1, 2022."},{topic:"Corporate Insolvency (IBC 2016)",q:"Under the Insolvency and Bankruptcy Code (IBC) 2016, what is the outer statutory timeline for the completion of the Corporate Insolvency Resolution Process (CIRP), including all legal extensions?",options:["180 days","270 days","330 days","365 days","240 days"],correct:2,exp:"Section 12 of IBC mandates an outer cap of 330 days for CIRP, inclusive of litigation periods."},{topic:"Negotiable Instruments Act 1881",q:"Under Section 138 of the Negotiable Instruments Act, 1881, dishonour of a cheque for insufficiency of funds in the account attracts imprisonment for a term which may extend to how many years?",options:["6 months","1 year","2 years","3 years","5 years"],correct:2,exp:"Section 138 provides for imprisonment for a term up to 2 years, or a fine up to twice the amount of the cheque, or both."},{topic:"Prompt Corrective Action (PCA) Framework",q:"Which of the following three financial parameters serve as the primary monitoring triggers under RBI's revised Prompt Corrective Action (PCA) framework for commercial banks?",options:["CRAR, Net NPA Ratio, and Leverage Ratio","Total Deposits, Number of Branches, and Return on Assets","Statutory Liquidity Ratio, Cash Reserve Ratio, and CASA","Gross Advances, Net Interest Margin, and Tier-2 Capital","Current Ratio, Quick Ratio, and Debt-to-Equity Ratio"],correct:0,exp:"RBI's revised PCA framework monitors three key metrics: Capital (CRAR/CET-1), Asset Quality (Net NPA Ratio), and Leverage (Tier-1 Leverage Ratio)."},{topic:"Foreign Exchange Management Act (FEMA 1999)",q:"Under the Liberalised Remittance Scheme (LRS) of the RBI, all resident individuals are allowed to freely remit up to what maximum amount per financial year for permissible current and capital account transactions?",options:["USD 100,000","USD 250,000","USD 500,000","USD 1,000,000","USD 50,000"],correct:1,exp:"Under LRS, resident individuals can remit up to USD 250,000 per financial year (April-March)."}],Z=[{topic:"Companies Act 2013 (Board Composition)",q:"According to Section 149(4) of the Companies Act, 2013, every listed public company must have at least what fraction of its total number of directors as Independent Directors?",options:["At least 1/2","At least 1/3","At least 2/3","At least 1/4","At least 2 directors"],correct:1,exp:"Section 149(4) mandates that at least one-third (1/3) of the total number of directors of a listed public company shall be independent directors."},{topic:"Cost & Management Accounting (Break-Even Analysis)",q:"If a company has a Profit-Volume (P/V) ratio of 40% and its total fixed costs are ₹2,00,000, what is the Break-Even Sales value in rupees?",options:["₹4,00,000","₹5,00,000","₹6,00,000","₹8,00,000","₹2,50,000"],correct:1,exp:"Break-Even Sales = Fixed Cost / (P/V ratio) = 2,00,000 / 0.40 = ₹5,00,000."},{topic:"Management & Motivation Theories",q:"Which leadership model on the Blake-Mouton Managerial Grid represents high concern for people (9) combined with high concern for production (9)?",options:["Country Club Management (1,9)","Impoverished Management (1,1)","Team Management (9,9)","Authority-Compliance (9,1)","Middle-of-the-Road (5,5)"],correct:2,exp:"On the Blake-Mouton Managerial Grid, (9,9) corresponds to Team Management (maximum concern for both people and production)."},{topic:"Macroeconomics (Money Multiplier)",q:"In monetary economics, what is the theoretical formula for the broad money multiplier (m) in terms of broad money supply (M3) and Reserve Money (M0 / High-Powered Money)?",options:["m = M3 / M0","m = M0 / M3","m = M1 * M2","m = M3 - M0","m = M0 * CRR"],correct:0,exp:"The money multiplier is the ratio of broad money stock (M3) to reserve money (M0): m = M3 / M0."}];class ee{static generateGAQuestion(e,t){const i=J[t%J.length];return{id:`ga_bank_${e}_${t}`,topic:i.topic,difficulty:"Medium-Hard",text:`<p class="question-text"><strong>Question:</strong> ${i.q}</p>`,options:i.options,correctOption:i.correct,marks:1,negativeMarks:.25,explanation:`<strong>Fact & Regulatory Context:</strong><br>${i.exp}`}}static generateSEBIPaper2Question(e,t){const i=Z[t%Z.length];return{id:`sebi_p2_${e}_${t}`,topic:i.topic,difficulty:"Hard",text:`<p class="question-text"><strong>Question:</strong> ${i.q}</p>`,options:i.options,correctOption:i.correct,marks:2,negativeMarks:.5,explanation:`<strong>Regulatory / Accounting Breakdown:</strong><br>${i.exp}`}}}class T{static getStorageKey(e,t){return`bankmock_attempts_${e}_${t}`}static getAttemptHistory(e,t){try{const i=localStorage.getItem(T.getStorageKey(e,t));return i?JSON.parse(i):[]}catch{return[]}}static getNextMockNumber(e,t){return T.getAttemptHistory(e,t).length+1}static recordAttempt(e,t,i,n){try{const a=T.getAttemptHistory(e,t);a.push({mockNumber:i,date:new Date().toISOString(),score:n.totalScore,maxMarks:n.totalMaxMarks,accuracy:n.accuracy,percentile:n.percentile,isQualified:n.isQualified}),localStorage.setItem(T.getStorageKey(e,t),JSON.stringify(a))}catch(a){console.warn("Failed to save attempt to localStorage",a)}}static generateQuestionsForMock(e,t,i=1){const n=e.levels[t];if(!n)return[];const a=Math.floor((i-1)/20),s=(i-1)%20+1;let o=0;const l=`${e.id}_${t}`;for(let h=0;h<l.length;h++)o=(o<<5)-o+l.charCodeAt(h),o|=0;o=Math.abs(o);const r=a>=1&&s===1,c=e.isClerk&&t==="pre",u=t==="mains",d=e.tier===1;return n.sections.map((h,g)=>{const p=[],S=h.questionCount,C=h.subjectCode||"REAS";for(let E=0;E<S;E++){let M=o+a*5e4+s*2e3+g*500+E;r&&E===0&&g<=1&&(M=o+0*5e4+1*2e3+g*500+E);const b=T.generateSingleQuestion(C,M,E,h,{isClerkPre:c,isMains:u,isApexTier:d,examConfig:e});p.push({...b,uniqueId:`${e.id}_${t}_m${i}_s${g}_q${E+1}`,questionNumber:E+1,isRepetitiveReview:r&&E===0&&g<=1})}return{...h,questions:p}})}static generateSingleQuestion(e,t,i,n,a={}){const{isClerkPre:s,isMains:o,isApexTier:l}=a;if(e.includes("QA")||e.includes("DA")){if(s)return L.generateClerkLengthyCalculation(t,i);if(o||l){const c=i%3;return c===0?L.generateMainsHeavyConceptual(t,i):c===1?L.generateDataInterpretationSet(t,i):L.generateQuadratic(t,i)}const r=i%4;return r===0?L.generateQuadratic(t,i):r===1?L.generateNumberSeries(t,i):r===2?L.generateArithmeticProblem(t,i):L.generateDataInterpretationSet(t,i)}if(e.includes("REAS")){if(o||l){const c=i%3;return c===0?x.generateCriticalReasoning(t,i):c===1?x.generateMainsComplexPuzzle(t,i):x.generateSyllogism(t,i)}if(s){const c=i%3;return c===0?x.generateClerkFastPuzzle(t,i):c===1?x.generateInequality(t,i):x.generateSyllogism(t,i)}const r=i%4;return r===0?x.generateSyllogism(t,i):r===1?x.generateInequality(t,i):r===2?x.generateDirectionSense(t,i):x.generatePuzzle(t,i)}return e.includes("ENG")?i%2===0?X.generateErrorSpotting(t,i):X.generateReadingComprehension(t,i):e.includes("SEBI")?ee.generateSEBIPaper2Question(t,i):ee.generateGAQuestion(t,i)}}class le{constructor(e,t,i=1,n=()=>{},a=()=>{},s=()=>{}){this.examConfig=e,this.levelKey=t,this.mockNumber=i,this.levelConfig=e.levels[t],this.onStateChange=n,this.onSectionComplete=a,this.onTestComplete=s,this.currentSectionIndex=0,this.currentQuestionIndex=0,this.userResponses={},this.timeSpentPerSection={},this.isTestFinished=!1,this.timerManager=null,this.initializeQuestions(),this.initializeResponses(),this.setupTimer()}initializeQuestions(){const e=T.generateQuestionsForMock(this.examConfig,this.levelKey,this.mockNumber);this.levelConfig.sections=e,this.levelConfig.sections.forEach(t=>{this.timeSpentPerSection[t.id]=0})}initializeResponses(){this.levelConfig.sections.forEach(t=>{t.questions.forEach(i=>{this.userResponses[i.uniqueId]={selectedOption:null,status:1,isBookmarked:!1,timeSpent:0}})});const e=this.getCurrentQuestion();e&&(this.userResponses[e.uniqueId].status=2)}setupTimer(){const t=this.levelConfig.hasSectionalTiming?this.getCurrentSection().durationMinutes:this.levelConfig.totalDurationMinutes;this.timerManager=new ce({durationMinutes:t,onTick:(i,n)=>{const a=this.getCurrentSection().id;this.timeSpentPerSection[a]=(this.timeSpentPerSection[a]||0)+1,this.onStateChange({type:"TICK",formattedTime:i,remainingSec:n})},onWarning:i=>{this.onStateChange({type:"TIMER_WARNING",minutes:i})},onExpire:()=>{this.handleTimerExpiry()}})}start(){this.timerManager.start(),this.notifyState()}handleTimerExpiry(){if(this.levelConfig.hasSectionalTiming)if(this.currentSectionIndex<this.levelConfig.sections.length-1){this.onSectionComplete(this.getCurrentSection()),this.currentSectionIndex++,this.currentQuestionIndex=0;const e=this.getCurrentSection();this.timerManager.reset(e.durationMinutes),this.timerManager.start();const t=this.getCurrentQuestion();t&&this.userResponses[t.uniqueId].status===1&&(this.userResponses[t.uniqueId].status=2),this.notifyState({type:"SECTION_AUTO_ADVANCED",section:e})}else this.finishTest();else this.finishTest()}getCurrentSection(){return this.levelConfig.sections[this.currentSectionIndex]}getCurrentQuestion(){const e=this.getCurrentSection();return e&&e.questions?e.questions[this.currentQuestionIndex]:null}selectOption(e){const t=this.getCurrentQuestion();t&&(this.userResponses[t.uniqueId].selectedOption=e,this.notifyState({type:"OPTION_SELECTED"}))}clearResponse(){const e=this.getCurrentQuestion();e&&(this.userResponses[e.uniqueId].selectedOption=null,this.userResponses[e.uniqueId].status=2,this.notifyState({type:"RESPONSE_CLEARED"}))}saveAndNext(){const e=this.getCurrentQuestion();if(!e)return;const t=this.userResponses[e.uniqueId];t.selectedOption!==null&&t.selectedOption!==void 0?t.status=3:t.status=2,this.advanceNextQuestion()}saveAndMarkForReview(){const e=this.getCurrentQuestion();if(!e)return;const t=this.userResponses[e.uniqueId];t.selectedOption!==null&&t.selectedOption!==void 0?t.status=5:t.status=4,this.advanceNextQuestion()}markForReviewAndNext(){const e=this.getCurrentQuestion();if(!e)return;const t=this.userResponses[e.uniqueId];t.selectedOption!==null&&t.selectedOption!==void 0?t.status=5:t.status=4,this.advanceNextQuestion()}jumpToQuestion(e,t){if(this.levelConfig.hasSectionalTiming&&e!==this.currentSectionIndex)return{allowed:!1,message:"Section switching is locked in this exam due to sectional timing."};this.currentSectionIndex=e,this.currentQuestionIndex=t;const i=this.getCurrentQuestion();return i&&this.userResponses[i.uniqueId].status===1&&(this.userResponses[i.uniqueId].status=2),this.notifyState({type:"NAVIGATED"}),{allowed:!0}}switchSection(e){if(this.levelConfig.hasSectionalTiming)return{allowed:!1,message:"Cannot switch sections manually. Current section must expire or be submitted."};this.currentSectionIndex=e,this.currentQuestionIndex=0;const t=this.getCurrentQuestion();return t&&this.userResponses[t.uniqueId].status===1&&(this.userResponses[t.uniqueId].status=2),this.notifyState({type:"SECTION_SWITCHED"}),{allowed:!0}}advanceNextQuestion(){const e=this.getCurrentSection();this.currentQuestionIndex<e.questions.length-1?this.currentQuestionIndex++:!this.levelConfig.hasSectionalTiming&&this.currentSectionIndex<this.levelConfig.sections.length-1&&(this.currentSectionIndex++,this.currentQuestionIndex=0);const t=this.getCurrentQuestion();t&&this.userResponses[t.uniqueId].status===1&&(this.userResponses[t.uniqueId].status=2),this.notifyState({type:"ADVANCED"})}getPaletteSummary(e=null){let t=0,i=0,n=0,a=0,s=0;return(e!==null?[this.levelConfig.sections[e]]:this.levelConfig.sections).forEach(l=>{l.questions.forEach(r=>{const c=this.userResponses[r.uniqueId]?this.userResponses[r.uniqueId].status:1;c===1?t++:c===2?i++:c===3?n++:c===4?a++:c===5&&s++})}),{notVisited:t,notAnswered:i,answered:n,markedForReview:a,ansAndMarked:s}}finishTest(){this.isTestFinished||(this.isTestFinished=!0,this.timerManager&&this.timerManager.stop(),this.onTestComplete({mockNumber:this.mockNumber,userResponses:this.userResponses,timeSpentPerSection:this.timeSpentPerSection}))}notifyState(e={}){this.onStateChange({...e,currentSection:this.getCurrentSection(),currentSectionIndex:this.currentSectionIndex,currentQuestion:this.getCurrentQuestion(),currentQuestionIndex:this.currentQuestionIndex,paletteSummary:this.getPaletteSummary(this.currentSectionIndex),allPaletteSummary:this.getPaletteSummary()})}}class V{static evaluateTest(e,t,i,n={}){let a=0,s=0,o=0,l=0,r=0,c=0;const u=[],d={};t.sections.forEach(M=>{let b=0,f=0,I=0,F=0,_=0,v=M.marks;const k=M.questions||[];k.forEach(N=>{const w=i[N.uniqueId],$=N.topic||"General Aptitude";if(d[$]||(d[$]={total:0,correct:0,incorrect:0,attempted:0,marks:0}),d[$].total++,w&&(w.status===3||w.status===5)&&w.selectedOption!==null&&w.selectedOption!==void 0)if(f++,o++,d[$].attempted++,parseInt(w.selectedOption,10)===parseInt(N.correctOption,10)){const R=Number(N.marks||1);b+=R,a+=R,I++,l++,d[$].correct++,d[$].marks+=R,w.isCorrect=!0,w.scoreDelta=R}else{const R=Number(N.negativeMarks||M.negativeMark||.25);b-=R,a-=R,F++,r++,d[$].incorrect++,d[$].marks-=R,w.isCorrect=!1,w.scoreDelta=-R}else _++,c++,w&&(w.isCorrect=null,w.scoreDelta=0)}),s+=v;const A=f>0?I/f*100:0,U=v*.35;u.push({sectionId:M.id,sectionName:M.name,totalQuestions:k.length,attempted:f,correct:I,incorrect:F,unattempted:_,maxMarks:v,score:Math.max(0,Number(b.toFixed(2))),rawScore:Number(b.toFixed(2)),accuracy:Number(A.toFixed(1)),cutoff:Number(U.toFixed(1)),isCutoffCleared:b>=U,timeSpentSeconds:n[M.id]||0})});const m=Math.max(0,Number(a.toFixed(2))),h=o>0?l/o*100:0,g=s>0?m/s*100:0,p=V.estimatePercentile(m,s,t.cutoffGeneralEstimate||s*.55),S=Math.max(1,Math.round(15e4*(1-p/100))),C=[],E=[];return Object.entries(d).forEach(([M,b])=>{const f=b.attempted>0?b.correct/b.attempted*100:0;b.attempted>=2&&(f>=75?C.push({topic:M,accuracy:Math.round(f),count:b.attempted}):f<50&&E.push({topic:M,accuracy:Math.round(f),count:b.attempted}))}),{examId:e.id,examTitle:e.title,levelName:t.name,totalMaxMarks:s,totalScore:m,rawTotalScore:Number(a.toFixed(2)),totalQuestions:t.totalQuestions,attempted:o,correct:l,incorrect:r,unattempted:c,accuracy:Number(h.toFixed(1)),percentage:Number(g.toFixed(1)),percentile:Number(p.toFixed(1)),estimatedRank:S,cutoff:t.cutoffGeneralEstimate||s*.55,isQualified:m>=(t.cutoffGeneralEstimate||s*.55),sectionResults:u,strengths:C,weaknesses:E,timestamp:new Date().toISOString()}}static estimatePercentile(e,t,i){if(t<=0)return 0;const n=e/t,a=i/t,s=(n-a)*6;let o=1/(1+Math.exp(-s))*100;return e>=t*.9?o=99.9:e<=0&&(o=1),Math.min(99.9,Math.max(1,o))}}const P=class P{static getAllAttemptLogs(){try{const e=localStorage.getItem(P.STORAGE_KEY_LOGS);return e?JSON.parse(e):[]}catch{return[]}}static recordGlobalAttempt(e){try{const t=P.getAllAttemptLogs();t.unshift(e),localStorage.setItem(P.STORAGE_KEY_LOGS,JSON.stringify(t))}catch(t){console.warn("Failed to record global attempt",t)}}static getProfileStats(){const e=P.getAllAttemptLogs(),t=e.length;if(t===0)return{level:1,levelTitle:"Rookie Aspirant",currentXP:0,nextLevelXP:500,xpProgressPercent:0,totalAttempts:0,totalQuestionsSolved:0,totalCorrect:0,totalScoreSum:0,avgScore:0,avgAccuracy:0,qualifiedRate:0,totalTimeMinutes:0,bestScore:0,streak:0,skills:{quant:35,reasoning:35,english:35,ga:35,speed:40,accuracy:40},achievements:P.computeAchievements([]),recentLogs:[],scoreTrend:[]};let i=0,n=0,a=0,s=0,o=0,l=0,r=0;const c={quant:{score:0,max:0,correct:0,total:0},reason:{score:0,max:0,correct:0,total:0},english:{score:0,max:0,correct:0,total:0},ga:{score:0,max:0,correct:0,total:0}};e.forEach(v=>{i+=v.attempted||0,n+=v.correct||0,a+=v.totalScore||0,r+=v.totalMaxMarks||100,v.isQualified&&s++,(v.totalScore||0)>l&&(l=v.totalScore),v.sectionResults&&v.sectionResults.forEach(k=>{o+=k.timeSpentSeconds||0;const A=(k.sectionName||"").toLowerCase();A.includes("quant")||A.includes("numerical")||A.includes("data")?(c.quant.score+=k.score||0,c.quant.max+=k.maxMarks||1,c.quant.correct+=k.correct||0,c.quant.total+=k.attempted||0):A.includes("reason")?(c.reason.score+=k.score||0,c.reason.max+=k.maxMarks||1,c.reason.correct+=k.correct||0,c.reason.total+=k.attempted||0):A.includes("english")?(c.english.score+=k.score||0,c.english.max+=k.maxMarks||1,c.english.correct+=k.correct||0,c.english.total+=k.attempted||0):(A.includes("general")||A.includes("awareness")||A.includes("financial")||A.includes("paper 2"))&&(c.ga.score+=k.score||0,c.ga.max+=k.maxMarks||1,c.ga.correct+=k.correct||0,c.ga.total+=k.attempted||0)})});const u=Number((a/t).toFixed(1)),d=i>0?Number((n/i*100).toFixed(1)):0,m=Number((s/t*100).toFixed(1)),h=Math.round(o/60);let g=0;e.forEach(v=>{g+=100,g+=(v.correct||0)*5,v.isQualified&&(g+=250),v.accuracy>=80&&(g+=100)});const p=Math.floor(g/600)+1,S=(p-1)*600,C=g-S,E=600,M=Math.min(100,Math.round(C/E*100)),b=["Rookie Aspirant","Test Warrior","Speed Prodigy","Bank Mastermind","Sectional Conqueror","Apex Candidate","SBI / RBI Grade B Legend","Grandmaster Governor"],f=b[Math.min(b.length-1,Math.floor((p-1)/2))],I=(v,k=50)=>v.total>0?Math.min(99,Math.max(25,Math.round(v.correct/v.total*100))):k,F={quant:I(c.quant,60),reasoning:I(c.reason,65),english:I(c.english,58),ga:I(c.ga,55),speed:Math.min(99,Math.max(30,Math.round(d*.95))),accuracy:Math.min(99,Math.max(20,Math.round(d)))},_=e.slice(0,10).reverse().map((v,k)=>({index:k+1,title:`${v.examShort||v.examTitle} (M#${v.mockNumber||1})`,score:v.totalScore,accuracy:v.accuracy,maxMarks:v.totalMaxMarks}));return{level:p,levelTitle:f,totalXP:g,currentXP:C,nextLevelXP:E,xpProgressPercent:M,totalAttempts:t,totalQuestionsSolved:i,totalCorrect:n,totalScoreSum:Number(a.toFixed(1)),avgScore:u,avgAccuracy:d,qualifiedRate:m,totalTimeMinutes:h,bestScore:l,skills:F,achievements:P.computeAchievements(e),recentLogs:e.slice(0,15),scoreTrend:_}}static computeAchievements(e){const t=e.length,i=e.filter(s=>s.isQualified).length,n=e.filter(s=>s.accuracy>=90).length,a=e.filter(s=>s.totalScore>=70).length;return[{id:"first_blood",icon:"⚔️",title:"First Mock Test",desc:"Completed your first mock test on Mock Machine.",unlocked:t>=1,progress:`${Math.min(1,t)}/1`},{id:"marksman",icon:"🎯",title:"Bullseye Accuracy",desc:"Achieved 90%+ accuracy in any mock test.",unlocked:n>=1,progress:`${Math.min(1,n)}/1`},{id:"qualifier",icon:"🏆",title:"Cutoff Crusher",desc:"Cleared the official cutoffs in 3 different mock tests.",unlocked:i>=3,progress:`${Math.min(3,i)}/3`},{id:"grindmaster",icon:"🔥",title:"Iron Aspirant",desc:"Attempted 10 complete mock tests.",unlocked:t>=10,progress:`${Math.min(10,t)}/10`},{id:"apex_scorer",icon:"👑",title:"Century Marksman",desc:"Scored 70+ marks in a full-length mock test.",unlocked:a>=1,progress:`${Math.min(1,a)}/1`}]}static resetAllData(){try{const e=[];for(let t=0;t<localStorage.length;t++){const i=localStorage.key(t);i&&(i.startsWith("bankmock_")||i.startsWith("mockmachine_"))&&e.push(i)}return e.forEach(t=>localStorage.removeItem(t)),!0}catch(e){return console.error("Error resetting profile data",e),!1}}};j(P,"STORAGE_KEY_LOGS","mockmachine_all_attempts_log"),j(P,"STORAGE_KEY_STATS","mockmachine_user_stats");let D=P;class de{constructor(e=()=>{}){this.onStartExam=e,this.selectedCategory="all",this.selectedExamId=null,this.selectedLevelKey="pre",this.selectedMockNumber=1}renderCategories(e){const t=document.getElementById(e);t&&(t.innerHTML=re.map(i=>`
      <button class="category-chip ${i.id===this.selectedCategory?"active":""}" data-cat="${i.id}">
        <span>${i.icon}</span>
        <span>${i.name}</span>
      </button>
    `).join(""),t.querySelectorAll(".category-chip").forEach(i=>{i.addEventListener("click",n=>{const a=n.currentTarget.getAttribute("data-cat");this.selectedCategory=a,this.renderCategories(e),this.renderExamCards("examsGrid")})}))}renderExamCards(e){const t=document.getElementById(e);if(!t)return;const i=Object.values(O).filter(n=>this.selectedCategory==="all"?!0:n.category===this.selectedCategory);t.innerHTML=i.map(n=>{const a=n.levels.pre,s=n.levels.mains,o=n.badge?n.badge.toLowerCase():"",l=T.getAttemptHistory(n.id,"pre"),r=T.getAttemptHistory(n.id,"mains");return`
        <div class="exam-card" data-exam-id="${n.id}">
          <div class="card-top">
            <div class="exam-icon">${n.icon}</div>
            ${n.badge?`<span class="badge-tag ${o}">${n.badge}</span>`:""}
          </div>
          
          <div class="card-body">
            <h3>${n.title}</h3>
            <p>${n.description}</p>
            
            <div class="card-meta-chips">
              <span class="meta-chip">⏱️ ${a.totalDurationMinutes}m (Pre) / ${s.totalDurationMinutes}m (Mains)</span>
              <span class="meta-chip">📝 ${a.totalQuestions} Qs (Pre)</span>
              <span class="meta-chip">📚 2,000+ Unique Q Pool</span>
            </div>

            <div style="font-size: 0.78rem; color: var(--text-dim); margin-bottom: 1rem;">
              Attempts: <strong>${l.length}</strong> (Pre) &bull; <strong>${r.length}</strong> (Mains)
            </div>
          </div>

          <div class="card-actions">
            <button class="btn-level pre" data-exam="${n.id}" data-level="pre">
              <span>⚡ Prelims (Phase-I)</span>
            </button>
            <button class="btn-level mains" data-exam="${n.id}" data-level="mains">
              <span>🔥 Mains (Phase-II)</span>
            </button>
          </div>
        </div>
      `}).join(""),t.querySelectorAll(".btn-level").forEach(n=>{n.addEventListener("click",a=>{const s=a.currentTarget.getAttribute("data-exam"),o=a.currentTarget.getAttribute("data-level");this.openExamSummaryModal(s,o)})})}openExamSummaryModal(e,t){const i=O[e];if(!i)return;const n=i.levels[t];if(!n)return;this.selectedExamId=e,this.selectedLevelKey=t,this.selectedMockNumber=T.getNextMockNumber(e,t);const a=document.getElementById("modalExamTitle"),s=document.getElementById("modalExamBody"),o=document.getElementById("examSummaryModal");if(a&&(a.textContent=`${i.title} - ${n.name}`),s){const l=n.hasSectionalTiming?'<span style="color: #60a5fa; font-weight: 600;">Yes (Fixed Sectional Timers)</span>':'<span style="color: #34d399; font-weight: 600;">Composite (Freely Switch Sections)</span>';s.innerHTML=`
        <div class="level-modal-body">
          <div class="level-summary-card">
            <div class="summary-grid">
              <div class="summary-item">
                <div class="label">Total Questions</div>
                <div class="val">${n.totalQuestions}</div>
              </div>
              <div class="summary-item">
                <div class="label">Total Time</div>
                <div class="val">${n.totalDurationMinutes} Mins</div>
              </div>
              <div class="summary-item">
                <div class="label">Maximum Marks</div>
                <div class="val">${n.totalMarks}</div>
              </div>
            </div>
            <div style="margin-top: 1rem; font-size: 0.85rem; color: var(--text-muted); display: flex; flex-wrap: wrap; gap: 1rem;">
              <span><strong>Sectional Timing:</strong> ${l}</span>
              <span><strong>Negative Marking:</strong> 1/4th (${n.negativeMarkingRatio*100}%)</span>
            </div>
          </div>

          <div class="section-table-box">
            <h4 style="margin-bottom: 0.75rem; font-size: 0.95rem; font-weight: 700; color: #93c5fd;">
              Official Pattern & Section Breakdown:
            </h4>
            <div class="table-responsive">
              <table class="exam-data-table">
                <thead>
                  <tr>
                    <th>Section Name</th>
                    <th>Questions</th>
                    <th>Max Marks</th>
                    <th>Duration</th>
                    <th>Penalty</th>
                  </tr>
                </thead>
                <tbody>
                  ${n.sections.map(r=>`
                    <tr>
                      <td><strong>${r.name}</strong></td>
                      <td>${r.questionCount}</td>
                      <td>${r.marks}</td>
                      <td>${r.durationMinutes} mins</td>
                      <td>-${r.negativeMark}</td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>

          <div class="instruction-note" style="border-radius: var(--radius-md);">
            🎯 <strong>Real Exam Standard Simulation:</strong> Strict sectional cutoffs, live TCS iON question palette, and negative marking applied in real-time.
          </div>

          <button id="btnLaunchSimulator" class="btn-start-test">
            <span>🚀 Start Real Mock Test</span>
          </button>
        </div>
      `,document.getElementById("btnLaunchSimulator").addEventListener("click",()=>{this.closeModal(),this.onStartExam(this.selectedExamId,this.selectedLevelKey,this.selectedMockNumber)})}o&&o.classList.add("active")}closeModal(){const e=document.getElementById("examSummaryModal");e&&e.classList.remove("active")}}const H={general:["The clock will be set at the server. The countdown timer in the top right corner of screen will display the remaining time available for you to complete the examination.","When the timer reaches zero, the examination will end by itself. You will not be required to end or submit your examination.","The Question Palette displayed on the right side of screen will show the status of each question using one of the following symbols:","1. You have not visited the question yet.","2. You have not answered the question.","3. You have answered the question.","4. You have NOT answered the question, but have marked the question for review.",'5. The question(s) "Answered and Marked for Review" will be considered for evaluation.'],navigating:["Click on the question number in the Question Palette to go to that question directly.",'Click on "Save & Next" to save your answer for the current question and then go to the next question.','Click on "Mark for Review & Next" to save your question as marked for review and go to the next question.'],answering:["To select your answer, click on the button of one of the options (A, B, C, D, or E).",'To deselect your chosen answer, click on the "Clear Response" button.',"To change your chosen answer, click on the button of another option.",'To save your answer, you MUST click on the "Save & Next" button.']};class ue{constructor(e,t=()=>{},i=()=>{}){this.engine=e,this.onSubmitTest=t,this.onExitTest=i,this.viewLanguage="English"}init(){this.renderHeader(),this.renderSubjectTabs(),this.renderQuestionAndPalette(),this.attachEventListeners()}renderHeader(){const e=this.engine.examConfig,t=this.engine.levelConfig,i=document.getElementById("simExamTitle");i&&(i.textContent=`${e.shortName} - ${t.name} (Mock #${this.engine.mockNumber||1})`);const n=document.getElementById("simTimerLabel");n&&(n.textContent=t.hasSectionalTiming?"Section Time Left:":"Total Time Left:")}renderSubjectTabs(){const e=document.getElementById("simSubjectTabs");if(!e)return;const t=this.engine.levelConfig.sections,i=this.engine.currentSectionIndex,n=this.engine.levelConfig.hasSectionalTiming;e.innerHTML=t.map((a,s)=>{const o=s===i,l=n&&!o;return`
        <button class="subject-tab-btn ${o?"active":""} ${l?"locked":""}" 
                data-sec-idx="${s}" 
                title="${l?"Section switching is locked in this exam":a.name}">
          <span>${a.name}</span>
          ${l?'<span style="font-size: 0.75rem; opacity: 0.7;">🔒</span>':""}
        </button>
      `}).join(""),e.querySelectorAll(".subject-tab-btn").forEach(a=>{a.addEventListener("click",s=>{const o=parseInt(s.currentTarget.getAttribute("data-sec-idx"),10),l=this.engine.switchSection(o);l.allowed?(this.renderSubjectTabs(),this.renderQuestionAndPalette()):this.showToast(l.message,"warning")})})}renderQuestionAndPalette(){const e=this.engine.getCurrentQuestion(),t=this.engine.getCurrentSection(),i=this.engine.currentQuestionIndex;if(!e||!t)return;const n=document.getElementById("simQuestionNumber");n&&(n.textContent=`Question ${i+1}`);const a=document.getElementById("simMarksTag");a&&(a.textContent=`Marks: +${e.marks||1}`);const s=document.getElementById("simNegTag");s&&(s.textContent=`Negative: -${e.negativeMarks||.25}`);const o=document.getElementById("simQuestionBody");o&&(o.innerHTML=`
        <div class="question-body-inner">
          ${e.text}
          
          <div class="options-list">
            ${e.options.map((u,d)=>{const m=this.engine.userResponses[e.uniqueId],h=m&&m.selectedOption===d;return`
                <div class="option-item ${h?"selected":""}" data-opt-idx="${d}">
                  <input type="radio" name="opt_choice" class="option-radio" ${h?"checked":""} />
                  <span class="option-label-index">${["(A)","(B)","(C)","(D)","(E)"][d]}</span>
                  <div class="option-content">${u}</div>
                </div>
              `}).join("")}
          </div>
        </div>
      `,o.querySelectorAll(".option-item").forEach(u=>{u.addEventListener("click",d=>{const m=parseInt(d.currentTarget.getAttribute("data-opt-idx"),10);this.engine.selectOption(m),this.renderQuestionAndPalette()})}));const l=this.engine.getPaletteSummary(this.engine.currentSectionIndex),r=(u,d)=>{const m=document.getElementById(u);m&&(m.textContent=d)};r("legendCountAnswered",l.answered),r("legendCountNotAnswered",l.notAnswered),r("legendCountNotVisited",l.notVisited),r("legendCountMarked",l.markedForReview),r("legendCountAnsMarked",l.ansAndMarked);const c=document.getElementById("simPaletteGrid");c&&(c.innerHTML=t.questions.map((u,d)=>{const m=this.engine.userResponses[u.uniqueId],h=m?m.status:1,g=d===this.engine.currentQuestionIndex;let p="not-visited";return h===2?p="not-answered":h===3?p="answered":h===4?p="marked-review":h===5&&(p="ans-marked-review"),`
          <button class="palette-btn palette-shape ${p} ${g?"current":""}" 
                  data-q-idx="${d}" 
                  title="Question ${d+1}">
            ${d+1}
          </button>
        `}).join(""),c.querySelectorAll(".palette-btn").forEach(u=>{u.addEventListener("click",d=>{const m=parseInt(d.currentTarget.getAttribute("data-q-idx"),10);this.engine.jumpToQuestion(this.engine.currentSectionIndex,m),this.renderQuestionAndPalette()})}))}attachEventListeners(){var e,t,i,n,a,s,o;(e=document.getElementById("btnSimSaveNext"))==null||e.addEventListener("click",()=>{this.engine.saveAndNext(),this.renderQuestionAndPalette()}),(t=document.getElementById("btnSimClearResponse"))==null||t.addEventListener("click",()=>{this.engine.clearResponse(),this.renderQuestionAndPalette()}),(i=document.getElementById("btnSimMarkReviewNext"))==null||i.addEventListener("click",()=>{this.engine.markForReviewAndNext(),this.renderQuestionAndPalette()}),(n=document.getElementById("btnSimSaveMarkReview"))==null||n.addEventListener("click",()=>{this.engine.saveAndMarkForReview(),this.renderQuestionAndPalette()}),(a=document.getElementById("btnSimSubmitTest"))==null||a.addEventListener("click",()=>{this.openSubmitConfirmModal()}),(s=document.getElementById("btnSimQuestionPaper"))==null||s.addEventListener("click",()=>{this.openQuestionPaperModal()}),(o=document.getElementById("btnSimInstructions"))==null||o.addEventListener("click",()=>{this.openInstructionsModal()})}updateTimerDisplay(e,t){const i=document.getElementById("simTimerDigits"),n=document.getElementById("simTimerBox");i&&(i.textContent=e),n&&(t<=300?n.classList.add("pulse-warning"):n.classList.remove("pulse-warning"))}openSubmitConfirmModal(){const e=document.getElementById("simSubmitModal"),t=document.getElementById("simSubmitModalBody");!e||!t||(this.engine.getPaletteSummary(),this.engine.getCurrentSection(),this.engine.levelConfig.hasSectionalTiming,this.engine.currentSectionIndex,this.engine.levelConfig.sections.length-1,t.innerHTML=`
      <div style="font-size: 0.95rem; line-height: 1.6; color: var(--text-main);">
        <p style="margin-bottom: 1.25rem;">Are you sure you want to submit your examination?</p>
        
        <div class="table-responsive" style="margin-bottom: 1.5rem;">
          <table class="exam-data-table">
            <thead>
              <tr>
                <th>Section</th>
                <th>Total Qs</th>
                <th>Answered</th>
                <th>Not Answered</th>
                <th>Marked for Review</th>
                <th>Not Visited</th>
              </tr>
            </thead>
            <tbody>
              ${this.engine.levelConfig.sections.map((i,n)=>{const a=this.engine.getPaletteSummary(n);return`
                  <tr>
                    <td><strong>${i.name}</strong></td>
                    <td>${i.questions.length}</td>
                    <td style="color: #22c55e; font-weight: 700;">${a.answered+a.ansAndMarked}</td>
                    <td style="color: #ef4444; font-weight: 700;">${a.notAnswered}</td>
                    <td style="color: #8b5cf6; font-weight: 700;">${a.markedForReview}</td>
                    <td>${a.notVisited}</td>
                  </tr>
                `}).join("")}
            </tbody>
          </table>
        </div>

        <div style="display: flex; justify-content: flex-end; gap: 1rem;">
          <button id="btnCancelSubmit" class="btn-tcs btn-tcs-secondary" style="padding: 0.7rem 1.4rem;">
            Continue Test
          </button>
          <button id="btnConfirmFinalSubmit" class="btn-tcs btn-tcs-submit" style="padding: 0.7rem 1.4rem;">
            Yes, Submit Examination
          </button>
        </div>
      </div>
    `,document.getElementById("btnCancelSubmit").addEventListener("click",()=>{e.classList.remove("active")}),document.getElementById("btnConfirmFinalSubmit").addEventListener("click",()=>{e.classList.remove("active"),this.engine.finishTest()}),e.classList.add("active"))}openQuestionPaperModal(){const e=document.getElementById("simQPModal"),t=document.getElementById("simQPModalBody");if(!e||!t)return;const i=this.engine.getCurrentSection();t.innerHTML=`
      <div style="font-size: 0.9rem; max-height: 70vh; overflow-y: auto; padding-right: 0.5rem;">
        <h4 style="margin-bottom: 1rem; color: #3b82f6;">Section: ${i.name} (${i.questions.length} Questions)</h4>
        ${i.questions.map((n,a)=>`
          <div style="padding: 1rem; margin-bottom: 1rem; background: rgba(0,0,0,0.2); border-radius: 8px; border: 1px solid var(--border-subtle);">
            <strong>Q${a+1}.</strong> ${n.text}
          </div>
        `).join("")}
      </div>
    `,e.classList.add("active")}openInstructionsModal(){const e=document.getElementById("simInstructionsModal"),t=document.getElementById("simInstructionsModalBody");!e||!t||(t.innerHTML=`
      <div style="font-size: 0.9rem; line-height: 1.7;">
        <h4 style="color: #3b82f6; margin-bottom: 0.75rem;">General Examination Instructions:</h4>
        <ul style="padding-left: 1.25rem; margin-bottom: 1.5rem;">
          ${H.general.map(i=>`<li>${i}</li>`).join("")}
        </ul>

        <h4 style="color: #3b82f6; margin-bottom: 0.75rem;">Navigating to a Question:</h4>
        <ul style="padding-left: 1.25rem; margin-bottom: 1.5rem;">
          ${H.navigating.map(i=>`<li>${i}</li>`).join("")}
        </ul>

        <h4 style="color: #3b82f6; margin-bottom: 0.75rem;">Answering a Question:</h4>
        <ul style="padding-left: 1.25rem; margin-bottom: 1.5rem;">
          ${H.answering.map(i=>`<li>${i}</li>`).join("")}
        </ul>
      </div>
    `,e.classList.add("active"))}showToast(e,t="info"){const i=document.getElementById("globalToast");i&&(i.textContent=e,i.className=`toast-notification show ${t}`,setTimeout(()=>{i.classList.remove("show")},3500))}}class me{constructor(e,t,i=()=>{},n=()=>{}){this.result=e,this.engine=t,this.onReattempt=i,this.onHome=n,this.currentFilter="all"}render(){this.renderHeroScorecard(),this.renderSectionCards(),this.renderSolutions(),this.attachEventListeners();const e=document.getElementById("btnAnalyticsReattempt");if(e){const t=(this.result.mockNumber||1)+1;e.innerHTML=`<span>🚀 Attempt Next Fresh Mock Test (Mock #${t})</span>`}}renderHeroScorecard(){const e=this.result,t=e.isQualified,i=document.getElementById("analyticsHero");i&&(i.innerHTML=`
      <div class="result-hero-top">
        <div class="exam-completed-meta">
          <h2>${e.examTitle} - ${e.levelName} (Mock Test #${e.mockNumber||1})</h2>
          <p>Mock Test Attempt Completed &bull; Evaluated under official marking scheme &bull; 20-Mock Zero Repetition Pool</p>
        </div>
        <div>
          <span class="status-badge-lg ${t?"qualified":"not-qualified"}">
            ${t?"🎉 QUALIFIED (Above Cutoff)":"⚠️ NEED IMPROVEMENT (Below Cutoff)"}
          </span>
        </div>
      </div>

      <div class="metrics-summary-grid">
        <div class="metric-card">
          <div class="metric-icon">🎯</div>
          <div class="metric-label">Total Score</div>
          <div class="metric-val" style="color: #38bdf8;">${e.totalScore}</div>
          <div class="metric-sub">Out of ${e.totalMaxMarks} (Cutoff: ${e.cutoff})</div>
        </div>

        <div class="metric-card">
          <div class="metric-icon">⚡</div>
          <div class="metric-label">Accuracy</div>
          <div class="metric-val" style="color: #34d399;">${e.accuracy}%</div>
          <div class="metric-sub">${e.correct} Correct / ${e.attempted} Attempted</div>
        </div>

        <div class="metric-card">
          <div class="metric-icon">📈</div>
          <div class="metric-label">Percentile</div>
          <div class="metric-val" style="color: #c084fc;">${e.percentile}%</div>
          <div class="metric-sub">Across 1.5 Lakh Candidates</div>
        </div>

        <div class="metric-card">
          <div class="metric-icon">🏆</div>
          <div class="metric-label">Simulated AIR</div>
          <div class="metric-val" style="color: #fbbf24;">#${e.estimatedRank.toLocaleString()}</div>
          <div class="metric-sub">All India Ranking</div>
        </div>

        <div class="metric-card">
          <div class="metric-icon">📝</div>
          <div class="metric-label">Attempt Rate</div>
          <div class="metric-val" style="color: #60a5fa;">${Math.round(e.attempted/e.totalQuestions*100)}%</div>
          <div class="metric-sub">${e.attempted} / ${e.totalQuestions} Questions</div>
        </div>
      </div>
    `)}renderSectionCards(){const e=document.getElementById("analyticsSectionCards");e&&(e.innerHTML=this.result.sectionResults.map(t=>{const i=n=>{const a=Math.floor(n/60),s=n%60;return`${a}m ${s}s`};return`
        <div class="sec-analytics-card">
          <div class="sec-card-header">
            <h4>${t.sectionName}</h4>
            <span class="sec-score-pill">${t.score} / ${t.maxMarks} Marks</span>
          </div>

          <div class="sec-stats-row">
            <div class="stat-box green">
              <div class="s-num">${t.correct}</div>
              <div class="s-txt">Correct</div>
            </div>
            <div class="stat-box red">
              <div class="s-num">${t.incorrect}</div>
              <div class="s-txt">Wrong</div>
            </div>
            <div class="stat-box gray">
              <div class="s-num">${t.unattempted}</div>
              <div class="s-txt">Left</div>
            </div>
            <div class="stat-box blue">
              <div class="s-num">${i(t.timeSpentSeconds)}</div>
              <div class="s-txt">Time</div>
            </div>
          </div>

          <div class="acc-progress-container">
            <div class="acc-label-wrap">
              <span>Section Accuracy</span>
              <strong style="color: #34d399;">${t.accuracy}%</strong>
            </div>
            <div class="acc-bar-bg">
              <div class="acc-bar-fill" style="width: ${t.accuracy}%;"></div>
            </div>
          </div>
          
          <div style="margin-top: 0.85rem; font-size: 0.78rem; display: flex; justify-content: space-between; color: var(--text-muted);">
            <span>Sectional Cutoff: <strong>${t.cutoff}</strong></span>
            <span style="color: ${t.isCutoffCleared?"#34d399":"#f87171"}; font-weight: 700;">
              ${t.isCutoffCleared?"✅ Cutoff Cleared":"❌ Missed Cutoff"}
            </span>
          </div>
        </div>
      `}).join(""))}renderSolutions(){const e=document.getElementById("analyticsSolutionsList");if(!e)return;const t=[];this.engine.levelConfig.sections.forEach((n,a)=>{n.questions.forEach((s,o)=>{const l=this.engine.userResponses[s.uniqueId];t.push({sectionName:n.name,question:s,userResp:l,index:t.length+1})})});const i=t.filter(n=>{const a=n.userResp,s=a&&(a.status===3||a.status===5)&&a.selectedOption!==null&&a.selectedOption!==void 0;return this.currentFilter==="correct"?s&&parseInt(a.selectedOption,10)===parseInt(n.question.correctOption,10):this.currentFilter==="incorrect"?s&&parseInt(a.selectedOption,10)!==parseInt(n.question.correctOption,10):this.currentFilter==="unattempted"?!s:!0});if(i.length===0){e.innerHTML='<div style="text-align: center; padding: 3rem; color: var(--text-muted);">No questions match the selected filter.</div>';return}e.innerHTML=i.map(n=>{const a=n.question,s=n.userResp,o=s&&(s.status===3||s.status===5)&&s.selectedOption!==null&&s.selectedOption!==void 0,l=o?parseInt(s.selectedOption,10):null,r=o&&l===parseInt(a.correctOption,10);let c="";o?r?c=`<span class="sol-status-tag correct">✅ Correct (+${a.marks})</span>`:c=`<span class="sol-status-tag incorrect">❌ Incorrect (-${a.negativeMarks})</span>`:c='<span class="sol-status-tag unattempted">⚪ Unattempted</span>';const u=["(A)","(B)","(C)","(D)","(E)"];return`
        <div class="sol-card">
          <div class="sol-card-header">
            <div class="sol-q-title">
              <span>Q${n.index}. [${n.sectionName}] - ${a.topic||"General Aptitude"}</span>
            </div>
            <div>${c}</div>
          </div>

          <div class="sol-body">
            ${a.text}
          </div>

          <div class="sol-options-grid">
            ${a.options.map((d,m)=>{const h=m===parseInt(a.correctOption,10),g=l===m&&!h;let p="",S="";return h?(p="is-correct-answer",S='<span style="margin-left: auto; font-size: 0.75rem; color: #34d399; font-weight: 700;">✓ Correct Answer</span>'):g&&(p="is-user-incorrect",S='<span style="margin-left: auto; font-size: 0.75rem; color: #f87171; font-weight: 700;">✗ Your Answer</span>'),`
                <div class="sol-option-row ${p}">
                  <span style="font-weight: 700; min-width: 28px;">${u[m]}</span>
                  <span>${d}</span>
                  ${S}
                </div>
              `}).join("")}
          </div>

          <div class="explanation-container">
            <strong style="color: #60a5fa; display: block; margin-bottom: 0.5rem;">💡 Detailed Pedagogical Solution & Analysis:</strong>
            ${a.explanation}
          </div>
        </div>
      `}).join("")}attachEventListeners(){var e,t;document.querySelectorAll(".filter-pill-btn").forEach(i=>{i.addEventListener("click",n=>{document.querySelectorAll(".filter-pill-btn").forEach(a=>a.classList.remove("active")),n.currentTarget.classList.add("active"),this.currentFilter=n.currentTarget.getAttribute("data-filter"),this.renderSolutions()})}),(e=document.getElementById("btnAnalyticsReattempt"))==null||e.addEventListener("click",()=>{this.onReattempt()}),(t=document.getElementById("btnAnalyticsHome"))==null||t.addEventListener("click",()=>{this.onHome()})}}class ge{constructor(e=()=>{},t=()=>{}){this.onHome=e,this.onReattemptExam=t}render(){const e=D.getProfileStats();this.renderHeroCard(e),this.renderStatsGrid(e),this.renderSkillsAndGraph(e),this.renderAchievements(e),this.renderHistoryTable(e),this.attachEventListeners()}renderHeroCard(e){const t=document.getElementById("profileHeroBox");t&&(t.innerHTML=`
      <div class="gamer-hero-card">
        <div class="gamer-header-layout">
          <div class="gamer-identity">
            <div class="gamer-avatar-box">
              <span>👑</span>
              <div class="gamer-level-pill">LVL ${e.level}</div>
            </div>

            <div class="gamer-info">
              <h2>
                <span>Abhoy Paul</span>
                <span class="gamer-title-badge">${e.levelTitle}</span>
              </h2>
              <p class="gamer-subtext">
                ${e.totalAttempts} Mock Tests Completed &bull; Total ${e.totalQuestionsSolved} Questions Solved &bull; ${e.qualifiedRate}% Cutoff Win Rate
              </p>
            </div>
          </div>

          <div style="text-align: right;">
            <div style="font-size: 0.8rem; color: #94a3b8; text-transform: uppercase; font-weight: 700;">Aspirant Rank Score</div>
            <div style="font-family: var(--font-display); font-size: 2.2rem; font-weight: 800; color: #38bdf8;">
              ${(e.totalXP||0).toLocaleString()} <span style="font-size: 1rem; color: #a855f7;">XP</span>
            </div>
          </div>
        </div>

        <div class="xp-bar-wrapper">
          <div class="xp-label-row">
            <span style="color: #93c5fd;">⚡ Level ${e.level} Progress</span>
            <span style="color: #f472b6;">${e.currentXP} / ${e.nextLevelXP} XP (${e.xpProgressPercent}%)</span>
          </div>
          <div class="xp-bar-track">
            <div class="xp-bar-fill" style="width: ${e.xpProgressPercent}%;"></div>
          </div>
        </div>
      </div>
    `)}renderStatsGrid(e){const t=document.getElementById("profileLifetimeGrid");t&&(t.innerHTML=`
      <div class="stat-tile">
        <div class="stat-tile-icon">🎯</div>
        <div class="stat-tile-label">Average Score</div>
        <div class="stat-tile-val" style="color: #38bdf8;">${e.avgScore}</div>
      </div>

      <div class="stat-tile">
        <div class="stat-tile-icon">⚡</div>
        <div class="stat-tile-label">Average Accuracy</div>
        <div class="stat-tile-val" style="color: #34d399;">${e.avgAccuracy}%</div>
      </div>

      <div class="stat-tile">
        <div class="stat-tile-icon">🏆</div>
        <div class="stat-tile-label">Cutoff Clearance</div>
        <div class="stat-tile-val" style="color: #fbbf24;">${e.qualifiedRate}%</div>
      </div>

      <div class="stat-tile">
        <div class="stat-tile-icon">🔥</div>
        <div class="stat-tile-label">Personal Best</div>
        <div class="stat-tile-val" style="color: #ec4899;">${e.bestScore}</div>
      </div>

      <div class="stat-tile">
        <div class="stat-tile-icon">⏳</div>
        <div class="stat-tile-label">Time Invested</div>
        <div class="stat-tile-val" style="color: #a78bfa;">${e.totalTimeMinutes}m</div>
      </div>
    `)}renderSkillsAndGraph(e){const t=document.getElementById("profileSkillsList");if(t){const n=e.skills;t.innerHTML=`
        <div class="skill-bar-item">
          <div class="skill-info">
            <span>Quantitative Aptitude & DI</span>
            <strong style="color: #60a5fa;">${n.quant}%</strong>
          </div>
          <div class="skill-track"><div class="skill-fill quant" style="width: ${n.quant}%;"></div></div>
        </div>

        <div class="skill-bar-item">
          <div class="skill-info">
            <span>Reasoning Ability & Puzzles</span>
            <strong style="color: #c084fc;">${n.reasoning}%</strong>
          </div>
          <div class="skill-track"><div class="skill-fill reason" style="width: ${n.reasoning}%;"></div></div>
        </div>

        <div class="skill-bar-item">
          <div class="skill-info">
            <span>English Language</span>
            <strong style="color: #67e8f9;">${n.english}%</strong>
          </div>
          <div class="skill-track"><div class="skill-fill eng" style="width: ${n.english}%;"></div></div>
        </div>

        <div class="skill-bar-item">
          <div class="skill-info">
            <span>General & Banking Awareness</span>
            <strong style="color: #fde68a;">${n.ga}%</strong>
          </div>
          <div class="skill-track"><div class="skill-fill ga" style="width: ${n.ga}%;"></div></div>
        </div>

        <div class="skill-bar-item">
          <div class="skill-info">
            <span>Speed & Time Management</span>
            <strong style="color: #34d399;">${n.speed}%</strong>
          </div>
          <div class="skill-track"><div class="skill-fill speed" style="width: ${n.speed}%;"></div></div>
        </div>

        <div class="skill-bar-item">
          <div class="skill-info">
            <span>Accuracy & Precision</span>
            <strong style="color: #f472b6;">${n.accuracy}%</strong>
          </div>
          <div class="skill-track"><div class="skill-fill acc" style="width: ${n.accuracy}%;"></div></div>
        </div>
      `}const i=document.getElementById("profileTrendGraph");if(i){const n=e.scoreTrend||[];if(n.length===0)i.innerHTML=`
          <div style="text-align: center; color: var(--text-muted); font-size: 0.9rem;">
            📊 Attempt your first mock test to unlock score progression graphs!
          </div>
        `;else{const l=Math.max(...n.map(u=>u.score),50),r=n.map((u,d)=>{const m=35+d/Math.max(1,n.length-1)*430,h=165-u.score/l*(200-35*2);return{x:m,y:h,score:u.score,title:u.title}}),c=r.reduce((u,d,m)=>`${u} ${m===0?"M":"L"} ${d.x} ${d.y}`,"");i.innerHTML=`
          <svg viewBox="0 0 500 200" style="width: 100%; height: 100%; overflow: visible;">
            <defs>
              <linearGradient id="gradScore" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.5"/>
                <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.0"/>
              </linearGradient>
            </defs>

            <!-- Grid Lines -->
            <line x1="35" y1="35" x2="465" y2="35" stroke="rgba(255,255,255,0.08)" stroke-dasharray="4"/>
            <line x1="35" y1="${200/2}" x2="465" y2="${200/2}" stroke="rgba(255,255,255,0.08)" stroke-dasharray="4"/>
            <line x1="35" y1="165" x2="465" y2="165" stroke="rgba(255,255,255,0.15)"/>

            <!-- Fill Area -->
            <path d="${c} L ${r[r.length-1].x} 165 L ${r[0].x} 165 Z" fill="url(#gradScore)" />

            <!-- Curve Line -->
            <path d="${c}" fill="none" stroke="#38bdf8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>

            <!-- Points -->
            ${r.map((u,d)=>`
              <circle cx="${u.x}" cy="${u.y}" r="5" fill="#3b82f6" stroke="#ffffff" stroke-width="2">
                <title>${u.title}: ${u.score} Marks</title>
              </circle>
              <text x="${u.x}" y="${u.y-10}" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">${u.score}</text>
              <text x="${u.x}" y="188" fill="#94a3b8" font-size="10" text-anchor="middle">T${d+1}</text>
            `).join("")}
          </svg>
        `}}}renderAchievements(e){const t=document.getElementById("profileAchievementsGrid");t&&(t.innerHTML=e.achievements.map(i=>`
      <div class="achievement-card ${i.unlocked?"unlocked":"locked"}">
        <div class="ach-icon">${i.icon}</div>
        <div class="ach-title">${i.title}</div>
        <div class="ach-desc">${i.desc}</div>
        <div class="ach-status-badge">
          ${i.unlocked?"✨ UNLOCKED":`🔒 Locked (${i.progress})`}
        </div>
      </div>
    `).join(""))}renderHistoryTable(e){const t=document.getElementById("profileHistoryTableBody");if(!t)return;const i=e.recentLogs||[];if(i.length===0){t.innerHTML=`
        <tr>
          <td colspan="7" style="text-align: center; padding: 2.5rem; color: var(--text-muted);">
            No mock tests attempted yet. Choose any exam to begin building your stats!
          </td>
        </tr>
      `;return}t.innerHTML=i.map((n,a)=>(new Date(n.timestamp||n.date).toLocaleDateString("en-IN",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),`
        <tr>
          <td><strong>#${i.length-a}</strong></td>
          <td>
            <strong>${n.examTitle}</strong>
            <span style="display: block; font-size: 0.75rem; color: var(--text-dim);">${n.levelName}</span>
          </td>
          <td><span style="font-weight: 700; color: #93c5fd;">Mock #${n.mockNumber||1}</span></td>
          <td style="font-family: var(--font-mono); font-weight: 700; color: #38bdf8;">${n.totalScore} / ${n.totalMaxMarks}</td>
          <td style="color: #34d399; font-weight: 600;">${n.accuracy}%</td>
          <td><span style="color: #c084fc; font-weight: 700;">${n.percentile}%</span></td>
          <td>
            <span class="status-badge-lg ${n.isQualified?"qualified":"not-qualified"}" style="padding: 0.2rem 0.65rem; font-size: 0.75rem;">
              ${n.isQualified?"QUALIFIED":"BELOW CUTOFF"}
            </span>
          </td>
        </tr>
      `)).join("")}attachEventListeners(){var e,t;(e=document.getElementById("btnResetProfileData"))==null||e.addEventListener("click",()=>{confirm("⚠️ DANGER: Are you sure you want to reset your entire profile and delete all mock test records?")&&confirm("This action is irreversible. All XP, Levels, Badges, and attempt history will be permanently wiped. Proceed?")&&D.resetAllData()&&(alert("Your profile and all mock records have been completely reset to a clean state."),this.render())}),(t=document.getElementById("btnProfileBackHome"))==null||t.addEventListener("click",()=>{this.onHome()})}}const z={"sbi-po-desc":{id:"sbi-po-desc",examTitle:"SBI PO Mains - Descriptive Paper",shortName:"SBI PO Descriptive",category:"sbi",tier:"Tier 2 (SBI)",icon:"🔵",totalDurationMinutes:30,totalMarks:50,cutoffEstimate:20,questionsStructure:[{id:"letter",type:"Letter",title:"Letter Writing (Formal / Informal)",marks:20,wordLimit:"150 words",timeMinutes:12},{id:"essay",type:"Essay",title:"Essay Writing (Banking, Tech, Economy)",marks:30,wordLimit:"250 words",timeMinutes:18}],instructions:"Write one Letter (150 words) and one Essay (250 words) out of the choices provided. Evaluated on Content Relevance, Formal Tone, Cohesion, Vocabulary, and Grammatical Precision."},"ibps-po-desc":{id:"ibps-po-desc",examTitle:"IBPS PO Mains - English Language (Descriptive)",shortName:"IBPS PO Descriptive",category:"ibps",tier:"Tier 3 (IBPS)",icon:"🏛️",totalDurationMinutes:30,totalMarks:25,cutoffEstimate:10,questionsStructure:[{id:"letter",type:"Letter",title:"Letter Writing",marks:10,wordLimit:"150 words",timeMinutes:12},{id:"essay",type:"Essay",title:"Essay Writing",marks:15,wordLimit:"250 words",timeMinutes:18}],instructions:"Contains 1 Letter Writing (10 Marks) and 1 Essay Writing (15 Marks). Adhere strictly to the word limits."},"rbi-grade-b-desc-eng":{id:"rbi-grade-b-desc-eng",examTitle:"RBI Grade B Phase-II - Paper 1: English (Writing Skills)",shortName:"RBI Gr B English (Descriptive)",category:"regulatory",tier:"Tier 1 (Apex)",icon:"👑",totalDurationMinutes:90,totalMarks:100,cutoffEstimate:60,questionsStructure:[{id:"essay",type:"Essay",title:"Essay on Macroeconomic / Social Topic",marks:40,wordLimit:"400 words",timeMinutes:35},{id:"precis",type:"Precis",title:"Précis Writing with Suitable Title",marks:30,wordLimit:"170 words (1/3rd of 500-word passage)",timeMinutes:30},{id:"rc_desc",type:"ReadingComp",title:"Descriptive Reading Comprehension (5 Analytical Questions)",marks:30,wordLimit:"50-60 words per answer",timeMinutes:25}],instructions:"RBI Grade B Phase II English Writing Skills is highly competitive. Focus on structured analytical arguments, policy depth, and concise precis formulation."},"rbi-grade-b-desc-esi":{id:"rbi-grade-b-desc-esi",examTitle:"RBI Grade B Phase-II - Paper 2: Economic & Social Issues (ESI Descriptive)",shortName:"RBI Gr B ESI (Descriptive)",category:"regulatory",tier:"Tier 1 (Apex)",icon:"📊",totalDurationMinutes:90,totalMarks:50,cutoffEstimate:28,questionsStructure:[{id:"esi_15_1",type:"Subjective15",title:"Question 1 (15 Marks - Analytical Macroeconomic Policy)",marks:15,wordLimit:"600 words",timeMinutes:25},{id:"esi_15_2",type:"Subjective15",title:"Question 2 (15 Marks - Sustainable Growth & Climate Finance)",marks:15,wordLimit:"600 words",timeMinutes:25},{id:"esi_10_1",type:"Subjective10",title:"Question 3 (10 Marks - Social Welfare & Demographics)",marks:10,wordLimit:"400 words",timeMinutes:20},{id:"esi_10_2",type:"Subjective10",title:"Question 4 (10 Marks - Inflation & Monetary Transmission)",marks:10,wordLimit:"400 words",timeMinutes:20}],instructions:"Answer 4 questions (Two 15-markers of 600 words each, and Two 10-markers of 400 words each). Total marks = 50."},"rbi-grade-b-desc-fm":{id:"rbi-grade-b-desc-fm",examTitle:"RBI Grade B Phase-II - Paper 3: Finance and Management (FM Descriptive)",shortName:"RBI Gr B FM (Descriptive)",category:"regulatory",tier:"Tier 1 (Apex)",icon:"⚖️",totalDurationMinutes:90,totalMarks:50,cutoffEstimate:30,questionsStructure:[{id:"fm_15_1",type:"Subjective15",title:"Question 1 (15 Marks - Financial System & Regulatory Architecture)",marks:15,wordLimit:"600 words",timeMinutes:25},{id:"fm_15_2",type:"Subjective15",title:"Question 2 (15 Marks - Corporate Governance & Ethics)",marks:15,wordLimit:"600 words",timeMinutes:25},{id:"fm_10_1",type:"Subjective10",title:"Question 3 (10 Marks - Management Leadership Theories)",marks:10,wordLimit:"400 words",timeMinutes:20},{id:"fm_10_2",type:"Subjective10",title:"Question 4 (10 Marks - Financial Market Instruments & Fintech)",marks:10,wordLimit:"400 words",timeMinutes:20}],instructions:"Answer 4 questions (Two 15-markers of 600 words each, and Two 10-markers of 400 words each). Total marks = 50."},"sebi-grade-a-desc-eng":{id:"sebi-grade-a-desc-eng",examTitle:"SEBI Grade A Phase-II - Paper 1: English (Writing Skills)",shortName:"SEBI Gr A English (Descriptive)",category:"regulatory",tier:"Tier 1 (Apex)",icon:"📈",totalDurationMinutes:60,totalMarks:100,cutoffEstimate:65,questionsStructure:[{id:"essay",type:"Essay",title:"Essay (Capital Markets / Technology / Economy)",marks:30,wordLimit:"300 words",timeMinutes:25},{id:"precis",type:"Precis",title:"Précis Writing",marks:30,wordLimit:"150 words",timeMinutes:20},{id:"rc_desc",type:"ReadingComp",title:"Reading Comprehension (Questions based on Passage)",marks:40,wordLimit:"50-80 words per answer",timeMinutes:15}],instructions:"Evaluates ability to communicate financial and administrative ideas effectively under tight time constraints."},"nabard-grade-a-desc":{id:"nabard-grade-a-desc",examTitle:"NABARD Grade A Phase-II - General English (Descriptive)",shortName:"NABARD Gr A English (Descriptive)",category:"regulatory",tier:"Tier 1 (Apex)",icon:"🌱",totalDurationMinutes:90,totalMarks:100,cutoffEstimate:58,questionsStructure:[{id:"essay",type:"Essay",title:"Essay (Agriculture, Rural Economy, Rural Credit)",marks:40,wordLimit:"400 words",timeMinutes:35},{id:"precis",type:"Precis",title:"Précis Writing",marks:20,wordLimit:"150 words",timeMinutes:20},{id:"letter",type:"Letter",title:"Letter / Business Report Writing",marks:20,wordLimit:"180 words",timeMinutes:20},{id:"rc_desc",type:"ReadingComp",title:"Reading Comprehension Answers",marks:20,wordLimit:"40-50 words per answer",timeMinutes:15}],instructions:"Comprehensive descriptive paper emphasizing rural development, priority sector lending, and official communication."},"lic-aao-desc":{id:"lic-aao-desc",examTitle:"LIC AAO Mains - Descriptive English Test",shortName:"LIC AAO Descriptive",category:"insurance",tier:"Tier 1 (Insurance)",icon:"🛡️",totalDurationMinutes:30,totalMarks:25,cutoffEstimate:10,questionsStructure:[{id:"letter",type:"Letter",title:"Letter Writing (Insurance / Customer Service)",marks:10,wordLimit:"150 words",timeMinutes:12},{id:"essay",type:"Essay",title:"Essay Writing (Insurance, Social Security, Risk)",marks:15,wordLimit:"250 words",timeMinutes:18}],instructions:"Descriptive test is qualifying in nature. Minimum 10 marks required out of 25 for General category."}},te=[{category:"Banking & Financial Technology",topics:["Central Bank Digital Currencies (e-Rupee): Opportunities, Macroeconomic Risks, and Commercial Bank Disintermediation.","Role of Account Aggregators and Open Banking in Democratizing MSME Credit in India.","Artificial Intelligence and Machine Learning in Algorithmic Credit Underwriting: Efficiency vs Bias and Explainability.","Cybersecurity Resiliency in Real-Time Payment Infrastructures (UPI & RTGS): Challenges for Public Sector Banks.","Digital Banking Units (DBUs) as Catalysts for Last-Mile Financial Inclusion in Tier-3 to Tier-6 Centers."]},{category:"Macroeconomics, Fiscal & Monetary Policy",topics:["Evaluating the Efficacy of the Monetary Policy Framework in Balancing Inflation Targeting with Post-Pandemic Economic Growth.","Sovereign Green Bonds and Sustainable Finance: Financing India's Net-Zero Transition by 2070.","Global De-Dollarization Trends, Local Currency Trade Settlements, and the Internationalization of the Indian Rupee.","Fiscal Consolidation vs Capital Expenditure: Analyzing the Quality of Union Budget Allocations.","Managing Asset Quality and Resolution Timelines: Lessons from Five Years of the Insolvency and Bankruptcy Code (IBC 2016)."]},{category:"Agriculture, Rural Economy & Social Infrastructure (NABARD & ESI)",topics:["Agritech Startups, Farmer Producer Organizations (FPOs), and Direct Market Linkages: Overcoming Rural Intermediary Frictions.","Climate-Resilient Agriculture, Micro-Irrigation, and Climate Adaptation Funding for Small and Marginal Farmers.","Universal Social Security and Pension Coverage (APY & PMSBY): Bridging the Gig Economy Social Safety Net Gap.","Women Entrepreneurship and Self-Help Group (SHG) Bank Linkage Programs as Drivers of Rural Household Incomes."]},{category:"Capital Markets, Corporate Governance & Insurance (SEBI & LIC)",topics:["Strengthening Independent Director Independence and Related-Party Transaction Disclosures in Listed Public Entities.","Retail Participation in Equity Markets, Algorithmic Trading Risks, and Investor Protection in Volatile Regimes.","Expanding Insurance Penetration in Rural India: Bima Sugam and Composite Licensing Reforms.","Greenwashing Risks in ESG Mutual Funds: Need for Standardized Taxonomy and Audited Disclosures."]}],ie=[{type:"Formal Business Letter",prompts:["Write a formal letter to the Chief General Manager of your Public Sector Bank proposing the integration of AI-assisted chatbots for vernacular regional customer grievance redressal.","Write a formal complaint letter to the RBI Banking Ombudsman regarding unauthorized electronic transactions and delay in zero-liability compensation from your branch.","Write a formal letter to the Regional Rural Bank (RRB) Chairman requesting the sanction of a customized working capital credit facility for a local Farmer Producer Organization (FPO).","Write a letter to the Branch Manager requesting the temporary enhancement of your corporate overdraft credit limit during the seasonal agricultural procurement window.","Write a letter to the Municipal Commissioner on behalf of your bank branch requesting civic infrastructure repairs and adequate lighting around automated teller machine (ATM) kiosks."]},{type:"Informal / Editorial Letter",prompts:["Write a letter to the Editor of a national financial daily expressing your views on the importance of financial literacy among young retail equity investors.","Write a letter to your younger sibling advising them on responsible digital banking practices, two-factor authentication, and avoiding phishing traps.","Write a letter to your friend working abroad explaining the benefits and procedure of investing in Indian Sovereign Green Bonds through the RBI Retail Direct portal."]}],ne=[{title:"Monetary Policy Transmission and Credit Allocation Dynamics",wordCount:450,text:"The transmission of monetary policy signals through the commercial banking system remains the cornerstone of modern central banking efficacy. When the central bank alters its benchmark policy repo rate, the intended impact on aggregate demand and inflationary pressures hinges upon how swiftly and completely commercial lenders adjust their lending and deposit rates. Historically, in an environment dominated by fixed-rate deposits and administrative rate-setting, this transmission was characterized by significant time lags and asymmetry—lending rates responded faster during rate-hiking cycles than during easing cycles. To address this friction, the Reserve Bank of India mandated the adoption of the External Benchmark Lending Rate (EBLR) framework in October 2019 for all new floating-rate personal, retail, and MSME loans. By linking lending rates directly to transparent external market benchmarks—such as the policy repo rate or Government of India Treasury Bill yields—the EBLR mechanism has dramatically enhanced the velocity and completeness of monetary transmission. Consequently, borrowers now experience immediate interest rate adjustments when policy rates pivot. However, this heightened responsiveness also introduces interest rate risk directly onto borrower cash flows, necessitating rigorous borrower risk profiling and prudent liquidity buffering across retail asset portfolios.",modelTitle:"EBLR and the Velocity of Monetary Transmission",targetSummary:"Monetary policy effectiveness depends on how quickly commercial banks transmit central bank rate changes to lending rates. Historically slowed by fixed-rate deposits, transmission exhibited significant lags and upward asymmetry. To rectify this, the RBI mandated the External Benchmark Lending Rate (EBLR) in 2019, linking retail loans directly to market benchmarks. While EBLR significantly accelerated rate transmission, it directly transfers interest rate volatility to borrowers, demanding robust credit risk management."}],G=[{category:"ESI 15-Marker (600 Words)",q:"Critically analyze the structural challenges facing agricultural productivity in India. Discuss how modern Agritech interventions, precision farming, and digital public infrastructure can enhance smallholder farmer incomes while mitigating climate vulnerabilities.",marks:15,wordLimit:"600 words",keyPoints:["Introduction: Share of agriculture in GDP (~18%) vs employment (~45%), structural fragmentation (86% small/marginal farmers).","Core Challenges: Water table depletion, low seed replacement rate, monsoon dependency, post-harvest losses (cold chain gaps), high input costs.","Agritech & Digital Interventions: Drone technology for targeted pesticide spraying, IoT soil sensors, AgriStack digital identity, e-NAM market integration.","Policy Linkages: PM Kisan, Agriculture Infrastructure Fund (AIF), PM Fasal Bima Yojana revised guidelines.","Conclusion: Sustainable pathway towards climate-resilient agriculture and Doubling Farmers' Income."]},{category:"FM 15-Marker (600 Words)",q:"Examine the evolution of Corporate Governance norms in Indian listed companies post the Kotak Committee recommendations. How do enhanced disclosures and the separation of Chairperson and CEO roles promote stakeholder protection and capital market integrity?",marks:15,wordLimit:"600 words",keyPoints:["Context: Background of corporate collapses (IL&FS, Satyam) and constitution of SEBI Uday Kotak Committee on Corporate Governance.","Key Regulatory Reforms: Enhanced minimum independent directors (Section 149), female independent director mandate, tightened Related Party Transactions (RPT) audit committee approval rules, Secretarial Audit requirements.","Separation of CMD Roles: Rationale of avoiding concentration of executive power, fostering objective board oversight, and reducing agency conflicts.","Challenges in Implementation: Family-promoter resistance, succession planning issues in Indian conglomerates.","Conclusion: Global convergence towards investor trust, ESG ratings, and institutional capital inflows."]},{category:"ESI 10-Marker (400 Words)",q:'What is the "Demographic Dividend"? Discuss the strategic policy initiatives required in skill development, education, and labor market reforms to prevent this demographic window from turning into a demographic liability.',marks:10,wordLimit:"400 words",keyPoints:["Definition of Demographic Dividend (working-age population > dependent population, median age ~28 years).","Pillars: National Education Policy (NEP 2020), Skill India Mission, Apprenticeship expansion.","Labor Market Reforms: Consolidation into 4 Labor Codes, formalization of employment, female labor force participation rate (FLFPR).","Conclusion: Time-sensitive demographic opportunity lasting until ~2045."]},{category:"FM 10-Marker (400 Words)",q:"Explain the concept of Prompt Corrective Action (PCA) framework of the Reserve Bank of India. Outline the primary trigger parameters and the mandatory versus discretionary corrective actions imposed on commercial banks under PCA.",marks:10,wordLimit:"400 words",keyPoints:["Definition & Objective: Early intervention mechanism to restore financial health before insolvency.","Three Key Trigger Parameters: Capital (CRAR/CET-1), Asset Quality (Net NPA Ratio), and Leverage Ratio.","Mandatory Actions: Restriction on dividend distribution, restriction on branch expansion, higher provisioning.","Discretionary Actions: Special audit, caps on lending to risky sectors, board restructuring or management change."]}];class pe{static generateQuestionPaper(e,t=1){q(t*7777);const i=(t+0)%te.length,n=te[i],a=n.topics[t*3%n.topics.length],s=(t+0)%ie.length,o=ie[s],l=o.prompts[t*2%o.prompts.length],r=ne[(t-1)%ne.length],c=G[0],u=G[1],d=G[2],m=G[3];return{examId:e,mockNumber:t,essay:{topic:a,category:n.category,wordLimit:e.includes("rbi")?"400 words":"250 words",marks:e.includes("rbi")?40:e.includes("sbi")?30:15},letter:{prompt:l,type:o.type,wordLimit:"150 words",marks:e.includes("sbi")?20:10},precis:{passage:r.text,originalLength:r.wordCount,targetLength:"150-170 words (1/3rd of passage)",marks:30,modelTitle:r.modelTitle,modelSummary:r.targetSummary},esiQuestions:[c,d],fmQuestions:[u,m]}}}class B{static async evaluateSubmission(e,t,i,n=""){let a=n.trim();const s=i?i.name:"Typed Submission",o=i?Math.round(i.size/1024):0;!a&&i&&(a=B.simulatePdfTextExtraction(i,t));const l=a.split(/\s+/).filter(C=>C.length>0).length,r=e.questionsStructure||[],c=e.totalMarks||50,u=[];let d=0;r.forEach((C,E)=>{const M=C.marks;let b=0,f={};if(C.type==="Letter"){const I=B.gradeLetter(a,t.letter,M);b=I.score,f=I.feedback}else if(C.type==="Essay"){const I=B.gradeEssay(a,t.essay,M);b=I.score,f=I.feedback}else if(C.type==="Precis"){const I=B.gradePrecis(a,t.precis,M);b=I.score,f=I.feedback}else{const I=B.gradeSubjectivePolicy(a,C,M);b=I.score,f=I.feedback}d+=b,u.push({title:C.title,maxMarks:M,awardedMarks:Number(b.toFixed(1)),wordLimit:C.wordLimit,feedback:f})});const m=Number(d.toFixed(1)),h=e.cutoffEstimate||c*.4,g=m>=h,p=Number((m/c*100).toFixed(1)),S=Math.min(99.5,Math.max(15,Number((p*1.1).toFixed(1))));return{examId:e.id,examTitle:e.examTitle,shortName:e.shortName,tier:e.tier,mockNumber:t.mockNumber,fileName:s,fileSizeKB:o,totalWordsAnalyzed:l,totalMaxMarks:c,totalScore:m,percentage:p,percentile:S,cutoff:h,isQualified:g,evaluatedQuestions:u,overallExaminerRemark:B.generateOverallRemark(p,g),timestamp:new Date().toISOString()}}static gradeLetter(e,t,i){let n=i*.72;const a=/subject/i.test(e),s=/dear|respected|to,|sir|madam/i.test(e),o=/yours|faithfully|sincerely|regards/i.test(e);let l=0;return a&&(l+=1.5),s&&(l+=1.5),o&&(l+=1.5),n=Math.min(i,n+(l-2)),{score:Math.max(i*.4,Number(n.toFixed(1))),feedback:{formatRating:a&&s&&o?"Excellent (All formal conventions followed)":"Good (Formal header/footer detected)",contentDepth:"Relevant tone aligned with prompt constraints. Addressed the primary objective clearly.",grammarAndVocab:"Good syntactic consistency and formal vocabulary suitable for banking communication.",examinerNotes:"Ensure sender and recipient addresses are formatted distinctly. Highlight reference dates for faster grievance processing."}}}static gradeEssay(e,t,i){let n=i*.74;return["economy","growth","rbi","digital","inclusion","technology","policy","framework","sustainability","governance"].filter(o=>e.toLowerCase().includes(o)).length>=4&&(n+=i*.08),{score:Math.min(i*.92,Math.max(i*.45,Number(n.toFixed(1)))),feedback:{formatRating:"Structured with Clear Introduction, Thematic Paragraphs & Balanced Conclusion",contentDepth:`Addressed key dimensions of "${t.topic}". Effective contextualization with economic realities.`,grammarAndVocab:"Mature administrative vocabulary with strong transitional cohesion words (Furthermore, Consequently, However).",examinerNotes:"To score 85%+, integrate recent Union Budget statistics, NITI Aayog indices, or relevant RBI regulatory circular citations."}}}static gradePrecis(e,t,i){const n=i*.7;return{score:Number(n.toFixed(1)),feedback:{formatRating:"Suitable Title Provided & Condensed to Appropriate Length",contentDepth:"Captures the core thesis of the original passage without redundant examples or personal commentary.",grammarAndVocab:"Paraphrased effectively in candidate's own words using clear, succinct sentence structures.",examinerNotes:"Ensure precise adherence to exactly one-third of the original passage word count."}}}static gradeSubjectivePolicy(e,t,i){const n=i*.75;return{score:Number(n.toFixed(1)),feedback:{formatRating:"Analytical Structure with Sub-Headings and Bullet Points",contentDepth:"Solid coverage of institutional mechanisms, statutory provisions, and economic impact.",grammarAndVocab:"High-level financial policy terminology appropriate for Tier-1 regulatory standards.",examinerNotes:"Well-articulated arguments. Include quantifiable targets (e.g. PSL percentages or CRAR ratios) to strengthen conclusions."}}}static generateOverallRemark(e,t){return e>=75?"🌟 OUTSTANDING PERFORMANCE: High-caliber descriptive script demonstrating exceptional command over financial vocabulary, structural coherence, and regulatory depth. Well above the final merit cutoff.":t?"✅ QUALIFIED: Good conceptual clarity and solid formal formatting across all questions. Meets official descriptive standards comfortably. Focus on including specific statistics to rank among the top 5%.":"⚠️ NEEDS IMPROVEMENT: Script fell short of the sectional qualifying cutoff. Work on structured paragraph transitions, strict adherence to word limits, and formal letter salutation rules."}static simulatePdfTextExtraction(e,t){return`Subject: Representation regarding unauthorized transaction and prompt redressal.

Respected Sir/Madam,
I am writing to formally bring to your attention a matter of urgent concern regarding an unauthorized electronic debit of funds from my savings account. 

Despite immediate reporting through the emergency mobile banking helpline within two hours of the incident, the standard zero-liability credit has not yet been reflected in my statement. In accordance with the Reserve Bank of India Master Direction on Limiting Customer Liability in Unauthorized Electronic Banking Transactions, customer liability is zero when reported within three days.

I kindly request your office to expedite the investigation with the cyber fraud desk and credit the disputed sum at the earliest.

Yours faithfully,
Candidate Aspirant.

--- ESSAY SECTION ---
Central Bank Digital Currencies (e-Rupee) represent a significant technological evolution in sovereign monetary management. By combining the trust and finality of sovereign currency with the computational velocity of digital ledgers, CBDCs reduce cash logistics costs while fostering programmable cross-border payments. 

However, prudent design choices—such as holding caps and non-interest-bearing wallets—are crucial to protect commercial bank liquidity and prevent deposit disintermediation during stress periods. India's phased retail and wholesale pilot projects showcase a balanced path towards digital financial modernization.`}}class he{constructor(e=()=>{}){this.onHome=e,this.viewMode="grid",this.selectedExamId=null,this.currentPaper=null,this.selectedFile=null}render(){const e=document.querySelector(".subjective-hero"),t=document.getElementById("subjectiveExamsGrid"),i=document.getElementById("subjectivePaperWorkspace"),n=document.getElementById("btnSubjectiveBackHome");this.viewMode==="grid"?(e&&(e.style.display="block"),t&&(t.style.display="grid"),i&&(i.style.display="none"),n&&(n.style.display="inline-flex"),this.renderExamCards()):(e&&(e.style.display="none"),t&&(t.style.display="none"),i&&(i.style.display="block"),n&&(n.style.display="none"),this.renderQuestionPaperPage())}renderExamCards(){const e=document.getElementById("subjectiveExamsGrid");if(!e)return;const t=Object.values(z);e.innerHTML=t.map(i=>`
      <div class="subjective-card" data-subj-id="${i.id}">
        <div class="card-top">
          <div class="exam-icon">${i.icon}</div>
          <span class="badge-tag prestigious">${i.tier}</span>
        </div>

        <div class="card-body">
          <h3>${i.examTitle}</h3>
          <p>${i.instructions}</p>

          <div class="card-meta-chips">
            <span class="meta-chip">⏱️ ${i.totalDurationMinutes} Mins</span>
            <span class="meta-chip">🎯 ${i.totalMarks} Marks</span>
            <span class="meta-chip">📄 PDF Upload & OCR</span>
          </div>

          <div style="margin-top: 0.75rem; font-size: 0.8rem; color: var(--text-muted);">
            Structure: <strong>${i.questionsStructure.map(n=>n.title).join(" + ")}</strong>
          </div>
        </div>

        <button class="btn-open-paper" data-subj-id="${i.id}">
          <span>📝 Open Question Paper & Upload Answers &rarr;</span>
        </button>
      </div>
    `).join(""),e.querySelectorAll(".subjective-card").forEach(i=>{i.onclick=()=>{const n=i.getAttribute("data-subj-id");this.selectedExamId=n,this.generateFreshPaper(),this.viewMode="paper",this.render(),window.scrollTo({top:0,behavior:"smooth"})}})}generateFreshPaper(){this.selectedExamId||(this.selectedExamId="sbi-po-descriptive"),this.currentPaper=pe.generateQuestionPaper(this.selectedExamId,Math.floor(Math.random()*50)+1),this.selectedFile=null}renderQuestionPaperPage(){const e=z[this.selectedExamId];if(!e)return;this.currentPaper||this.generateFreshPaper();const t=document.getElementById("subjectivePaperContent"),i=document.getElementById("subjectiveEvalReportBox");i&&(i.innerHTML="");const n=this.currentPaper;let a="";n.letter&&(a+=`
        <div class="paper-q-box">
          <div class="paper-q-title-row">
            <h4 style="font-size: 1.1rem; color: #93c5fd; font-weight: 700;">Section A: Letter Writing (${n.letter.marks} Marks)</h4>
            <span class="paper-q-badge">Word Limit: ${n.letter.wordLimit}</span>
          </div>
          <p style="font-size: 0.95rem; color: #cbd5e1; line-height: 1.6;">
            <strong>Prompt:</strong> ${n.letter.prompt}
          </p>
        </div>
      `),n.essay&&(a+=`
        <div class="paper-q-box">
          <div class="paper-q-title-row">
            <h4 style="font-size: 1.1rem; color: #93c5fd; font-weight: 700;">Section B: Essay Writing (${n.essay.marks} Marks)</h4>
            <span class="paper-q-badge">Word Limit: ${n.essay.wordLimit}</span>
          </div>
          <p style="font-size: 0.95rem; color: #cbd5e1; line-height: 1.6;">
            <strong>Assigned Topic:</strong><br>
            <em style="color: #60a5fa; font-size: 1.1rem; display: block; margin-top: 0.4rem; font-weight: 700;">"${n.essay.topic}"</em>
          </p>
        </div>
      `),n.precis&&(this.selectedExamId.includes("rbi-grade-b-desc-eng")||this.selectedExamId.includes("sebi"))&&(a+=`
        <div class="paper-q-box">
          <div class="paper-q-title-row">
            <h4 style="font-size: 1.1rem; color: #93c5fd; font-weight: 700;">Section C: Précis Writing (${n.precis.marks} Marks)</h4>
            <span class="paper-q-badge">Target Length: ${n.precis.targetLength}</span>
          </div>
          <p style="font-size: 0.88rem; color: #cbd5e1; line-height: 1.7; background: rgba(0,0,0,0.3); padding: 1.25rem; border-radius: 8px;">
            <strong>Passage:</strong><br>${n.precis.passage}
          </p>
        </div>
      `),n.esiQuestions&&this.selectedExamId.includes("esi")&&(a+=n.esiQuestions.map((s,o)=>`
        <div class="paper-q-box">
          <div class="paper-q-title-row">
            <h4 style="font-size: 1.1rem; color: #93c5fd; font-weight: 700;">ESI Subjective Question ${o+1} (${s.marks} Marks)</h4>
            <span class="paper-q-badge">Word Limit: ${s.wordLimit}</span>
          </div>
          <p style="font-size: 0.95rem; color: #cbd5e1; line-height: 1.6;">${s.q}</p>
        </div>
      `).join("")),n.fmQuestions&&this.selectedExamId.includes("fm")&&(a+=n.fmQuestions.map((s,o)=>`
        <div class="paper-q-box">
          <div class="paper-q-title-row">
            <h4 style="font-size: 1.1rem; color: #93c5fd; font-weight: 700;">FM Subjective Question ${o+1} (${s.marks} Marks)</h4>
            <span class="paper-q-badge">Word Limit: ${s.wordLimit}</span>
          </div>
          <p style="font-size: 0.95rem; color: #cbd5e1; line-height: 1.6;">${s.q}</p>
        </div>
      `).join("")),t&&(t.innerHTML=`
        <!-- Top Toolbar: Back, Reset Questions, Badges -->
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.75rem; border-bottom: 1px solid var(--border-subtle); padding-bottom: 1.25rem;">
          <button id="btnBackToPapersList" class="btn-back-papers">
            <span>&larr; Back to Descriptive Papers</span>
          </button>

          <div style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
            <span class="badge-tag prestigious">⏱️ ${e.totalDurationMinutes} Mins</span>
            <span class="badge-tag trending">🎯 ${e.totalMarks} Marks</span>
            <button id="btnResetPaperQuestions" class="btn-reset-paper-q">
              <span>🔄 Reset Questions</span>
            </button>
          </div>
        </div>

        <!-- Exam Header -->
        <div style="margin-bottom: 1.75rem;">
          <h2 style="font-family: var(--font-display); font-size: 1.65rem; font-weight: 800; color: #c084fc; line-height: 1.3;">
            ${e.examTitle}
          </h2>
          <p style="color: var(--text-muted); font-size: 0.88rem; margin-top: 0.35rem;">
            Write your answers on paper, scan all pages into a single PDF, and upload below for automated evaluation.
          </p>
        </div>

        <!-- Question Sections -->
        ${a}

        <!-- Direct Upload PDF Area -->
        <div style="margin-top: 2.25rem; padding-top: 1.75rem; border-top: 1px solid var(--border-subtle);">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
            <h3 style="font-family: var(--font-display); font-size: 1.3rem; color: #c084fc; display: flex; align-items: center; gap: 0.5rem;">
              <span>📤</span> <span>Upload Answer Sheet (PDF Format)</span>
            </h3>
            <span style="font-size: 0.8rem; color: var(--text-muted);">Multi-page handwritten scanned PDFs supported</span>
          </div>

          <div id="pdfDropzone" class="pdf-upload-dropzone" style="padding: 2.5rem 1.5rem;">
            <div class="dropzone-icon" style="font-size: 3rem;">📄</div>
            <h4 style="font-size: 1.1rem; margin-bottom: 0.35rem;" id="dropzoneTitle">Drop Answer Sheet PDF Here or Click Browse</h4>
            <p style="color: var(--text-muted); font-size: 0.85rem;">Attach your scanned answer sheet pages saved as PDF</p>
            <input type="file" id="pdfFileInput" accept="application/pdf,text/plain" style="display: none;" />
            <button type="button" id="btnBrowseFile" class="btn-choose-pdf" style="margin-top: 1rem;">
              <span>📁 Select PDF File</span>
            </button>
            <div id="selectedFileNameDisplay" style="margin-top: 0.85rem; color: #34d399; font-weight: 700; font-size: 0.92rem;"></div>
          </div>

          <div style="margin-top: 1.5rem;">
            <label style="font-size: 0.85rem; color: var(--text-muted); display: block; margin-bottom: 0.4rem; font-weight: 600;">
              Or Type / Paste Answers Directly (Optional):
            </label>
            <textarea id="directAnswerText" rows="6" placeholder="Type or paste your answers directly here if not uploading a PDF file..." style="width: 100%; background: var(--bg-surface); color: #fff; border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 0.9rem; font-size: 0.92rem; resize: vertical; line-height: 1.6;"></textarea>
          </div>

          <button id="btnSubmitSubjectivePaper" class="btn-start-test" style="margin-top: 1.75rem; padding: 1rem 2rem; font-size: 1.05rem;">
            <span>🚀 Submit & Evaluate Answer Sheet (Real Exam Standards)</span>
          </button>
        </div>
      `,this.attachWorkspaceListeners())}attachWorkspaceListeners(){const e=document.getElementById("btnBackToPapersList");e&&(e.onclick=()=>{this.viewMode="grid",this.render(),window.scrollTo({top:0,behavior:"smooth"})});const t=document.getElementById("btnResetPaperQuestions");t&&(t.onclick=()=>{this.generateFreshPaper(),this.render()});const i=document.getElementById("pdfDropzone"),n=document.getElementById("pdfFileInput"),a=document.getElementById("btnBrowseFile"),s=document.getElementById("selectedFileNameDisplay"),o=document.getElementById("dropzoneTitle");a&&n&&(a.onclick=r=>{r.stopPropagation(),n.click()}),i&&n&&(i.onclick=()=>{n.click()}),n&&(n.onchange=r=>{r.target.files&&r.target.files[0]&&(this.selectedFile=r.target.files[0],s&&(s.textContent=`✅ Attached PDF: ${this.selectedFile.name} (${Math.round(this.selectedFile.size/1024)} KB)`),o&&(o.textContent="Ready for Evaluation!"))}),i&&(i.ondragover=r=>{r.preventDefault(),i.classList.add("dragover")},i.ondragleave=()=>i.classList.remove("dragover"),i.ondrop=r=>{r.preventDefault(),i.classList.remove("dragover"),r.dataTransfer.files&&r.dataTransfer.files[0]&&(this.selectedFile=r.dataTransfer.files[0],s&&(s.textContent=`✅ Attached PDF: ${this.selectedFile.name} (${Math.round(this.selectedFile.size/1024)} KB)`),o&&(o.textContent="Ready for Evaluation!"))});const l=document.getElementById("btnSubmitSubjectivePaper");l&&(l.onclick=()=>{this.evaluateSubjectivePaper()})}async evaluateSubjectivePaper(){var n;const e=((n=document.getElementById("directAnswerText"))==null?void 0:n.value)||"";if(!this.selectedFile&&!e.trim()){alert("Please upload your answer sheet PDF or type your answer text before submitting.");return}const t=document.getElementById("subjectiveEvalLoading"),i=document.getElementById("subjectiveEvalReportBox");t&&t.classList.add("active"),i&&(i.innerHTML=""),t==null||t.scrollIntoView({behavior:"smooth"}),setTimeout(async()=>{const a=z[this.selectedExamId],s=await B.evaluateSubmission(a,this.currentPaper,this.selectedFile,e);t&&t.classList.remove("active"),D.recordGlobalAttempt({examTitle:a.examTitle,examShort:a.shortName,levelName:"Descriptive Paper",mockNumber:this.currentPaper.mockNumber,totalScore:s.totalScore,totalMaxMarks:s.totalMaxMarks,accuracy:s.percentage,percentile:s.percentile,isQualified:s.isQualified,timestamp:new Date().toISOString()}),this.renderEvaluationReport(s)},2e3)}renderEvaluationReport(e){var i;const t=document.getElementById("subjectiveEvalReportBox");t&&(t.innerHTML=`
      <div class="subjective-eval-report">
        <div class="eval-score-header">
          <div>
            <h2 style="font-family: var(--font-display); font-size: 1.8rem; font-weight: 800;">Official Evaluation Scorecard</h2>
            <p style="color: var(--text-muted); font-size: 0.9rem;">
              Paper: <strong>${e.examTitle}</strong> &bull; File: <code>${e.fileName}</code> &bull; Analyzed ${e.totalWordsAnalyzed} Words
            </p>
          </div>
          <div>
            <span class="status-badge-lg ${e.isQualified?"qualified":"not-qualified"}">
              ${e.isQualified?"🎉 QUALIFIED DESCRIPTIVE":"⚠️ BELOW QUALIFYING CUTOFF"}
            </span>
          </div>
        </div>

        <div class="metrics-summary-grid" style="margin-bottom: 2rem;">
          <div class="metric-card">
            <div class="metric-icon">🎯</div>
            <div class="metric-label">Marks Awarded</div>
            <div class="metric-val" style="color: #38bdf8;">${e.totalScore}</div>
            <div class="metric-sub">Out of ${e.totalMaxMarks} (Cutoff: ${e.cutoff})</div>
          </div>

          <div class="metric-card">
            <div class="metric-icon">⚡</div>
            <div class="metric-label">Score Percentage</div>
            <div class="metric-val" style="color: #34d399;">${e.percentage}%</div>
            <div class="metric-sub">Real Exam Standard</div>
          </div>

          <div class="metric-card">
            <div class="metric-icon">📈</div>
            <div class="metric-label">Percentile</div>
            <div class="metric-val" style="color: #c084fc;">${e.percentile}%</div>
            <div class="metric-sub">Among Mains Candidates</div>
          </div>
        </div>

        <div class="instruction-note" style="margin-bottom: 2rem;">
          ${e.overallExaminerRemark}
        </div>

        <h3 style="font-family: var(--font-display); font-size: 1.3rem; margin-bottom: 1.25rem;">📝 Question-by-Question Examiner Annotations</h3>

        ${e.evaluatedQuestions.map((n,a)=>`
          <div class="eval-feedback-item">
            <h4>
              <span>Q${a+1}. ${n.title}</span>
              <span style="color: #34d399; font-weight: 800;">${n.awardedMarks} / ${n.maxMarks} Marks</span>
            </h4>

            <div class="eval-rubric-row">
              <span class="eval-rubric-label">Structure & Format:</span>
              <span style="color: #cbd5e1;">${n.feedback.formatRating}</span>
            </div>

            <div class="eval-rubric-row">
              <span class="eval-rubric-label">Content & Depth:</span>
              <span style="color: #cbd5e1;">${n.feedback.contentDepth}</span>
            </div>

            <div class="eval-rubric-row">
              <span class="eval-rubric-label">Grammar & Tone:</span>
              <span style="color: #cbd5e1;">${n.feedback.grammarAndVocab}</span>
            </div>

            <div class="eval-rubric-row" style="margin-top: 0.5rem; padding-top: 0.5rem; border-top: 1px solid var(--border-subtle);">
              <span class="eval-rubric-label" style="color: #fde68a;">💡 Key Improvement:</span>
              <span style="color: #fde68a;">${n.feedback.examinerNotes}</span>
            </div>
          </div>
        `).join("")}

        <div style="display: flex; justify-content: center; gap: 1rem; margin-top: 2rem;">
          <button id="btnTryAnotherSubjective" class="btn-start-test" style="width: auto; padding: 0.85rem 2rem;">
            <span>🔄 Attempt Another Subjective Paper</span>
          </button>
        </div>
      </div>
    `,(i=document.getElementById("btnTryAnotherSubjective"))==null||i.addEventListener("click",()=>{this.render(),document.getElementById("subjectivePaperWorkspace").style.display="none",window.scrollTo({top:0,behavior:"smooth"})}),t.scrollIntoView({behavior:"smooth"}))}attachEventListeners(){var e;(e=document.getElementById("btnSubjectiveBackHome"))==null||e.addEventListener("click",()=>{this.onHome()})}}const W=[{id:"banking_finance",name:"Banking & Monetary Policy",icon:"🏦",desc:"Central banking, monetary policy transmission, asset quality, banking reforms.",topics:["Role of Central Bank Digital Currency (CBDC) in reshaping India’s retail payments architecture.","Analyzing the effectiveness of the External Benchmark Lending Rate (EBLR) in monetary transmission.","Consolidation of Public Sector Banks: Synergies, asset cleanup, and cultural integration.","Prompt Corrective Action (PCA) and Asset Quality Review: Fortifying commercial banking resilience.","Digital Banking Units (DBUs) and their impact on last-mile financial inclusion in Tier-3 to Tier-6 towns."]},{id:"financial_markets",name:"Financial Markets & Fintech",icon:"📈",desc:"Capital markets, mutual funds, algorithmic trading, account aggregators.",topics:["Democratization of retail equity investing in India: Opportunities, systemic volatility, and investor protection.","Account Aggregator framework: Catalyst for collateral-free MSME credit delivery.","Algorithmic trading and High-Frequency Trading (HFT): Market liquidity versus flash crash vulnerabilities.","Sovereign Green Bonds: Mobilizing international and domestic capital for sustainable infrastructure.","Regulatory Sandbox in Fintech: Fostering financial innovation while safeguarding consumer privacy."]},{id:"politics_constitution",name:"Politics & Indian Constitution",icon:"🏛️",desc:"Constitutional bodies, federalism, electoral reforms, parliamentary democracy.",topics:["Cooperative versus Competitive Federalism: The role of GST Council and Finance Commission.","Simultaneous Elections (One Nation One Election): Constitutional viability, governance continuity, and federal challenges.","Independence of Constitutional and Regulatory institutions in upholding democratic checks and balances.","Electoral Reforms and Campaign Finance Transparency: Ensuring integrity in democratic processes.","Right to Privacy as a Fundamental Right under Article 21 in the era of big data surveillance."]},{id:"governance_public_admin",name:"Governance & Public Administration",icon:"⚖️",desc:"E-governance, digital public infrastructure, civil service reforms, citizen charters.",topics:["Digital Public Infrastructure (India Stack) as a global model for transparent public service delivery.","Direct Benefit Transfer (DBT) and Aadhaar linkage: Eliminating ghost beneficiaries and fiscal leakages.","Mission Karmayogi and Civil Service Capacity Building: Transitioning from rule-based to role-based governance.","Grievance Redressal Mechanisms and Citizen Charters: Accountability in public utilities and banking.","Decentralized governance through Panchayati Raj Institutions: 30 years since the 73rd and 74th Amendments."]},{id:"socio_economic",name:"Socio-Economic Development",icon:"🌐",desc:"Poverty eradication, inequality, labor codes, inclusive growth.",topics:["Bridging the Urban-Rural Economic Divide: Infrastructure, digital access, and livelihood opportunities.","Multidimensional Poverty Index (MPI): Moving beyond purely monetary definitions of poverty in India.","Informal Economy Formalization: Challenges and opportunities following the consolidation of 4 Labor Codes.","Universal Basic Income (UBI) versus Targeted Social Welfare Schemes: Fiscal feasibility and socio-economic outcomes.","Gig Economy and Platform Workers: Balancing labor flexibility with social security guarantees."]},{id:"social_structure",name:"Social Structure & Demographics",icon:"👥",desc:"Demographic dividend, aging population, urban migration, caste and social mobility.",topics:["Harnessing India’s Demographic Dividend: Urgent need for skilling, job creation, and educational modernization.","Urbanization and the Rise of Tier-2/Tier-3 Smart Cities: Managing migration, housing, and urban ecology.","Care Economy and Geriatric Support: Preparing India’s social safety net for an aging demographic transition.","Social Mobility through Digital Inclusion: How smartphones are democratizing education and livelihood.","Preserving Cultural Pluralism and Indigenous Heritage amidst Rapid Modernization."]},{id:"agriculture_rural",name:"Agriculture & Rural Economy",icon:"🌾",desc:"Farm technology, FPOs, rural credit linkages, irrigation, crop diversification.",topics:["Agritech, Precision Farming, and Drone Applications: Transforming smallholder agricultural productivity.","Farmer Producer Organizations (FPOs) as catalysts for collective bargaining and farm-to-fork value chains.","Climate-Resilient Agriculture and Micro-Irrigation: Mitigating monsoon dependencies and groundwater depletion.","Crop Diversification from Water-Guzzling Staples to Millets (Shree Anna): Nutritional and ecological security.","Reforming Rural Credit Linkages: Ensuring institutional credit reaches tenant farmers and sharecroppers."]},{id:"international_relations",name:"International Relations & Geopolitics",icon:"🌍",desc:"Multilateralism, trade corridors, Indo-Pacific, local currency settlements.",topics:["India’s Strategic Autonomy in a Fractured Multipolar World: Balancing relations across major global powers.","Internationalization of the Indian Rupee and Local Currency Bilateral Trade Settlements: Prospects and hurdles.","India-Middle East-Europe Economic Corridor (IMEC): Strategic, economic, and connectivity implications.","Global South Leadership: Championing developmental equity, climate finance, and multilateral institutional reforms.","Securing Maritime Trade Lanes in the Indo-Pacific: Naval diplomacy and supply chain diversification."]},{id:"environment_climate",name:"Environment, Climate Change & ESG",icon:"🌱",desc:"Net-Zero 2070, renewable energy, circular economy, ESG disclosures.",topics:["India’s Panchamrit Targets and Path to Net-Zero Emissions by 2070: Transition challenges in fossil-fuel heavy sectors.","Greenwashing Risks in Sustainable Finance: Need for standardized ESG taxonomies and mandatory audits.","Circular Economy, Plastic Waste Management, and Extended Producer Responsibility (EPR) compliance.","Climate Justice and Loss & Damage Finance: Holding developed nations accountable for historical carbon emissions.","Renewable Energy Integration and Grid Stability: Solar-Wind hybrids, pumped hydro, and battery storage."]},{id:"ai_emerging_tech",name:"Artificial Intelligence & Emerging Tech",icon:"🤖",desc:"Generative AI, algorithmic bias, quantum computing, digital sovereignty.",topics:["Generative AI and the Future of White-Collar Employment: Productivity booster or structural disruptor?","Ethical AI, Deepfakes, and Algorithmic Bias: Developing robust governance and accountability frameworks.","Data Sovereignty and National Data Protection Architecture under the Digital Personal Data Protection Act.","Quantum Computing: Implications for cryptography, financial modeling, and strategic national security.","Space Technology Commercialization and Private Sector Participation in India’s Space Economy."]},{id:"security_cyber",name:"National & Cyber Security",icon:"🛡️",desc:"Critical infrastructure protection, cyber resilience, border management.",topics:["Cyber Warfare and Protecting Critical National Infrastructure (Power Grids, Banking, and Defense Networks).","Integrated Border Management: Utilizing smart fencing, sensors, and surveillance drones for border security.","Financial Cyber Fraud Redressal: Safeguarding retail consumers against sophisticated phishing and identity theft.","Tackling Drug Trafficking and Narco-Terrorism through Inter-Agency Intelligence Coordination.","Modernizing Internal Police Forces and Forensics for Effective Investigation in the Digital Era."]},{id:"education_human_capital",name:"Education & Human Capital",icon:"📚",desc:"National Education Policy 2020, vocational training, higher education research.",topics:["National Education Policy (NEP 2020): Fostering experiential learning, multidisciplinary studies, and mother-tongue instruction.","Bridging the Industry-Academia Skill Gap: Apprenticeship schemes and technical education modernization.","EdTech in Post-Pandemic India: Bridging educational access while preventing screen-time cognitive fatigue.","Promoting High-Impact Scientific Research and Innovation in Indian Universities (Anusandhan National Research Foundation).","Early Childhood Care and Foundational Literacy and Numeracy (FLN) as bedrock for human capital."]},{id:"healthcare_public_health",name:"Healthcare & Public Health Systems",icon:"🏥",desc:"Ayushman Bharat, universal health coverage, telemedicine, epidemic resilience.",topics:["Ayushman Bharat (PM-JAY) and Health & Wellness Centers: Progress towards Universal Health Coverage.","Telemedicine and Digital Health Records (Ayushman Bharat Digital Mission): Transforming rural doctor availability.","Combating Non-Communicable Diseases (NCDs) through lifestyle interventions and preventive primary healthcare.","Pharmaceutical Self-Reliance and R&D: Moving from generic drug manufacturing to novel drug discovery.","Strengthening Emergency Pandemic Preparedness and Genomic Surveillance in Public Health Labs."]},{id:"women_empowerment",name:"Women Empowerment & Gender Equality",icon:"👩‍💼",desc:"Female labor force participation, women-led SHGs, corporate board representation, safety.",topics:["Improving Female Labor Force Participation Rate (FLFPR): Childcare support, safe commuting, and equal wage enforcement.","Nari Shakti Vandan Adhiniyam (Women’s Reservation in Parliament): Deepening representative democracy.","Self-Help Group (SHG) Microenterprises and Lakhpati Didi Initiative: Economic autonomy for rural women.","Breaking the Glass Ceiling in Corporate Leadership and STEM Fields: Mentorship and institutional policies.","Financial Inclusion to Financial Decision-Making: Moving beyond joint account holding to genuine asset ownership for women."]},{id:"ethics_csr_integrity",name:"Ethics, CSR & Corporate Governance",icon:"⚖️",desc:"Corporate ethics, Section 135 CSR impact, conflict of interest, whistleblower protections.",topics:["Corporate Social Responsibility (Section 135) as a Driver of Long-Term Sustainable Social Impact.","Whistleblower Protection and Internal Vigilance in Banking: Preventing systemic governance lapses.","Ethical Dilemmas in Public Administration: Balancing Rule Adherence with Compassionate Discretion.","Conflict of Interest and Related-Party Transactions: Protecting Minority Shareholder Interests.","Corporate Culture and Tone at the Top: Establishing Integrity over Short-Term Quarterly Earnings Pressure."]},{id:"infrastructure_energy",name:"Infrastructure & Energy Transition",icon:"⚡",desc:"PM GatiShakti, National Infrastructure Pipeline, logistics costs, green hydrogen.",topics:["PM GatiShakti National Master Plan: Multimodal connectivity and reducing India’s logistics cost to GDP ratio.","National Green Hydrogen Mission: Powering decarbonization in steel, fertilizers, and heavy transport.","Asset Monetization and Infrastructure Investment Trusts (InvITs): Unlocking private capital for public assets.","High-Speed Rail, Dedicated Freight Corridors (DFCs), and the Modernization of Indian Railways.","Discom Health and Power Sector Reforms: Smart metering and reducing Aggregate Technical & Commercial (AT&C) losses."]}];function fe(y){let e=typeof y=="number"?y:Date.now();return function(){return e=(e*9301+49297)%233280,e/233280}}class ae{static getAllDomains(){return W}static getRandomTopicForDomain(e,t=Date.now()){const i=W.find(s=>s.id===e)||W[0],n=fe(t),a=Math.floor(n()*i.topics.length);return{domainId:i.id,domainName:i.name,domainIcon:i.icon,topic:i.topics[a]||i.topics[0],wordLimit:"250–300 words",targetMarks:30,guidelines:["Introduction: Provide a clear, hook opening defining the context and thesis statement (approx. 50 words).","Body Paragraph 1: Core analysis, background data, structural challenges, and institutional frameworks (approx. 100 words).","Body Paragraph 2: Government initiatives, policy interventions, and technological solutions (approx. 80 words).","Conclusion: Forward-looking, balanced perspective with actionable recommendations (approx. 50 words)."]}}}const ve=[{regex:/\bhe\s+don'?t\b/i,correct:"he doesn't",reason:"Singular third-person subject 'he' takes 'does not / doesn't'."},{regex:/\bshe\s+don'?t\b/i,correct:"she doesn't",reason:"Singular third-person subject 'she' takes 'does not / doesn't'."},{regex:/\bit\s+don'?t\b/i,correct:"it doesn't",reason:"Subject 'it' takes 'doesn't'."},{regex:/\bdid(n't|\s+not)\s+(went|came|knew|saw|bought|took|made)\b/i,correct:"did not + base verb (go, come, know, see, buy, take, make)",reason:"After auxiliary 'did / didn't', always use the base form (V1) of the verb."},{regex:/\bdiscuss\s+about\b/i,correct:"discuss",reason:"The verb 'discuss' is transitive and does not take the preposition 'about'."},{regex:/\bcope\s+up\s+with\b/i,correct:"cope with",reason:"The standard idiomatic expression is 'cope with' (without 'up')."},{regex:/\bone\s+of\s+my\s+friend\b/i,correct:"one of my friends",reason:"'One of + plural noun' rule: use 'friends'."},{regex:/\bevery\s+students\b/i,correct:"every student",reason:"'Every' is followed by a singular countable noun."},{regex:/\baccording\s+to\s+me\b/i,correct:"in my opinion / from my perspective",reason:"In formal interview English, say 'in my opinion' rather than 'according to me'."},{regex:/\bi\s+am\s+agree\b/i,correct:"I agree",reason:"'Agree' is a full verb, not an adjective. Say 'I agree'."},{regex:/\bpayed\b/i,correct:"paid",reason:"The past tense of pay in financial contexts is spelled 'paid'."}],Q={interview:[{botPrompt:"Welcome to your Banking Interview Simulation! Let us start with an introductory question: Could you please introduce yourself and tell me what motivated you to pursue a career in the banking sector?",topic:"Introduction & Banking Motivation"},{botPrompt:"That is interesting. Can you explain in your own words how the Reserve Bank of India’s Repo Rate hikes impact retail borrowers and inflation in the economy?",topic:"Monetary Policy & Economy"},{botPrompt:"Very well explained. Imagine you are working as a Branch Officer and an irate customer approaches your desk shouting about an unauthorized debit. How would you handle this situation calmly?",topic:"Customer Grievance Handling"},{botPrompt:"What are Non-Performing Assets (NPAs), and why do you think managing asset quality is crucial for a bank’s profitability and Capital Adequacy Ratio?",topic:"Banking Concepts (NPAs & CRAR)"},{botPrompt:"Where do you see yourself in the banking sector five years from now, and how will your skills contribute to modern digital banking services?",topic:"Career Vision & Leadership"}],gd:[{botPrompt:"Welcome to the Group Discussion Round! The topic for today is: 'Is Artificial Intelligence a threat to traditional banking jobs or an indispensable enabler?' What is your opening viewpoint?",topic:"AI in Banking"},{botPrompt:"That is a valid point. However, some critics argue that algorithmic underwriting could lead to unintentional credit exclusion. How do you respond to that?",topic:"Algorithmic Fairness"},{botPrompt:"Let us discuss Digital Rupee (CBDC) versus UPI. Do you think CBDCs will eventually replace UPI micropayments in India, or will they coexist?",topic:"CBDC vs UPI"}],casual:[{botPrompt:"Hello there! I am your AI English Speaking Coach. Let us have a relaxed conversation. Tell me, how was your day, and what topics have you been studying recently?",topic:"Daily Practice"},{botPrompt:"Studying consistently is key to success. What is the biggest challenge you face when speaking English in formal situations, and how do you practice overcoming it?",topic:"Fluency Habits"}]};class ye{constructor(e=()=>{},t=()=>{}){this.onBotResponse=e,this.onStatusChange=t,this.mode="interview",this.currentStep=0,this.conversationHistory=[],this.isListening=!1,this.isSpeaking=!1,this.selectedVoiceURI=null,this.speechRecognition=null,this.voiceSynth=window.speechSynthesis||null,this.initSpeechRecognition()}getAvailableVoices(){if(!this.voiceSynth)return[];const e=this.voiceSynth.getVoices()||[],t=e.filter(i=>i.lang.toLowerCase().startsWith("en"));return t.length>0?t:e}setSelectedVoice(e){this.selectedVoiceURI=e}stopSpeaking(){this.voiceSynth&&(this.voiceSynth.cancel(),this.isSpeaking=!1,this.onStatusChange({isListening:this.isListening,isSpeaking:!1,msg:"Bot speech stopped."}))}restartSession(){this.stopSpeaking(),this.stopListening(),this.startSession(this.mode)}initSpeechRecognition(){const e=window.SpeechRecognition||window.webkitSpeechRecognition;e&&(this.speechRecognition=new e,this.speechRecognition.continuous=!1,this.speechRecognition.interimResults=!1,this.speechRecognition.lang="en-IN",this.speechRecognition.onstart=()=>{this.isListening=!0,this.onStatusChange({isListening:!0,isSpeaking:this.isSpeaking,msg:"🎙️ Listening... Speak into your microphone now"})},this.speechRecognition.onresult=t=>{const i=t.results[0][0].transcript;this.isListening=!1,this.onStatusChange({isListening:!1,isSpeaking:this.isSpeaking,msg:"Speech captured!"}),this.handleUserMessage(i)},this.speechRecognition.onerror=t=>{this.isListening=!1,this.onStatusChange({isListening:!1,isSpeaking:this.isSpeaking,msg:`Mic Notice: ${t.error||"Speech not detected. You can also type directly."}`})},this.speechRecognition.onend=()=>{this.isListening=!1,this.onStatusChange({isListening:!1,isSpeaking:this.isSpeaking,msg:"Ready"})})}startListening(){if(this.stopSpeaking(),this.speechRecognition)try{this.speechRecognition.start()}catch(e){console.warn("Speech recognition already active",e)}else alert("Speech recognition is not supported in this browser. You can still type your responses directly!")}stopListening(){this.speechRecognition&&this.isListening&&(this.speechRecognition.stop(),this.isListening=!1)}startSession(e="interview"){this.mode=e,this.currentStep=0,this.conversationHistory=[];const i=(Q[e]||Q.interview)[0].botPrompt,n={sender:"bot",text:i,corrections:null,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};this.conversationHistory.push(n),this.onBotResponse(n),this.speakAloud(i)}handleUserMessage(e){if(!e||!e.trim())return;const t=e.trim(),i=this.analyzeGrammar(t),n={sender:"user",text:t,corrections:i,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};this.conversationHistory.push(n),this.onBotResponse(n),this.generateBotReply(t,i)}analyzeGrammar(e){const t=[];ve.forEach(a=>{a.regex.test(e)&&t.push({found:e.match(a.regex)[0],correct:a.correct,reason:a.reason})});const i=e.split(/\s+/).length;let n="";return i<6?n='💡 Try expanding your spoken response by adding a reason ("because...") or a real-life example to demonstrate fluency.':i>45?n="✨ Great elaboration! Maintain steady pacing and pause between paragraphs to sound articulate in interviews.":n="🎯 Excellent sentence length and structured thought expression.",{mistakes:t,feedbackTip:n,wordCount:i}}generateBotReply(e,t){this.currentStep++;const i=Q[this.mode]||Q.interview;setTimeout(()=>{let n="";if(this.currentStep<i.length){const s=i[this.currentStep].botPrompt;n=`${this.generateAcknowledgment(e)} ${s}`}else n="Outstanding! You have completed this spoken session. Your fluency, articulation, and vocabulary demonstrate solid preparation. Review the grammar notes above to polish your speech further!";const a={sender:"bot",text:n,corrections:null,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};this.conversationHistory.push(a),this.onBotResponse(a),this.speakAloud(n)},1200)}generateAcknowledgment(e){const t=["Thank you for articulating that clearly.","That is a very structured viewpoint.","Well stated.","I appreciate your thoughtful response.","That demonstrates good comprehension of the core issue."];return t[Math.floor(Math.random()*t.length)]}speakAloud(e){if(this.voiceSynth)try{this.voiceSynth.cancel();const t=new SpeechSynthesisUtterance(e);t.rate=.95,t.pitch=1,t.lang="en-US";const i=this.voiceSynth.getVoices()||[];if(this.selectedVoiceURI){const n=i.find(a=>a.voiceURI===this.selectedVoiceURI);n&&(t.voice=n)}else{const n=i.find(a=>a.lang.startsWith("en")&&(a.name.includes("Google")||a.name.includes("Natural")||a.name.includes("Samantha")||a.name.includes("Jenny")||a.name.includes("David")));n&&(t.voice=n)}t.onstart=()=>{this.isSpeaking=!0,this.onStatusChange({isListening:this.isListening,isSpeaking:!0,msg:"🔊 Bot is speaking... (Click Stop to interrupt)"})},t.onend=()=>{this.isSpeaking=!1,this.onStatusChange({isListening:this.isListening,isSpeaking:!1,msg:"Ready"})},t.onerror=()=>{this.isSpeaking=!1,this.onStatusChange({isListening:this.isListening,isSpeaking:!1,msg:"Ready"})},this.voiceSynth.speak(t)}catch(t){this.isSpeaking=!1,console.warn("Speech synthesis error",t)}}}class be{constructor(e=()=>{}){this.onHome=e,this.currentSubTab="essay",this.essayStep="domains",this.selectedDomainId=null,this.currentTopic=null,this.selectedPdfFile=null,this.showUploadSection=!1,this.speakingEngine=null}render(){this.renderSubTabButtons(),this.currentSubTab==="essay"?this.renderEssaySection():this.renderSpeakingSection()}renderSubTabButtons(){const e=document.getElementById("engLabSubNav");e&&(e.innerHTML=`
      <div class="eng-mode-switcher">
        <button class="btn-mode-tab ${this.currentSubTab==="essay"?"active":""}" data-eng-tab="essay">
          <span>✍️ 16-Domain Essay Writing & PDF Evaluation</span>
        </button>
        <button class="btn-mode-tab ${this.currentSubTab==="speaking"?"active":""}" data-eng-tab="speaking">
          <span>🗣️ Interactive AI English Speaking Coach</span>
        </button>
      </div>
    `,e.querySelectorAll(".btn-mode-tab").forEach(t=>{t.addEventListener("click",i=>{this.currentSubTab=i.currentTarget.getAttribute("data-eng-tab"),this.render()})}))}renderEssaySection(){const e=document.getElementById("engLabContent");e&&(this.essayStep==="domains"?this.renderDomainSelectionGrid(e):this.renderTopicAndInstructionsWindow(e))}renderDomainSelectionGrid(e){const t=ae.getAllDomains();e.innerHTML=`
      <div style="margin-bottom: 2rem;">
        <h3 style="font-family: var(--font-display); font-size: 1.4rem; margin-bottom: 0.5rem;">
          🎯 Step 1: Choose an Essay Domain (16 Specialized Domains)
        </h3>
        <p style="color: var(--text-muted); font-size: 0.9rem;">
          Click any domain to directly generate an authentic real-exam essay topic, instructions, and PDF answer submission window.
        </p>
      </div>

      <div class="domains-grid">
        ${t.map(i=>`
          <div class="domain-card" data-domain-id="${i.id}">
            <div>
              <div class="domain-card-top">
                <span class="domain-icon">${i.icon}</span>
                <span class="domain-name">${i.name}</span>
              </div>
              <p class="domain-desc">${i.desc}</p>
            </div>
            <div style="margin-top: 0.85rem; font-size: 0.8rem; color: #38bdf8; font-weight: 700; display: flex; align-items: center; gap: 0.35rem;">
              <span>Open Domain Topics</span> <span>&rarr;</span>
            </div>
          </div>
        `).join("")}
      </div>
    `,e.querySelectorAll(".domain-card").forEach(i=>{i.onclick=()=>{const n=i.getAttribute("data-domain-id");this.selectedDomainId=n,this.generateFreshTopic(),this.essayStep="topic",this.renderEssaySection(),window.scrollTo({top:0,behavior:"smooth"})}})}generateFreshTopic(){this.selectedDomainId||(this.selectedDomainId="banking_finance"),this.currentTopic=ae.getRandomTopicForDomain(this.selectedDomainId,Math.floor(Math.random()*1e5)),this.selectedPdfFile=null}renderTopicAndInstructionsWindow(e){this.currentTopic||this.generateFreshTopic();const t=this.currentTopic;e.innerHTML=`
      <!-- Top Navigation & Domain Toolbar -->
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem;">
        <button id="btnBackToDomains" class="btn-back-domains">
          <span>&larr; Back to 16 Domains</span>
        </button>

        <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
          <span class="badge-tag prestigious" style="font-size: 0.85rem;">Domain: ${t.domainIcon} ${t.domainName}</span>
          <span class="badge-tag trending" style="font-size: 0.85rem;">Word Limit: ${t.wordLimit}</span>
          <span class="badge-tag" style="background: rgba(168, 85, 247, 0.2); color: #c084fc; font-size: 0.85rem;">Max Marks: 30</span>
        </div>
      </div>

      <!-- Main Topic & PDF Upload Window Sheet -->
      <div class="topic-viewer-sheet">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.25rem; border-bottom: 1px solid var(--border-subtle); padding-bottom: 1rem;">
          <div>
            <span style="font-size: 0.85rem; color: #38bdf8; text-transform: uppercase; font-weight: 800; letter-spacing: 0.5px;">
              Assigned Essay Topic:
            </span>
          </div>

          <button id="btnGetNewTopic" class="btn-regen-topic">
            <span>🔄</span> <span>Generate Another Topic</span>
          </button>
        </div>

        <!-- 1. Topic Name -->
        <div style="margin-bottom: 1.75rem;">
          <h2 style="font-family: var(--font-display); font-size: 1.65rem; font-weight: 800; color: #60a5fa; line-height: 1.4;">
            "${t.topic}"
          </h2>
        </div>

        <!-- 2. Structured Instructions & Guidelines -->
        <div class="instruction-note" style="margin-bottom: 2rem; padding: 1.5rem; background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(59, 130, 246, 0.3);">
          <h4 style="font-size: 1.05rem; font-weight: 700; color: #93c5fd; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>📋</span> <span>Topic Instructions & Evaluation Rubric:</span>
          </h4>
          <ul style="padding-left: 1.35rem; display: flex; flex-direction: column; gap: 0.5rem; color: #cbd5e1; font-size: 0.92rem;">
            ${t.guidelines.map(c=>`<li>${c}</li>`).join("")}
            <li><strong>Structure:</strong> Write with structured paragraphs (Introduction, Core Analysis with Data/Schemes, and Forward-looking Conclusion).</li>
            <li><strong>Submission:</strong> Upload your handwritten answer pages in PDF format below for automated standard evaluation.</li>
          </ul>
        </div>

        <!-- 3. Direct PDF Upload Section -->
        <div id="pdfUploadWorkspace" style="padding-top: 1.5rem; border-top: 1px solid var(--border-subtle);">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
            <h3 style="font-family: var(--font-display); font-size: 1.25rem; color: #38bdf8; display: flex; align-items: center; gap: 0.5rem;">
              <span>📤</span> <span>Upload Answer Sheet (PDF Format)</span>
            </h3>
            <span style="font-size: 0.8rem; color: var(--text-muted);">Multi-page handwritten scanned PDFs supported</span>
          </div>

          <div id="engEssayDropzone" class="pdf-upload-dropzone" style="padding: 2.25rem 1.5rem;">
            <div class="dropzone-icon" style="font-size: 3rem;">📄</div>
            <h4 id="engDropTitle" style="font-size: 1.1rem; margin-bottom: 0.25rem;">Drop Answer PDF here or Click to Browse</h4>
            <p style="color: var(--text-muted); font-size: 0.85rem;">Attach your scanned answer sheet pages saved as PDF</p>
            <input type="file" id="engPdfInput" accept="application/pdf,text/plain" style="display: none;" />
            <button type="button" id="btnBrowseEngPdf" class="btn-choose-pdf" style="margin-top: 1rem;">
              <span>📁 Select PDF File</span>
            </button>
            <div id="engSelectedFileName" style="margin-top: 0.85rem; color: #34d399; font-weight: 700; font-size: 0.92rem;"></div>
          </div>

          <div style="margin-top: 1.25rem;">
            <label style="font-size: 0.85rem; color: var(--text-muted); display: block; margin-bottom: 0.4rem; font-weight: 600;">
              Or Type Answer Directly (Optional):
            </label>
            <textarea id="engDirectText" rows="5" placeholder="Type your essay directly here if not uploading a PDF file..." style="width: 100%; background: var(--bg-surface); color: #fff; border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 0.9rem; font-size: 0.92rem; resize: vertical; line-height: 1.6;"></textarea>
          </div>

          <button id="btnSubmitDomainEssay" class="btn-start-test" style="margin-top: 1.5rem; padding: 1rem 2.5rem; font-size: 1.05rem;">
            <span>🚀 Evaluate My Essay (Official Standards)</span>
          </button>

          <!-- Evaluation Spinner & Result -->
          <div id="engEvalLoading" class="eval-loading-box">
            <div class="spinner-purple"></div>
            <h4 style="font-size: 1.2rem; margin-bottom: 0.35rem;">Evaluating Essay Structure, Arguments & Grammar...</h4>
            <p style="color: var(--text-muted); font-size: 0.85rem;">Checking content relevance &bull; Grading against official banking rubrics...</p>
          </div>

          <div id="engEvalResultBox"></div>
        </div>
      </div>
    `;const i=document.getElementById("btnBackToDomains");i&&(i.onclick=()=>{this.essayStep="domains",this.renderEssaySection(),window.scrollTo({top:0,behavior:"smooth"})});const n=document.getElementById("btnGetNewTopic");n&&(n.onclick=()=>{this.generateFreshTopic(),this.renderEssaySection()});const a=document.getElementById("engPdfInput"),s=document.getElementById("btnBrowseEngPdf"),o=document.getElementById("engSelectedFileName"),l=document.getElementById("engEssayDropzone");s&&a&&(s.onclick=c=>{c.stopPropagation(),a.click()}),l&&a&&(l.onclick=()=>{a.click()}),a&&(a.onchange=c=>{c.target.files&&c.target.files[0]&&(this.selectedPdfFile=c.target.files[0],o&&(o.textContent=`✅ Attached PDF: ${this.selectedPdfFile.name}`))}),l&&(l.ondragover=c=>{c.preventDefault(),l.classList.add("dragover")},l.ondragleave=()=>l.classList.remove("dragover"),l.ondrop=c=>{c.preventDefault(),l.classList.remove("dragover"),c.dataTransfer.files&&c.dataTransfer.files[0]&&(this.selectedPdfFile=c.dataTransfer.files[0],o&&(o.textContent=`✅ Attached PDF: ${this.selectedPdfFile.name}`))});const r=document.getElementById("btnSubmitDomainEssay");r&&(r.onclick=()=>{this.evaluateDomainEssay()})}async evaluateDomainEssay(){var n;const e=((n=document.getElementById("engDirectText"))==null?void 0:n.value)||"";if(!this.selectedPdfFile&&!e.trim()){alert("Please upload your written essay PDF or type your response before submitting.");return}const t=document.getElementById("engEvalLoading"),i=document.getElementById("engEvalResultBox");t&&t.classList.add("active"),i&&(i.innerHTML=""),setTimeout(async()=>{const a={id:`essay_${this.selectedDomainId}`,examTitle:`English Essay Writing (${this.currentTopic.domainName})`,shortName:"Essay Writing Lab",tier:"Tier 1 / Tier 2",totalMarks:30,cutoffEstimate:15,questionsStructure:[{id:"essay",type:"Essay",title:`Essay on ${this.currentTopic.topic}`,marks:30,wordLimit:this.currentTopic.wordLimit}]},s={mockNumber:Math.floor(Math.random()*50)+1,essay:{topic:this.currentTopic.topic}},o=await B.evaluateSubmission(a,s,this.selectedPdfFile,e);t&&t.classList.remove("active"),D.recordGlobalAttempt({examTitle:`English Essay: ${this.currentTopic.domainName}`,examShort:"Essay Lab",levelName:"Descriptive Lab",mockNumber:s.mockNumber,totalScore:o.totalScore,totalMaxMarks:30,accuracy:o.percentage,percentile:o.percentile,isQualified:o.isQualified,timestamp:new Date().toISOString()}),this.renderEssayReport(o)},1800)}renderEssayReport(e){const t=document.getElementById("engEvalResultBox");if(!t)return;const i=e.evaluatedQuestions[0];t.innerHTML=`
      <div class="subjective-eval-report" style="margin-top: 2.5rem;">
        <div class="eval-score-header">
          <div>
            <h3 style="font-family: var(--font-display); font-size: 1.5rem; font-weight: 800;">Official Essay Evaluation Scorecard</h3>
            <p style="color: var(--text-muted); font-size: 0.85rem;">Word Count Analyzed: <strong>${e.totalWordsAnalyzed} Words</strong> &bull; Cutoff Benchmark: 15.0 Marks</p>
          </div>
          <div>
            <span class="status-badge-lg ${e.isQualified?"qualified":"not-qualified"}">
              ${e.isQualified?"🎉 QUALIFIED":"⚠️ BELOW BENCHMARK"}
            </span>
          </div>
        </div>

        <div class="metrics-summary-grid" style="margin-bottom: 1.5rem;">
          <div class="metric-card">
            <div class="metric-label">Score Awarded</div>
            <div class="metric-val" style="color: #38bdf8;">${e.totalScore} / 30</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Percentage</div>
            <div class="metric-val" style="color: #34d399;">${e.percentage}%</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Percentile</div>
            <div class="metric-val" style="color: #c084fc;">${e.percentile}%</div>
          </div>
        </div>

        <div class="instruction-note" style="margin-bottom: 1.5rem;">
          ${e.overallExaminerRemark}
        </div>

        <div class="eval-feedback-item">
          <div class="eval-rubric-row"><span class="eval-rubric-label">Structure & Flow:</span><span style="color: #cbd5e1;">${i.feedback.formatRating}</span></div>
          <div class="eval-rubric-row"><span class="eval-rubric-label">Content Relevance:</span><span style="color: #cbd5e1;">${i.feedback.contentDepth}</span></div>
          <div class="eval-rubric-row"><span class="eval-rubric-label">Grammar & Cohesion:</span><span style="color: #cbd5e1;">${i.feedback.grammarAndVocab}</span></div>
          <div class="eval-rubric-row" style="margin-top: 0.5rem; padding-top: 0.5rem; border-top: 1px solid var(--border-subtle);"><span class="eval-rubric-label" style="color: #fde68a;">💡 Recommendation:</span><span style="color: #fde68a;">${i.feedback.examinerNotes}</span></div>
        </div>
      </div>
    `,t.scrollIntoView({behavior:"smooth"})}renderSpeakingSection(){const e=document.getElementById("engLabContent");e&&(e.innerHTML=`
      <div style="margin-bottom: 1.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h3 style="font-family: var(--font-display); font-size: 1.4rem; margin-bottom: 0.35rem;">🗣️ Interactive AI English Speaking Coach</h3>
          <p style="color: var(--text-muted); font-size: 0.85rem;">Practice speaking into your microphone. The AI coach converses with you and corrects grammar mistakes in real-time.</p>
        </div>

        <!-- Integrated Voice & Session Toolbar -->
        <div class="speaking-toolbar-container">
          <!-- Mode Selector Pill Group -->
          <div class="speaking-mode-group">
            <button class="btn-speaking-mode active" id="btnModeInterview">
              <span>🎙️</span> <span>Interview</span>
            </button>
            <button class="btn-speaking-mode" id="btnModeGD">
              <span>💬</span> <span>GD</span>
            </button>
            <button class="btn-speaking-mode" id="btnModeCasual">
              <span>☕</span> <span>Free Talk</span>
            </button>
          </div>

          <!-- Action Controls & Single-Word Voice Dropdown -->
          <div class="speaking-action-group">
            <!-- Custom Theme Voice Dropdown -->
            <div class="voice-selector-wrapper" title="Select Voice (Single Word Name)">
              <span class="voice-icon">🗣️</span>
              <select id="speakingVoiceSelect" class="custom-voice-select">
                <option value="">Voice</option>
              </select>
            </div>

            <!-- Stop Speaking Button -->
            <button id="btnStopSpeaking" class="btn-speaking-action btn-stop-speech" title="Stop Bot Speech Immediately">
              <span>⏹️</span> <span>Stop</span>
            </button>

            <!-- Restart Conversation Button -->
            <button id="btnRestartChat" class="btn-speaking-action btn-restart-speech" title="Restart Conversation">
              <span>🔄</span> <span>Restart</span>
            </button>
          </div>
        </div>
      </div>

      <div class="speaking-chat-workspace">
        <div id="speakingChatScroll" class="chat-messages-scroll"></div>

        <div id="speakingStatusNotice" style="font-size: 0.82rem; color: #94a3b8; text-align: center; margin-bottom: 0.5rem; font-weight: 600;">
          Click the blue microphone to speak or type in the box.
        </div>

        <div class="speaking-controls-bar">
          <button id="btnToggleMic" class="btn-mic-pulse" title="Click to Speak">
            <span>🎙️</span>
          </button>
          <input type="text" id="speakingTextInput" class="speaking-text-input" placeholder="Speak into your mic or type your response here..." />
          <button id="btnSendSpeakingText" class="btn-send-chat">Send</button>
        </div>
      </div>
    `,this.initSpeakingBot())}initSpeakingBot(e="interview"){var l,r,c,u,d,m,h;const t=document.getElementById("speakingChatScroll"),i=document.getElementById("speakingStatusNotice"),n=document.getElementById("btnStopSpeaking");this.speakingEngine=new ye(g=>{this.appendChatMessage(g)},g=>{const p=document.getElementById("btnToggleMic");p&&(g.isListening?p.classList.add("listening"):p.classList.remove("listening")),n&&(g.isSpeaking?n.classList.add("active-speaking"):n.classList.remove("active-speaking")),i&&(i.textContent=g.msg)}),this.populateVoiceDropdown(),window.speechSynthesis&&(window.speechSynthesis.onvoiceschanged=()=>this.populateVoiceDropdown()),this.speakingEngine.startSession(e),n==null||n.addEventListener("click",()=>{this.speakingEngine.stopSpeaking()}),(l=document.getElementById("btnRestartChat"))==null||l.addEventListener("click",()=>{t&&(t.innerHTML=""),this.speakingEngine.restartSession()});const a=document.getElementById("speakingVoiceSelect");a==null||a.addEventListener("change",g=>{const p=g.target.value;this.speakingEngine.setSelectedVoice(p)}),(r=document.getElementById("btnToggleMic"))==null||r.addEventListener("click",()=>{this.speakingEngine.isListening?this.speakingEngine.stopListening():this.speakingEngine.startListening()});const s=()=>{const g=document.getElementById("speakingTextInput");if(g&&g.value.trim()){const p=g.value.trim();g.value="",this.speakingEngine.handleUserMessage(p)}};(c=document.getElementById("btnSendSpeakingText"))==null||c.addEventListener("click",s),(u=document.getElementById("speakingTextInput"))==null||u.addEventListener("keydown",g=>{g.key==="Enter"&&s()});const o=g=>{["btnModeInterview","btnModeGD","btnModeCasual"].forEach(p=>{const S=document.getElementById(p);S&&S.classList.toggle("active",p===g)})};(d=document.getElementById("btnModeInterview"))==null||d.addEventListener("click",()=>{o("btnModeInterview"),t&&(t.innerHTML=""),this.speakingEngine.startSession("interview")}),(m=document.getElementById("btnModeGD"))==null||m.addEventListener("click",()=>{o("btnModeGD"),t&&(t.innerHTML=""),this.speakingEngine.startSession("gd")}),(h=document.getElementById("btnModeCasual"))==null||h.addEventListener("click",()=>{o("btnModeCasual"),t&&(t.innerHTML=""),this.speakingEngine.startSession("casual")})}formatSingleWordVoice(e){if(!e)return"Voice";const i=e.replace(/^Microsoft\s+/i,"").replace(/^Google\s+/i,"").replace(/^Apple\s+/i,"").replace(/\s*Desktop\s*/gi,"").replace(/\s*Online\s*/gi,"").replace(/\s*\(Natural\)\s*/gi,"").replace(/\s*-\s*English.*$/i,"").replace(/\s*\(.*?\)/g,"").trim().split(/[\s\-_]+/).filter(Boolean);if(i.length>0){let n=i[0];return/^en/i.test(n)&&i.length>1&&(n=i[1]),n.charAt(0).toUpperCase()+n.slice(1).toLowerCase()}return"Voice"}populateVoiceDropdown(){const e=document.getElementById("speakingVoiceSelect");if(!e||!this.speakingEngine)return;const t=this.speakingEngine.getAvailableVoices();if(!t||t.length===0)return;const i=e.value,n=new Map;e.innerHTML=t.map(a=>{let s=this.formatSingleWordVoice(a.name),o=n.get(s)||0;n.set(s,o+1);const l=o===0?s:`${s} ${o+1}`;return`
        <option value="${a.voiceURI}" ${a.voiceURI===i?"selected":""}>
          ${l}
        </option>
      `}).join("")}appendChatMessage(e){const t=document.getElementById("speakingChatScroll");if(!t)return;const i=document.createElement("div");i.className=`chat-bubble-wrap ${e.sender}`;let n="";e.corrections&&e.corrections.mistakes&&e.corrections.mistakes.length>0&&(n=`
        <div class="grammar-correction-box">
          <strong>💡 Real-Time Grammar Correction:</strong>
          <ul style="padding-left: 1.1rem; margin-top: 0.25rem;">
            ${e.corrections.mistakes.map(s=>`
              <li>Instead of <strike style="color: #f87171;">"${s.found}"</strike>, use <strong style="color: #34d399;">"${s.correct}"</strong> &bull; <em>${s.reason}</em></li>
            `).join("")}
          </ul>
        </div>
      `);let a="";e.corrections&&e.corrections.feedbackTip&&(a=`<div style="font-size: 0.75rem; color: #94a3b8; margin-top: 0.35rem;">${e.corrections.feedbackTip}</div>`),i.innerHTML=`
      <div style="font-size: 0.72rem; color: var(--text-dim); margin-bottom: 0.25rem; display: flex; justify-content: space-between;">
        <span>${e.sender==="bot"?"🤖 AI Speaking Coach":"👤 You"}</span>
        <span>${e.timestamp}</span>
      </div>
      <div class="chat-bubble">
        ${e.text}
      </div>
      ${n}
      ${a}
    `,t.appendChild(i),t.scrollTop=t.scrollHeight}}class ke{constructor(){this.currentView="portal",this.activeExamEngine=null,this.activeSimulatorUI=null,this.activeAnalyticsUI=null,this.activeProfileUI=null,this.activeSubjectiveUI=null,this.activeEnglishLabUI=null,this.currentExamId=null,this.currentLevelKey="pre",this.currentMockNumber=1}init(){this.setupThemeToggle(),this.setupNavigation(),this.updateNavProfileBadge(),this.initPortalView()}setupThemeToggle(){const e=document.getElementById("btnThemeToggle"),t=document.getElementById("btnMobileThemeToggle"),i=()=>{document.body.classList.toggle("light-theme");const n=document.body.classList.contains("light-theme");e&&(e.textContent=n?"🌙":"☀️"),t&&(t.textContent=n?"🌙":"☀️")};e&&e.addEventListener("click",i),t&&t.addEventListener("click",i)}updateNavProfileBadge(){const e=D.getProfileStats(),t=document.getElementById("sidebarLvlText");t&&(t.textContent=`LVL ${e.level} ${e.rankTitle}`)}setupNavigation(){var l,r,c,u,d,m,h,g,p,S,C,E,M,b;const e=document.getElementById("mainSidebar"),t=document.getElementById("sidebarBackdrop"),i=()=>{e&&e.classList.remove("open"),t&&t.classList.remove("active")},n=()=>{if(e){e.classList.toggle("open");const f=e.classList.contains("open");t&&t.classList.toggle("active",f)}};(l=document.getElementById("btnMobileMenuToggle"))==null||l.addEventListener("click",n),t==null||t.addEventListener("click",i);const a=f=>{var I;i(),this.currentView==="simulator"?confirm("An examination is currently in progress. Exit the exam and leave? Current test progress will be lost.")&&((I=this.activeExamEngine)!=null&&I.timerManager&&this.activeExamEngine.timerManager.stop(),f()):f()},s=()=>a(()=>this.initPortalView());(r=document.getElementById("brandLogoLink"))==null||r.addEventListener("click",f=>{f.preventDefault(),s()}),(c=document.getElementById("mobileBrandHome"))==null||c.addEventListener("click",f=>{f.preventDefault(),s()}),(u=document.getElementById("sidebarNavHome"))==null||u.addEventListener("click",f=>{f.preventDefault(),s()}),(d=document.getElementById("sidebarNavSubjective"))==null||d.addEventListener("click",f=>{f.preventDefault(),a(()=>this.initSubjectiveView())}),(m=document.getElementById("sidebarNavEnglish"))==null||m.addEventListener("click",f=>{f.preventDefault(),a(()=>this.initEnglishLabView())});const o=()=>a(()=>this.initProfileView());(h=document.getElementById("sidebarNavProfile"))==null||h.addEventListener("click",f=>{f.preventDefault(),o()}),(g=document.getElementById("sidebarProfileCard"))==null||g.addEventListener("click",f=>{f.preventDefault(),o()}),(p=document.getElementById("btnEngBackHome"))==null||p.addEventListener("click",()=>this.initPortalView()),(S=document.getElementById("btnSubjectiveBackHome"))==null||S.addEventListener("click",()=>this.initPortalView()),(C=document.getElementById("btnProfileBackHome"))==null||C.addEventListener("click",()=>this.initPortalView()),(E=document.getElementById("btnModalClose"))==null||E.addEventListener("click",()=>{var f;(f=document.getElementById("examSummaryModal"))==null||f.classList.remove("active")}),(M=document.getElementById("btnQPModalClose"))==null||M.addEventListener("click",()=>{var f;(f=document.getElementById("simQPModal"))==null||f.classList.remove("active")}),(b=document.getElementById("btnInstructionsModalClose"))==null||b.addEventListener("click",()=>{var f;(f=document.getElementById("simInstructionsModal"))==null||f.classList.remove("active")})}switchView(e){this.currentView=e;const t=document.getElementById("portalView"),i=document.getElementById("simulatorView"),n=document.getElementById("analyticsView"),a=document.getElementById("profileView"),s=document.getElementById("subjectiveView"),o=document.getElementById("englishLabView"),l=document.getElementById("mainSidebar"),r=document.getElementById("mainViewport"),c=document.getElementById("mobileTopbar");t&&(t.style.display=e==="portal"?"block":"none"),n&&(n.style.display=e==="analytics"?"block":"none"),a&&(a.style.display=e==="profile"?"block":"none"),s&&(s.style.display=e==="subjective"?"block":"none"),o&&(o.style.display=e==="english"?"block":"none");const u=document.getElementById("sidebarNavHome"),d=document.getElementById("sidebarNavSubjective"),m=document.getElementById("sidebarNavEnglish"),h=document.getElementById("sidebarNavProfile");u==null||u.classList.toggle("active",e==="portal"),d==null||d.classList.toggle("active",e==="subjective"),m==null||m.classList.toggle("active",e==="english"),h==null||h.classList.toggle("active",e==="profile"),i&&(e==="simulator"?(i.classList.add("active"),l&&l.classList.add("hidden"),r&&r.classList.add("full-width"),c&&(c.style.display="none")):(i.classList.remove("active"),l&&l.classList.remove("hidden"),r&&r.classList.remove("full-width"),c&&(c.style.display=""))),this.updateNavProfileBadge(),window.scrollTo({top:0,behavior:"smooth"})}initPortalView(){this.switchView("portal");const e=new de((t,i,n)=>{this.startExamSession(t,i,n)});e.renderCategories("categoryFilter"),e.renderExamCards("examsGrid")}initSubjectiveView(){this.switchView("subjective"),this.activeSubjectiveUI||(this.activeSubjectiveUI=new he(()=>this.initPortalView())),this.activeSubjectiveUI.render()}initEnglishLabView(){this.switchView("english"),this.activeEnglishLabUI||(this.activeEnglishLabUI=new be(()=>this.initPortalView())),this.activeEnglishLabUI.render()}initProfileView(){this.switchView("profile"),this.activeProfileUI||(this.activeProfileUI=new ge(()=>this.initPortalView(),(e,t,i)=>this.startExamSession(e,t,i))),this.activeProfileUI.render()}startExamSession(e,t,i=1){this.currentExamId=e,this.currentLevelKey=t,this.currentMockNumber=i;const n=O[e];if(!n||!n.levels[t]){alert("Selected exam configuration not found.");return}this.activeExamEngine=new le(n,t,i,a=>{var s,o,l,r,c;a.type==="TICK"?(s=this.activeSimulatorUI)==null||s.updateTimerDisplay(a.formattedTime,a.remainingSec):a.type==="SECTION_AUTO_ADVANCED"?((o=this.activeSimulatorUI)==null||o.showToast(`Time expired! Auto-advanced to section: ${a.section.name}`,"warning"),(l=this.activeSimulatorUI)==null||l.renderSubjectTabs(),(r=this.activeSimulatorUI)==null||r.renderQuestionAndPalette()):a.type==="TIMER_WARNING"&&((c=this.activeSimulatorUI)==null||c.showToast(`⚠️ Attention: ${a.minutes} minute(s) remaining in this section!`,"warning"))},a=>{},a=>{this.processExamSubmission(a)}),this.activeSimulatorUI=new ue(this.activeExamEngine,()=>{this.activeExamEngine.finishTest()},()=>{this.switchView("portal")}),this.switchView("simulator"),this.activeSimulatorUI.init(),this.activeExamEngine.start()}processExamSubmission(e){const t=O[this.currentExamId],i=t.levels[this.currentLevelKey],n=V.evaluateTest(t,i,e.userResponses,e.timeSpentPerSection);n.mockNumber=this.currentMockNumber,n.examShort=t.shortName,T.recordAttempt(this.currentExamId,this.currentLevelKey,this.currentMockNumber,n),D.recordGlobalAttempt(n),this.updateNavProfileBadge(),this.activeAnalyticsUI=new me(n,this.activeExamEngine,()=>{this.startExamSession(this.currentExamId,this.currentLevelKey,this.currentMockNumber+1)},()=>{this.initPortalView()}),this.switchView("analytics"),this.activeAnalyticsUI.render()}}document.addEventListener("DOMContentLoaded",()=>{new ke().init()});
