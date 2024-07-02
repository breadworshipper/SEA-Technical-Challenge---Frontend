# SEA Technical Challenge - Frontend
Welcome to the repository. This project is a task for the COMPFEST SEA Academy. 

## Highlights
- SEA Salon Hompage
  - Create a homepage for SEA Salon  
    The homepage is located at the "/" endpoint. It consists of three sections: the hero section, services section, and contacts section.

- Interactivity!  
  - Implement a customer review system  
    The customer review system is located at the "/review" endpoint. Initially, reviews were saved in a state, but now they are stored in a database.

- Reservation System
  - Create a reservation form  
    The reservation form is located at the "/reservation" endpoint. It is integrated with the backend and synced with a database hosted on Supabase.
  - Integrate customer review system with database  
    The review system is integrated with the backend. Pagination has been added to the review feature so that users do not see all reviews at once.

- Authentication System
  - Implement an authentication system  
    The system uses cookies to store tokens for authentication. Login and register pages are available at the "/auth" endpoint. If an admin logs in, they are redirected to "/admin/dashboard". If a customer logs in, they are redirected to "/".
  - Implement member-only reservation  
    Middleware has been implemented to prevent unauthenticated users from accessing the review or reservation pages.

- Advanced Reservation System
  - Improve admin dashboard  
    The system has an admin dashboard, though its implementation is not yet complete.
  - Implement advanced reservation system


## Getting Started
Before running you'd need to add a .env file in root of the project. The content is as follows :
```
NEXT_PUBLIC_BACKEND_URL = http://127.0.0.1:8000
```  

For the first time, to run this project simply do :
```bash
npm install
npm run dev
```
After that you'd only need to run 
```bash
npm run dev
```
