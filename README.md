# Check In Availability 

Displays available and booked dates on a calendar for current and future dates.

## Related Projects

  - https://github.com/hostelhub/property-description
  - https://github.com/hostelhub/reviews-and-ratings

## Getting started
  
  After navigating to the booking module folder, run the following commands:
  ```sh
  npm install
  npm run seed
  npm run build
  npm start
  ```
  
## CRUD API
  ### 1. Get similar homes for the accommodation selected - (READ)
  The components can retrieve and suggest similiar homes from the database for the selected accommodation

  ```sh
  GET - /api/hostels/:hostelId/calendar
  ```

  - *There is no create, update, or delete API for this component*
