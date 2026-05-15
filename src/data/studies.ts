export const studies = [
  {
    title: "B.S. in Computer Science",
    institution: "Western Governors University",
    description:
      "Core CS foundations: data structures, algorithms, operating systems, networking, and databases.",
    tags: [
      "Algorithms",
      "Data Structures",
      "Operating Systems",
      "Databases",
      "Networking",
    ],
  },
  {
    title: "M.S. in Cybersecurity & Information Assurance",
    institution: "Western Governors University",
    description:
      "Focus on distributed systems, testing strategies, and cloud architecture; thesis on resilience patterns in microservices.",
    tags: [
      "Distributed Systems",
      "Cloud Architecture",
      "Testing",
      "Microservices",
    ],
  },
];

export type StudyItem = (typeof studies)[number];

