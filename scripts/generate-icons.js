// Simple SVG -> PNG generator using sharp if available.
// Run: node scripts/generate-icons.js
const fs = require('fs')
const path = require('path')
async function run(){
  let sharp
  try{ sharp = require('sharp') }catch(e){
    console.error('sharp is not installed. Run: npm install --save-dev sharp')
    process.exit(1)
  }
  const inputs = [
    { src: 'branding/wellnex_logo_A.svg', sizes: [512,256,192] },
    { src: 'branding/favicon.svg', sizes: [32,16] }
  ]
  for(const item of inputs){
    for(const s of item.sizes){
      const out = item.src.replace('.svg', `-${s}.png`)
      const svg = fs.readFileSync(path.resolve(item.src))
      await sharp(svg).resize(s,s).png().toFile(path.resolve(out))
      console.log('wrote', out)
    }
  }
}
run()
