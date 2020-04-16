# UI Composition
The dashboard UI works with 3 layers. `root`, `domain` and `page`. This differs from 
typical applications which have one or more root layouts and then a page layout.

This 3 layered setup is needed, because we work with so-called domains. 
Each domain represents a particular workspace or business domain with its own business rules 
and jargon or naming conventions. For example from the Events domain we would refer to a person 
as an attendee or speaker. From a People management perspective however we would refer to this 
person as a prospect, employee, user or indeed, just a person. 

This different way of looking at things will require layouts to be structured differently 
simply because its a different way of managing things. Both the dashboard and API design are motivated 
from a domain model that accurately describes the relationships between the domains via their entities. 

> Note that for example an Attendee entity obviously has a relationship with the Speaker entity. It must be clear 
that even though they are different, they still refer to the same person might because of this just end 
up as just one Person record in the database. More info in the API / Database section.

## Root Layout

The layout is the highest UI level. It describes the global layout and will never change between different contexts 
except for the special pages like the auth related pages and service pages. 
Our layout component follows exactly the Nuxt.JS guidelines meaning it resides in the `./layout` folder.
Our default layout for now only contains the `main-sidebar` and some default CSS.

The main sidebar allows navigation across different domains.

## Domain Layout

The direct child of the layout is the `<nuxt />` component. This component represents a page in Nuxt, but 
 within each page in our project we nest a so called `domain-layout` which is located in `./layout/DomainLayout.vue`. 
 Each page should directly or indirectly use this layout as its root node meaning it could be the root 
 of a custom layout. A nice example is provided in the events domain:
 
 The `events` domain uses the `events-layout` which has `<domain-layout>` as its root component. 
 This layout provides a sidebar to allow navigation between different topics like speakers, venue, etc 
 for each event. The `events/index` page however uses the `domain-layout` directly, because it has a 
 different purpose for the sidebar.
 
There is a reason that domain-layouts are not part of the default layout setup of Nuxt.js. Which is that 
domain-layouts are route dependent. A nice example is provided in the events-layout where `this.$route.params.slug` 
is used to fetch the currently viewed event. It then puts it in the sidebar-header and includes the slug 
in the sidebar navigation uri's.

## Page layout

The page layout is essentially dictated by the page itself as long as it uses the domain-layout directly or indirectly 
as its root (read above on Domain layouts). 
