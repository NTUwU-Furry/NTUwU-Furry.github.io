"use strict";
(self["webpackChunkntuwu_furry_website"] =
  self["webpackChunkntuwu_furry_website"] || []).push([
  [834],
  {
    1834: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var a = n(6768);
      const s = { id: "about" },
        u = { id: "event-list" };
      function r(e, t, n, r, c, o) {
        const d = (0, a.g2)("EventBox");
        return (
          (0, a.uX)(),
          (0, a.CE)("div", s, [
            t[0] || (t[0] = (0, a.Lk)("h2", null, "以往活動", -1)),
            (0, a.Lk)("section", u, [
              ((0, a.uX)(!0),
              (0, a.CE)(
                a.FK,
                null,
                (0, a.pI)(
                  e.events,
                  (e) => (
                    (0, a.uX)(),
                    (0, a.Wv)(d, { key: e.id, event: e }, null, 8, ["event"])
                  )
                ),
                128
              )),
            ]),
          ])
        );
      }
      var c = n(8056),
        o = n(4373),
        d = (0, a.pM)({
          name: "HomeView",
          components: { EventBox: c.A },
          data() {
            return { events: null };
          },
          methods: {
            async getLatestEvents() {
              const e = await o.A.get(
                "https://www.googleapis.com/calendar/v3/calendars/af5e41829a41e0d4a57af5e2fffc8fda2483d0c4863aad147e4c15bc6996b731@group.calendar.google.com/events?key=AIzaSyC1qeKLryVxGiWj04p7GJzS9rWsX-L8k6I"
              );
              return e.data.items;
            },
          },
          async mounted() {
            this.events = await this.getLatestEvents();
          },
        }),
        i = n(1241);
      const v = (0, i.A)(d, [
        ["render", r],
        ["__scopeId", "data-v-3a25b235"],
      ]);
      var l = v;
    },
  },
]);
//# sourceMappingURL=834.291c0c6a.js.map
