# Setting Up Your ACM SOA Logo as Favicon

Your ACM SOA Chapter logo is located at:
`figma:asset/4be3510b8c27570741ba83b71a546f77e40ac45a.png`

## Quick Setup Instructions

To use your actual logo as the website favicon, follow these steps:

### 1. Download the Logo
- The logo is already imported in the project from Figma
- It's a diamond-shaped blue logo with "SOA acm CHAPTER" text

### 2. Create Favicon Sizes

You'll need to create multiple sizes of your logo for optimal display across devices:

#### Required Sizes:
- **favicon.png** - 512×512px (main favicon)
- **favicon-192.png** - 192×192px (for Android devices)
- **favicon-16x16.png** - 16×16px (browser tab)
- **favicon-32x32.png** - 32×32px (browser tab)
- **apple-touch-icon.png** - 180×180px (for iOS devices)
- **og-image.png** - 1200×630px (social media preview)

### 3. Using Online Tools

#### Option A: Use a Favicon Generator
1. Go to [RealFaviconGenerator](https://realfavicongenerator.net/)
2. Upload your logo (the diamond-shaped ACM SOA logo)
3. Download the generated favicon package
4. Extract all files to the `/public` directory

#### Option B: Use Figma/Photoshop
1. Export your logo from Figma at different sizes
2. Ensure the logo is centered on a square canvas
3. Save each size with the correct filename

### 4. File Placement

Place all generated files in the `/public` directory:
```
/public
  ├── favicon.png (512×512)
  ├── favicon-192.png
  ├── favicon-16x16.png
  ├── favicon-32x32.png
  ├── apple-touch-icon.png
  ├── og-image.png
  ├── favicon.svg (already created as placeholder)
  └── manifest.json (already configured)
```

### 5. Current Setup

The following files have been configured for you:
- ✅ `/index.html` - with proper favicon links
- ✅ `/public/manifest.json` - PWA configuration
- ✅ `/public/favicon.svg` - placeholder SVG (replace with your logo)
- ✅ SEO meta tags
- ✅ Social media preview tags

### 6. Verification

After adding your logo files, verify the favicon by:
1. Running your development server
2. Opening the website in a browser
3. Checking the browser tab for your logo
4. Testing on mobile devices
5. Checking social media link previews

### Current Placeholder

A temporary SVG favicon matching your brand colors (ACM blue #0085C3) has been created. Replace it with your actual logo for the best results.

### Brand Colors Used
- **Primary Blue**: #0085C3 (ACM Blue)
- **Light Blue**: #7DD3F0
- **White**: #FFFFFF

## Notes

- The diamond shape of your logo will display perfectly as a favicon
- Make sure to maintain the aspect ratio when resizing
- Use transparent backgrounds for .png files
- The SVG version will scale beautifully on high-DPI displays
