@echo off
echo Installing Vercel CLI...
npm install -g vercel

echo Clearing node_modules to prevent size issues...
rd /s /q node_modules
echo Building locally first to check for errors...
npm install
npm run build

echo Deploying to Vercel...
vercel deploy --prod --yes

echo Deployment complete! Check the URL above for your live site.
