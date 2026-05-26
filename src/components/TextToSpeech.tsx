import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Pause, Play, Square } from "lucide-react";

const PORTFOLIO_TEXT = `
Hello! Welcome to my portfolio. My name is Rahul, and I am a Computer Science Engineering student at Lovely Professional University in Punjab, India, where I currently hold a C G P A of 8.13.

I am passionate about data analytics, software development, and problem-solving. I love turning complex datasets into meaningful insights and building efficient systems that make a real difference.

Let me tell you a bit about my technical skills.

When it comes to programming languages, I have hands-on experience with C plus plus, Python, SQL, and C. I regularly use Python for data analysis and machine learning tasks, and I enjoy solving problems using C plus plus on platforms like LeetCode, where I have solved over 150 questions so far.

On the frameworks and libraries side, I work with tools like NumPy, Pandas, Seaborn, Matplotlib, Scikit-Learn, and Django. These tools help me build everything from machine learning pipelines to full-stack web applications.

For tools and platforms, I am comfortable using Microsoft Excel, Power B I, Android Studio, and the IDLE development environment.

Now let me walk you through some of my projects.

My latest and most exciting project is called MOM AI, which stands for Maternal Health Risk Prediction Platform. This is an AI-powered web application that I built to help predict maternal health risks during pregnancy. It analyzes key medical parameters like age, blood pressure, blood sugar, body temperature, and heart rate, and classifies pregnancies into low, medium, or high risk categories. This kind of early risk detection can genuinely support better healthcare decisions. I built the machine learning model using Scikit-Learn and integrated it into a Django web application with a clean, easy-to-use interface.

Another project I am proud of is my Hospital Appointment System. I developed this as a C plus plus console application that handles appointment booking, cancellation, patient search, and age-based filtering. One of its key features is the emergency priority queue, which ensures that patients with higher medical severity are attended to first.

I also built an Energy Flow dashboard using Power B I. This interactive dashboard analyzes energy consumption, carbon emissions, and cost data. I used D A X measures, drill-through reports, and slicers for renewable and non-renewable energy sources, making it easy for users to compare trends and make data-driven decisions.

In terms of professional experience, I completed a Data Analyst internship at SkillCraft Technology from June to July 2025. During this time, I worked on real-world data cleaning, preprocessing, and visualization tasks. I also assisted in building internal reporting dashboards using Python, Excel, and Power B I.

Before that, I completed a summer training program at Lovely Professional University focused on Data Structures and Algorithms using C plus plus and the Standard Template Library.

I also hold several certifications. I have completed the Data Analytics Job Simulation by Deloitte through Forage, a course on ChatGPT Prompt Engineering by Wingspan, and a course on Computational Theory and Finite Automata, also by Wingspan.

I completed my schooling from DAV Public School in Jind, Haryana, where I scored 89.2 percent in my Matriculation and 80.4 percent in my Intermediate exams.

To sum it up, I am someone who genuinely enjoys solving problems with data and code. I am always eager to learn new technologies and collaborate on meaningful projects. If you are looking for a motivated Computer Science student with a strong foundation in data analytics, machine learning, and software development, I would love to connect.

You can reach me at my email: itz zz rahul 93060 at gmail dot com, or connect with me on LinkedIn. Thank you so much for taking the time to visit my portfolio!
`;

export function TextToSpeech() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (!("speechSynthesis" in window)) {
      setIsSupported(false);
    }
    return () => {
      window.speechSynthesis?.cancel();
    };
  }, []);

  const getMaleVoice = (): SpeechSynthesisVoice | null => {
    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find(
      (v) =>
        (v.name.toLowerCase().includes("david") ||
          v.name.toLowerCase().includes("james") ||
          v.name.toLowerCase().includes("daniel") ||
          v.name.toLowerCase().includes("microsoft david") ||
          v.name.toLowerCase().includes("google uk english male") ||
          v.name.toLowerCase().includes("alex")) &&
        v.lang.startsWith("en")
    );
    return preferred || voices.find((v) => v.lang.startsWith("en")) || null;
  };

  const speak = () => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(PORTFOLIO_TEXT);
    utterance.rate = 0.90;
    utterance.pitch = 0.80;
    utterance.volume = 1;

    const setVoice = () => {
      const voice = getMaleVoice();
      if (voice) utterance.voice = voice;
    };

    if (window.speechSynthesis.getVoices().length > 0) {
      setVoice();
    } else {
      window.speechSynthesis.onvoiceschanged = setVoice;
    }

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };
    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
    setIsPaused(false);
  };

  const pause = () => {
    window.speechSynthesis.pause();
    setIsPaused(true);
  };

  const resume = () => {
    window.speechSynthesis.resume();
    setIsPaused(false);
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
  };

  if (!isSupported) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {isPlaying && (
        <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 shadow-xl text-sm font-medium text-foreground">
          <span className="flex gap-0.5 items-end h-4">
            <span className="w-1 bg-primary rounded-full animate-bounce" style={{ height: "60%", animationDelay: "0ms" }} />
            <span className="w-1 bg-primary rounded-full animate-bounce" style={{ height: "100%", animationDelay: "150ms" }} />
            <span className="w-1 bg-primary rounded-full animate-bounce" style={{ height: "40%", animationDelay: "300ms" }} />
            <span className="w-1 bg-primary rounded-full animate-bounce" style={{ height: "80%", animationDelay: "100ms" }} />
          </span>
          <span>{isPaused ? "Paused" : "Reading portfolio..."}</span>
        </div>
      )}

      <div className="flex items-center gap-2">
        {isPlaying && (
          <>
            {isPaused ? (
              <button
                onClick={resume}
                title="Resume"
                className="w-11 h-11 rounded-full bg-primary/10 border border-primary/30 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all shadow-lg"
              >
                <Play size={18} />
              </button>
            ) : (
              <button
                onClick={pause}
                title="Pause"
                className="w-11 h-11 rounded-full bg-primary/10 border border-primary/30 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all shadow-lg"
              >
                <Pause size={18} />
              </button>
            )}
            <button
              onClick={stop}
              title="Stop"
              className="w-11 h-11 rounded-full bg-destructive/10 border border-destructive/30 text-destructive flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground transition-all shadow-lg"
            >
              <Square size={16} />
            </button>
          </>
        )}

        <button
          onClick={isPlaying ? stop : speak}
          title={isPlaying ? "Stop reading" : "Listen to my portfolio"}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${
            isPlaying
              ? "bg-primary text-primary-foreground scale-105 shadow-primary/30"
              : "bg-card border border-border text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105"
          }`}
        >
          {isPlaying ? <VolumeX size={22} /> : <Volume2 size={22} />}
        </button>
      </div>
    </div>
  );
}
