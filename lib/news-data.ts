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
  title: "Dr. Sultan Mahmud Wins International Excellence Award in Renewable Energy Innovation",
  excerpt: "Our distinguished alumnus Dr. Sultan Mahmud from the 13th batch has been honored with the prestigious International Excellence Award for his groundbreaking work in solar energy optimization and smart grid technology.",
  content: `Dr. Sultan Mahmud, a proud graduate of the Department of Electrical and Electronic Engineering at the University of Asia Pacific (13th batch), has been awarded the International Excellence Award in Renewable Energy Innovation by the Global Energy Research Council.

Dr. Mahmud's pioneering research on AI-driven solar energy optimization and smart grid integration has significantly improved energy efficiency in large-scale renewable power plants. His innovative algorithms can boost solar farm output by up to 35% while reducing operational costs and improving grid stability.

"This achievement is not just mine, but a testament to the strong foundation I received at UAP's EEE Department," said Dr. Mahmud during the award ceremony. "The rigorous academic training and hands-on project opportunities provided by our faculty prepared me to tackle real-world engineering challenges."

Currently serving as the Chief Renewable Energy Engineer at GreenTech Power Solutions in Singapore, Dr. Mahmud has published over 20 peer-reviewed papers and holds 6 patents in renewable energy and smart grid technology. His work has been cited over 1,000 times in international energy and engineering journals.

Dr. Mahmud's success story continues to inspire current students and fellow alumni, showcasing the global impact that UAP EEE graduates are making in the field of renewable energy and sustainable technology.`,
  category: "Achievement",
  date: "2024-01-15",
  readTime: "3 min read",
  author: "Alumni Relations Office",
  slug: "dr-sultan-mahmud-renewable-energy-award",
  image: "/images/news/sultan-mahmud-award.svg"
},
 {
  id: "2",
  title: "Alumnus Launches Pioneering Renewable Energy Startup in Bangladesh",
  excerpt: "Fahim Hasan (5th batch) co-founded SolarGrid Innovations, a startup that uses AI to optimize solar power distribution networks, recently securing 2.5 crore BDT in seed funding.",
  content: `Fahim Hasan, a 2019 graduate from our Department of Electrical and Electronic Engineering, has made waves in Bangladesh's energy sector by co-founding SolarGrid Innovations, an ambitious startup dedicated to revolutionizing renewable energy management through artificial intelligence.

The company, headquartered in Dhaka, recently secured 2.5 crore BDT in seed funding from leading impact investors. SolarGrid Innovations' proprietary AI platform analyzes real-time solar generation data to optimize power distribution, reduce wastage, and enhance the reliability of off-grid and on-grid renewable systems.

"During my time at UAP, I not only gained technical knowledge but also developed a passion for sustainable technology," Hasan explained. "I saw how energy inefficiency was holding back communities, and I wanted to create a solution that empowers both households and industries."

The startup's platform has already been implemented in three major solar microgrid projects in rural Bangladesh, achieving a 28% increase in power utilization efficiency and a 40% reduction in downtime. With the new funding, the company plans to expand its services to urban rooftop solar networks and industrial renewable installations.

Hasan's journey from an engineering student at UAP to a renewable energy entrepreneur demonstrates the potential of our graduates to drive innovation and create sustainable solutions that impact lives across the nation.`,
  category: "Entrepreneurship",
  date: "2024-01-10",
  readTime: "4 min read",
  author: "Career Development Office",
  slug: "fahim-hasan-solargrid-innovations",
  image: "/images/news/fahim-hasan-solargrid.svg"
},
{
  id: "3",
  title: "EEE Alumni Network Establishes Scholarship Fund for Underprivileged Engineering Students",
  excerpt: "The UAP EEE Alumni Association has launched a scholarship program worth BDT 10 lakhs annually to support talented students from economically disadvantaged backgrounds.",
  content: `The UAP EEE Alumni Association has announced the establishment of the 'Empowering Engineers' scholarship fund, a landmark initiative aimed at providing financial support to deserving students from underprivileged backgrounds.

The scholarship program, with an annual fund of BDT 10 lakhs, will support up to 20 students each year, covering tuition fees, laboratory expenses, project materials, and essential academic resources. The initiative was spearheaded by alumni from the first five batches, who came together to create a sustainable support system for future engineers.

"Access to quality engineering education should not be determined by financial circumstances," said Engr. Farhana Rahman (2nd batch), President of the Alumni Association. "This scholarship reflects our commitment to ensuring that talented students can pursue their ambitions in electrical and electronic engineering without barriers."

The selection process will be merit-based, with special consideration for students demonstrating exceptional academic performance despite financial hardships. In addition to financial assistance, recipients will receive mentorship from accomplished alumni working in diverse sectors such as power and energy, telecommunications, automation, and renewable energy.

The first batch of scholarship recipients will be announced in March 2024, with applications opening next month. This initiative highlights the unity within our alumni community and their dedication to giving back to the department that laid the foundation for their careers.

The scholarship fund also includes provisions for innovation grants, enabling students to develop cutting-edge projects, participate in competitions, and present their work at national and international engineering conferences.`,
  category: "Community",
  date: "2024-01-05",
  readTime: "3 min read",
  author: "Alumni Relations Office",
  slug: "eee-alumni-scholarship-fund-announcement",
  image: "/images/news/eee-scholarship-fund.svg"
},
{
  id: "4",
  title: "Research Collaboration Between Alumni Leads to Breakthrough in Smart Grid Technology",
  excerpt: "A collaborative research project between Engr. Aminul Islam (2nd batch) and Engr. Rashida Begum (4th batch) has resulted in a next-generation smart grid control system that could transform Bangladesh's power distribution network.",
  content: `A groundbreaking collaboration between two of our distinguished alumni has yielded a major advancement in smart grid technology. Engr. Aminul Islam (2nd batch) from the National University of Singapore and Engr. Rashida Begum (4th batch) from the Bangladesh University of Engineering and Technology (BUET) have jointly developed an AI-driven control system that significantly enhances the efficiency and reliability of national power grids.

Their research, published in the prestigious IEEE Transactions on Smart Grid, introduces a next-generation real-time grid optimization algorithm capable of reducing transmission losses by up to 28% while improving load balancing across multiple regions. This innovation has the potential to drastically reduce power outages and improve the stability of renewable energy integration.

"Our collaboration began during an alumni networking event where we discovered our shared passion for sustainable energy systems," explained Engr. Islam. "Combining our expertise in AI algorithms and power systems engineering has been incredibly rewarding."

The system uses advanced predictive analytics to forecast energy demand and automatically adjust grid parameters, ensuring optimal power flow even during peak load periods. Field tests conducted with Bangladesh Power Development Board (BPDB) demonstrated a 22% improvement in overall grid efficiency compared to current systems.

Engr. Begum added, "This project showcases the strength of our alumni network in driving technological innovation. We are now in discussions with government agencies and private sector partners to deploy the system nationwide."

The research has attracted significant attention from international renewable energy firms, with several expressing interest in piloting the technology in Southeast Asia. The success of this collaboration has inspired the creation of an alumni research consortium to facilitate more joint engineering projects in the future.`,
  category: "Research",
  date: "2023-12-28",
  readTime: "4 min read",
  author: "Research Office",
  slug: "smart-grid-breakthrough-alumni-collaboration",
  image: "/images/news/smart-grid-research.svg"
}

];

export default newsData;