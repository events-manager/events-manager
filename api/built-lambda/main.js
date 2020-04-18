!(function (n, r) { for (const e in r)n[e] = r[e] }(exports, (function (n) { const r = {}; function e(t) { if (r[t]) return r[t].exports; const o = r[t] = { i: t, l: !1, exports: {} }; return n[t].call(o.exports, o, o.exports, e), o.l = !0, o.exports } return e.m = n, e.c = r, e.d = function (n, r, t) { e.o(n, r) || Object.defineProperty(n, r, { enumerable: !0, get: t }) }, e.r = function (n) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(n, '__esModule', { value: !0 }) }, e.t = function (n, r) { if (1 & r && (n = e(n)), 8 & r) return n; if (4 & r && typeof n === 'object' && n && n.__esModule) return n; const t = Object.create(null); if (e.r(t), Object.defineProperty(t, 'default', { enumerable: !0, value: n }), 2 & r && typeof n !== 'string') for (const o in n)e.d(t, o, ((r) => n[r]).bind(null, o)); return t }, e.n = function (n) { const r = n && n.__esModule ? function () { return n.default } : function () { return n }; return e.d(r, 'a', r), r }, e.o = function (n, r) { return Object.prototype.hasOwnProperty.call(n, r) }, e.p = '', e(e.s = 8) }([function (n, r) { n.exports = require('mongoose') }, function (n, r) { n.exports = require('apollo-server') }, function (n, r) { n.exports = require('apollo-server-lambda') }, function (n, r) { n.exports = require('lodash') }, function (n, r) { n.exports = require('graphql') }, function (n, r) { n.exports = require('graphql/language') }, function (n, r) { n.exports = require('apollo-datasource-mongodb') }, function (n, r) { n.exports = require('regenerator-runtime/runtime') }, function (n, r, e) {
  e.r(r); e(7); const t = e(2); const o = e(0); const a = e.n(o); a.a.Promise = global.Promise, console.log('Connecting with Mongoose to the Mongo database'); const i = process.env.MONGO_URI || 'mongodb+srv://cloudspider:Oxt8G0EYtZp1CLQ1@gather-ww7jx.mongodb.net/gather?retryWrites=true&w=majority'; const u = a.a.connect(i, {
    useUnifiedTopology: !0, autoIndex: !0, poolSize: 50, bufferMaxEntries: 0, keepAlive: 120, useNewUrlParser: !0
  }); a.a.set('useCreateIndex', !0), u.then(((n) => n)).catch(((n) => { console.log(n) })), console.log('Connection', u); const s = e(3); const c = e(1); const f = [{
    id: 'aokokfokpkfsokf', slug: 'frontend-love-2020', name: 'Frontend Love', brandSlug: 'frontend-love', venueId: 'aamnfdke4rilasss', startsAt: '2020-02-19T07:00:00+00:00', endsAt: '2020-02-19T18:00:00+00:00'
  }, {
    id: 'okdfpokaskdsaxs', slug: 'vuejs-amsterdam-2020', name: 'VueJS Amsterdam', brandSlug: 'vuejs-amsterdam', venueId: 'aamnfdke4rilasss', startsAt: '2020-02-20T07:00:00+00:00', endsAt: '2020-02-21T18:00:00+00:00'
  }, {
    id: 'oiwejfoiewjfxoa', slug: 'react-live', name: 'React Live', brandSlug: 'react-live', venueId: 'aamnfdke4rilasss', startsAt: '2019-02-14T07:00:00+00:00', endsAt: '2019-02-14T18:00:00+00:00'
  }]; function d(n, r, e, t, o, a, i) { try { var u = n[a](i); var s = u.value } catch (n) { return void e(n) }u.done ? r(s) : Promise.resolve(s).then(t, o) } function p(n) { return function () { const r = this; const e = arguments; return new Promise((((t, o) => { const a = n.apply(r, e); function i(n) { d(a, t, o, i, u, 'next', n) } function u(n) { d(a, t, o, i, u, 'throw', n) }i(void 0) }))) } } const l = (function () { const n = p(regeneratorRuntime.mark((function n(r, e, t) { let o; return regeneratorRuntime.wrap(((n) => { for (;;) switch (n.prev = n.next) { case 0: if (!(o = e.brandSlug)) { n.next = 3; break } return n.abrupt('return', f.filter(((n) => n.brandSlug === o))); case 3: return n.abrupt('return', f); case 4: case 'end': return n.stop() } }), n) }))); return function (r, e, t) { return n.apply(this, arguments) } }()); const g = (function () { const n = p(regeneratorRuntime.mark((function n(r, e, t) { let o; let a; let i; return regeneratorRuntime.wrap(((n) => { for (;;) switch (n.prev = n.next) { case 0: if (o = e.id, a = e.slug, i = e.brandSlug, o || i || a) { n.next = 3; break } throw new c.UserInputError('slugOrIdRequired'); case 3: if (!a) { n.next = 5; break } return n.abrupt('return', t.dataSources.events.getBySlug(a)); case 5: if (!i) { n.next = 7; break } return n.abrupt('return', f.find(((n) => n.brandSlug === i))); case 7: return n.abrupt('return', f.find(((n) => n.id === o))); case 8: case 'end': return n.stop() } }), n) }))); return function (r, e, t) { return n.apply(this, arguments) } }()); const m = [{
    id: 'oewifpwqeifqwe', slug: 'frontend-love', name: 'Frontend Love', logo: '', labels: [{ name: 'Frontend' }, { name: 'javascript' }, { name: 'Web' }]
  }, {
    id: 'weoijewfewijm', slug: 'vuejs-amsterdam', name: 'Vue.js Amsterdam', logo: '', labels: [{ name: 'Vue' }, { name: 'Javascript' }, { name: 'Nuxt' }, { name: 'Frontend' }]
  }, {
    id: 'ksmijewfewijm', slug: 'angularnl', name: 'Angular NL', logo: '', labels: [{ name: 'Angular' }, { name: 'Javascript' }, { name: 'Frontend' }]
  }, {
    id: 'ksmijewfemaje', slug: 'nodeconfnl', name: 'NodeConf NL', logo: '', labels: [{ name: 'Node.js' }, { name: 'Javascript' }, { name: 'Frontend' }]
  }]; function v(n) { if (n == null) throw new TypeError('Cannot destructure undefined') } function h(n, r, e, t, o, a, i) { try { var u = n[a](i); var s = u.value } catch (n) { return void e(n) }u.done ? r(s) : Promise.resolve(s).then(t, o) } function y(n) { return function () { const r = this; const e = arguments; return new Promise((((t, o) => { const a = n.apply(r, e); function i(n) { h(a, t, o, i, u, 'next', n) } function u(n) { h(a, t, o, i, u, 'throw', n) }i(void 0) }))) } } const w = (function () { const n = y(regeneratorRuntime.mark((function n(r, e, t) { return regeneratorRuntime.wrap(((n) => { for (;;) switch (n.prev = n.next) { case 0: return v(e), n.abrupt('return', m); case 2: case 'end': return n.stop() } }), n) }))); return function (r, e, t) { return n.apply(this, arguments) } }()); const b = (function () { const n = y(regeneratorRuntime.mark((function n(r, e, t) { let o; let a; return regeneratorRuntime.wrap(((n) => { for (;;) switch (n.prev = n.next) { case 0: if (o = e.id, a = e.slug, o || a) { n.next = 3; break } throw new c.UserInputError('slugOrIdRequired'); case 3: if (!a) { n.next = 5; break } return n.abrupt('return', m.find(((n) => n.slug === a))); case 5: return n.abrupt('return', m.find(((n) => n.id === o))); case 6: case 'end': return n.stop() } }), n) }))); return function (r, e, t) { return n.apply(this, arguments) } }()); const S = [{
    id: 'dvgyim5z28n80903d', eventId: 'okdfpokaskdsaxs', organisationId: 'acfgy64ma3m4nahf', level: 'platinum'
  }]; const k = [{
    id: 'acfgy64ma3m4nahf', slug: 'passionate-people', name: 'Passionate People', website: 'https://passionatepeople.io'
  }, {
    id: 'jswgy64ma3m4nahf', slug: 'cloudinary', name: 'Cloudinary', website: 'https://cloudinary.com'
  }, {
    id: 'jswgy64ma3m4jsma', slug: 'shopware', name: 'Shopware', website: 'https://www.shopware.com'
  }, {
    id: 'maney5nam3al1sca', slug: 'rangle.io', name: 'Rangle.io', website: 'https://rangle.io'
  }, {
    id: 'amn45nnam78vfgy', slug: 'ing', name: 'ING', website: 'https://www.ing.jobs/Netherlands/Expertise/Information-Technology.htm'
  }]; function x(n) { if (n == null) throw new TypeError('Cannot destructure undefined') } function I(n, r, e, t, o, a, i) { try { var u = n[a](i); var s = u.value } catch (n) { return void e(n) }u.done ? r(s) : Promise.resolve(s).then(t, o) } function D(n) { return function () { const r = this; const e = arguments; return new Promise((((t, o) => { const a = n.apply(r, e); function i(n) { I(a, t, o, i, u, 'next', n) } function u(n) { I(a, t, o, i, u, 'throw', n) }i(void 0) }))) } } const P = (function () { const n = D(regeneratorRuntime.mark((function n(r, e, t) { return regeneratorRuntime.wrap(((n) => { for (;;) switch (n.prev = n.next) { case 0: return x(e), n.abrupt('return', S.filter(((n) => n.eventId === r.id))); case 2: case 'end': return n.stop() } }), n) }))); return function (r, e, t) { return n.apply(this, arguments) } }()); const R = (function () { const n = D(regeneratorRuntime.mark((function n(r, e, t) { return regeneratorRuntime.wrap(((n) => { for (;;) switch (n.prev = n.next) { case 0: return x(e), n.abrupt('return', k.find(((n) => n.id === r.organisationId))); case 2: case 'end': return n.stop() } }), n) }))); return function (r, e, t) { return n.apply(this, arguments) } }()); const j = [{ id: '3m5mlajgfmafdsas', personId: 'man6treqkjhgfdsa', eventId: 'okdfpokaskdsaxs' }, { id: '3m5mlajgfmafdsas', personId: 'mtrejkahfhghgggd', eventId: 'okdfpokaskdsaxs' }]; const A = [{
    id: 'man6treqkjhgfdsa', firstName: 'Evan', lastName: 'You', callSign: 'Evan You', picture: '', createdAt: '2020-02-28T22:12:14+00:00', updatedAt: '2020-02-28T22:12:14+00:00'
  }, {
    id: 'mtrejkahfhghgggd', firstName: 'Sarah', lastName: 'Drasner', callSign: 'Sarah Drasner', picture: '', createdAt: '2020-02-28T22:12:16+00:00', updatedAt: '2020-02-28T22:12:16+00:00'
  }]; function T(n) { if (n == null) throw new TypeError('Cannot destructure undefined') } function O(n, r, e, t, o, a, i) { try { var u = n[a](i); var s = u.value } catch (n) { return void e(n) }u.done ? r(s) : Promise.resolve(s).then(t, o) } function E(n) { return function () { const r = this; const e = arguments; return new Promise((((t, o) => { const a = n.apply(r, e); function i(n) { O(a, t, o, i, u, 'next', n) } function u(n) { O(a, t, o, i, u, 'throw', n) }i(void 0) }))) } } const N = (function () { const n = E(regeneratorRuntime.mark((function n(r, e, t) { return regeneratorRuntime.wrap(((n) => { for (;;) switch (n.prev = n.next) { case 0: return T(e), n.abrupt('return', j.filter(((n) => n.eventId === r.id))); case 2: case 'end': return n.stop() } }), n) }))); return function (r, e, t) { return n.apply(this, arguments) } }()); const q = (function () { const n = E(regeneratorRuntime.mark((function n(r, e, t) { return regeneratorRuntime.wrap(((n) => { for (;;) switch (n.prev = n.next) { case 0: return T(e), n.abrupt('return', A.find(((n) => r.personId === n.id))); case 2: case 'end': return n.stop() } }), n) }))); return function (r, e, t) { return n.apply(this, arguments) } }()); const _ = [{ id: 'aamnfdke4rilasss', slug: 'amsterdam-theater', name: 'Amsterdam Theater' }]; function C(n) { if (n == null) throw new TypeError('Cannot destructure undefined') } function L(n, r, e, t, o, a, i) { try { var u = n[a](i); var s = u.value } catch (n) { return void e(n) }u.done ? r(s) : Promise.resolve(s).then(t, o) } const M = {
    Query: {
      brand: b, brands: w, event: g, events: l
    },
    Event: { sponsors: P, speakers: N, venue: (function () { let n; const r = (n = regeneratorRuntime.mark((function n(r, e, t) { return regeneratorRuntime.wrap(((n) => { for (;;) switch (n.prev = n.next) { case 0: return C(e), n.abrupt('return', _.find(((n) => n.id === r.venueId))); case 2: case 'end': return n.stop() } }), n) })), function () { const r = this; const e = arguments; return new Promise((((t, o) => { const a = n.apply(r, e); function i(n) { L(a, t, o, i, u, 'next', n) } function u(n) { L(a, t, o, i, u, 'throw', n) }i(void 0) }))) }); return function (n, e, t) { return r.apply(this, arguments) } }()) },
    Sponsor: { organisation: R },
    Speaker: { person: q }
  }; function F(n) { if (n == null) throw new TypeError('Cannot destructure undefined') } function V(n, r, e, t, o, a, i) { try { var u = n[a](i); var s = u.value } catch (n) { return void e(n) }u.done ? r(s) : Promise.resolve(s).then(t, o) } function B(n) { return function () { const r = this; const e = arguments; return new Promise((((t, o) => { const a = n.apply(r, e); function i(n) { V(a, t, o, i, u, 'next', n) } function u(n) { V(a, t, o, i, u, 'throw', n) }i(void 0) }))) } } const Q = (function () { const n = B(regeneratorRuntime.mark((function n(r, e, t) { return regeneratorRuntime.wrap(((n) => { for (;;) switch (n.prev = n.next) { case 0: return F(e), n.abrupt('return', S.filter(((n) => n.organisationId === r.id))); case 2: case 'end': return n.stop() } }), n) }))); return function (r, e, t) { return n.apply(this, arguments) } }()); const G = (function () { const n = B(regeneratorRuntime.mark((function n(r, e, t) { return regeneratorRuntime.wrap(((n) => { for (;;) switch (n.prev = n.next) { case 0: return F(e), n.abrupt('return', f.find(((n) => n.id === r.eventId))); case 2: case 'end': return n.stop() } }), n) }))); return function (r, e, t) { return n.apply(this, arguments) } }()); function U(n) { if (n == null) throw new TypeError('Cannot destructure undefined') } function J(n, r, e, t, o, a, i) { try { var u = n[a](i); var s = u.value } catch (n) { return void e(n) }u.done ? r(s) : Promise.resolve(s).then(t, o) } function z(n) { return function () { const r = this; const e = arguments; return new Promise((((t, o) => { const a = n.apply(r, e); function i(n) { J(a, t, o, i, u, 'next', n) } function u(n) { J(a, t, o, i, u, 'throw', n) }i(void 0) }))) } } const Y = { Query: { organisation: (function () { const n = z(regeneratorRuntime.mark((function n(r, e, t) { let o; return regeneratorRuntime.wrap(((n) => { for (;;) switch (n.prev = n.next) { case 0: return o = r.organisationId, U(e), n.abrupt('return', k.find(((n) => n.id === o))); case 3: case 'end': return n.stop() } }), n) }))); return function (r, e, t) { return n.apply(this, arguments) } }()), organisations: (function () { const n = z(regeneratorRuntime.mark((function n(r, e, t) { let o; return regeneratorRuntime.wrap(((n) => { for (;;) switch (n.prev = n.next) { case 0: if (!(o = e.slug)) { n.next = 3; break } return n.abrupt('return', k.filter(((n) => n.slug === o))); case 3: return n.abrupt('return', k); case 4: case 'end': return n.stop() } }), n) }))); return function (r, e, t) { return n.apply(this, arguments) } }()) }, Organisation: { sponsorships: Q }, Sponsor: { event: G } }; function W(n) { if (n == null) throw new TypeError('Cannot destructure undefined') } function H(n, r, e, t, o, a, i) { try { var u = n[a](i); var s = u.value } catch (n) { return void e(n) }u.done ? r(s) : Promise.resolve(s).then(t, o) } const K = { Query: { people: (function () { let n; const r = (n = regeneratorRuntime.mark((function n(r, e, t) { return regeneratorRuntime.wrap(((n) => { for (;;) switch (n.prev = n.next) { case 0: return W(e), n.abrupt('return', A); case 2: case 'end': return n.stop() } }), n) })), function () { const r = this; const e = arguments; return new Promise((((t, o) => { const a = n.apply(r, e); function i(n) { H(a, t, o, i, u, 'next', n) } function u(n) { H(a, t, o, i, u, 'throw', n) }i(void 0) }))) }); return function (n, e, t) { return r.apply(this, arguments) } }()) }, Person: {} }; const Z = e(4); const X = e(5); const $ = {
    Date: new Z.GraphQLScalarType({
      name: 'Date', description: 'Represents a Date object as ISOString', parseValue(n) { return new Date(n) }, serialize(n) { return n.toISOString() }, parseLiteral(n) { return n.kind === X.Kind.STRING ? new Date(n.value) : null }
    })
  }; const nn = Object(s.merge)(M, Y, K, { Date: $ }); function rn(n) { return (rn = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (n) { return typeof n } : function (n) { return n && typeof Symbol === 'function' && n.constructor === Symbol && n !== Symbol.prototype ? 'symbol' : typeof n })(n) } function en(n, r) { if (!(n instanceof r)) throw new TypeError('Cannot call a class as a function') } function tn(n, r) { for (let e = 0; e < r.length; e++) { const t = r[e]; t.enumerable = t.enumerable || !1, t.configurable = !0, 'value' in t && (t.writable = !0), Object.defineProperty(n, t.key, t) } } function on(n, r) { return (on = Object.setPrototypeOf || function (n, r) { return n.__proto__ = r, n })(n, r) } function an(n, r) { return !r || rn(r) !== 'object' && typeof r !== 'function' ? (function (n) { if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return n }(n)) : r } function un() { if (typeof Reflect === 'undefined' || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if (typeof Proxy === 'function') return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (() => {}))), !0 } catch (n) { return !1 } } function sn(n) { return (sn = Object.setPrototypeOf ? Object.getPrototypeOf : function (n) { return n.__proto__ || Object.getPrototypeOf(n) })(n) } const cn = (function (n) { !(function (n, r) { if (typeof r !== 'function' && r !== null) throw new TypeError('Super expression must either be null or a function'); n.prototype = Object.create(r && r.prototype, { constructor: { value: n, writable: !0, configurable: !0 } }), r && on(n, r) }(i, n)); let r; let e; let t; let o; const a = (r = i, function () { let n; const e = sn(r); if (un()) { const t = sn(this).constructor; n = Reflect.construct(e, arguments, t) } else n = e.apply(this, arguments); return an(this, n) }); function i() { return en(this, i), a.apply(this, arguments) } return e = i, (t = [{ key: 'getBySlug', value(n) { return this.model.findOne({ slug: n }) } }]) && tn(e.prototype, t), o && tn(e, o), i }(e(6).MongoDataSource)); const fn = new o.Schema({
    id: String, slug: String, name: String, brandSlug: String, venueId: String, startsAt: Date, endsAt: Date
  }); const dn = a.a.model('event', fn); const pn = {
    resolvers: nn, typeDefs: 'scalar Date\r\n\r\nenum ParticipantRole{\r\n    Organiser\r\n    VIP\r\n    Participant\r\n    Emcee\r\n}\r\n\r\ntype Label{\r\n    id: ID\r\n    name: String\r\n    createdAt: Date\r\n}\r\n\r\ntype Picture{\r\n    id: ID\r\n    url: String\r\n    alt: String\r\n    caption: String\r\n}\r\n\r\ntype Address{\r\n    id: ID\r\n    city: String\r\n    country: String\r\n    street: String\r\n    houseNumber: Int\r\n    addition: String\r\n}\r\n\r\ntype Location{\r\n    lat: Float\r\n    lng: Float\r\n}\r\n\r\ntype Person{\r\n    id: ID\r\n    firstName: String\r\n    lastName: String\r\n    callSign: String\r\n    createdAt: Date\r\n    updatedAt: Date\r\n    picture: Picture\r\n}\r\n\r\ntype Brand{\r\n    id: ID\r\n    name: String\r\n    slug: String\r\n    logo: String\r\n    events: [Event]\r\n    labels: [Label]\r\n    createdAt: Date\r\n    updatedAt: Date\r\n}\r\n\r\ntype Event{\r\n    id: ID\r\n    slug: String\r\n    name: String\r\n    startsAt: Date\r\n    endsAt: Date\r\n    brand: Brand\r\n    speakers: [Speaker]\r\n    schedule: [Schedule]\r\n    sponsors: [Sponsor]\r\n    participants: [Participant]\r\n    attendees: [Attendee]\r\n    people: [Person]\r\n    venue: Venue\r\n    talks: [Talk]\r\n    labels: [Label]\r\n    createdAt: Date\r\n    updatedAt: Date\r\n}\r\n\r\ntype Organisation{\r\n    id: ID\r\n    slug: String\r\n    name: String\r\n    website: String\r\n    sponsorships: [Sponsor]\r\n}\r\n\r\ntype Sponsor{\r\n    id: ID\r\n    event: Event\r\n    organisation: Organisation\r\n    level: String\r\n}\r\n\r\ntype Venue{\r\n    id: ID\r\n    slug: String\r\n    name: String\r\n    description: String\r\n    organisation: [Organisation]\r\n    pictures: [Picture]\r\n    address: Address\r\n    location: Location\r\n}\r\n\r\ntype Participant{\r\n    id: ID\r\n    event: Event\r\n    person: Person\r\n    role: ParticipantRole\r\n}\r\n\r\ntype Speaker{\r\n    id: ID\r\n    person: Person\r\n    event: Event\r\n    timeslot: Timeslot\r\n    talk: Talk\r\n}\r\n\r\ntype Talk{\r\n    id: ID\r\n    title: String\r\n    description: String\r\n    event: Event\r\n    speaker: Speaker\r\n}\r\n\r\ntype Timeslot{\r\n    id: ID\r\n    title: String\r\n    description: String\r\n    schedule: Schedule\r\n    talk: Talk\r\n    startsAt: Date\r\n    endsAt: Date\r\n    createdAt: Date\r\n    updatedAt: Date\r\n}\r\n\r\ntype Schedule{\r\n    id: ID\r\n    title: String\r\n    event: Event\r\n    timeslots: [Timeslot]\r\n    createdAt: Date\r\n    updatedAt: Date\r\n}\r\n\r\ntype Ticket{\r\n    id: ID\r\n    token: String\r\n}\r\n\r\ntype Attendee{\r\n    id: ID\r\n    person: Person\r\n    ticket: Ticket\r\n}\r\n\r\ntype Query{\r\n    brand(\r\n        id: ID\r\n        slug: String\r\n    ): Brand\r\n    brands: [Brand]\r\n    event(\r\n        id: ID\r\n        brandSlug: String\r\n        slug: String\r\n    ): Event\r\n    events(\r\n        brandSlug: String\r\n    ): [Event]\r\n    speaker(\r\n        id: ID\r\n    ): Speaker\r\n    speakers(\r\n        eventId: ID\r\n    ): [Speaker]\r\n    schedule(\r\n        eventId: ID\r\n    ): Schedule\r\n    attendees(\r\n        eventId: ID\r\n    ): [Attendee]\r\n    organisation(id: ID): Organisation\r\n    organisations(slug: String): [Organisation]\r\n    person: Person\r\n    people: [Person]\r\n}\r\n', cors: { origin: '*', credentials: !0 }, dataSources() { return { events: new cn(dn) } }, introspection: !0, playground: { settings: { 'editor.theme': 'light' } }
  }; const ln = new t.ApolloServer(pn); exports.handler = ln.createHandler({ cors: pn.cors })
}]))))
