actor {
  public type SocialLinks = {
    internetComputer : Text;
    github : Text;
    twitter : Text;
    linkedin : Text;
    stackOverflow : Text;
    dev : Text;
    email : Text;
  };

  public type Project = {
    name : Text;
    description : Text;
    link : Text;
    technologies : [Text];
  };

  public type PortfolioData = {
    name : Text;
    bio : Text;
    socialLinks : SocialLinks;
    skills : [Text];
    projects : [Project];
  };

  let portfolioData : PortfolioData = {
    name = "Abhishek Kumar";
    bio = "Software engineer with a passion for building robust, scalable systems. Experienced in backend development, cloud computing, and DevOps.";
    socialLinks = {
      internetComputer = "https://internetcomputer.org";
      github = "https://github.com/abhishek-kumar";
      twitter = "https://twitter.com/abhishek_kumar";
      linkedin = "https://linkedin.com/in/abhishek-kumar";
      stackOverflow = "https://stackoverflow.com/users/abhishek-kumar";
      dev = "https://dev.to/abhishek-kumar";
      email = "mailto:abhishek.kumar@example.com";
    };
    skills = [
      "Backend Development",
      "Cloud Computing",
      "DevOps",
      "Rust",
      "Motoko",
      "JavaScript",
      "TypeScript",
      "CI/CD",
      "Docker",
      "Kubernetes",
    ];
    projects = [
      {
        name = "Personal Website";
        description = "A personal portfolio website to showcase my work and skills.";
        link = "https://abhishek-kumar.com";
        technologies = ["Next.js", "TypeScript", "CSS"];
      },
      {
        name = "Blockchain Voting";
        description = "A secure and transparent voting system built on blockchain.";
        link = "https://github.com/abhishek-kumar/blockchain-voting";
        technologies = ["Rust", "IC", "Motoko"];
      },
      {
        name = "DevOps Toolkit";
        description = "Collection of scripts and tools for automating DevOps tasks.";
        link = "https://github.com/abhishek-kumar/devops-toolkit";
        technologies = ["Bash", "Docker", "Kubernetes"];
      },
    ];
  };

  public func getPortfolioData() : async PortfolioData {
    portfolioData;
  };
};
