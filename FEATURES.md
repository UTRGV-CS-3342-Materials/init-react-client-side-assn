# FEATURES

Update with every commit. Put a status (in-progress) or (complete) at the end of each line that you work on.

# Step 1: Port A04 to this setup
* 1.1 create db.server.js with the queries the page needs
* 1.2 update the schedule route loader to return the course/section/instructor data
* 1.3 Page, Course, and Section display the loader data via props (no more mockup values)
* 1.4 update the schedule route action to save a new course from the Add Course form (POST & reload)

# Step 2: Add Section
* 2.1 create "/api/sections/add" route to save a new section and return it as JSON
* 2.2 choosing an instructor in the Add Section select async posts to the route (no page reload)
* 2.3 Course keeps its sections in state, and the new section appears when the server returns it
* 2.4 use the Pending overlay on the Add Section select while waiting, then it goes back to "Add Section..."

# Step 3: Update Section
* 3.1 create "/api/sections/update" route to change a section's instructor
* 3.2 Section keeps its instructor id in state, changing the select async posts to the route (no page reload)
* 3.3 the select shows the new instructor when the server confirms
* 3.4 use the Pending overlay on the section while waiting

# Step 4: Delete Section
* 4.1 create "/api/sections/delete" route to delete a section
* 4.2 Course has a delete handler, passed down to each Section as a prop
* 4.3 the X button calls the handler, and the section disappears when the server confirms
* 4.4 use the Pending overlay on the section while waiting
