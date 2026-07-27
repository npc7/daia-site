/* ============ DAIA site i18n ============ */
const I18N = {
  en: {
    "nav.products": "Products",
    "nav.how": "How it works",
    "nav.amlclaw": "AMLClaw",
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

    "amlclaw.kicker": "OPEN SOURCE · MIT · SELF-HOSTED",
    "amlclaw.title": "AMLClaw — the open-source app built on DAIA",
    "amlclaw.sub": "A compliance desk open-sourced by the DAIA team. It wraps our KYA / KYT API into ready-to-run payment workflows — screening, monitoring and evidence reports — and shows you how to call the API the right way.",
    "amlclaw.f1.title": "KYA / KYT screening",
    "amlclaw.f1.body": "Screen an address or a transaction hash in one click — direction-aware, with full path evidence and an interactive fund-flow graph.",
    "amlclaw.f2.title": "Address monitoring",
    "amlclaw.f2.body": "Watch an address's future transfers and auto-KYT every new one — receiving = in, sending = out. Every tx lands in a filterable ledger, nothing missed.",
    "amlclaw.f3.title": "TX monitoring",
    "amlclaw.f3.body": "Keep watching a counterparty — a tx's from / to address — and alert the moment it gets tagged Sanctions or Freeze, or its risk level escalates.",
    "amlclaw.f4.title": "Self-hosted & free",
    "amlclaw.f4.body": "MIT-licensed, no database, your data never leaves your server. Bring one width.info API key and deploy anywhere.",
    "amlclaw.bp.title": "How to use the API well — lessons baked into AMLClaw",
    "amlclaw.bp1.body": "For continuous TX monitoring, set hops = 1. You only need to know whether the counterparty (from / to) address itself carries a high-risk label — Sanctions, Freeze and the like. One hop skips the deep graph walk, so each cycle returns in a fraction of the time — exactly what high-frequency monitoring needs.",
    "amlclaw.bp2.tag": "custom ruleset",
    "amlclaw.bp2.body": "Don't leave ruleset_id at the broad default. Point each monitor at your own ruleset — pick the categories and thresholds that match your business — and alerts get far more precise, with fewer false positives.",
    "amlclaw.bp3.tag": "deep KYA on demand",
    "amlclaw.bp3.body": "Reserve multi-hop (3–5) for one-off deposit / withdrawal screening, where you genuinely need to trace source of funds. Keep deep hops out of the monitoring loop — depth there just costs latency.",
    "amlclaw.bp4.tag": "rolling window · serial",
    "amlclaw.bp4.body": "Each cycle screens only [last run → now], never from zero — faster, no re-scanning. Run jobs one after another to respect API concurrency limits, and log every tx so you can prove full coverage.",
    "amlclaw.cta": "View AMLClaw on GitHub →",
    "amlclaw.cta2": "Read the API reference",

    "free.title": "Free for enterprise partners",
    "free.body": "We provide wallets, custodians, payment companies and trading platforms with free, SLA-backed access to the full DAIA engine — on-chain intelligence, screening and sanctions data included.",
    "free.cta": "Talk to us at width.info →",

    "footer.by": "by Width"
  },

  zh: {
    "nav.products": "产品能力",
    "nav.how": "工作方式",
    "nav.amlclaw": "AMLClaw",
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

    "amlclaw.kicker": "开源 · MIT · 可私有部署",
    "amlclaw.title": "AMLClaw —— 基于 DAIA 的开源应用",
    "amlclaw.sub": "由 DAIA 团队开源的合规工作台。它把我们的 KYA / KYT API 封装成开箱即用的支付业务流程——筛查、监控与证据报告，并示范了「如何正确地调用这套 API」。",
    "amlclaw.f1.title": "KYA / KYT 筛查",
    "amlclaw.f1.body": "一键筛查一个地址或一笔交易哈希——区分方向，带完整路径证据与可交互的资金流向图。",
    "amlclaw.f2.title": "地址监控",
    "amlclaw.f2.body": "监控一个地址后续的每一笔转账并自动 KYT——收款算 in、付款算 out。全量入台账，一笔不漏，可按风险等级与时间筛选。",
    "amlclaw.f3.title": "TX 监控",
    "amlclaw.f3.body": "持续盯住某个对手方——某笔交易的 from / to 地址——一旦它被打上 Sanctions（制裁）或 Freeze（冻结）标签、或风险等级升级，立即告警。",
    "amlclaw.f4.title": "私有部署 · 免费",
    "amlclaw.f4.body": "MIT 许可、无数据库，数据不出你的服务器。一把 width.info API Key，随处部署。",
    "amlclaw.bp.title": "如何用好这套 API —— AMLClaw 里沉淀的实践",
    "amlclaw.bp1.body": "做 TX 持续监控时，把 hops 设为 1。你只需要知道对手方（from / to）地址本身是否带高风险标签——制裁、冻结之类。一跳省去了深度图遍历，每轮返回时间大幅缩短——这正是高频监控需要的。",
    "amlclaw.bp2.tag": "自定义规则",
    "amlclaw.bp2.body": "不要把 ruleset_id 留在宽泛的默认值。给每个监控指向你自己的规则集——挑选贴合业务的风险类别与阈值——告警会精准得多，误报也更少。",
    "amlclaw.bp3.tag": "按需深筛",
    "amlclaw.bp3.body": "把多跳（3–5 跳）留给一次性的入金 / 出金筛查——那种确实需要向上追溯资金来源的场景。别把深跳放进监控循环，那里的深度只会换来延迟。",
    "amlclaw.bp4.tag": "滚动窗口 · 串行",
    "amlclaw.bp4.body": "每轮只筛 [上次运行 → 现在]，而不是从零开始——更快、也不重复扫。任务一个接一个串行执行，尊重 API 并发上限；每笔交易都记账，可证明全量覆盖。",
    "amlclaw.cta": "在 GitHub 上查看 AMLClaw →",
    "amlclaw.cta2": "阅读 API 文档",

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
