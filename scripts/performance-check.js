#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 UAP EEE Website Performance Optimization Check\n');

// Check if Next.js config is optimized
function checkNextConfig() {
  console.log('📋 Checking Next.js Configuration...');
  
  try {
    const configPath = path.join(process.cwd(), 'next.config.mjs');
    const config = fs.readFileSync(configPath, 'utf8');
    
    const checks = [
      { name: 'Image Optimization Enabled', test: /unoptimized:\s*false/, status: false },
      { name: 'SWC Minification Enabled', test: /swcMinify:\s*true/, status: false },
      { name: 'Remote Image Patterns Configured', test: /remotePatterns/, status: false },
      { name: 'Modern Image Formats Enabled', test: /formats.*webp/, status: false }
    ];
    
    checks.forEach(check => {
      check.status = check.test.test(config);
      console.log(`  ${check.status ? '✅' : '❌'} ${check.name}`);
    });
    
    const passedChecks = checks.filter(c => c.status).length;
    console.log(`\n  Score: ${passedChecks}/${checks.length} optimizations enabled\n`);
    
  } catch (error) {
    console.log('  ❌ Could not read next.config.mjs\n');
  }
}

// Check for large data files
function checkDataFiles() {
  console.log('📊 Checking Data File Sizes...');
  
  const dataFiles = [
    // 'lib/faculty-data.ts', // Removed faculty data
    'lib/events-data.ts',
    'lib/publications-data.ts',
    'lib/lab-data.ts'
  ];
  
  dataFiles.forEach(file => {
    try {
      const filePath = path.join(process.cwd(), file);
      const stats = fs.statSync(filePath);
      const sizeKB = Math.round(stats.size / 1024);
      const status = sizeKB > 50 ? '⚠️' : '✅';
      console.log(`  ${status} ${file}: ${sizeKB}KB`);
    } catch (error) {
      console.log(`  ❓ ${file}: Not found`);
    }
  });
  
  console.log();
}

// Check for optimized components
function checkOptimizedComponents() {
  console.log('🎨 Checking Component Optimizations...');
  
  const componentsToCheck = [
    { file: 'components/ui/optimized-animated-section.tsx', name: 'Optimized Animations' },
    { file: 'components/ui/lazy-data-loader.tsx', name: 'Lazy Data Loading' },
    { file: 'components/ui/performance-monitor.tsx', name: 'Performance Monitoring' }
  ];
  
  componentsToCheck.forEach(component => {
    try {
      const filePath = path.join(process.cwd(), component.file);
      fs.accessSync(filePath);
      console.log(`  ✅ ${component.name}`);
    } catch (error) {
      console.log(`  ❌ ${component.name}`);
    }
  });
  
  console.log();
}

// Check package.json for heavy dependencies
function checkDependencies() {
  console.log('📦 Checking Dependencies...');
  
  try {
    const packagePath = path.join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    
    const heavyDeps = [
      'framer-motion',
      '@radix-ui/react-dialog',
      'video.js',
      'lucide-react'
    ];
    
    const allDeps = { ...packageJson.dependencies, ...packageJson.devDependencies };
    
    heavyDeps.forEach(dep => {
      if (allDeps[dep]) {
        console.log(`  📦 ${dep}: ${allDeps[dep]}`);
      }
    });
    
    console.log(`\n  Total dependencies: ${Object.keys(allDeps).length}\n`);
    
  } catch (error) {
    console.log('  ❌ Could not read package.json\n');
  }
}

// Performance recommendations
function showRecommendations() {
  console.log('💡 Performance Recommendations:');
  console.log('  1. Enable image optimization in next.config.mjs');
  console.log('  2. Use lazy loading for large data files');
  console.log('  3. Replace heavy animations with optimized versions');
  console.log('  4. Implement code splitting for large components');
  console.log('  5. Use modern image formats (WebP, AVIF)');
  console.log('  6. Monitor bundle size with: npm run analyze');
  console.log('  7. Test performance with: npm run lighthouse');
  console.log();
}

// Run all checks
function runPerformanceCheck() {
  checkNextConfig();
  checkDataFiles();
  checkOptimizedComponents();
  checkDependencies();
  showRecommendations();
  
  console.log('🎯 Performance check complete!');
  console.log('💻 Run "npm run dev" to test your optimizations');
}

// Execute if run directly
if (require.main === module) {
  runPerformanceCheck();
}

module.exports = { runPerformanceCheck };