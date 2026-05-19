# Reflection Questions
## Why is it beneficial to separate your routes, models, and database connection into different directories?
It keeps the project organized and easier to maintain. Separating them makes the code cleaner, easier to debug, and easier to expand as the application grows.

## What is the difference between PUT and PATCH HTTP methods, and which one does your PUT /:id endpoint more closely resemble?
PUT  means replacing an entire resource w/ a new version.

PATCH means partially updating only the fields provided.

## In the DELETE route, what is a good practice for the response you send back to the client after a successful deletion? Should you send the deleted object, a simple success message, or something else? Why?

We should send a simple success message, possibly with the deleted book’s ID or the deleted object. It is useful because it confirms exactly what was removed.