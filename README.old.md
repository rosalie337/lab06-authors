# lab06-authorsLab 09: Front end for Full Stack App (React review)
===

1. Add a Detail/Update page at `<items>:id`.
    - On this page, there should be a form, pre-populated with the item's information.
    - On submit, call your `/PUT` route to update this item, then route back to the home page.
1. Delete button on detail/update page to delete item
    - Reroute to list using `this.props.history.push('/')`
1. Update Home/List page
    - Add links on the Home/List page so that when you click on an item it takes you to the update page for that item.
    - STRETCH: Add a dropdown to the list page to filter items on the client side (no need for a new fetch to make a new filter).
1. Refactor api calls in a separate `utils` file. Make functions called  `getItem`/`getItems`, `deleteItem`, `updateItem`, and `createItem` that take appropriate input and hit your api.


Goal | Points (10)
:--|--:
[x] Working React-Router in App.js, and Home/List links to Detail/Update page for each item | 2
[x] Update/Detail page for a single item, with the item's ID in the URL and fetch on load, with form values (excluding dropdown) pre-loaded. | 2
[ ] Delete button on detail/update page for a single item, and route to list on delete | 2
[ ] Functioning form and edit button on detail page for a single item (so the user can update an item) | 2
[ ] Api funtions should be in their own file for components to import | 2 
[ ] Dropdown on Home/List Page to filter items on front end, with options derived from a fetch to the `GET /<types/categories>` route | +1
[ ] Preload dropdown form from fetch on update page +1