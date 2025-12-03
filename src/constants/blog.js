
import Urdu from "../assets/Urdu_Audio_ROC_Comparison.png";
import DefectPrediction from "../assets/Model_Comparison.png"
import apiTestingBanner from "../assets/api.png"
// import os_sim from "../assets/os_sim.png";
// import contact_book from "../assets/contact_book.png";
// import ecommerce from "../assets/ecommerce.png";

export const blogPosts = [
   // {
  //       id: 1,
  //       title: "Urdu Deepfake Audio Detection: Combating Voice Cloning with 98% Accuracy",
  //       date: "November 30, 2025",
  //       category: "Assignment",
  //       excerpt: "A robust machine learning pipeline engineered to distinguish between real and AI-synthesized Urdu speech. Leveraging MFCC analysis and Deep Neural Networks (DNN) to secure voice identity in South Asia.",
  //       content: `
  //       <p><strong>The Challenge:</strong> With the rise of generative AI, voice cloning (Deepfakes) has become a significant security threat, particularly in low-resource languages like Urdu. This project aims to build a defense mechanism against these attacks.</p>
  //
  //       <h3>🛠️ Technical Architecture</h3>
  //       <ul>
  //       <li><strong>Data Engineering:</strong> Processed over 6,700 audio clips from the CSALT dataset. Implemented rigorous preprocessing using <em>Librosa</em> to normalize sampling rates (22kHz) and standard duration padding (3.0s).</li>
  //       <li><strong>Feature Extraction:</strong> Utilized Mel-frequency Cepstral Coefficients (MFCCs) with a coefficient of 40 to capture the distinct textural 'fingerprint' of the human voice versus synthetic artifacts.</li>
  //       <li><strong>Model Comparison:</strong> Benchmarked classical models (SVM, Logistic Regression) against Deep Learning architectures.</li>
  //       </ul>
  //
  //       <h3>🏆 Key Results</h3>
  //       <p>The project successfully demonstrated that deep learning captures non-linear audio patterns better than linear classifiers. The final evaluation on a strictly isolated test set yielded:</p>
  //       <ul>
  //       <li><strong>Deep Neural Network (DNN):</strong> 98.45% Accuracy (AUC: 0.998)</li>
  //       <li><strong>SVM (Linear):</strong> 95.66% Accuracy</li>
  //       <li><strong>Perceptron:</strong> 53.42% Accuracy</li>
  //       </ul>
  //
  //       <p>This system provides a scalable foundation for real-time forensic audio analysis tools.</p>
  //       `,
  //       image: Urdu,
  //       tags: ["Deep Learning", "Audio Processing", "Python", "Cybersecurity", "Urdu"],
  //   },
  //
  //   {
  //   id: 2,
  //   title: "Automated Software Defect Triage: Multi-Label Classification with NLP",
  //   date: "December 02, 2025",
  //   category: "Assignment",
  //   excerpt: "An intelligent text analysis system designed to streamline software issue tracking. Utilizes TF-IDF vectorization and Multi-Output SVMs to automatically tag bug reports with 82% precision.",
  //   content: `
  //     <p><strong>The Challenge:</strong> In large-scale software projects, manually categorizing issue reports (triaging) is a significant bottleneck. A single report often belongs to multiple categories (e.g., both "High Priority" and "Bug"), making standard classification insufficient.</p>
  //
  //     <h3>🛠️ Technical Architecture</h3>
  //     <ul>
  //       <li><strong>Text Preprocessing:</strong> Engineered a cleaning pipeline using Regex to normalize unstructured text, followed by <strong>TF-IDF Vectorization</strong> to map semantic importance across a 5,000-feature vocabulary.</li>
  //       <li><strong>Multi-Label Strategy:</strong> Implemented a "One-vs-Rest" architecture using <code>MultiOutputClassifier</code>, allowing the system to predict multiple non-exclusive tags simultaneously.</li>
  //       <li><strong>Online Learning Challenge:</strong> Successfully implemented a <strong>Perceptron model in Online Mode</strong> (using <code>partial_fit</code>), simulating a real-time learning environment where the model updates weights incrementally as new bug reports arrive.</li>
  //     </ul>
  //
  //     <h3>🏆 Key Results</h3>
  //     <p>The system was evaluated on Hamming Loss (to penalize individual incorrect tags) and F1-Score.</p>
  //     <ul>
  //       <li><strong>SVM (Best Performer):</strong> Achieved a <strong>Micro-F1 Score of 0.82</strong> and a low Hamming Loss of 0.11, proving highly effective for sparse text data.</li>
  //       <li><strong>Deep Neural Network:</strong> Delivered comparable performance (0.81 F1) using a Sigmoid output layer for independent probability estimation.</li>
  //     </ul>
  //
  //     <p>This project demonstrates how NLP can reduce administrative overhead in Agile development cycles.</p>
  //   `,
  //   image: DefectPrediction, // You will need to import an image variable or use a string path
  //   tags: ["NLP", "Scikit-Learn", "Text Classification", "DevOps", "Python"],
  // },
{
  id: 3, // Change this ID if you have other posts
  title: "Architecting a Hybrid API Automation & Performance Framework",
  date: "December 3, 2025",
  category: "Assignment",
  excerpt: "A deep dive into building a scalable testing suite using Jest, Supertest, and K6, fully integrated with GitHub Actions CI/CD for continuous quality assurance.",
  content: "In modern software development, trusting your API is paramount. For this project, I engineered a robust Quality Assurance framework targeting the JSONPlaceholder REST API. The solution implements a 'shift-left' strategy by combining Functional Automation with Performance Benchmarking. \n\nUsing **Jest and Supertest**, I developed a modular test suite covering full CRUD operations (GET, POST, PUT, DELETE) for critical endpoints like Users, Posts, and Comments. To validate system reliability under stress, I integrated **K6** scripts to simulate concurrent user loads, measuring latency and throughput against strict thresholds. \n\nThe highlight of this project is the **CI/CD integration via GitHub Actions**. I configured an automated pipeline that spins up a virtual environment on every commit, executes the functional tests sequentially, and triggers the load tests—ensuring that no broken code ever reaches production.",
  image: apiTestingBanner,
  tags: ["CI/CD", "K6", "Jest", "DevOps", "API Testing"],
},
    // {
    //     id: 2,
    //     title: "My Journey into Systems Programming",
    //     date: "November 25, 2025",
    //     category: "Project",
    //     excerpt: "Reflecting on my experience building an OS simulation in C.",
    //     content: "Building an OS kernel from scratch was a daunting but rewarding task...",
    //     image: os_sim,
    //     tags: ["C", "Systems", "OS"],
    // },
    // {
    //     id: 3,
    //     title: "Daily Coding Challenge: LeetCode Hard",
    //     date: "November 29, 2025",
    //     category: "Assignment",
    //     excerpt: "Tackling a dynamic programming problem today. Here is how I solved it.",
    //     content: "Today's challenge was 'Median of Two Sorted Arrays'...",
    //     image: contact_book,
    //     tags: ["DSA", "Algorithms", "Daily"],
    // },
    // {
    //     id: 4,
    //     title: "Setting up a Home Lab for Cyber Security",
    //     date: "November 20, 2025",
    //     category: "Task",
    //     excerpt: "A guide to setting up a safe environment for penetration testing.",
    //     content: "I used VirtualBox to set up Kali Linux and Metasploitable...",
    //     image: ecommerce,
    //     tags: ["Security", "Linux", "Hacking"],
    // },
];
