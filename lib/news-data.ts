export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  slug: string;
  image?: string;
}

export const newsData: NewsItem[] = [
  {
    id: "1",
    title: "Dr. Sarah Ahmed Receives International Excellence Award in Pharmaceutical Research",
    excerpt: "Our distinguished alumna Dr. Sarah Ahmed from the 3rd batch has been honored with the prestigious International Excellence Award for her groundbreaking research in drug delivery systems.",
    content: `Dr. Sarah Ahmed, a proud graduate of the Department of Pharmacy at University of Asia Pacific (3rd batch), has been awarded the International Excellence Award in Pharmaceutical Research by the Global Pharmaceutical Research Council.

Dr. Ahmed's revolutionary work on targeted drug delivery systems for cancer treatment has shown remarkable results in clinical trials, with a 40% improvement in treatment efficacy and significantly reduced side effects. Her research focuses on nanoparticle-based drug carriers that can precisely target cancer cells while minimizing damage to healthy tissue.

"This achievement is not just mine, but a testament to the strong foundation I received at UAP's Pharmacy Department," said Dr. Ahmed during the award ceremony. "The rigorous training and research opportunities provided by our faculty prepared me for this journey in pharmaceutical innovation."

Currently serving as the Lead Research Scientist at BioPharma Innovations Inc. in Boston, Dr. Ahmed has published over 25 peer-reviewed papers and holds 8 patents in pharmaceutical technology. Her work has been cited over 1,200 times in international journals.

Dr. Ahmed's success story continues to inspire current students and fellow alumni, demonstrating the global impact that UAP Pharmacy graduates are making in the pharmaceutical industry.`,
    category: "Achievement",
    date: "2024-01-15",
    readTime: "3 min read",
    author: "Alumni Relations Office",
    slug: "dr-sarah-ahmed-international-excellence-award",
    image: "/images/news/sarah-ahmed-award.jpg"
  },
  {
    id: "2",
    title: "Alumnus Launches Revolutionary Healthcare Startup in Silicon Valley",
    excerpt: "Mohammad Rahman (5th batch) co-founded MediTech Solutions, a startup that uses AI to optimize pharmaceutical supply chains, recently securing $2.5 million in Series A funding.",
    content: `Mohammad Rahman, a 2019 graduate from our Department of Pharmacy, has made headlines in the tech world by co-founding MediTech Solutions, an innovative startup that leverages artificial intelligence to revolutionize pharmaceutical supply chain management.

The company, based in Silicon Valley, recently completed its Series A funding round, raising $2.5 million from prominent venture capital firms. MediTech Solutions' proprietary AI platform helps pharmaceutical companies reduce waste, optimize inventory, and ensure timely delivery of critical medications to healthcare facilities.

"During my time at UAP, I learned not just about pharmaceuticals, but also about the broader healthcare ecosystem," Rahman explained. "I saw firsthand how supply chain inefficiencies could impact patient care, and that inspired me to find a technological solution."

The startup's platform has already been adopted by three major pharmaceutical distributors and has demonstrated a 30% reduction in supply chain costs while improving delivery reliability by 45%. The company plans to expand its operations across Asia and Europe with the new funding.

Rahman's journey from a pharmacy student in Dhaka to a successful entrepreneur in Silicon Valley showcases the global opportunities available to our graduates and their potential to drive innovation in healthcare technology.`,
    category: "Entrepreneurship",
    date: "2024-01-10",
    readTime: "4 min read",
    author: "Career Development Office",
    slug: "mohammad-rahman-meditech-solutions-startup",
    image: "/images/news/rahman-startup.jpg"
  },
  {
    id: "3",
    title: "Alumni Network Establishes Scholarship Fund for Underprivileged Students",
    excerpt: "The UAP Pharmacy Alumni Association has launched a scholarship program worth BDT 10 lakhs annually to support talented students from economically disadvantaged backgrounds.",
    content: `The UAP Pharmacy Alumni Association has announced the establishment of the 'Excellence Through Opportunity' scholarship fund, a landmark initiative that will provide financial support to deserving students from underprivileged backgrounds.

The scholarship program, with an annual fund of BDT 10 lakhs, will support up to 20 students each year, covering tuition fees, laboratory costs, and essential academic materials. The initiative was spearheaded by alumni from the first five batches, who collectively contributed to create this sustainable support system.

"Education should never be limited by financial constraints," said Ms. Fatima Khan (2nd batch), President of the Alumni Association. "This scholarship represents our commitment to ensuring that talented students have the opportunity to pursue their dreams in pharmaceutical sciences."

The selection process will be merit-based, with special consideration for students demonstrating academic excellence despite financial hardships. Recipients will also receive mentorship from successful alumni working in various sectors of the pharmaceutical industry.

The first batch of scholarship recipients will be announced in March 2024, with applications opening next month. This initiative reflects the strong bond within our alumni community and their dedication to giving back to the institution that shaped their careers.

The scholarship fund also includes provisions for research grants, enabling students to participate in innovative projects and present their work at national and international conferences.`,
    category: "Community",
    date: "2024-01-05",
    readTime: "3 min read",
    author: "Alumni Relations Office",
    slug: "alumni-scholarship-fund-announcement",
    image: "/images/news/scholarship-fund.jpg"
  },
  {
    id: "4",
    title: "Research Collaboration Between Alumni Leads to Breakthrough in Diabetes Treatment",
    excerpt: "A collaborative research project between Dr. Aminul Islam (2nd batch) and Dr. Rashida Begum (4th batch) has resulted in a novel insulin formulation that could transform diabetes care.",
    content: `A groundbreaking collaboration between two of our distinguished alumni has yielded promising results in diabetes treatment research. Dr. Aminul Islam (2nd batch) from Johns Hopkins University and Dr. Rashida Begum (4th batch) from the International Centre for Diarrhoeal Disease Research, Bangladesh (icddr,b) have developed an innovative insulin formulation that could significantly improve the lives of diabetes patients.

Their research, published in the prestigious Journal of Pharmaceutical Sciences, describes a new long-acting insulin formulation that maintains stable blood glucose levels for up to 48 hours with a single injection. This breakthrough could reduce the frequency of insulin injections for Type 1 diabetes patients from multiple daily doses to just three times per week.

"Our collaboration began during an alumni reunion where we discovered our shared interest in diabetes research," explained Dr. Islam. "Combining our expertise in pharmaceutical formulation and clinical research has been incredibly rewarding."

The formulation uses a novel polymer-based delivery system that releases insulin gradually, mimicking the natural insulin production pattern of a healthy pancreas. Clinical trials involving 200 patients showed a 25% improvement in glycemic control compared to conventional insulin therapies.

Dr. Begum added, "This project demonstrates the power of our alumni network in advancing healthcare solutions. We're now working with pharmaceutical companies to bring this innovation to market."

The research has attracted international attention, with several pharmaceutical giants expressing interest in licensing the technology. The success of this collaboration has inspired the establishment of an alumni research network to facilitate future joint projects.`,
    category: "Research",
    date: "2023-12-28",
    readTime: "4 min read",
    author: "Research Office",
    slug: "diabetes-treatment-breakthrough-alumni-collaboration",
    image: "/images/news/diabetes-research.jpg"
  }
];

export default newsData;