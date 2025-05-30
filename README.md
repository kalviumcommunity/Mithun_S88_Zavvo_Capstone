Description :
    Zavvo  is an intelligent price comparison platform designed to empower online shoppers with real-time price comparisons , product filters ,  coupon integration , historical trends , smart buying suggestions across various e-commerce platforms , compare products , add to cart and get notifications when price drops , user focused features and Zavvo ensures that you never overpay again.

Problem Statement:
    Online shoppers often spend excessive time browsing multiple platforms to find the best deal for the product . With fluctuating prices , inconsistent offers and hidden coupons , user lack a centralized system that can help them make informed , real-time purchase decisions . There is a need for a unified platform that has all these informations.

Existing Applications : 
                                    
1.PriceDekho
2.MySmartPrice
3.91Mobiles
4.Smartprix 

These are limited to specific categories like electronics , and with no cart, with less any user interaction. Our platform breaks that barrier covering more products, letting you save, track, and plan your purchases, all while keeping you in control.

Uniqueness:
What makes this platform unique is user-centric experience focused on convenience and information about the prices of the product across the platforms, helping users make confident choices .It has “cart” where you can add and get notified when the price drops . Additionally ,  Flash sale + finds hidden coupons . It also features a friendly and responsive chatbot that assists user with real-time queries , helps compare products  and suggests best shopping strategies.

Tools and Software Used:
•	Frontend: React.js, Tailwind CSS
•	Backend: Node.js, Express.js
•	Database: MongoDB
•	APIs: Google Maps API (for delivery zones), WhatsApp API (for price drop alerts)
•	Hosting/DevOps: Vercel (Frontend), Render (Backend), MongoDB Atlas (Database)


Work Plan 

Week 1:
•	Initialize GitHub repository and set up the basic folder structure for frontend and backend.
•	Install React, Tailwind CSS, React Router. Create the Home page and Navbar.
•	Build static pages – Product Search, Comparison Results, and Wishlist.
•	 Develop product input form and filter section (brand, price, etc.).
•	 Set up Context API.
•	 Design reusable components like product cards, deal highlights.
•	 Light debugging, UI polishing, and code refactor

Week 2:
•	Setup backend using Node.js and Express. Initialize routes and middleware.
•	Create a unified API that calls these scrapers and returns consolidated product info.
•	Connect frontend with backend to display real-time comparisons.
Week 3:
•	Set up MongoDB database using Mongoose and define schemas.
•	Add "Add to Wishlist" button to frontend UI.
•	Create backend route to store and fetch wishlist items per user.
•	Build UI to display 7-day and 30-day price history per product.
•	Integrate Chart.js or Recharts to visualize price trends.
•	Test all wishlist and history flows and fix any issues
Week 4:
•	Write logic to detect coupons and discount codes from scraped pages.
•	Simulate frontend coupon auto-apply feature (non-functional test).
•	Implement flash sale detection using keywords or timing.
•	Display flash sale badges, best deal highlights on frontend.
•	Mid-project debugging, handle exceptions and edge cases.

Week 5:
•	Add logic to monitor price drops in the wishlist daily.
•	Integrate Mail or WhatsApp API to send price drop alerts.
•	Create a chatbot UI component in bottom-right corner.
•	Feed the chatbot with static FAQs and help commands.
•	Let chatbot suggest best deals or help with filters.
•	Add multilingual support.
•	Review alert system and test chatbot across all devices.

Week 6:
•	Test all features on desktop, mobile, and tablets.
•	 Fix responsiveness and minor layout issues in UI.
•	Add loading skeletons, fallback messages, and error handling.
•	 Optimize images, scripts, and remove unused code.
•	 Add SEO meta tags, page titles, and favicon.
•	Deploy frontend using Vercel, backend using Render.
•	Full end-to-end testing with dummy users and deploy MongoDB Atlas backup.

