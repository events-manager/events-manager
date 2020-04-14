# Onboarding

This guide forms the starting point for a new developer to familiarize itself into this project.

# UI Composition
The dashboard UI works with 3 layers. `root`, `domain` and `page`. This differs from 
typical applications which have one or more root layouts and then a page layout.

This 3 layered setup is needed, because we work with so-called bounded contexts. 
A bounded context is a DDD (Domain Driven Development) principle which describes 
the different ways of viewing and interpreting information. For example 
from the Events context we would refer to a person as an attendee or speaker. From a CRM 
perspective however we would refer to this person as a prospect, user or indeed, just a person. 

This different way of looking at things will require components and layouts to behave differently 
simply because its a different way of managing things. Both the dashboard and API design are motivated 
from a domain model that accurately describes the relationships between the bounded contexts and 
the entities that live within them. 

## Root Layout

The layout is the highest level. It describes the global layout and will never change between different contexts 
except for the special pages like the auth related pages and service pages. 
Our layout component follows exactly the Nuxt.JS guidelines meaning it resides in the `./layout` folder.
Our default layout for now only contains the `main-sidebar` and some default CSS.

The main sidebar allows navigation across different contexts.

## Context Layout

Each context can have its own layout, but lives within the route level. This might sound confusing, because we also have 
the page level. Each page `./pages` folder has its own `context-layout` wrapped around it. The type of context-layout is 
 dictated by the context this page lives in. Context folders are all folders in the root of `./pages`. 
 For example the speakers page for events lives in `./pages/events/speakers.vue`. `events` is the context. `speakers.vue` the page.
This speakers page will have `<events-context-layout>` as the root node - just like any other page in the `./events` folder.

Context layouts don't change between pages within 1 context.

## Page layout

A page layout is in fact just the layout of 1 page - or 1 unique route. As we've just read, the page lives within 
a context. 
