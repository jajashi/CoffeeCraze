# PowerShell script to copy image assets to public folder
# Run this from the react-coffee-shop directory

Write-Host "`n=====================================" -ForegroundColor Cyan
Write-Host "  Coffee Craze - Asset Copy Script" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan

# Paths
$parentDir = ".."
$publicDir = "public"

# Create public directory if it doesn't exist
if (-not (Test-Path $publicDir)) {
    New-Item -ItemType Directory -Path $publicDir | Out-Null
    Write-Host "`nCreated public directory" -ForegroundColor Green
}

# List of images to copy
$images = @(
    "logo.png",
    "americano.png",
    "cappucino.png",
    "espresso.png",
    "latte.png",
    "mocha.png",
    "cold_brew.png",
    "coffee cup.png"
)

Write-Host "`nCopying image assets..." -ForegroundColor Yellow

$copiedCount = 0
$notFoundCount = 0

# Copy each image
foreach ($image in $images) {
    $sourcePath = Join-Path $parentDir $image
    $destPath = Join-Path $publicDir $image
    
    if (Test-Path $sourcePath) {
        Copy-Item $sourcePath $destPath -Force
        Write-Host "  [OK] $image" -ForegroundColor Green
        $copiedCount++
    } else {
        Write-Host "  [MISSING] $image" -ForegroundColor Yellow
        $notFoundCount++
    }
}

Write-Host "`n=====================================" -ForegroundColor Cyan
Write-Host "Summary:" -ForegroundColor Cyan
Write-Host "  Copied: $copiedCount files" -ForegroundColor Green
if ($notFoundCount -gt 0) {
    Write-Host "  Missing: $notFoundCount files" -ForegroundColor Yellow
}
Write-Host "=====================================" -ForegroundColor Cyan

if ($copiedCount -gt 0) {
    Write-Host "`nAsset copy complete! You can now run 'npm run dev'" -ForegroundColor Green
} else {
    Write-Host "`nWarning: No files were copied. Please check the image locations." -ForegroundColor Red
}

Write-Host ""



