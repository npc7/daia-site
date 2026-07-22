/* ============ DAIA site i18n ============ */
const I18N = {
  en: {
    "nav.products": "Products",
    "nav.how": "How it works",
    "nav.free": "Free Access",
    "nav.cta": "Get Access",

    "hero.kicker": "ON-CHAIN INTELLIGENCE & RISK ENGINE",
    "hero.title": "Know where the money comes from.<br>Keep bad funds out.",
    "hero.sub": "DAIA is an on-chain intelligence and risk engine — real-time address & transaction screening, self-built sanctions data and multi-hop fund tracing across 11 chains. Free for enterprise partners.",
    "hero.cta": "Apply for Free Enterprise Access →",
    "hero.cta2": "Explore the engine",

    "stats.chains": "chains, near real-time data",
    "stats.millionsNum": "Millions",
    "stats.labels": "of labeled addresses",
    "stats.sanctions": "sanctions data search",
    "stats.tracing": "fund tracing depth",

    "products.title": "One engine, four capabilities",
    "products.sub": "Everything a compliance team needs to screen crypto flows — built on our own data, our own labels, our own rules.",
    "products.kya.title": "KYA · Address Screening",
    "products.kya.body": "Screen any address for direct hits and indirect exposure across 0–5 hops — sanctions, terrorism financing, mixers, hacks, darknet and more. Materiality thresholds are fully configurable.",
    "products.kyt.title": "KYT · Transaction Screening",
    "products.kyt.body": "Direction-aware screening for deposits and withdrawals. Trace the funds behind each transfer back to their source, and block or escalate in real time.",
    "products.sanctions.title": "Sanctions Screening",
    "products.sanctions.body": "Self-built sanctions database covering OFAC, UN, EU, UK and more — entities, individuals, companies and addresses, searchable in under a second.",
    "products.labels.title": "Intelligence & Labels",
    "products.labels.body": "Continuously updated labels for exchanges, DeFi protocols, mixers, hacks and darknet entities — verified by a dedicated intelligence team.",

    "how.title": "How it works",
    "how.s1.title": "Integrate the API",
    "how.s1.body": "One REST API. Three built-in rulesets — KYA, KYT-IN, KYT-OUT — or bring your own thresholds and rules.",
    "how.s2.title": "Screen in real time",
    "how.s2.body": "Every address and transfer is checked against sanctions, crime and obfuscation risk — with per-hop materiality controls that keep false positives down.",
    "how.s3.title": "Explainable results",
    "how.s3.body": "Every hit returns the exact rules triggered — a ready-made audit trail for compliance teams and regulators, supporting MAS PSN02 and FATF Travel Rule scenarios.",

    "free.title": "Free for enterprise partners",
    "free.body": "We provide wallets, custodians, payment companies and trading platforms with free, SLA-backed access to the full DAIA engine — on-chain intelligence, screening and sanctions data included.",
    "free.cta": "Talk to us at width.info →",

    "footer.by": "by Width"
  },

  zh: {
    "nav.products": "产品能力",
    "nav.how": "工作方式",
    "nav.free": "免费接入",
    "nav.cta": "申请接入",

    "hero.kicker": "链上情报与风控引擎",
    "hero.title": "看清每一笔钱从哪来，<br>把脏钱挡在门外。",
    "hero.sub": "DAIA 是链上情报与风控引擎——覆盖 11 条链的实时地址/交易筛查、自建制裁数据与多跳资金追溯。大客户免费接入。",
    "hero.cta": "申请大客户免费接入 →",
    "hero.cta2": "了解引擎能力",

    "stats.chains": "条链 · 近实时数据",
    "stats.millionsNum": "百万级",
    "stats.labels": "标签地址库",
    "stats.sanctions": "制裁数据检索",
    "stats.tracing": "最深资金追溯",

    "products.title": "一个引擎，四大能力",
    "products.sub": "合规团队筛查加密资金所需的一切——基于我们自己的数据、自己的标签、自己的规则。",
    "products.kya.title": "KYA · 地址筛查",
    "products.kya.body": "对任意地址做 0–5 跳的自身命中与间接敞口筛查——制裁、恐怖融资、混币器、黑客、暗网等风险类别，重要性阈值全部可调。",
    "products.kyt.title": "KYT · 交易筛查",
    "products.kyt.body": "区分入金/出金方向的实时交易筛查，按「本笔资金」向上溯源，实时拦截或升级处置。",
    "products.sanctions.title": "制裁筛查",
    "products.sanctions.body": "自建制裁数据库，覆盖 OFAC、UN、EU、UK 等名单——主体、个人、企业、地址，秒级检索。",
    "products.labels.title": "链上情报标签库",
    "products.labels.body": "持续更新的交易所、DeFi 协议、混币器、黑客与暗网实体标签，由专职情报团队校验。",

    "how.title": "它如何工作",
    "how.s1.title": "接入 API",
    "how.s1.body": "一套 REST API，三套内置规则集（KYA / KYT-IN / KYT-OUT），也支持自定义阈值与规则。",
    "how.s2.title": "实时筛查",
    "how.s2.body": "每个地址、每笔转账实时比对制裁、犯罪与混淆风险——按跳数分级的重要性控制，把误报压到最低。",
    "how.s3.title": "可解释的结果",
    "how.s3.body": "每次命中返回触发的具体规则清单——即拿即用的审计依据，支撑 MAS PSN02、FATF Travel Rule 等合规场景。",

    "free.title": "大客户免费接入计划",
    "free.body": "我们为钱包、托管、支付与交易平台提供免费、含 SLA 保障的 DAIA 引擎全量接入——链上情报、筛查与制裁数据全部包含。",
    "free.cta": "通过 width.info 联系我们 →",

    "footer.by": "by Width"
  }
};

function setLang(lang) {
  const dict = I18N[lang] || I18N.en;
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      if (dict[key].indexOf("<br>") !== -1 || dict[key].indexOf("&amp;") !== -1) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });
  document.documentElement.lang = (lang === "zh") ? "zh-CN" : "en";
  document.getElementById("lang-en").classList.toggle("active", lang === "en");
  document.getElementById("lang-zh").classList.toggle("active", lang === "zh");
  try { localStorage.setItem("daia-lang", lang); } catch (e) {}
}

(function initLang() {
  var lang = null;
  try { lang = localStorage.getItem("daia-lang"); } catch (e) {}
  if (!lang) {
    var nav = (navigator.language || "").toLowerCase();
    lang = nav.indexOf("zh") === 0 ? "zh" : "en";
  }
  setLang(lang);
})();
