# EEE UAP - Programming and AI Club Website

A modern, responsive website for the Programming and AI Club of the Department of Electrical and Electronic Engineering at the University of Asia Pacific.

## 🚀 Features

- **Modern Design**: Built with Next.js 15 and Tailwind CSS
- **Responsive Layout**: Optimized for all devices
- **Contact Form**: Integrated email functionality with Nodemailer
- **Dynamic Content**: Committee profiles, news, events, and gallery
- **SEO Optimized**: Meta tags, structured data, and sitemap
- **Performance Optimized**: Image optimization and lazy loading

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Email**: Nodemailer with Gmail SMTP
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **TypeScript**: Full type safety

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd eee-uap
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
```bash
cp .env.example .env.local
```

4. Configure email settings in `.env.local`:
```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🚀 Deployment

### GitHub Setup

1. Create a new repository on GitHub
2. Push your code:
```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
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
   - Node version: 18

3. **Environment Variables**:
   Add these in Netlify Dashboard → Site Settings → Environment Variables:
   ```
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-app-password
   ```

4. **Deploy**:
   - Click "Deploy site"
   - Your site will be available at `https://your-site-name.netlify.app`

## 📧 Email Configuration

For the contact form to work, you need to set up Gmail SMTP:

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Use the generated password in `EMAIL_PASS`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
eee-uap/
├── app/                    # Next.js app router pages
├── components/             # Reusable components
│   ├── ui/                # UI primitives
│   ├── layout/            # Layout components
│   └── home/              # Home page components
├── lib/                   # Utility functions and data
├── public/                # Static assets
└── styles/                # Global styles
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

- **Club Email**: paiclubeee@uap-bd.edu
- **Department**: EEE, University of Asia Pacific
- **Website**: [Your deployed URL]

Designed and developed by Subodh Chandra Shil