export interface AlumniMember {
  id: string
  name: string
  batch: string
  position: string
  institute: string
  email: string
  socialMedia?: {
    linkedin?: string
    facebook?: string
    instagram?: string
  }
  image?: string
}

export const alumniData: AlumniMember[] = [
  {
    id: "1",
    name: "Ms. Sudeshna Khan",
    batch: "1st",
    position: "Electric System Protection Engineer",
    institute: "NIPSCO, USA",
    email: "Suparna_0086@yahoo.com",
    image: "https://picsum.photos/400/400?random=1",
    socialMedia: {
      linkedin: "https://linkedin.com/in/sudeshna-khan",
      facebook: "https://facebook.com/sudeshna.khan",
      instagram: "https://instagram.com/sudeshna_khan"
    }
  },
  {
    id: "2",
    name: "Engr. Md. Ashafull Alam",
    batch: "1st",
    position: "Managing Director",
    institute: "Safe Zone Bangladesh Ltd.",
    email: "safezoneltd.bd@gmail.com",
    image: "https://picsum.photos/400/400?random=2",
    socialMedia: {
      linkedin: "https://linkedin.com/in/ashafull-alam",
      facebook: "https://facebook.com/ashafull.alam",
      instagram: "https://instagram.com/ashafull_alam"
    }
  },
  {
    id: "3",
    name: "Mr. Mohammad Moniruzzaman",
    batch: "1st",
    position: "Electrical Engineer",
    institute: "Bernhard Schulte Ship Company",
    email: "mohammadmoniruzzaman504@gmail.com",
    image: "https://picsum.photos/400/400?random=3",
    socialMedia: {
      linkedin: "https://linkedin.com/in/mohammad-moniruzzaman",
      facebook: "https://facebook.com/mohammad.moniruzzaman",
      instagram: "https://instagram.com/mohammad_moniruzzaman"
    }
  },
  {
    id: "4",
    name: "Mr. Md. Obaidur Rahman",
    batch: "2nd",
    position: "Managing Director",
    institute: "Protecfire BD Ltd",
    email: "obaidur@protecfire.bz",
    image: "https://picsum.photos/400/400?random=4",
    socialMedia: {
      linkedin: "https://linkedin.com/in/obaidur-rahman",
      facebook: "https://facebook.com/obaidur.rahman",
      instagram: "https://instagram.com/obaidur_rahman"
    }
  },
  {
    id: "5",
    name: "Mr. Abdullah Momtaj",
    batch: "2nd",
    position: "Peace Keeper",
    institute: "United Nations",
    email: "abdullah.momtaj@un.org",
    image: "https://picsum.photos/400/400?random=5",
    socialMedia: {
      linkedin: "https://linkedin.com/in/abdullah-momtaj",
      facebook: "https://facebook.com/abdullah.momtaj",
      instagram: "https://instagram.com/abdullah_momtaj"
    }
  },
  {
    id: "6",
    name: "Mr. Md. Sadid Rahman",
    batch: "2nd",
    position: "Auditor",
    institute: "Bangladesh ACCORD",
    email: "ghostleader696@gmail.com",
    image: "https://picsum.photos/400/400?random=6",
    socialMedia: {
      linkedin: "https://linkedin.com/in/sadid-rahman",
      facebook: "https://facebook.com/sadid.rahman",
      instagram: "https://instagram.com/sadid_rahman"
    }
  },
  {
    id: "7",
    name: "Mr. Md. Fazlul Haque",
    batch: "4th",
    position: "Manager",
    institute: "Beximco Ltd",
    email: "fazlul06uap@gmail.com",
    image: "https://picsum.photos/400/400?random=7",
    socialMedia: {
      linkedin: "https://linkedin.com/in/fazlul-haque",
      facebook: "https://facebook.com/fazlul.haque",
      instagram: "https://instagram.com/fazlul_haque"
    }
  },
  {
    id: "8",
    name: "Mr. Muhammad Ahad Rahman Miah",
    batch: "4th",
    position: "Assistant Professor",
    institute: "University Of Asia Pacific",
    email: "ahad@uap-bd.edu",
    image: "https://picsum.photos/400/400?random=8",
    socialMedia: {
      linkedin: "https://linkedin.com/in/ahad-rahman-miah",
      facebook: "https://facebook.com/ahad.rahman.miah",
      instagram: "https://instagram.com/ahad_rahman_miah"
    }
  },
  {
    id: "9",
    name: "Mr. Md. Khairul Alam",
    batch: "4th",
    position: "Assistant Professor",
    institute: "University Of Asia Pacific",
    email: "khairul@uap-bd.edu",
    image: "https://picsum.photos/400/400?random=9",
    socialMedia: {
      linkedin: "https://linkedin.com/in/khairul-alam",
      facebook: "https://facebook.com/khairul.alam",
      instagram: "https://instagram.com/khairul_alam"
    }
  },
  {
    id: "10",
    name: "Mr. Fahim Mahmud",
    batch: "5th",
    position: "Head of Technical",
    institute: "Rahim Afroze Solar",
    email: "fahim.mahmudd@gmail.com",
    image: "https://picsum.photos/400/400?random=10",
    socialMedia: {
      linkedin: "https://linkedin.com/in/fahim-mahmud",
      facebook: "https://facebook.com/fahim.mahmud",
      instagram: "https://instagram.com/fahim_mahmud"
    }
  }
]

export function getAlumniByBatch(batch: string): AlumniMember[] {
  return alumniData.filter(alumni => alumni.batch === batch)
}

export function getAllBatches(): string[] {
  const batches = alumniData.map(alumni => alumni.batch)
  return [...new Set(batches)].sort()
}

export function getAlumniById(id: string): AlumniMember | undefined {
  return alumniData.find(alumni => alumni.id === id)
}