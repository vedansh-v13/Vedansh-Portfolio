# Vedansh Wandalkar - Portfolio Website

A modern, responsive portfolio website showcasing UX/UI design projects and capabilities. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Vedansh-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables (optional)**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Access the website**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

### Building for Production

```bash
npm run build
npm start
```

## 🚀 Deployment

### Railway.app Deployment

1. **Connect your GitHub repository** to Railway.app
2. **Configure environment variables** in Railway dashboard:
   - `NODE_ENV=production`
   - `PORT` (Railway will set this automatically)
3. **Deploy** - Railway will automatically build and deploy

### Alternative Deployment Options

- **Vercel**: For frontend-only deployment
- **Netlify**: For static site deployment
- **Heroku**: For full-stack deployment
- **DigitalOcean App Platform**: For containerized deployment

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **Animations**: Framer Motion
- **Routing**: Wouter
- **Backend**: Express.js
- **Database**: Drizzle ORM (optional)

## 📦 Project Structure

```
Vedansh-Portfolio/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── data/          # Project and content data
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions
│   │   └── pages/         # Page components
│   └── public/            # Static assets
├── server/                # Backend Express server
├── shared/                # Shared TypeScript types
└── public/                # Static assets
```

## 🎨 Features

- **Responsive Design**: Mobile-first approach
- **Dark Theme**: Professional dark theme optimized for UX/UI showcase
- **Project Showcase**: Interactive project gallery with detailed case studies
- **Contact Integration**: Direct contact form integration
- **SEO Optimized**: Proper meta tags and structured data
- **Fast Loading**: Optimized build with code splitting

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - TypeScript type checking

## 🌍 Environment Variables

Create a `.env` file based on `.env.example`:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database (if using database features)
DATABASE_URL=your_database_url

# Analytics (optional)
GA_MEASUREMENT_ID=your_google_analytics_id
```

## 📱 Featured Projects

- **UCaaS [Verizon]** - Unified Communications platform
- **BlueJeans Conference** - Video conferencing solution
- **INAAM** - Cross-merchant loyalty platform
- **Omnycomm** - E-commerce platform
- **ReplyRocket AI** - AI-powered email assistant
- **Agent Ari** - AI virtual assistant

## 🔧 Customization

### Adding New Projects
1. Update `client/src/data/projectsData.ts`
2. Add detailed case study in `client/src/data/projectDetailsData.ts`
3. Add project images to `public/images/`

### Modifying Theme
1. Edit `theme.json` for color scheme
2. Update `tailwind.config.ts` for custom styles

## 🚧 Troubleshooting

### Common Issues

1. **Port Already in Use**
   ```bash
   # Kill process using port 5000
   lsof -ti:5000 | xargs kill -9
   ```

2. **Module Not Found**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Build Errors**
   ```bash
   npm run check  # Check TypeScript errors
   ```

## 📄 License

All rights reserved. This portfolio and its contents are proprietary.

## 👤 Contact

**Vedansh Wandalkar**  
UX/UI Designer  
Location: Bangalore, India  
Email: [your-email@example.com]  
LinkedIn: [your-linkedin-profile]  
Portfolio: [your-portfolio-url]