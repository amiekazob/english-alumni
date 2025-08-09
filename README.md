# EEE Alumni Portal - University of Asia Pacific

🎓 A comprehensive alumni portal for the Department of Electrical and Electronic Engineering (EEE) at the University of Asia Pacific, featuring alumni directory, events management, and community engagement tools.

## 🌟 Features

- **Alumni Directory**: Browse and search through alumni profiles with filtering by batch, country, and verification status
- **Featured Alumni**: Showcase distinguished alumni with detailed profiles
- **Events Management**: Upcoming and past events with registration capabilities
- **Committee Information**: Department committee members and their roles
- **Academic Programs**: Information about BSc and MSc EEE programs
- **Contact System**: Contact form with email integration
- **Social Media Integration**: Share content across multiple platforms
- **Responsive Design**: Mobile-first design with modern UI/UX

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + Custom Components
- **Icons**: Lucide React
- **Data Processing**: XLSX for Excel file handling
- **Email**: Nodemailer
- **Deployment**: Netlify

## 📋 Prerequisites

- Node.js 18 or higher
- npm or yarn package manager
- Git

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/amiekazob/alumni-eee.git
cd alumni-eee
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```env
# Email Configuration (for contact form)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Base URL (for production)
NEXT_PUBLIC_BASE_URL=https://your-domain.com
```

### 4. Data Setup

Place your Excel files in the `data/` directory:
- `alumni_new.xlsx` - Main alumni data
- `featured_alumni.xlsx` - Featured alumni data

### 5. Run Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
alumni-eee/
├── app/                    # Next.js app router pages
│   ├── api/               # API routes
│   ├── alumni/            # Alumni pages
│   ├── featured-alumni/   # Featured alumni pages
│   └── ...
├── components/             # Reusable components
│   ├── ui/                # UI primitives
│   ├── layout/            # Layout components
│   └── home/              # Home page components
├── lib/                   # Utility functions and data
├── data/                  # Excel data files
├── public/                # Static assets
├── styles/                # Global styles
└── ...
```

## 🚀 Deployment

### GitHub Setup

1. **Create Repository**: Create a new repository on GitHub
2. **Push Code**:
   ```bash
   git remote add origin https://github.com/amiekazob/alumni-eee.git
   git branch -M main
   git push -u origin main
   ```

### Netlify Deployment

1. **Connect Repository**:
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: `18`

3. **Environment Variables**:
   Add the following in Netlify dashboard:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   NEXT_PUBLIC_BASE_URL=https://your-netlify-domain.netlify.app
   ```

4. **Deploy**: Click "Deploy site"

### Custom Domain (Optional)

1. In Netlify dashboard, go to "Domain settings"
2. Add your custom domain
3. Update DNS records as instructed
4. Update `NEXT_PUBLIC_BASE_URL` environment variable

## 📊 Data Management

### Alumni Data Format

The Excel files should contain the following columns:

**alumni_new.xlsx**:
- Name, Batch, Position, Institute, Email, Photo, Point, LinkedIn, Facebook, Instagram, verified, blue_verified, Country

**featured_alumni.xlsx**:
- Name, Batch, Position, Institute, Email, Photo, Point, LinkedIn, Facebook, Instagram, verified, blue_verified, Country

### Adding New Alumni

1. Update the respective Excel file
2. Redeploy the application
3. Data will be automatically loaded from the Excel files

## 🔧 Configuration

### Email Setup

1. **Gmail Setup**:
   - Enable 2-factor authentication
   - Generate an app password
   - Use the app password in `EMAIL_PASS`

2. **Other Email Providers**:
   - Update the transporter configuration in `app/api/contact/route.ts`

### Social Media

- Configure social media sharing in `lib/social-media-api.ts`
- Update default hashtags and platform configurations

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**:
   - Check TypeScript errors: `npm run lint`
   - Verify all dependencies are installed

2. **Excel File Issues**:
   - Ensure Excel files are in the correct format
   - Check file paths in API routes

3. **Email Not Working**:
   - Verify environment variables
   - Check email provider settings

4. **Images Not Loading**:
   - Ensure images are in the `public/` directory
   - Check image paths and formats

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes
4. Commit: `git commit -m 'Add new feature'`
5. Push: `git push origin feature/new-feature`
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

- **Club Email**: paiclubeee@uap-bd.edu
- **Department**: EEE, University of Asia Pacific
- **GitHub**: [https://github.com/amiekazob/alumni-eee](https://github.com/amiekazob/alumni-eee)

---

**Designed and developed by Subodh Chandra Shil**

*Programming & AI Club, Department of EEE, University of Asia Pacific*