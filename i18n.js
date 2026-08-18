/* ============ DART site i18n ============ */
const I18N = {
  en: {
    "nav.how": "How it works",
    "nav.rulesets": "Rulesets",
    "nav.scoring": "Scoring",
    "nav.caps": "Capabilities",
    "nav.docs": "Docs",
    "nav.free": "Free Access",
    "nav.cta": "Get Access",

    "hero.kicker": "DIGITAL ASSET RISK TARGETING",
    "hero.title": "Know where the money comes from.<br>Keep bad funds out.",
    "hero.sub": "DART (Digital Asset Risk Targeting) traces every fund-flow chain across labeled addresses and turns any address or transaction into an explainable 0–100 risk score — you define which chains count as risky, and how many points they cost.",
    "hero.cta": "Read the product manual →",
    "hero.cta2": "Apply for free access",

    "graph.caption": "One address, one fund-flow graph: who each counterparty is, which chain is risky, and how many points it costs — every hop explainable.",

    "stats.chains": "chains, near real-time data",
    "stats.millionsNum": "Millions",
    "stats.labels": "of labeled addresses",
    "stats.sanctions": "sanctions data search",
    "stats.tracing": "fund tracing depth",

    "pl.title": "How a screening runs",
    "pl.sub": "One screening is completed by two independent rulesets: the path-matching ruleset decides “what counts as a violation”, the scoring ruleset decides “how severe it is and what to do”.",
    "pl.s1t": "Address / TX hash",
    "pl.s1b": "Submit an address (KYA) or a transaction (KYT). Chain and token are auto-detected.",
    "pl.s2t": "Path investigation",
    "pl.s2b": "Expand the fund-flow graph hop by hop — upstream and downstream — with a label on every counterparty.",
    "pl.s3t": "Path-matching ruleset",
    "pl.s3b": "Every path is matched against 72 rules: which fund-flow chains count as risky — and which rule was violated.",
    "pl.s4t": "Scoring ruleset",
    "pl.s4b": "Hits are converted into a 0–100 score by direction, hop distance, severity and share of funds.",
    "pl.outt": "Score + disposition",
    "pl.outb": "Pass · Review · Enhanced Due Diligence · Block — with the exact rules behind the number.",

    "rs.title": "Two rulesets, one screening",
    "rs.sub": "You bring the definitions: which fund-flow chains are risky, and how many points each should cost. DART ships 72 built-in rules per ruleset, fully customizable.",
    "rs.at": "PATH-MATCHING · KYA / KYT-IN / KYT-OUT",
    "rs.atitle": "“Is this fund-flow chain a violation?”",
    "rs.a1": "72 rules per ruleset across 9 risk categories — sanctions, terrorism financing, mixers, hacks, darknet and more.",
    "rs.a2": "Three rule shapes: self-hit (0 hop) · direct exposure (1 hop) · layered exposure (2–5 hops, with rising materiality thresholds).",
    "rs.a3": "Input: fund-flow graph + node labels. Output: a hit list — rule, severity, hop, amount.",
    "rs.a4": "Copy a built-in ruleset and edit any threshold or condition.",
    "rs.bt": "SCORING · FUND-ATTRIBUTION",
    "rs.btitle": "“How severe is it — and what should we do?”",
    "rs.b1": "A contribution matrix over direction × hop distance × hit severity — inflow vs outflow weighted differently.",
    "rs.b2": "Cell score = base × severity weight × share of the address's total on-chain flow (not the sub-graph).",
    "rs.b3": "Total capped at 100, mapped to four dispositions: Pass · Review · EDD · Block.",
    "rs.b4": "Self-hit rules override everything: score 100 × severity weight → Block.",
    "rs.keytag": "KEY DIFFERENCE",
    "rs.keybody": "The path-matching ruleset only answers yes/no — it never produces a score. The score comes entirely from the scoring ruleset. So the same hit list scores differently under a different scoring ruleset, while the hits themselves never change.",

    "tiers.title": "One score, four dispositions",
    "tiers.sub": "Every screening ends in a 0–100 score and one of four dispositions — with the exact rules that produced it, ready for your audit trail.",
    "tiers.t1": "Pass · 通过",
    "tiers.b1": "No risk exposure found that needs action.",
    "tiers.t2": "Review · 复核",
    "tiers.b2": "Risk linkage exists — manual review advised.",
    "tiers.t3": "EDD · 加强尽调",
    "tiers.b3": "Significant risk — enhanced due diligence required.",
    "tiers.t4": "Block · 拦截",
    "tiers.b4": "Extreme risk — refuse the transaction.",

    "caps.title": "One engine, four capabilities",
    "caps.sub": "Everything a compliance team needs to screen crypto flows — built on our own data, our own labels, our own rules.",
    "caps.kya.t": "KYA · Address Screening",
    "caps.kya.b": "Screen any address for direct hits and indirect exposure across 0–5 hops — sanctions, terrorism financing, mixers, hacks, darknet and more. Materiality thresholds are fully configurable.",
    "caps.kyt.t": "KYT · Transaction Screening",
    "caps.kyt.b": "Direction-aware screening for deposits and withdrawals. Trace the funds behind each transfer back to their source, and block or escalate in real time.",
    "caps.san.t": "Sanctions Screening",
    "caps.san.b": "Self-built sanctions database covering OFAC, UN, EU, UK and more — entities, individuals, companies and addresses, searchable in under a second.",
    "caps.lab.t": "Intelligence &amp; Labels",
    "caps.lab.b": "Continuously updated labels for exchanges, DeFi protocols, mixers, hacks and darknet entities — verified by a dedicated intelligence team.",

    "docs.title": "Learn the product in an afternoon",
    "docs.sub": "Screenshots, console walkthrough, API samples — everything about the two rulesets, from your first screening to your own scoring matrix.",
    "docs.f1.t": "DART Product Manual",
    "docs.f1.b": "The two rulesets explained end to end: how a screening runs, all 72 rule categories, the scoring matrix and formulas, console + API usage with screenshots.",
    "docs.f2.t": "API Reference",
    "docs.f2.b": "KYA / KYT endpoints, ruleset_id and scoring_ruleset_id parameters, sync and async modes, and the result schema — testable right in the browser.",
    "docs.f3.t": "AMLClaw — open-source app",
    "docs.f3.b": "A ready-to-run compliance desk built on DART's API — screening, address/TX monitoring and evidence reports — and a working example of how to call the API well.",
    "docs.cta1": "Read the manual →",
    "docs.cta2": "Open API reference",
    "docs.cta3": "View on GitHub",

    "free.title": "Free for enterprise partners",
    "free.body": "We provide wallets, custodians, payment companies and trading platforms with free, SLA-backed access to the full DART engine — address labels, fund-flow tracing, risk rulesets and scoring included.",
    "free.cta": "Talk to us at width.info →",

    "footer.name": "Digital Asset Risk Targeting",
    "footer.by": "by Width",
    "footer.docs": "Product manual"
  },

  zh: {
    "nav.how": "工作方式",
    "nav.rulesets": "规则集",
    "nav.scoring": "评分",
    "nav.caps": "产品能力",
    "nav.docs": "文档",
    "nav.free": "免费接入",
    "nav.cta": "申请接入",

    "hero.kicker": "数字资产风险定位 · DIGITAL ASSET RISK TARGETING",
    "hero.title": "看清每一笔钱从哪来，<br>把脏钱挡在门外。",
    "hero.sub": "DART（Digital Asset Risk Targeting）沿着带标签的地址追溯每一笔资金链路，把任意地址或交易折算成一张可解释的 0–100 风险分——哪些链路算风险、该扣多少分，由你自己定义。",
    "hero.cta": "阅读产品手册 →",
    "hero.cta2": "申请免费接入",

    "graph.caption": "一个地址，一张资金链路图：每一跳对手方是谁、哪条链路有风险、该扣多少分——每一步都可解释。",

    "stats.chains": "条链 · 近实时数据",
    "stats.millionsNum": "百万级",
    "stats.labels": "标签地址库",
    "stats.sanctions": "制裁数据检索",
    "stats.tracing": "最深资金追溯",

    "pl.title": "一次筛查是怎么跑的",
    "pl.sub": "一次筛查由两套彼此独立的规则集完成：路径匹配规则集判定「什么算违规」，打分映射规则集判定「有多严重、该怎么处置」。",
    "pl.s1t": "地址 / 交易哈希",
    "pl.s1b": "提交一个地址（KYA）或一笔交易（KYT），自动识别链与币种。",
    "pl.s2t": "路径调查",
    "pl.s2b": "按跳数向上游、下游展开资金链路图，每个对手方都带标签。",
    "pl.s3t": "路径匹配规则集",
    "pl.s3b": "逐条路径匹配 72 条规则：哪些资金链路算风险——以及违反了哪条规则。",
    "pl.s4t": "打分映射规则集",
    "pl.s4b": "按方向、跳数、严重度与资金占比，把命中折算成 0–100 分。",
    "pl.outt": "分数 + 处置",
    "pl.outb": "通过 · 复核 · 加强尽调 · 拦截——分数背后的每一条规则都可见。",

    "rs.title": "两套规则集，一次筛查",
    "rs.sub": "定义权在你：哪些资金链路算风险、每条该扣多少分。DART 每套规则集内置 72 条规则，全部可自定义。",
    "rs.at": "路径匹配 · KYA / KYT-IN / KYT-OUT",
    "rs.atitle": "「这条资金链路违规吗？」",
    "rs.a1": "每套 72 条规则、覆盖 9 大风险类别——制裁、恐怖融资、混币器、黑客、暗网等。",
    "rs.a2": "三种规则形态：自身命中（0 跳）· 直接暴露（1 跳）· 分层暴露（2–5 跳，门槛逐级抬高）。",
    "rs.a3": "输入：资金链路图 + 节点标签。输出：命中列表——规则、严重度、跳数、金额。",
    "rs.a4": "复制内置规则集，任意修改阈值与条件。",
    "rs.bt": "打分映射 · 资金占比评分",
    "rs.btitle": "「整体有多严重？该怎么处置？」",
    "rs.b1": "一张按「方向 × 跳数 × 命中严重度」的贡献矩阵——流入与流出权重不同。",
    "rs.b2": "单格得分 = 基数 × 严重度权重 × 资金占比（分母是该地址链上总流量，不是子图流量）。",
    "rs.b3": "总分封顶 100，映射为四级处置：通过 · 复核 · 加强尽调 · 拦截。",
    "rs.b4": "自身命中规则一票定音：分数 = 100 × 严重度权重 → 拦截。",
    "rs.keytag": "关键区别",
    "rs.keybody": "路径匹配规则集只回答是/否——它不产生分数。分数完全由打分映射规则集决定。所以同一批命中，换一套打分规则集就会得到不同的分数和判定，而命中列表本身不变。",

    "tiers.title": "一个分数，四级处置",
    "tiers.sub": "每次筛查都以 0–100 分和四级处置之一收尾——并附上产生该分数的具体规则，可直接用作审计留痕。",
    "tiers.t1": "通过 · Pass",
    "tiers.b1": "未发现需要处理的风险敞口。",
    "tiers.t2": "复核 · Review",
    "tiers.b2": "存在风险关联，建议人工复核。",
    "tiers.t3": "加强尽调 · EDD",
    "tiers.b3": "风险显著，需补充尽职调查。",
    "tiers.t4": "拦截 · Block",
    "tiers.b4": "风险极高，建议拒绝交易。",

    "caps.title": "一个引擎，四大能力",
    "caps.sub": "合规团队筛查加密资金所需的一切——基于我们自己的数据、自己的标签、自己的规则。",
    "caps.kya.t": "KYA · 地址筛查",
    "caps.kya.b": "对任意地址做 0–5 跳的自身命中与间接敞口筛查——制裁、恐怖融资、混币器、黑客、暗网等风险类别，重要性阈值全部可调。",
    "caps.kyt.t": "KYT · 交易筛查",
    "caps.kyt.b": "区分入金/出金方向的实时交易筛查，按「本笔资金」向上溯源，实时拦截或升级处置。",
    "caps.san.t": "制裁筛查",
    "caps.san.b": "自建制裁数据库，覆盖 OFAC、UN、EU、UK 等名单——主体、个人、企业、地址，秒级检索。",
    "caps.lab.t": "链上情报标签库",
    "caps.lab.b": "持续更新的交易所、DeFi 协议、混币器、黑客与暗网实体标签，由专职情报团队校验。",

    "docs.title": "一个下午学会用 DART",
    "docs.sub": "配截图的控制台演示、API 示例——两套规则集的全部细节，从你的第一次筛查到自定义打分矩阵。",
    "docs.f1.t": "DART 产品手册",
    "docs.f1.b": "两套规则集端到端讲透：筛查怎么跑、72 条规则全分类、打分矩阵与公式、控制台 + API 用法，全部配截图。",
    "docs.f2.t": "API 参考",
    "docs.f2.b": "KYA / KYT 接口、ruleset_id 与 scoring_ruleset_id 参数、同步/异步模式与结果结构——浏览器里即可调试。",
    "docs.f3.t": "AMLClaw —— 开源参考应用",
    "docs.f3.b": "基于 DART API 的开箱即用合规工作台——筛查、地址/交易监控与证据报告，也是「如何正确调用这套 API」的活样板。",
    "docs.cta1": "阅读手册 →",
    "docs.cta2": "打开 API 参考",
    "docs.cta3": "在 GitHub 查看",

    "free.title": "大客户免费接入计划",
    "free.body": "我们为钱包、托管、支付与交易平台提供免费、含 SLA 保障的 DART 引擎全量接入——地址标签、资金链路追溯、风险规则集与评分全部包含。",
    "free.cta": "通过 width.info 联系我们 →",

    "footer.name": "Digital Asset Risk Targeting",
    "footer.by": "by Width",
    "footer.docs": "产品手册"
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