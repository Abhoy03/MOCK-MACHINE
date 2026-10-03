// Mock Machine - Interactive English Speaking Coach & Conversation Engine
// Real-time voice speech recognition, speech synthesis, grammar mistake correction & banking interview simulation

export const GRAMMAR_PATTERNS = [
  { regex: /\bhe\s+don'?t\b/i, correct: "he doesn't", reason: "Singular third-person subject 'he' takes 'does not / doesn't'." },
  { regex: /\bshe\s+don'?t\b/i, correct: "she doesn't", reason: "Singular third-person subject 'she' takes 'does not / doesn't'." },
  { regex: /\bit\s+don'?t\b/i, correct: "it doesn't", reason: "Subject 'it' takes 'doesn't'." },
  { regex: /\bdid(n't|\s+not)\s+(went|came|knew|saw|bought|took|made)\b/i, correct: "did not + base verb (go, come, know, see, buy, take, make)", reason: "After auxiliary 'did / didn't', always use the base form (V1) of the verb." },
  { regex: /\bdiscuss\s+about\b/i, correct: "discuss", reason: "The verb 'discuss' is transitive and does not take the preposition 'about'." },
  { regex: /\bcope\s+up\s+with\b/i, correct: "cope with", reason: "The standard idiomatic expression is 'cope with' (without 'up')." },
  { regex: /\bone\s+of\s+my\s+friend\b/i, correct: "one of my friends", reason: "'One of + plural noun' rule: use 'friends'." },
  { regex: /\bevery\s+students\b/i, correct: "every student", reason: "'Every' is followed by a singular countable noun." },
  { regex: /\baccording\s+to\s+me\b/i, correct: "in my opinion / from my perspective", reason: "In formal interview English, say 'in my opinion' rather than 'according to me'." },
  { regex: /\bi\s+am\s+agree\b/i, correct: "I agree", reason: "'Agree' is a full verb, not an adjective. Say 'I agree'." },
  { regex: /\bpayed\b/i, correct: "paid", reason: "The past tense of pay in financial contexts is spelled 'paid'." }
];

export const CONVERSATION_SCENARIOS = {
  interview: [
    {
      botPrompt: "Welcome to your Banking Interview Simulation! Let us start with an introductory question: Could you please introduce yourself and tell me what motivated you to pursue a career in the banking sector?",
      topic: "Introduction & Banking Motivation"
    },
    {
      botPrompt: "That is interesting. Can you explain in your own words how the Reserve Bank of India’s Repo Rate hikes impact retail borrowers and inflation in the economy?",
      topic: "Monetary Policy & Economy"
    },
    {
      botPrompt: "Very well explained. Imagine you are working as a Branch Officer and an irate customer approaches your desk shouting about an unauthorized debit. How would you handle this situation calmly?",
      topic: "Customer Grievance Handling"
    },
    {
      botPrompt: "What are Non-Performing Assets (NPAs), and why do you think managing asset quality is crucial for a bank’s profitability and Capital Adequacy Ratio?",
      topic: "Banking Concepts (NPAs & CRAR)"
    },
    {
      botPrompt: "Where do you see yourself in the banking sector five years from now, and how will your skills contribute to modern digital banking services?",
      topic: "Career Vision & Leadership"
    }
  ],
  gd: [
    {
      botPrompt: "Welcome to the Group Discussion Round! The topic for today is: 'Is Artificial Intelligence a threat to traditional banking jobs or an indispensable enabler?' What is your opening viewpoint?",
      topic: "AI in Banking"
    },
    {
      botPrompt: "That is a valid point. However, some critics argue that algorithmic underwriting could lead to unintentional credit exclusion. How do you respond to that?",
      topic: "Algorithmic Fairness"
    },
    {
      botPrompt: "Let us discuss Digital Rupee (CBDC) versus UPI. Do you think CBDCs will eventually replace UPI micropayments in India, or will they coexist?",
      topic: "CBDC vs UPI"
    }
  ],
  casual: [
    {
      botPrompt: "Hello there! I am your AI English Speaking Coach. Let us have a relaxed conversation. Tell me, how was your day, and what topics have you been studying recently?",
      topic: "Daily Practice"
    },
    {
      botPrompt: "Studying consistently is key to success. What is the biggest challenge you face when speaking English in formal situations, and how do you practice overcoming it?",
      topic: "Fluency Habits"
    }
  ]
};

export class SpeakingBotEngine {
  constructor(onBotResponse = () => {}, onStatusChange = () => {}) {
    this.onBotResponse = onBotResponse;
    this.onStatusChange = onStatusChange;
    this.mode = 'interview'; // 'interview' | 'gd' | 'casual'
    this.currentStep = 0;
    this.conversationHistory = [];
    this.isListening = false;
    this.isSpeaking = false;
    this.selectedVoiceURI = null;
    this.speechRecognition = null;
    this.voiceSynth = window.speechSynthesis || null;

    this.initSpeechRecognition();
  }

  getAvailableVoices() {
    if (!this.voiceSynth) return [];
    const all = this.voiceSynth.getVoices() || [];
    // Filter for English voices, or return all if no en voices found
    const enVoices = all.filter(v => v.lang.toLowerCase().startsWith('en'));
    return enVoices.length > 0 ? enVoices : all;
  }

  setSelectedVoice(voiceURI) {
    this.selectedVoiceURI = voiceURI;
  }

  stopSpeaking() {
    if (this.voiceSynth) {
      this.voiceSynth.cancel();
      this.isSpeaking = false;
      this.onStatusChange({ isListening: this.isListening, isSpeaking: false, msg: 'Bot speech stopped.' });
    }
  }

  restartSession() {
    this.stopSpeaking();
    this.stopListening();
    this.startSession(this.mode);
  }

  initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.speechRecognition = new SpeechRecognition();
      this.speechRecognition.continuous = false;
      this.speechRecognition.interimResults = false;
      this.speechRecognition.lang = 'en-IN'; // Indian English accent recognition

      this.speechRecognition.onstart = () => {
        this.isListening = true;
        this.onStatusChange({ isListening: true, isSpeaking: this.isSpeaking, msg: '🎙️ Listening... Speak into your microphone now' });
      };

      this.speechRecognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        this.isListening = false;
        this.onStatusChange({ isListening: false, isSpeaking: this.isSpeaking, msg: 'Speech captured!' });
        this.handleUserMessage(transcript);
      };

      this.speechRecognition.onerror = (e) => {
        this.isListening = false;
        this.onStatusChange({ isListening: false, isSpeaking: this.isSpeaking, msg: `Mic Notice: ${e.error || 'Speech not detected. You can also type directly.'}` });
      };

      this.speechRecognition.onend = () => {
        this.isListening = false;
        this.onStatusChange({ isListening: false, isSpeaking: this.isSpeaking, msg: 'Ready' });
      };
    }
  }

  startListening() {
    // If bot is speaking, stop it before listening
    this.stopSpeaking();

    if (this.speechRecognition) {
      try {
        this.speechRecognition.start();
      } catch (e) {
        console.warn('Speech recognition already active', e);
      }
    } else {
      alert('Speech recognition is not supported in this browser. You can still type your responses directly!');
    }
  }

  stopListening() {
    if (this.speechRecognition && this.isListening) {
      this.speechRecognition.stop();
      this.isListening = false;
    }
  }

  startSession(mode = 'interview') {
    this.mode = mode;
    this.currentStep = 0;
    this.conversationHistory = [];

    const scenarios = CONVERSATION_SCENARIOS[mode] || CONVERSATION_SCENARIOS.interview;
    const initialPrompt = scenarios[0].botPrompt;

    const botMsg = {
      sender: 'bot',
      text: initialPrompt,
      corrections: null,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    this.conversationHistory.push(botMsg);
    this.onBotResponse(botMsg);
    this.speakAloud(initialPrompt);
  }

  handleUserMessage(userText) {
    if (!userText || !userText.trim()) return;

    const cleanText = userText.trim();

    // 1. Analyze Grammar & Spoken Errors
    const corrections = this.analyzeGrammar(cleanText);

    // 2. Add user message
    const userMsg = {
      sender: 'user',
      text: cleanText,
      corrections,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    this.conversationHistory.push(userMsg);
    this.onBotResponse(userMsg);

    // 3. Generate intelligent Bot reply & follow-up
    this.generateBotReply(cleanText, corrections);
  }

  analyzeGrammar(text) {
    const mistakesFound = [];

    GRAMMAR_PATTERNS.forEach(pat => {
      if (pat.regex.test(text)) {
        mistakesFound.push({
          found: text.match(pat.regex)[0],
          correct: pat.correct,
          reason: pat.reason
        });
      }
    });

    // Check sentence length / brevity
    const wordCount = text.split(/\s+/).length;
    let feedbackTip = '';
    if (wordCount < 6) {
      feedbackTip = '💡 Try expanding your spoken response by adding a reason ("because...") or a real-life example to demonstrate fluency.';
    } else if (wordCount > 45) {
      feedbackTip = '✨ Great elaboration! Maintain steady pacing and pause between paragraphs to sound articulate in interviews.';
    } else {
      feedbackTip = '🎯 Excellent sentence length and structured thought expression.';
    }

    return {
      mistakes: mistakesFound,
      feedbackTip,
      wordCount
    };
  }

  generateBotReply(userText, corrections) {
    this.currentStep++;
    const scenarios = CONVERSATION_SCENARIOS[this.mode] || CONVERSATION_SCENARIOS.interview;

    setTimeout(() => {
      let replyText = '';

      if (this.currentStep < scenarios.length) {
        const nextQ = scenarios[this.currentStep].botPrompt;
        const acknowledgment = this.generateAcknowledgment(userText);
        replyText = `${acknowledgment} ${nextQ}`;
      } else {
        replyText = `Outstanding! You have completed this spoken session. Your fluency, articulation, and vocabulary demonstrate solid preparation. Review the grammar notes above to polish your speech further!`;
      }

      const botMsg = {
        sender: 'bot',
        text: replyText,
        corrections: null,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      this.conversationHistory.push(botMsg);
      this.onBotResponse(botMsg);
      this.speakAloud(replyText);
    }, 1200);
  }

  generateAcknowledgment(userText) {
    const phrases = [
      'Thank you for articulating that clearly.',
      'That is a very structured viewpoint.',
      'Well stated.',
      'I appreciate your thoughtful response.',
      'That demonstrates good comprehension of the core issue.'
    ];
    return phrases[Math.floor(Math.random() * phrases.length)];
  }

  speakAloud(text) {
    if (!this.voiceSynth) return;
    try {
      this.voiceSynth.cancel(); // stop previous utterance
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95; // comfortable natural speaking speed
      utterance.pitch = 1.0;
      utterance.lang = 'en-US';

      // Pick user-chosen voice or natural sounding fallback
      const voices = this.voiceSynth.getVoices() || [];
      if (this.selectedVoiceURI) {
        const customVoice = voices.find(v => v.voiceURI === this.selectedVoiceURI);
        if (customVoice) utterance.voice = customVoice;
      } else {
        const preferred = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Samantha') || v.name.includes('Jenny') || v.name.includes('David')));
        if (preferred) utterance.voice = preferred;
      }

      utterance.onstart = () => {
        this.isSpeaking = true;
        this.onStatusChange({ isListening: this.isListening, isSpeaking: true, msg: '🔊 Bot is speaking... (Click Stop to interrupt)' });
      };

      utterance.onend = () => {
        this.isSpeaking = false;
        this.onStatusChange({ isListening: this.isListening, isSpeaking: false, msg: 'Ready' });
      };

      utterance.onerror = () => {
        this.isSpeaking = false;
        this.onStatusChange({ isListening: this.isListening, isSpeaking: false, msg: 'Ready' });
      };

      this.voiceSynth.speak(utterance);
    } catch (e) {
      this.isSpeaking = false;
      console.warn('Speech synthesis error', e);
    }
  }
}
