/* ============ THEME ============ */
*{margin:0;padding:0;box-sizing:border-box}
:root{
  --bg:#0A0A0A; --ink:#fff;
  --pink:#FFC5D9; --lav:#C9A7EB;
  --glow:linear-gradient(135deg,var(--pink),var(--lav));
}
body{font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;background:var(--bg);color:var(--ink);overflow:hidden}

/* ============ HOME BACKGROUND + PETALS ============ */
.hero-bg{
  position:fixed; inset:0; z-index:-3;
  background:url("assets/cherryblossom1.jpg") center/cover no-repeat;
  filter:brightness(.65) saturate(1.1);
  transition:opacity .6s ease;
}
#petals{position:fixed;inset:0;pointer-events:none;z-index:-1}
.petal{
  position:absolute; top:-10vh; width:22px; height:22px; border-radius:999px;
  background:rgba(255,197,217,.9); filter:blur(1px); opacity:.9;
  animation:fall linear infinite;
}
@keyframes fall{to{transform:translateY(110vh) translateX(40px) rotate(360deg); opacity:.2}}

/* ============ NAV ============ */
.nav{
  position:fixed; top:0; left:0; width:100%; z-index:50;
  display:flex; justify-content:space-between; align-items:center;
  padding:20px 6%;
  background:linear-gradient(180deg,rgba(0,0,0,.7),rgba(0,0,0,0));
}
.brand{font-family:"Playfair Display",serif;font-weight:800;font-size:26px;letter-spacing:.4px}
.nav-link, .nav button{
  background:none; border:none; color:#e7ebf5; opacity:.78; font-weight:700; margin-left:20px; cursor:pointer
}
.nav-link:hover,.nav button:hover{opacity:1}

/* ============ VIEWPORT (3D) ============ */
#viewport{position:relative; width:100vw; height:100vh; perspective:1600px}

/* ============ SCENES ============ */
.scene{
  position:absolute; inset:0;
  display:flex; justify-content:center; align-items:center; text-align:center;
  padding:90px 6% 60px;
  opacity:0; transform:translateY(90px) scale(.96) rotateX(14deg);
  transition:opacity .8s ease, transform .9s cubic-bezier(.16,1,.3,1);
}
.scene.active{opacity:1; transform:translateY(0) scale(1) rotateX(0)}

/* ============ HERO ============ */
.centerbox{max-width:720px;margin:0 auto}
.brand-title{
  font-family:"Playfair Display",serif; font-weight:800;
  font-size:clamp(36px,6vw,68px); letter-spacing:2px; color:#ffd6e4;
  text-shadow:0 0 18px rgba(255,197,217,.18); margin-bottom:6px
}
.toggle-wrap{
  display:inline-flex; padding:6px 18px; border-radius:12px;
  background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.16);
  backdrop-filter:blur(10px); margin-top:6px
}
.toggle-role{font-weight:800;background:var(--glow);-webkit-background-clip:text;color:transparent}
.coming-soon{font-size:.85rem;opacity:.65;margin-top:4px}
.tagline{margin-top:14px;opacity:.9;max-width:620px;margin-inline:auto}
.hero-ctas{margin-top:22px;display:flex;gap:12px;justify-content:center}
.btn{padding:12px 18px;border-radius:12px;font-weight:800;border:1px solid transparent;cursor:pointer}
.btn.primary{background:var(--glow);color:#121212}
.btn.ghost{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.18);color:#fff}

/* ============ ABOUT (image left, text right) ============ */
.about-grid{
  width:min(1080px,92vw);
  display:grid; grid-template-columns:1.1fr 1fr; gap:28px; align-items:center
}
.about-img{
  height:360px; border-radius:16px;
  background:url("assets/about.jpgt.avif") center/cover no-repeat;
  border:1px solid rgba(255,255,255,.14)
}
.about-text{text-align:center}
.about-text h2{font-family:"Playfair Display",serif;font-size:clamp(28px,4vw,40px);margin-bottom:10px}
.about-text ul{list-style:none;margin-top:14px}
.about-text li{margin:6px 0;opacity:.85}

/* ============ SERVICES / PROJECTS ============ */
.section-center{width:min(1080px,92vw);margin:0 auto;text-align:center}
.sub{opacity:.85;margin-top:6px}
.cards{
  margin-top:20px; display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:22px
}
.card{
  position:relative; background:rgba(255,255,255,.05);
  border:1px solid rgba(255,255,255,.16); border-radius:16px;
  padding:22px; backdrop-filter:blur(8px); transition:.25s
}
.card:hover{transform:translateY(-6px); border-color:rgba(255,255,255,.3)}
.card::before{
  content:""; position:absolute; inset:0; border-radius:16px; padding:1.6px; background:var(--glow);
  -webkit-mask:linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite:xor; mask-composite:exclude; opacity:.7; pointer-events:none
}
.price-badge{
  position:absolute; top:12px; right:12px; background:var(--glow); color:#111;
  padding:6px 10px; border-radius:999px; font-weight:800; font-size:.9rem
}
.card img{width:100%;height:160px;object-fit:cover;border-radius:12px;margin-bottom:8px}

/* ============ FOOTER (only on last slide) ============ */
.footer{
  position:fixed; left:0; bottom:0; width:100%;
  display:none; justify-content:space-between; align-items:center;
  padding:18px 6%; border-top:1px solid rgba(255,255,255,.18);
  background:rgba(0,0,0,.24); backdrop-filter:blur(10px); z-index:40
}
.footer.show{display:flex}
.footer-left h3{font-family:"Playfair Display",serif;background:var(--glow);-webkit-background-clip:text;color:transparent}
.footer-contact{margin-top:6px;display:flex;flex-direction:column;gap:2px;opacity:.85}
.footer-right{display:flex;gap:12px}
.footer-icon{
  width:36px;height:36px;border-radius:999px;border:1px solid rgba(255,255,255,.25);
  display:flex;align-items:center;justify-content:center;color:#fff;font-size:.8rem;transition:.25s
}
.footer-icon:hover{border-color:var(--pink);color:var(--pink)}

/* ============ RESPONSIVE ============ */
@media(max-width:900px){
  .about-grid{grid-template-columns:1fr}
}
