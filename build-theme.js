#!/usr/bin/env node

import { mkdirSync, readdirSync, rmSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Find all theme files in src directory
const srcDir = join(__dirname, 'src')
const themeFiles = readdirSync(srcDir).filter(file =>
  file.endsWith('-theme.js'),
)
const themes = themeFiles.map(file => file.replace('-theme.js', ''))

if (themes.length === 0) {
  console.error('❌ No theme files found in src/ directory')
  process.exit(1)
}

// Ensure themes directory exists
const themesDir = join(__dirname, 'themes')
mkdirSync(themesDir, { recursive: true })

// Clean up existing theme files
console.log('🧹 Cleaning themes directory...\n')
const existingFiles = readdirSync(themesDir)
for (const file of existingFiles) {
  if (file.endsWith('.json')) {
    rmSync(join(themesDir, file))
    console.log(`   Removed ${file}`)
  }
}
if (existingFiles.some(f => f.endsWith('.json'))) console.log('')

console.log('🎨 Building themes...\n')

for (const themeName of themes) {
  // Import the theme from src directory
  const themePath = join(__dirname, 'src', `${themeName}-theme.js`)
  const themeModule = await import(themePath)
  const theme = themeModule.default

  // Convert the theme object to VSCode theme format
  const vscodeTheme = {
    name: theme.displayName || theme.name,
    type: theme.type,
    colors: theme.colors,
    tokenColors: theme.tokenColors,
    semanticHighlighting: theme.semanticHighlighting,
  }

  // Add semantic token colors if they exist
  if (theme.semanticTokenColors)
    vscodeTheme.semanticTokenColors = theme.semanticTokenColors

  // Write to themes directory
  const outputPath = join(__dirname, 'themes', `${themeName}-custom.json`)
  writeFileSync(outputPath, JSON.stringify(vscodeTheme, null, 2))

  console.log(`✅ ${theme.displayName || theme.name}`)
  console.log(`   ${outputPath}\n`)
}

console.log('🚀 To test in VSCode:')
console.log('   1. Open VSCode')
console.log('   2. Press F5 to open Extension Development Host')
console.log('   3. Press Cmd+K Cmd+T and select your theme')
