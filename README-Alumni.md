# Alumni Portal Management

## How to Add New Alumni

The alumni portal automatically reads data from the Excel file located at:
`g:\alumni\eee-uap\data\alumni.xlsx`

### Steps to Add New Alumni:

1. **Open the Excel file**: Navigate to `data/alumni.xlsx` and open it in Excel or any spreadsheet application.

2. **Add a new row**: Add alumni information in the following columns:
   - **Name**: Full name of the alumni
   - **Batch**: Batch number (e.g., "1st", "2nd", "3rd")
   - **Position**: Current job title
   - **Institute**: Current workplace/organization
   - **Email**: Contact email address
   - **Photo**: Image filename (e.g., "john.jpg")
   - **Point**: Numerical score for sorting (higher points appear first)
   - **LinkedIn**: LinkedIn profile URL (optional)
   - **Facebook**: Facebook profile URL (optional)
   - **Instagram**: Instagram profile URL (optional)

3. **Add the photo**: Place the alumni photo in `public/images/alumni/` directory with the same filename specified in the Excel file.

4. **Save the file**: Save the Excel file after adding the new row.

5. **Refresh the website**: The changes will be automatically reflected on the website when you refresh the page.

### Example Row:
```
Name: Mr. John Doe
Batch: 6th
Position: Software Engineer
Institute: Tech Company Ltd
Email: john.doe@email.com
Photo: john.jpg
Point: 95
LinkedIn: https://linkedin.com/in/john-doe
Facebook: https://facebook.com/john.doe
Instagram: https://instagram.com/john_doe
```

### Notes:
- The system automatically detects changes to the Excel file
- Make sure photo filenames match exactly (case-sensitive)
- If a photo is missing, a placeholder will be shown
- **Point field**: Used for sorting alumni (higher points = higher priority)
  - Alumni are automatically sorted by points in descending order
  - Point values can range from 0-100 (or any numerical value)
  - If no point is specified, it defaults to 0
- Social media fields are optional - leave empty if not available
- Social media links should include the full URL (starting with https://)
- Only social media profiles with valid URLs will be displayed as clickable icons
- The website will show the first 3 alumni (highest points) on the homepage as "Featured Alumni"
- All alumni are displayed on the `/alumni` page with social media icons, sorted by points

### Current Alumni Count:
The system currently has 10 alumni records loaded from the Excel file.