# 🛍️ React-AppStore

A modern and responsive App Store web application built using **React.js**, where users can explore, search, install, and manage applications — just like a real app marketplace.  

The project showcases app browsing, live search, installation management (via LocalStorage), data visualization, and smooth navigation with loading animations.
Features
Home Page
- Beautiful banner with center-aligned heading, text, and two buttons:  
  - App Store → redirects to App Store  
  - Play Store → redirects to Play Store  
- States Section showing platform or user stats.  
- Top Apps Section displaying 8 featured apps (title, image, downloads, and rating).  
- Show All button navigates to the All Apps page.

All Apps Page
- Displays all apps from the JSON dataset (20 apps).  
- Live search bar that filters apps in real time .  
- Shows total number of apps found.  
- No App Found message with a friendly error image if nothing matches.  
- Spinner animation during search operations.

App Details Page
- Displays selected app’s image, title, description, and details.  
- Shows:
  - Average rating  
  - Download count  
  - Review count  
- Install button:
  - Once clicked, it shows a success toast and becomes disabled with “Installed” text.
  - Installed apps are saved in LocalStorage.
- Review Chart created using Recharts to visualize rating distribution (1–5 stars).

 My Installation Page
- Displays all installed apps retrieved from LocalStorage.  
- Each app card includes:
  - Title, image, download count, and rating.
  - Uninstall button
    - Removes the app from UI and LocalStorage.
    - Shows a relevant toast message.  
- Includes a Sort by Downloads dropdown:
  - High → Low  
  - Low → High  

Technology-
React.js	
React Router	
HTML5	
CSS3 / TailwindCSS	
JavaScript (ES6)	
Recharts	
LocalStorage API	
Toast Library 


