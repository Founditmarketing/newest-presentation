# deploy_and_save.ps1
# This script commits your changes and deploys to Vercel

Write-Host "1. Adding all changes to Git..."
git add .

Write-Host "2. Committing changes..."
git commit -m "feat: Isolate presentation route and add landing page"

Write-Host "3. Pushing to GitHub..."
git push

Write-Host "4. Deploying to Vercel (Production)..."
# Using npx to run local vercel package or download latest
npx vercel --prod

Write-Host "Done! Check output for deployment URL."
Read-Host "Press Enter to exit"
