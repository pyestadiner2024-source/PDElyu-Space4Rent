# Diner Rent-to-Own Property Listing Website

A professional, fully responsive webpage showcasing a diner property available for rent-to-own. Built with HTML5, CSS3, and vanilla JavaScript - perfect for deployment on GitHub Pages.

## 📋 Features

✅ **8-Photo Slideshow** - Automatic carousel with manual navigation controls
✅ **Responsive Design** - Looks great on desktop, tablet, and mobile devices  
✅ **Professional Layout** - Clean, modern aesthetic with smooth animations
✅ **Quick Details Section** - Key property information at a glance
✅ **Features & Amenities** - Comprehensive list of facility features
✅ **Rent-to-Own Program Details** - Clear pricing and terms breakdown
✅ **Financial Overview** - Revenue and expense projections
✅ **Contact Form** - Easy inquiry submission (ready for email service integration)
✅ **Sticky Navigation** - Easy access to all page sections
✅ **SEO Friendly** - Semantic HTML structure

## 📁 File Structure

```
PDElyu-Space4Rent/
├── index.html       # Main HTML page
├── styles.css       # All CSS styling
├── script.js        # JavaScript functionality
└── README.md        # This file
```

## 🚀 How to Use Locally

1. **Download the files** to your computer
2. **Open `index.html`** in your web browser
3. The page will load immediately - no server required!

## 📤 Deploy to GitHub Pages

### Method 1: Upload to GitHub Desktop (Easiest)

1. Create a new GitHub repository named `your-username.github.io`
   - Or use any repository name (e.g., `diner-property`)
2. Clone the repository to your computer
3. Copy all files (index.html, styles.css, script.js) to the cloned folder
4. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Add diner property listing website"
   git push origin main
   ```
5. Your site will be live at:
   - `https://your-username.github.io` (for user/org site)
   - `https://your-username.github.io/repository-name` (for project site)

### Method 2: Use GitHub Web Interface

1. Create a new repository on GitHub
2. Click "Add file" → "Upload files"
3. Drag and drop your HTML, CSS, and JS files
4. Commit the files
5. Go to repository Settings → Pages
6. Set Source to "main branch"
7. Your site will be live in a few minutes

### Method 3: Command Line (Git)

```bash
# Clone or create a repository
git clone https://github.com/your-username/repository-name.git
cd repository-name

# Copy your files here
cp index.html styles.css script.js ./

# Commit and push
git add .
git commit -m "Initial diner property listing"
git push origin main
```

## 🖼️ Customizing Images

The current slideshow uses placeholder images. To add your own:

1. **Replace placeholder URLs** in index.html:
   ```html
   <!-- Find lines like this and replace the image URL -->
   <img src="https://via.placeholder.com/1200x600/C41E3A/FFFFFF?text=Diner+Exterior" alt="Diner Exterior">
   ```

2. **Options for images:**
   - **Upload to GitHub**: Add images to your repository in an `images/` folder
   - **Use an image hosting service**: Imgur, Cloudinary, or similar
   - **Use relative paths** if images are in your repository:
     ```html
     <img src="images/photo1.jpg" alt="Diner Exterior">
     ```

## 📝 Customizing Content

Edit `index.html` to update:
- **Property Details**: Location, square footage, seating capacity
- **Pricing**: Monthly rent and purchase price
- **Features**: Amenities and facilities
- **Contact Info**: Phone, email, address, hours
- **Financial Projections**: Revenue and expense estimates

Edit `styles.css` to change:
- **Colors**: Modify CSS variables at the top (--primary-color, etc.)
- **Fonts**: Change font-family declarations
- **Layout**: Adjust grid columns and spacing

## 🎨 Color Scheme

Current colors (easily customizable):
- **Primary Red**: #C41E3A
- **Secondary Blue**: #2C3E50
- **Accent Pink**: #E8B4B8
- **Light Gray**: #F5F5F5

To change colors globally, edit the `:root` section in `styles.css`:
```css
:root {
    --primary-color: #YOUR_COLOR;
    --secondary-color: #YOUR_COLOR;
    /* etc */
}
```

## 🔄 Slideshow Features

- **Auto-play**: Slides automatically advance every 5 seconds
- **Manual Controls**: Click arrows (< >) to navigate
- **Dot Navigation**: Click dots to jump to specific slides
- **Keyboard Navigation**: Use arrow keys (← →) when viewing gallery
- **Responsive**: Works seamlessly on all screen sizes

## 📧 Contact Form Integration

The contact form currently displays a success message locally. To actually send emails, integrate one of these services:

### Option 1: Formspree (Recommended - Free)
1. Go to [Formspree.io](https://formspree.io)
2. Sign up and create a new form
3. Update the form in index.html:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="contact-form">
   ```

### Option 2: EmailJS
1. Go to [EmailJS.com](https://www.emailjs.com)
2. Set up your email service
3. Add their SDK to index.html
4. Update script.js with your credentials

### Option 3: Netlify Forms
If hosting on Netlify instead of GitHub Pages:
1. Add `netlify` attribute to form
2. Deploy through Netlify
3. Forms automatically submitted to your email

## 🔍 SEO Optimization

The page includes:
- Semantic HTML5 elements
- Descriptive meta tags (edit in `<head>`)
- Proper heading hierarchy (H1 → H2 → H3)
- Alt text on all images
- Mobile-friendly viewport settings

To further optimize:
1. Update the `<title>` tag with relevant keywords
2. Update the `<meta name="description">` tag
3. Add your business name and location throughout
4. Create a sitemap.xml for search engines

## 📱 Browser Compatibility

Works on:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Tips

1. **Optimize Images**: Compress your photos before uploading
   - Use tools like TinyPNG or ImageOptim
   - Keep images under 500KB each

2. **Lazy Loading**: Images load only when visible (future enhancement)

3. **Caching**: GitHub Pages automatically caches your static files

4. **Analytics**: Add Google Analytics to track visitors:
   - Uncomment the placeholder code in script.js
   - Add your Google Analytics ID

## 🛠️ Troubleshooting

**Slideshow not working?**
- Check browser console (F12) for JavaScript errors
- Ensure script.js is properly linked in index.html

**Images not showing?**
- Verify image URLs are correct
- Check that image files are in the repository (if using local paths)
- Ensure image URLs are HTTPS (not HTTP)

**Form not submitting?**
- Integrate Formspree or EmailJS (see Contact Form Integration)
- Check browser console for errors

**Page not loading on GitHub Pages?**
- Wait 5-10 minutes after pushing changes
- Check repository Settings → Pages for any errors
- Ensure index.html is in the root directory

## 📄 License

Free to use and modify for commercial purposes.

## 📞 Support

For questions or customization needs:
- Review the inline comments in each file
- Check browser developer tools (F12) for errors
- Consult GitHub Pages documentation: https://pages.github.com

---

**Ready to go live?** Push this to your GitHub repository and your professional diner property listing will be accessible to the world! 🎉
