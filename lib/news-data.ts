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
  title: "English Alumni Network Launches Scholarship Fund for Underprivileged Literature and Language Students",
  excerpt: "The UAP English Alumni Association has initiated a scholarship program worth BDT 10 lakhs annually to support talented students from economically disadvantaged backgrounds.",
  content: `The UAP English Alumni Association has proudly announced the creation of the 'Empowering Voices' scholarship fund, a groundbreaking initiative designed to provide financial aid to deserving students from underprivileged backgrounds pursuing studies in English language, literature, and linguistics.

With an annual fund of BDT 10 lakhs, the scholarship program will support up to 20 students each year, covering tuition fees, essential learning materials, and participation in literary workshops and conferences. This initiative was driven by alumni from the first five graduating classes, who united to establish a sustainable support system for future scholars and literary professionals.

"Access to quality education in the humanities should never be hindered by financial challenges," said Dr. Sarah Ahmed (2nd batch), President of the Alumni Association. "This scholarship embodies our commitment to ensuring that talented students can follow their passion for English studies without obstacles."

Recipients will be selected based on merit, with special attention given to students who demonstrate outstanding academic performance despite economic hardships. Beyond financial support, scholarship awardees will benefit from mentorship opportunities with accomplished alumni active in fields such as education, publishing, media, translation, and creative writing.

The first group of scholarship recipients will be announced in March 2024, with applications opening next month. This initiative highlights the solidarity within our alumni community and their dedication to giving back to the department that nurtured their academic and professional growth.

Additionally, the scholarship fund will offer innovation grants, encouraging students to engage in creative writing projects, participate in literary competitions, and present their work at national and international forums.`,
  category: "Community",
  date: "2024-01-05",
  readTime: "3 min read",
  author: "Alumni Relations Office",
  slug: "english-alumni-scholarship-fund-announcement",
  image: "/images/news/english-scholarship-fund.svg"
}

];

export default newsData;