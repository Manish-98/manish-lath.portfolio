import { BadgeDollarSign, HandPlatter, Receipt, ShieldPlus, UserPen } from 'lucide-react';

export const experiences = [
  {
    company: "Technogise Pvt. Ltd.",
    title: "Technology Consultant",
    period: "January 2023 – Present",
    description: "Contribute to software architecture and ensure scalability and performance.\nWrite, test, and maintain high-quality code across the full SDLC.\nGuide fellow developers and collaborate effectively with cross-functional teams.\nTroubleshoot and resolve complex issues in existing systems.\nEnhance workflows, code quality, and advocate for best practices.",
    achievements: [
      {
        icon: BadgeDollarSign,
        text: "UPI integration for a leading payment platform"
      },
      {
        icon: HandPlatter,
        text: "Setup AI service-line for the organisation"
      }
    ],
    companyLogo: "/technogise-logo.png"
  },
  {
    company: "Thoughtworks India Pvt. Ltd.",
    title: "Senior Consultant - Application Developer",
    period: "August 2023 – December 2024",
    description: "Analyze business requirements and translate them into scalable, efficient, and maintainable software solutions.\nDesign application architecture and provide technical direction to the development team.\nEnsure best practices in coding, security, and performance are followed during application development.\nMentor and guide other developers, providing technical expertise and code reviews.\nAssist in troubleshooting complex technical issues and provide solutions.",
    achievements: [
      {
        icon: ShieldPlus,
        text: "Life Insurance Platform for a major insurance company"
      }
    ],
    companyLogo: "/thoughtworks-logo.svg"
  },
  {
    company: "Thoughtworks India Pvt. Ltd.",
    title: "Consultant - Application Developer",
    period: "July 2020 - July 2023",
    description: "Develop applications for external clients to cater to their business needs.\nWrite clean, lean, testable, and maintainable code following the industry best practices.\nOptimize solutions to cut the cost of business processes for the clients.\nConsult the clients and other stakeholders about tech and business decisions.\nCollaborate with multiple teams, consumer clients and other stakeholders to design highly functioning and reliable applications.\nOn an organization level, help the organization in the recruitment process by taking up tech interviews.",
    achievements: [
      {
        icon: Receipt,
        text: "Contract Management Platform for a B2B company"
      },
      {
        icon: UserPen,
        text: "Customer Management Portal for a B2B company"
      }
    ],
    companyLogo: "/thoughtworks-logo.svg"
  }
]; 