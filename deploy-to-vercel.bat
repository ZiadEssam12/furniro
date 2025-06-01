@echo off
echo Installing Vercel CLI...
npm install -g vercel

echo Building React app...
npm run build

echo Deploying to Vercel...
vercel --prod

echo Deployment complete! Check the URL above for your live site.
