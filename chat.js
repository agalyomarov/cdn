const y = document.querySelector(".consultant_sticky"),
   k = document.querySelector(".chat__consultant").getBoundingClientRect().top;
window.addEventListener("scroll", () => {
   window.scrollY > 1.03 * k ? y.classList.add("show") : y.classList.contains("show") && y.classList.remove("show");
});
const _ = (e) => {
   window.scrollBy({ top: e.offsetHeight + 10, behavior: "smooth" });
},
   x = { behavior: "smooth", block: "end", inline: "nearest" };
let S;
let w = document.querySelectorAll(".chat-messages"),
   E = w.length,
   F = async (e) => {
      if (e == 1) {
         await new Promise((resolve, reject) => {
            setInterval(() => {
               if (window.model_complect_done) {
                  resolve();
               }
            }, 250)
         })
      }
      w = document.querySelectorAll(".chat-messages");
      S = !0;
      const t = document.querySelector(`.chat-messages[data-chat="${e}"]`),
         i = t.querySelectorAll(".chat__message-block");
      i.forEach((t, i) => {
         const r = t.querySelector(".chat__message-print"),
            n = t.querySelector(".chat__message-consultant");
         setTimeout(() => {
            setTimeout(() => {
               !r.classList.contains("msg-print-show") && r.classList.add("msg-print-show"), e && _(r);
            }, 500),
               setTimeout(() => {
                  r.classList.remove("msg-print-show"), n.classList.add("msg-show"), e && _(n);
               }, 2500);
         }, 2500 * i + 550);
      });
      const r = t.querySelector(".msg-blocks-choice");
      setTimeout(() => {
         r?.classList.add("msg-show"),
            e === E - 1 && (document.querySelector(".promo__footer-inner")?.classList.add("active"), document.querySelector(".footer")?.classList.add("active")),
            setTimeout(() => {
               e &&
                  ((e) => {
                     const t = e.getBoundingClientRect().top,
                        i = document.querySelector(".consultant_sticky"),
                        r = t - (i ? i.offsetHeight : 0);
                     window.scrollBy({ top: r, behavior: "smooth" });
                  })(t);
            }),
            setTimeout(() => {
               S = !1;
            });
      }, 2500 * i.length + 950);
      const n = r.querySelectorAll(".block-choice");
      if (n) {
         const i = t.querySelector(".chat__message-client"),
            r = (r) => {
               let o = Number(t.dataset.chat);
               if (o === e)
                  n.forEach((e) => e.classList.remove("active")),
                     r.currentTarget.classList.add("active"),
                     (i.innerHTML = r.currentTarget.dataset.choice),
                     i.classList.add("msg-show-client"),
                     document.querySelector(".chat__inner").scrollIntoView(x),
                     e++,
                     F(e);
               else {
                  if (S) return;
                  n.forEach((e) => e.classList.remove("active")), r.currentTarget.classList.add("active");
                  for (let e = o + 1; e < E; e++) {
                     w[e].querySelectorAll(".chat__message-block").forEach((e) => {
                        const t = e.querySelector(".chat__message-print");
                        t.classList.contains("msg-print-show") && t.classList.add("msg-print-show");
                        const i = e.querySelector(".chat__message-consultant");
                        i.classList.contains("msg-show") && i.classList.remove("msg-show");
                     });
                     const t = w[e].querySelector(".msg-blocks-choice");
                     t.classList.contains("msg-show") && t?.classList.remove("msg-show");
                     const i = t.querySelectorAll(".block-choice");
                     i &&
                        i.forEach((e) => {
                           e.classList.contains("active") && e.classList.remove("active");
                        });
                     const r = w[e].querySelector(".chat__message-client");
                     r?.classList.contains("msg-show-client") && r.classList.remove("msg-show-client"),
                        e === E - 1 && (document.querySelector(".promo__footer-inner")?.classList.remove("active"), document.querySelector(".footer")?.classList.remove("active"));
                  }
                  i.classList.contains("msg-show-client") && i.classList.remove("msg-show-client"),
                     (i.innerHTML = r.currentTarget.dataset.choice),
                     setTimeout(() => {
                        i.classList.add("msg-show-client"), document.querySelector(".chat__inner").scrollIntoView(x), F(e);
                     }, 200);
               }
            };
         n.forEach((e) => {
            e.addEventListener("click", r);
         });
      }
   };
F(0);