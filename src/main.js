import lottie from "lottie-web";

const A = "/assets/";
const currentPath = location.pathname.replace(/\/+$/, "") || "/";
const isCasesPage = currentPath === "/cases";
const isCaseDetailPage = currentPath.startsWith("/cases/");
const isPrivacyPage = currentPath === "/privacy";
const detailSlug = isCaseDetailPage ? currentPath.split("/").pop() : "";

const button = (text, href = "#contact", external = false) =>
  `<a class="button codex-button" href="${href}"${external ? ' target="_blank" rel="noopener noreferrer"' : ""}><span class="button-icon"><span class="button-mark" aria-hidden="true"></span><img class="button-arrow" src="${A}button-hover-arrow.svg" alt=""></span><span class="button-label"><span>${text}</span><span aria-hidden="true">${text}</span></span></a>`;

const whyFace = (item, side) =>
  `<div class="why-card-face why-card-${side}" aria-hidden="${side === "back"}"><i><img src="${A}${item[0]}" alt=""></i><h3>${item[1]}</h3><p>${item[2]}</p><span>${item[3]}</span></div>`;

const services = [
  {
    id: "service-measurement",
    nav: "数据分析与测量",
    number: "01/",
    title: "数据测量与分析",
    lead: "建立可信赖的数据分析体系",
    support: "支持平台",
    description: "整合网站、App、CRM、会员系统与业务数据，帮助企业全面掌握用户行为、营销表现与业务增长情况。",
    list: ["GA4", "神策分析", "Google Analytics 360", "服务器端追踪", "可视化仪表板"],
    image: "service-measurement-figma.png",
    imageY: "0%",
    imageH: "100%",
  },
  {
    id: "service-media",
    nav: "营销与媒体优化",
    number: "02/",
    title: "营销与媒体优化",
    lead: "提升营销投资回报率",
    support: "支持平台",
    description: "通过归因分析、营销测量与媒体优化，帮助企业实现更科学的预算分配与营销决策。",
    list: ["营销组合模型（MMM）", "Meridian", "Display & Video 360", "Search Ads 360", "受众策略规划", "广告投放优化"],
    image: "service-media-figma.png",
    imageY: "0%",
    imageH: "100%",
  },
  {
    id: "service-ai",
    nav: "AI与智能决策",
    number: "03/",
    title: "AI 与智能决策",
    lead: "让 AI成为营销增长的新引擎",
    support: "支持能力",
    description: "结合人工智能与数据科学能力，帮助企业实现洞察自动化、预测分析与智能決策。",
    list: ["AgentHub", "GEO 优化", "预测模型", "AI洞察分析", "自动化报表"],
    image: "service-ai-figma.png",
    imageY: "0%",
    imageH: "100%",
  },
  {
    id: "service-cloud",
    nav: "数据云与客户数据平台",
    number: "04/",
    title: "数据云与客户数据平台",
    lead: "打造统一的数据资产与客户视图",
    support: "支持平台",
    description: "打通企业内部与外部数据来源，建立可治理、可扩展的数据基础设施，为 AI 与数字化转型奠定基础。",
    list: ["BigQuery", "CDP", "神策 CDP", "数据仓库", "数据治理", "第一方数据策略"],
    image: "service-cloud-figma.png",
    imageY: "0%",
    imageH: "100%",
  },
];

const serviceCard = (item) =>
  `<article class="service-card" id="${item.id}"><div class="service-copy"><small>${item.number}</small><h3>${item.title}</h3><h4 class="service-lead">${item.lead}</h4><p>${item.description}</p><h4 class="service-support">${item.support}</h4><ul>${item.list.map((value) => `<li>${value}</li>`).join("")}</ul></div><div class="service-visual" style="--service-image-y:${item.imageY};--service-image-h:${item.imageH}"><img src="${A}${item.image}" alt="${item.title}"></div></article>`;

const caseStudies = [
  {
    image: "cases-luxury-ai.png",
    alt: "奢侈品案例",
    category: "奢侈品 & 美容",
    title: "主要奢侈品品牌：利用AI焦点小组捕捉品牌认知",
    href: "/cases/luxury-ai",
  },
  {
    image: "cases-estee-lauder.png",
    alt: "雅诗兰黛案例",
    category: "奢侈品 & 美容",
    title: "雅诗兰黛：部署一个+8%媒体ROI和-10%营销预算的子午线MMM",
    href: "/cases/estee-lauder",
  },
  {
    image: "detail-auto.png",
    alt: "雷诺汽车案例",
    category: "汽车",
    title: "雷诺集团：利用CAPI和PII增强的转化测量提升活动表现",
    href: "/cases/renault-capi",
  },
];

const caseMetrics = [
  ["+6.3%", "与非优化场景相比，增量收入提升"],
  ["+8%", "媒体投资回报率"],
  ["-10%", "营销预算"],
];
const caseCard = (item, index) => {
  const tag = item.href ? "a" : "article";
  return `<${tag} class="case-card" ${item.href ? `href="${item.href}"` : ""} tabindex="0" data-case-index="${index}"><div class="case-image"><img src="${A}${item.image}" alt="${item.alt}" draggable="false"><span>${item.category}</span><div class="result"><b>关键结果</b>${caseMetrics.map((metric) => `<strong>${metric[0]}</strong><small>${metric[1]}</small>`).join("")}</div></div><h3>${item.title}</h3></${tag}>`;
};

const casesPageStudies = [
  {
    image: "cases-luxury-ai.png",
    alt: "主要奢侈品品牌人工智能焦点小组案例",
    category: "奢侈品 & 美容",
    title: "主要奢侈品品牌：利用AI焦点小组捕捉品牌认知",
    href: "/cases/luxury-ai",
  },
  {
    image: "cases-estee-lauder.png",
    alt: "雅诗兰黛媒体投资回报率案例",
    category: "奢侈品 & 美容",
    title: "雅诗兰黛：部署一个+8%媒体ROI和-10%营销预算的子午线MMM",
    href: "/cases/estee-lauder",
  },
  {
    image: "cases-global-beauty.png",
    alt: "美妆品牌全漏斗营销案例",
    category: "奢侈品 & 美容",
    title: "美妆品牌：以全漏斗营销策略开拓海外新市场，实现国际化增长",
    href: "/cases/global-beauty",
  },
  {
    image: "cases-blaire.jpg",
    alt: "奢侈品牌营销分类体系案例",
    category: "奢侈品 & 美容",
    title: "奢侈品牌：通过营销分类体系优化广告活动分析效率",
    href: "/cases/blaire",
  },
  {
    image: "cases-dashboard.png",
    alt: "美妆品牌电商数据看板案例",
    category: "奢侈品 & 美容",
    title: "美妆品牌：整合电商数据看板，打造统一的数据分析平台",
    href: "/cases/beauty-dashboard",
  },
  {
    image: "cases-hugo-boss.png",
    alt: "HUGO BOSS 转化率优化案例",
    category: "奢侈品 & 美容",
    title: "HUGO BOSS：持续优化转化率（CRO），最高提升 22% 转化效果",
    href: "/cases/hugo-boss",
  },
];

const caseIndustries = [
  ["luxury", "奢侈品与美妆"],
  ["retail", "零售与服务"],
  ["auto", "汽车"],
  ["travel", "旅游出行"],
  ["telecom", "通信"],
  ["food", "食品饮料"],
  ["energy", "能源"],
  ["fmcg", "快消品"],
  ["customer", "客户服务"],
  ["hospitality", "酒店餐旅"],
];
const caseIndustryFilters = [["all", "所有"], ...caseIndustries];

const casesForIndustry = (filter) => {
  if (filter === "all") return caseIndustries.flatMap(([key]) => casesForIndustry(key));
  const industryIndex = Math.max(
    0,
    caseIndustries.findIndex(([key]) => key === filter),
  );
  const label = caseIndustries[industryIndex][1];
  if (filter === "luxury") return casesPageStudies;
  const titleEnds = [
    "洞察用户需求，提升品牌认知与增长效率",
    "整合全渠道数据，建立统一业务洞察",
    "优化媒体投放策略，提升营销投资回报率",
    "通过智能分析改善客户旅程与转化表现",
    "以数据平台打通业务系统与增长链路",
    "应用 AI 模型加速决策与运营优化",
  ];
  return casesPageStudies.map((_, index) => {
    const source = casesPageStudies[(index + industryIndex) % casesPageStudies.length];
    return {
      ...source,
      href: `/cases/${filter}-${index + 1}`,
      category: label,
      alt: `${label}成功案例`,
      title: `${label}品牌：${titleEnds[index]}`,
    };
  });
};

const generatedDetailMatch = detailSlug.match(/^([a-z]+)-(\d+)$/);
const generatedDetailStudy = generatedDetailMatch
  ? casesForIndustry(generatedDetailMatch[1])[Number(generatedDetailMatch[2]) - 1]
  : null;
const promotedDetailStudies = [
  {
    image: "cases-feature-watch.png",
    alt: "知名奢侈腕表品牌人工智能焦点小组案例",
    category: "奢侈品 & 美容",
    title: "知名奢侈品牌：利用人工智能焦点小组捕捉品牌感知",
    href: "/cases/watch-ai",
  },
  {
    image: "detail-auto.png",
    alt: "雷诺汽车转化测量案例",
    category: "汽车",
    title: "雷诺集团：利用CAPI和PII增强的转化测量提升活动表现",
    href: "/cases/renault-capi",
  },
];
const detailCurrentStudy =
  promotedDetailStudies.find((item) => item.href.endsWith(`/${detailSlug}`)) ||
  casesPageStudies.find((item) => item.href?.endsWith(`/${detailSlug}`)) ||
  generatedDetailStudy ||
  casesPageStudies[0];

if (isCaseDetailPage) {
  const detailHeroPreload = document.createElement("link");
  detailHeroPreload.rel = "preload";
  detailHeroPreload.as = "image";
  detailHeroPreload.href = `${A}${detailCurrentStudy.image}`;
  detailHeroPreload.fetchPriority = "high";
  document.head.append(detailHeroPreload);
}

const detailMetrics = [
  ["1900+", "经传统市场研究验证的独特感知评分"],
  ["19", "评估品牌及其竞争对手的关键问题"],
  ["20", "旨在提升受众与大语言模型（LLM）认知度的高度可操作性建议"],
];

const detailOtherStudies = [
  promotedDetailStudies[0],
  {
    image: "cases-estee-lauder.png",
    alt: "雅诗兰黛媒体投资回报率案例",
    category: "奢侈品 & 美容",
    title: "雅诗兰黛：部署一个+8%媒体ROI和-10%营销预算的子午线MMM",
    href: "/cases/estee-lauder",
  },
  promotedDetailStudies[1],
];

const casesGridCard = (item, index) => {
  const tag = item.href ? "a" : "article";
  return `<${tag} class="cases-list-card" ${item.href ? `href="${item.href}"` : ""} tabindex="0" data-case-index="${index}"><div class="cases-list-image"><img src="${A}${item.image}" alt="${item.alt}" draggable="false"><span class="cases-list-category">${item.category}</span><div class="cases-list-result"><b>关键结果</b>${caseMetrics.map((metric) => `<strong>${metric[0]}</strong><small>${metric[1]}</small>`).join("")}</div></div><h3>${item.title}</h3></${tag}>`;
};

const contactDrawerMarkup = `
  <div class="contact-drawer-layer" aria-hidden="true">
    <button class="contact-drawer-backdrop" type="button" tabindex="-1" aria-label="关闭联系表单"></button>
    <aside class="contact-drawer" role="dialog" aria-modal="true" aria-labelledby="contact-drawer-title">
      <h2 id="contact-drawer-title" class="sr-only">联系我们</h2>
      <button class="contact-drawer-close" type="button" aria-label="关闭联系表单"><img src="${A}contact-drawer-close.svg" alt=""></button>
      <form class="contact-drawer-form">
        <div class="contact-drawer-names"><label>姓<input name="last-name" autocomplete="family-name" placeholder="姓"></label><label>名<input name="first-name" autocomplete="given-name" placeholder="名"></label></div>
        <label>邮箱<input name="email" type="email" autocomplete="email" placeholder="邮箱"></label>
        <div class="contact-drawer-field"><span class="contact-drawer-field-label">您想要了解的问题</span><div class="contact-drawer-select"><input type="hidden" name="topic" value=""><button class="contact-drawer-select-trigger" type="button" aria-haspopup="listbox" aria-expanded="false"><span>您想要了解的问题</span><img src="${A}contact-drawer-chevron.svg" alt=""></button><div class="contact-drawer-options" role="listbox" aria-label="您想要了解的问题"><button type="button" role="option" aria-selected="false" data-value="数据分析与测量" tabindex="-1">数据分析与测量</button><button type="button" role="option" aria-selected="false" data-value="营销与媒体优化" tabindex="-1">营销与媒体优化</button><button type="button" role="option" aria-selected="false" data-value="AI与智能决策" tabindex="-1">AI与智能决策</button><button type="button" role="option" aria-selected="false" data-value="数据云与客户数据平台" tabindex="-1">数据云与客户数据平台</button></div></div></div>
        <label>留言<textarea name="message" placeholder="留言"></textarea></label>
        <button class="button contact-drawer-submit" type="submit"><span class="button-icon"><span class="button-mark" aria-hidden="true"></span><img class="button-arrow" src="${A}button-hover-arrow.svg" alt=""></span><span class="button-label"><span>了解更多</span><span aria-hidden="true">了解更多</span></span></button>
      </form>
    </aside>
  </div>`;

const articleModalMarkup = `
  <div class="article-modal-layer" aria-hidden="true">
    <button class="article-modal-backdrop" type="button" tabindex="-1" aria-label="关闭文章弹窗"></button>
    <section class="article-modal" role="dialog" aria-modal="true" aria-labelledby="article-modal-title">
      <button class="article-modal-close" type="button" aria-label="关闭文章弹窗"><img src="${A}article-close.svg" alt=""></button>
      <span class="article-wechat-icon"><img src="${A}article-wechat.svg" alt=""></span><h2 id="article-modal-title">在微信中阅读文章</h2><p class="article-modal-lead">我们的精选文章已同步至微信公众号<br>扫描下方二维码，随时随地畅享阅读</p>
      <div class="article-qr-frame"><img class="article-qr" src="${A}article-qr.png" alt="fifty-five 微信公众号二维码"><span class="article-scan" aria-hidden="true"></span><img class="article-corner article-corner-tl" src="${A}article-corner-left.svg" alt=""><img class="article-corner article-corner-bl" src="${A}article-corner-left.svg" alt=""><img class="article-corner article-corner-tr" src="${A}article-corner-right.svg" alt=""><img class="article-corner article-corner-br" src="${A}article-corner-right.svg" alt=""></div>
      <p class="article-scan-caption">微信扫一扫·关注公众号</p><img class="article-step-line" src="${A}article-line.svg" alt=""><div class="article-steps" aria-label="阅读步骤"><div><span><img src="${A}article-step.svg" alt=""><b>1</b></span><p>打开微信<br>扫一扫</p></div><div><span><img src="${A}article-step.svg" alt=""><b>2</b></span><p>扫描<br>二维码</p></div><div><span><img src="${A}article-step.svg" alt=""><b>3</b></span><p>关注后<br>查看文章</p></div></div>
    </section>
  </div>`;

const footerMarkup = `
  <footer><div class="footer-grid wrap"><div class="footer-brand"><a href="/" aria-label="返回首页"><img src="${A}logo.png" class="logo" alt="fifty-five"></a><p>用数据与技术驱动增长，助力品牌走向未来。</p><div class="socials" aria-label="社交媒体"><span><img src="${A}social-linkedin.svg" alt="LinkedIn"></span><span><img src="${A}social-youtube.svg" alt="YouTube"></span><span><img src="${A}social-wechat.svg" alt="微信"></span></div></div><div class="footer-nav"><em>网站导航</em><a href="/#services">我们的服务</a><a href="/cases">成功案例</a><a class="article-trigger" href="#articles">文章</a><a class="footer-contact-trigger" href="#contact">联系我们</a></div><div class="footer-follow"><em>关注我们</em><img class="qr" src="${A}wechat-qr.png" alt="微信公众号二维码"><p>扫码关注公众号</p></div></div><div class="copyright wrap">© 2026 fifty-five. All rights reserved.<a href="/privacy"${isPrivacyPage ? ' aria-current="page"' : ""}>隐私政策</a></div></footer>`;

const homePage = `
  <div class="site-shell">
    <header class="hero screen" id="top">
      <nav class="nav wrap" aria-label="主导航">
        <img src="${A}logo.png" class="logo" alt="fifty-five" />
        <div class="nav-links"><a href="#services">我们的服务</a><a href="/cases">成功案例</a><a href="#contact">文章</a></div>
        <div class="nav-actions"><a class="lang" href="https://www.fifty-five.com/" target="_blank" rel="noopener noreferrer" aria-label="在新页面访问 fifty-five 英文官网">EN</a>${button("联系我们")}</div>
      </nav>
      <div class="hero-copy wrap"><h1>以数据驱动AI转型，<br>助力品牌始终领先一步</h1>${button("联系专家")}</div>
      <div class="hero-art" aria-hidden="true"><img class="hero-poster" src="${A}hero-figma.png" alt=""><video class="hero-video" autoplay muted loop playsinline preload="auto" poster="${A}hero-figma.png"><source src="${A}55.mp4" type="video/mp4"></video></div>
      <a class="member-badge" href="https://thebrandtechgroup.com/" target="_blank" rel="noopener noreferrer" aria-label="在新页面访问 The Brandtech Group"><span class="member-badge-top"><img class="member-badge-logo" src="${A}proud-member-logo.svg" alt="The Brandtech Group"></span><span class="member-badge-bottom">Proud member<span class="member-badge-arrow" aria-hidden="true"></span></span></a>
    </header>

    <main>
      <section class="why section" id="why">
        <div class="section-title centered"><small>/ WHY 55 /</small><h2>为什么选择55数据</h2></div>
        <div class="why-grid wrap">
          ${[
            [
              "why-global.svg",
              "全球数据咨询经验",
              "服务国际品牌与跨市场团队，覆盖中国与全球数据生态。",
              "Global Data Consulting",
            ],
            [
              "why-ecosystem.svg",
              "出海数据生态能力",
              "谷歌分析及营销专家，深度整合 GA4、DV360、CM360、BigQuery 等平台能力。CDP 产品、UI/UX 分析，打造跨平台数据整合和洞察能力。",
              "Global Data Ecosystem",
            ],
            [
              "why-ai.svg",
              "AI 驱动营销决策",
              "布局 GEO，优化 AI 搜索曝光，结合 AI 与数据科学，提升媒体效率与营销洞察。",
              "AI-Driven Marketing",
            ],
            [
              "why-china.svg",
              "本土数据生态能力",
              "具备线上数据、企业微信、小程序、CDP 与本地媒体生态整合经验，帮助品牌建立符合中国市场的数据能力体系。",
              "China Data Ecosystem",
            ],
          ]
            .map(
              (x) =>
                `<article class="why-card" tabindex="0"><div class="why-card-inner">${whyFace(x, "front")}${whyFace(x, "back")}</div></article>`,
            )
            .join("")}
        </div>
      </section>

      <section class="brandtech section">
        <div class="brand-grid wrap">
          <div><div class="section-title"><small>// BRANDTECH</small><h2>The Brandtech Group 成员</h2></div><p class="lead">作为 Brandtech Group 的成员，我们结合前沿技术与创新能力，帮助品牌打造更高效、更智能、更具价值的营销体验。</p>${button("了解更多", "https://thebrandtechgroup.com/", true)}</div>
          <div class="brand-motion" role="img" aria-label="The Brandtech Group">
            <img class="brand-motion-fallback" src="${A}brandtech.jpg" alt="">
            <div class="brand-motion-lottie" aria-hidden="true"></div>
          </div>
        </div>
      </section>

      <section class="clients section">
        <div class="section-title centered"><small>/ OUR PARTNER /</small><h2>我们的客户</h2></div>
        <div class="client-grid wrap">
          ${["神策数据", "ASUS", "IKEA", "国泰世华银行", "Carrefour", "信义房屋", "Trip.com", "L’Oréal", "Shiseido", "AIA", "HKTV", "DFI Retail Group", "LVMH", "PCCW"].map((name, index) => `<div><img src="${A}client-${String(index + 1).padStart(2, "0")}.png" alt="${name}" /></div>`).join("")}
        </div>
      </section>

      <section class="services section" id="services">
        <div class="services-grid wrap">
          <aside class="services-sidebar"><div class="section-title"><small>// OUR SERVICES</small><h2>我们的服务</h2></div><nav class="service-tabs" aria-label="服务板块导航">${services.map((item, index) => `<a class="${index === 0 ? "on" : ""}" href="#${item.id}"><span aria-hidden="true"></span>${item.nav}</a>`).join("")}</nav></aside>
          <div class="service-stack">${services.map(serviceCard).join("")}</div>
        </div>
      </section>

      <section class="partners section">
        <div class="section-title centered"><small>/ OUR PARTNER /</small><h2>合作伙伴</h2></div>
        <div class="partner-marquee" aria-label="合作伙伴轮播"><div class="partner-strip">${Array.from({ length: 6 }, () => `<div class="partner-run">${Array.from({ length: 12 }, (_, index) => (index === 0 ? `<div class="partner-card salesforce-card"><img src="${A}partner-salesforce-logo.png" alt="Salesforce"></div>` : `<div class="partner-card"><img src="${A}partner-${String(index + 1).padStart(2, "0")}.png" alt="合作伙伴 ${index + 1}"></div>`)).join("")}</div>`).join("")}</div></div>
      </section>

      <section class="cases section" id="cases">
        <div class="cases-head wrap"><div class="section-title"><small>// CASE STUDIES</small><h2>成功案例</h2></div>${button("了解更多", "/cases")}</div>
        <div class="case-slider"><div class="case-track">${[...caseStudies, ...caseStudies].map(caseCard).join("")}</div></div>
        <div class="case-progress wrap" role="slider" tabindex="0" aria-label="案例浏览进度" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span></span></div>
      </section>

      <section class="contact section" id="contact">
        <div class="contact-grid wrap"><div><div class="section-title"><small>// CONTACT</small><h2>联系我们</h2></div><p class="lead">准备好建立更智能的数据增长体系了吗？<br>与我们的顾问团队聊聊，探索适合您的数据与 AI 增长策略。</p><div class="contact-cards"><article><span class="contact-icon"><img src="${A}contact-mail.svg" alt=""></span><small>// CHAT TO SALES</small><b>contact-cn@fifty-five.com</b></article><article><span class="contact-icon"><img src="${A}contact-phone.svg" alt=""></span><small>// CALL US</small><b>+86 185 0211 0262</b></article></div></div>
        <div class="contact-form">
        </div>
      </div>
      </section>
    </main>

    <footer><div class="footer-grid wrap"><div class="footer-brand"><a href="/" aria-label="返回首页"><img src="${A}logo.png" class="logo" alt="fifty-five"></a><p>用数据与技术驱动增长，助力品牌走向未来。</p><div class="socials" aria-label="社交媒体"><span><img src="${A}social-linkedin.svg" alt="LinkedIn"></span><span><img src="${A}social-youtube.svg" alt="YouTube"></span><span><img src="${A}social-wechat.svg" alt="微信"></span></div></div><div class="footer-nav"><em>网站导航</em><a href="/#services">我们的服务</a><a href="/cases">成功案例</a><a class="article-trigger" href="#articles">文章</a><a class="footer-contact-trigger" href="#contact">联系我们</a></div><div class="footer-follow"><em>关注我们</em><img class="qr" src="${A}wechat-qr.png" alt="微信公众号二维码"><p>扫码关注公众号</p></div></div><div class="copyright wrap">© 2026 fifty-five. All rights reserved.<a href="/privacy">隐私政策</a></div></footer>

    <div class="contact-drawer-layer" aria-hidden="true">
      <button class="contact-drawer-backdrop" type="button" tabindex="-1" aria-label="关闭联系表单"></button>
      <aside class="contact-drawer" role="dialog" aria-modal="true" aria-labelledby="contact-drawer-title">
        <h2 id="contact-drawer-title" class="sr-only">联系我们</h2>
        <button class="contact-drawer-close" type="button" aria-label="关闭联系表单"><img src="${A}contact-drawer-close.svg" alt=""></button>
        <form class="contact-drawer-form">
          <div class="contact-drawer-names">
            <label>姓<input name="last-name" autocomplete="family-name" placeholder="姓"></label>
            <label>名<input name="first-name" autocomplete="given-name" placeholder="名"></label>
          </div>
          <label>邮箱<input name="email" type="email" autocomplete="email" placeholder="邮箱"></label>
          <div class="contact-drawer-field"><span class="contact-drawer-field-label">您想要了解的问题</span><div class="contact-drawer-select"><input type="hidden" name="topic" value=""><button class="contact-drawer-select-trigger" type="button" aria-haspopup="listbox" aria-expanded="false"><span>您想要了解的问题</span><img src="${A}contact-drawer-chevron.svg" alt=""></button><div class="contact-drawer-options" role="listbox" aria-label="您想要了解的问题"><button type="button" role="option" aria-selected="false" data-value="数据分析与测量" tabindex="-1">数据分析与测量</button><button type="button" role="option" aria-selected="false" data-value="营销与媒体优化" tabindex="-1">营销与媒体优化</button><button type="button" role="option" aria-selected="false" data-value="AI与智能决策" tabindex="-1">AI与智能决策</button><button type="button" role="option" aria-selected="false" data-value="数据云与客户数据平台" tabindex="-1">数据云与客户数据平台</button></div></div></div>
          <label>留言<textarea name="message" placeholder="留言"></textarea></label>
          <button class="button contact-drawer-submit" type="submit"><span class="button-icon"><span class="button-mark" aria-hidden="true"></span><img class="button-arrow" src="${A}button-hover-arrow.svg" alt=""></span><span class="button-label"><span>了解更多</span><span aria-hidden="true">了解更多</span></span></button>
        </form>
      </aside>
    </div>

    <section class="cookie-notice" role="dialog" aria-labelledby="cookie-title" aria-describedby="cookie-description">
      <h2 id="cookie-title">Cookie 使用说明</h2>
      <div id="cookie-description"><p>我们使用 Cookie 保障网站正常运行，并优化您的浏览体验。</p><p>您可以接受全部 Cookie，或仅保留网站运行所必需的 Cookie。</p></div>
      <div class="cookie-actions">
        <button class="cookie-choice cookie-necessary" type="button"><span class="cookie-choice-icon" aria-hidden="true"><i></i><img class="cookie-choice-arrow" src="${A}button-hover-arrow.svg" alt=""></span><span class="cookie-choice-label"><span>仅必要</span><span aria-hidden="true">仅必要</span></span></button>
        <button class="cookie-choice cookie-accept" type="button"><span class="cookie-choice-icon" aria-hidden="true"><i></i><img class="cookie-choice-arrow" src="${A}button-hover-arrow.svg" alt=""></span><span class="cookie-choice-label"><span>接受全部</span><span aria-hidden="true">接受全部</span></span></button>
      </div>
    </section>

    <div class="article-modal-layer" aria-hidden="true">
      <button class="article-modal-backdrop" type="button" tabindex="-1" aria-label="关闭文章弹窗"></button>
      <section class="article-modal" role="dialog" aria-modal="true" aria-labelledby="article-modal-title">
        <button class="article-modal-close" type="button" aria-label="关闭文章弹窗"><img src="${A}article-close.svg" alt=""></button>
        <span class="article-wechat-icon"><img src="${A}article-wechat.svg" alt=""></span>
        <h2 id="article-modal-title">在微信中阅读文章</h2>
        <p class="article-modal-lead">我们的精选文章已同步至微信公众号<br>扫描下方二维码，随时随地畅享阅读</p>
        <div class="article-qr-frame">
          <img class="article-qr" src="${A}article-qr.png" alt="fifty-five 微信公众号二维码">
          <span class="article-scan" aria-hidden="true"></span>
          <img class="article-corner article-corner-tl" src="${A}article-corner-left.svg" alt="">
          <img class="article-corner article-corner-bl" src="${A}article-corner-left.svg" alt="">
          <img class="article-corner article-corner-tr" src="${A}article-corner-right.svg" alt="">
          <img class="article-corner article-corner-br" src="${A}article-corner-right.svg" alt="">
        </div>
        <p class="article-scan-caption">微信扫一扫·关注公众号</p>
        <img class="article-step-line" src="${A}article-line.svg" alt="">
        <div class="article-steps" aria-label="阅读步骤">
          <div><span><img src="${A}article-step.svg" alt=""><b>1</b></span><p>打开微信<br>扫一扫</p></div>
          <div><span><img src="${A}article-step.svg" alt=""><b>2</b></span><p>扫描<br>二维码</p></div>
          <div><span><img src="${A}article-step.svg" alt=""><b>3</b></span><p>关注后<br>查看文章</p></div>
        </div>
      </section>
    </div>
  </div>
`;

const casesPage = `
  <div class="site-shell cases-page-shell">
    <header class="cases-page-header" id="top">
      <nav class="nav wrap cases-page-nav" aria-label="主导航">
        <a class="cases-page-logo-link" href="/" aria-label="返回首页"><img src="${A}logo.png" class="logo" alt="fifty-five"></a>
        <div class="nav-links"><a href="/#services">我们的服务</a><a class="is-current" href="/cases" aria-current="page">成功案例</a><a href="#articles">文章</a></div>
        <div class="nav-actions"><a class="lang" href="https://www.fifty-five.com/" target="_blank" rel="noopener noreferrer" aria-label="在新页面访问 fifty-five 英文官网">EN</a>${button("联系我们")}</div>
      </nav>
      <div class="cases-page-intro wrap">
        <div class="section-title"><small>// CASE STUDIES</small><h1>成功案例</h1></div>
        <p>当我们将人才与数据汇聚一堂，便能成就一个个精彩非凡的故事。<br>欢迎了解我们 fifty-fivers 团队如何把握趋势、运用尖端技术，并助力众多当今顶尖国际品牌实现数字化转型。</p>
      </div>
      <article class="cases-feature wrap" tabindex="0">
        <a class="cases-feature-image" href="/cases/watch-ai" aria-label="查看知名奢侈腕表品牌人工智能焦点小组案例详情"><img src="${A}cases-feature-watch.png" alt="知名奢侈腕表品牌人工智能焦点小组案例"><div class="cases-feature-result"><b>关键结果</b>${caseMetrics.map((metric) => `<strong>${metric[0]}</strong><small>${metric[1]}</small>`).join("")}</div></a>
        <div class="cases-feature-copy"><span>奢侈品 & 美容</span><h2>知名奢侈品牌：利用人工智能焦点小组捕捉品牌感知</h2>${button("了解更多", "/cases/watch-ai")}</div>
      </article>
    </header>

    <main class="cases-list-main" id="case-list">
      <div class="cases-list-layout wrap">
        <aside class="cases-filter" aria-label="案例行业筛选">${caseIndustryFilters.map(([key, label], index) => `<button class="${index === 0 ? "is-active" : ""}" type="button" data-filter="${key}" aria-pressed="${index === 0 ? "true" : "false"}"><i aria-hidden="true"></i>${label}</button>`).join("")}</aside>
        <div class="cases-list-grid" data-filter="all">${casesForIndustry("all").map(casesGridCard).join("")}</div>
      </div>
    </main>

    ${footerMarkup}
    ${contactDrawerMarkup}
    ${articleModalMarkup}
  </div>
`;

const caseDetailPage = `
  <div class="site-shell case-detail-shell">
    <header class="case-detail-hero" id="top">
      <nav class="nav wrap cases-page-nav" aria-label="主导航">
        <a class="cases-page-logo-link" href="/" aria-label="返回首页"><img src="${A}logo.png" class="logo" alt="fifty-five"></a>
        <div class="nav-links"><a href="/#services">我们的服务</a><a class="is-current" href="/cases" aria-current="page">成功案例</a><a href="#articles">文章</a></div>
        <div class="nav-actions"><a class="lang" href="https://www.fifty-five.com/" target="_blank" rel="noopener noreferrer" aria-label="在新页面访问 fifty-five 英文官网">EN</a>${button("联系我们")}</div>
      </nav>
      <div class="case-detail-summary">
        <span class="case-detail-category">${detailCurrentStudy.category}</span>
        <h1>${detailCurrentStudy.title}</h1>
        <dl class="case-detail-meta"><div><dt>客户</dt><dd>大型奢侈品客户</dd></div><div><dt>服务</dt><dd>云服务、战略</dd></div><div><dt>日期</dt><dd>2026.5.12</dd></div></dl>
      </div>
      <div class="case-detail-art"><img src="${A}${detailCurrentStudy.image}" alt="${detailCurrentStudy.alt}" loading="eager" decoding="async" fetchpriority="high"><div class="case-detail-result"><b>关键结果</b>${detailMetrics.map((metric) => `<strong>${metric[0]}</strong><small>${metric[1]}</small>`).join("")}</div></div>
    </header>

    <main>
      <section class="case-detail-body">
        <div class="case-detail-body-inner wrap">
          <aside class="case-detail-anchor" aria-label="文章章节导航">
            <a class="is-active" href="#challenge" data-anchor="challenge"><i aria-hidden="true"></i>挑战</a>
            <a href="#solution" data-anchor="solution"><i aria-hidden="true"></i>解决方案</a>
            <a href="#outcome" data-anchor="outcome"><i aria-hidden="true"></i>成果</a>
          </aside>
          <div class="case-detail-article">
            <section class="case-detail-section case-detail-challenge" id="challenge">
              <div class="section-title"><small>// 挑战</small><h2>加速捕捉不同客户群体的品牌认知</h2></div>
              <div class="case-detail-copy"><p>了解品牌认知度（尤其是在全球范围内）通常是一个缓慢的过程，往往依赖于静态的市场研究。</p><p>为了真正把握消费者行为的转变以及奢侈品买家习惯的变化，我们的客户——一家总部位于瑞士的知名奢侈腕表制造商——希望探索新方法，以捕捉不同客户群体对该品牌的认知情况。为此，该品牌与 fifty-five 展开合作，旨在探究如何利用生成式人工智能（Generative AI）来增强这一项目。</p></div>
            </section>
            <section class="case-detail-section case-detail-solution" id="solution">
              <div class="section-title"><small>// 解决方案</small><h2>利用定制化 AI 人像重塑目标受众</h2></div>
              <div class="case-detail-copy"><p>为了克服传统研究的局限性，Fifty-five 利用我们自主研发的智能体 AI 编排工具 Agent55，设计了一场自动化的生成式 AI 焦点小组活动。</p><ul><li>用户画像构建：我们将品牌的目标受众转化为多维度的 AI 用户画像（例如：收藏家、品味引领者、首次购买者等），每类画像涵盖了不同的年龄段、兴趣偏好、预算水平以及对奢侈腕表领域的熟悉程度。</li><li>针对性调研：我们共同设计了一套包含 19 个问题的评估框架，旨在从五个维度（内容新鲜度与互动性、品牌知名度与认知度、文化与伦理价值、产品卓越性、获取渠道与独特性）对该品牌及其竞争对手进行评估。</li><li>大规模交互测试：Agent55 模拟各类用户画像，向五大主流大语言模型（ChatGPT、Gemini、Claude、Mistral AI 和 Deepseek）进行交叉提问，以此捕捉不同受众群体对该品牌的“感受”以及各 AI 模型的不同反馈。</li></ul></div>
            </section>
            <section class="case-detail-section case-detail-outcome" id="outcome">
              <div class="section-title"><small>// 成果</small><h2>一个持续运行的焦点小组，提供关键改进建议</h2></div>
              <div class="case-detail-copy"><p>我们客户的生成式人工智能（GenAI）焦点小组通过独特的感知评分，就不同群体如何看待该品牌提供了关键洞察。这些洞察经由传统市场研究验证以确保其准确性，随后被用于制定旨在改善受众及大语言模型（LLM）感知的建议——例如，加强关于品牌可持续发展承诺的数字化传播，或围绕品牌深厚的专业积淀开发教育性内容。</p><p>如今，我们的客户不仅掌握了极具实操性的建议，还拥有了一个由 Agent55 AI 智能体驱动、全天候运行且响应极速的焦点小组。</p></div>
              <div class="case-detail-stats">${detailMetrics.map((metric) => `<article><strong>${metric[0]}</strong><p>${metric[1]}</p></article>`).join("")}</div>
            </section>
          </div>
        </div>
      </section>

      <section class="detail-related cases section" id="related-cases">
        <div class="cases-head wrap"><div class="section-title"><small>// CASE STUDIES</small><h2>其他案例</h2></div>${button("了解更多", "/cases")}</div>
        <div class="case-slider"><div class="case-track">${detailOtherStudies.map(caseCard).join("")}</div></div>
        <div class="case-progress wrap" role="slider" tabindex="0" aria-label="案例浏览进度" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span></span></div>
      </section>
    </main>
    ${footerMarkup}
    ${contactDrawerMarkup}
    ${articleModalMarkup}
  </div>
`;

const privacySections = [
  ["1. 导言", "<p>五十五尊重您的隐私。本隐私政策旨在说明当您访问我们的网站时，我们如何收集、使用和保护您的信息。</p>"],
  [
    "2. 我们收集的信息",
    "<p>我们可能会收集以下类型的信息：</p><ul><li>个人信息： 当您通过电子邮件或联系表单与我们联系时，您自愿提供给我们的信息，例如您的姓名、电子邮箱地址和电话号码。</li><li>非个人信息： 当您访问我们的网站时，我们会自动收集某些非个人数据，包括您的 IP 地址、浏览器类型、操作系统和浏览行为。这有助于我们提升网站的性能。</li></ul>",
  ],
  [
    "3. 我们如何使用您的信息",
    "<p>我们收集的信息将用于以下用途：</p><ul><li>提供并维护我们的网站服务。</li><li>回应您的咨询、意见或请求。</li><li>分析网站流量并优化用户体验。</li></ul>",
  ],
  [
    "4. Cookie 技术",
    "<p>我们的网站使用 Cookie 来提升您的浏览体验。Cookie 是存储在您设备上的小数据文件。您可以选择通过浏览器设置禁用 Cookie，但这可能会影响网站的部分功能。</p>",
  ],
  [
    "5. 数据共享与披露",
    "<p>我们不会将您的个人身份信息出售、交易或租借给他人。我们可能会与业务合作伙伴和广告商共享不与任何个人身份信息挂钩的通用汇总人口统计信息。在法律要求的情况下，我们亦可能披露相关信息。</p>",
  ],
  [
    "6. 数据安全",
    "<p>我们采取适当的安全措施，以防止您的个人信息遭到未经授权的访问、篡改、披露或销毁。但请注意，任何通过互联网传输的方法都无法保证 100% 的绝对安全。</p>",
  ],
  ["7. 本政策的变更", "<p>我们可能会不时更新本隐私政策。任何变更都将在此页面上公布，并更新修订日期。</p>"],
  [
    "8. 联系我们",
    "<p>如果您对本隐私政策有任何疑问，请通过以下方式与我们联系：</p><ul><li>五十五</li><li>电子邮箱：contact-cn@fifty-five.com</li></ul>",
  ],
];

const privacyPage = `
  <div class="site-shell privacy-page-shell">
    <main class="privacy-main" id="top">
      <nav class="nav wrap cases-page-nav" aria-label="主导航">
        <a href="/" aria-label="返回首页"><img src="${A}logo.png" class="logo" alt="fifty-five"></a>
        <div class="nav-links"><a href="/#services">我们的服务</a><a href="/cases">成功案例</a><a href="#articles">文章</a></div>
        <div class="nav-actions"><a class="lang" href="https://www.fifty-five.com/" target="_blank" rel="noopener noreferrer" aria-label="在新页面访问 fifty-five 英文官网">EN</a>${button("联系我们")}</div>
      </nav>
      <div class="privacy-content wrap">
        <div class="privacy-heading section-title"><small>// PRIVACY POLICY</small><h1>隐私政策</h1></div>
        <div class="privacy-copy">${privacySections.map(([title, content]) => `<section><h2>${title}</h2><div>${content}</div></section>`).join("")}</div>
      </div>
    </main>
    ${footerMarkup}
    ${contactDrawerMarkup}
    ${articleModalMarkup}
  </div>
`;

document.body.classList.toggle("is-cases-page", isCasesPage);
document.body.classList.toggle("is-case-detail-page", isCaseDetailPage);
document.body.classList.toggle("is-privacy-page", isPrivacyPage);
document.querySelector("#app").innerHTML = isPrivacyPage
  ? privacyPage
  : isCaseDetailPage
    ? caseDetailPage
    : isCasesPage
      ? casesPage
      : homePage;

const markDecodedImageReady = (image) => {
  if (!image) return;
  const show = () => requestAnimationFrame(() => image.classList.add("is-media-ready"));
  const decode = () => (typeof image.decode === "function" ? image.decode().catch(() => {}) : Promise.resolve()).then(show);
  if (image.complete && image.naturalWidth > 0) decode();
  else image.addEventListener("load", decode, { once: true });
};
markDecodedImageReady(document.querySelector(".case-detail-art>img"));
if (isCasesPage) document.title = "成功案例｜fifty-five";
if (isCaseDetailPage) document.title = `${detailCurrentStudy.title}｜fifty-five`;
if (isPrivacyPage) document.title = "隐私政策｜fifty-five";

// 移动端折叠菜单：保留“联系我们”在顶栏，语言切换放入展开导航。
document.querySelectorAll(".nav").forEach((navElement) => {
  const actions = navElement.querySelector(".nav-actions");
  if (!actions) return;
  const menuButton = document.createElement("button");
  menuButton.className = "mobile-menu-toggle";
  menuButton.type = "button";
  menuButton.setAttribute("aria-label", "展开导航");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.innerHTML = "<i></i><i></i><i></i>";
  actions.append(menuButton);
  const menu = document.createElement("div");
  menu.className = "mobile-menu";
  menu.setAttribute("aria-hidden", "true");
  menu.innerHTML =
    '<a href="/">首页</a><a href="/#services">我们的服务</a><a href="/cases">成功案例</a><a class="article-trigger" href="#articles">文章</a><a href="/privacy">隐私政策</a><a class="mobile-menu-lang" href="https://www.fifty-five.com/" target="_blank" rel="noopener noreferrer" aria-label="在新页面访问 fifty-five 英文官网">EN</a>';
  navElement.append(menu);
  const closeMenu = () => {
    navElement.classList.remove("menu-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "展开导航");
    menu.setAttribute("aria-hidden", "true");
  };
  menuButton.addEventListener("click", () => {
    const open = !navElement.classList.contains("menu-open");
    navElement.classList.toggle("menu-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "关闭导航" : "展开导航");
    menu.setAttribute("aria-hidden", String(!open));
  });
  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
});

// 小标题使用逐字符色阶，避免部分浏览器不支持 background-clip:text。
document.querySelectorAll(".section-title small").forEach((label) => {
  const text = label.textContent;
  const chars = [...text];
  label.setAttribute("aria-label", text);
  label.innerHTML = chars
    .map((char, index) => {
      const ratio = chars.length > 1 ? index / (chars.length - 1) : 1;
      const start = [255, 232, 174];
      const end = [255, 179, 2];
      const color = start.map((value, channel) => Math.round(value + (end[channel] - value) * ratio));
      return `<span aria-hidden="true" style="color:rgb(${color.join(",")})">${char === " " ? "&nbsp;" : char}</span>`;
    })
    .join("");
});

// 轻量浮现：首屏按顺序进入，其余内容进入视口时渐显。
const heroEntrances = [
  document.querySelector(".hero-art"),
  document.querySelector(".nav"),
  document.querySelector(".hero h1"),
  document.querySelector(".hero-copy .button"),
  document.querySelector(".member-badge"),
].filter(Boolean);
heroEntrances.forEach((element, index) => {
  element.classList.add("hero-enter");
  element.style.setProperty("--enter-delay", `${index * 60}ms`);
});
requestAnimationFrame(() =>
  requestAnimationFrame(() => heroEntrances.forEach((element) => element.classList.add("is-visible"))),
);

const revealGroups = [
  ".section-title",
  ".why-card",
  ".brand-grid > *",
  ".client-grid > div",
  ".service-tabs",
  ".partner-marquee",
  ".case-track article",
  ".case-progress",
  ".contact-grid > div",
  ".contact-grid > form",
  ".footer-grid > div",
  ".cases-page-intro > p",
  ".cases-feature",
  ".cases-filter",
  ".cases-list-card",
  ".case-detail-summary > *",
  ".case-detail-anchor",
  ".case-detail-section",
  ".case-detail-stats article",
];
const revealElements = [...document.querySelectorAll(revealGroups.join(","))];
revealElements.forEach((element, index) => {
  element.classList.add("reveal");
  element.style.setProperty("--reveal-delay", `${(index % 7) * 30}ms`);
});
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
  );
  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

// 仅处理滚轮阻尼；页面内容本身保持静态。
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

// Keep the reference cube motion confined to the right-hand media frame.
const brandMotionStage = document.querySelector(".brand-motion");
const brandMotionContainer = brandMotionStage?.querySelector(".brand-motion-lottie");
if (brandMotionStage && brandMotionContainer && !reduced) {
  const brandMotion = lottie.loadAnimation({
    container: brandMotionContainer,
    renderer: "svg",
    loop: true,
    autoplay: false,
    path: `${A}brandtech-motion.json`,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  });
  brandMotion.addEventListener("DOMLoaded", () => brandMotionStage.classList.add("is-ready"));
  if ("IntersectionObserver" in window) {
    const brandMotionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => (entry.isIntersecting ? brandMotion.play() : brandMotion.pause()));
      },
      { threshold: 0.18 },
    );
    brandMotionObserver.observe(brandMotionStage);
  } else {
    brandMotion.play();
  }
}

const serviceCards = [...document.querySelectorAll(".service-card")];
const serviceLinks = [...document.querySelectorAll(".service-tabs a")];
document.documentElement.classList.add("service-motion-ready");
if ("IntersectionObserver" in window && !reduced) {
  const serviceTextObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("service-text-visible");
        serviceTextObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.22, rootMargin: "0px 0px -8% 0px" },
  );
  serviceCards.forEach((card) => serviceTextObserver.observe(card));
} else {
  serviceCards.forEach((card) => card.classList.add("service-text-visible"));
}
let serviceSyncFrame = 0;
const centerServiceLink = (link) => {
  const tabs = link.closest(".service-tabs");
  if (!tabs || innerWidth > 768) return;
  const links = [...tabs.querySelectorAll("a")];
  const left = link === links.at(-1) ? tabs.scrollWidth : link.offsetLeft - (tabs.clientWidth - link.offsetWidth) / 2;
  tabs.scrollTo({ left: Math.max(0, left), behavior: "auto" });
};
const syncServiceAnchor = () => {
  const activationLine = Math.min(220, innerHeight * 0.25);
  let activeIndex = 0;
  serviceCards.forEach((card, index) => {
    if (card.getBoundingClientRect().top <= activationLine) activeIndex = index;
  });
  serviceLinks.forEach((link, index) => {
    const active = index === activeIndex;
    link.classList.toggle("on", active);
    if (active) {
      link.setAttribute("aria-current", "true");
      centerServiceLink(link);
    } else link.removeAttribute("aria-current");
  });
  serviceSyncFrame = 0;
};
serviceLinks.forEach((link) =>
  link.addEventListener("click", (event) => {
    const card = document.querySelector(link.getAttribute("href"));
    if (!card) return;
    event.preventDefault();
    centerServiceLink(link);
    const top = card.getBoundingClientRect().top + scrollY - 120;
    scrollTo({ top, behavior: reduced ? "auto" : "smooth" });
    history.replaceState(null, "", link.getAttribute("href"));
  }),
);
addEventListener(
  "scroll",
  () => {
    if (!serviceSyncFrame) serviceSyncFrame = requestAnimationFrame(syncServiceAnchor);
  },
  { passive: true },
);
addEventListener("resize", syncServiceAnchor, { passive: true });
syncServiceAnchor();

if (!reduced && innerWidth > 768) {
  let current = scrollY,
    target = scrollY,
    raf = 0;
  const tick = () => {
    current += (target - current) * 0.1;
    if (Math.abs(target - current) < 0.35) current = target;
    scrollTo(0, current);
    raf = current === target ? 0 : requestAnimationFrame(tick);
  };
  addEventListener(
    "wheel",
    (e) => {
      if (e.ctrlKey) return;
      e.preventDefault();
      target = Math.max(0, Math.min(document.documentElement.scrollHeight - innerHeight, target + e.deltaY * 0.78));
      if (!raf) raf = requestAnimationFrame(tick);
    },
    { passive: false },
  );
  addEventListener(
    "scroll",
    () => {
      if (!raf) current = target = scrollY;
    },
    { passive: true },
  );
}

const caseTrack = document.querySelector(".case-track");
const caseProgress = document.querySelector(".case-progress");
const caseProgressThumb = caseProgress?.querySelector("span");
if (caseTrack && caseProgress && caseProgressThumb) {
  const caseSlider = caseTrack.closest(".case-slider");
  let caseOffset = 0;
  let caseMinOffset = 0;
  let caseWheelTarget = 0;
  let caseWheelFrame = 0;
  let casePointerActive = false;
  let caseDragging = false;
  let caseHasMoved = false;
  let caseStartX = 0;
  let caseStartOffset = 0;
  let caseLastX = 0;
  let caseLastTime = 0;
  let caseVelocity = 0;
  let caseInertiaFrame = 0;
  let progressPointerId = null;

  const updateCaseProgress = () => {
    const ratio = caseMinOffset === 0 ? 0 : caseOffset / caseMinOffset;
    const travel = Math.max(0, caseProgress.clientWidth - caseProgressThumb.offsetWidth);
    caseProgressThumb.style.transform = `translate3d(${travel * ratio}px,0,0)`;
    caseProgress.setAttribute("aria-valuenow", String(Math.round(ratio * 100)));
  };
  const clampCaseOffset = (value) => Math.max(caseMinOffset, Math.min(0, value));
  const renderCaseOffset = (value) => {
    caseOffset = clampCaseOffset(value);
    caseTrack.style.transform = `translate3d(${caseOffset}px,0,0)`;
    updateCaseProgress();
  };
  const setCaseOffset = (value) => {
    caseWheelTarget = clampCaseOffset(value);
    renderCaseOffset(caseWheelTarget);
  };
  const stopCaseWheel = () => {
    if (caseWheelFrame) cancelAnimationFrame(caseWheelFrame);
    caseWheelFrame = 0;
    caseWheelTarget = caseOffset;
  };
  const runCaseWheel = () => {
    const distance = caseWheelTarget - caseOffset;
    if (Math.abs(distance) < 0.35) {
      renderCaseOffset(caseWheelTarget);
      caseWheelFrame = 0;
      return;
    }
    renderCaseOffset(caseOffset + distance * 0.18);
    caseWheelFrame = requestAnimationFrame(runCaseWheel);
  };
  const measureCaseSlider = () => {
    const baseLeft = caseTrack.getBoundingClientRect().left - caseOffset;
    const visibleWidth = Math.max(1, innerWidth - baseLeft);
    caseMinOffset = Math.min(0, visibleWidth - caseTrack.scrollWidth);
    setCaseOffset(caseOffset);
  };
  const stopCaseInertia = () => {
    if (caseInertiaFrame) cancelAnimationFrame(caseInertiaFrame);
    caseInertiaFrame = 0;
  };
  const setCaseProgressRatio = (value) => {
    const ratio = Math.max(0, Math.min(1, value));
    setCaseOffset(caseMinOffset * ratio);
  };
  const setCaseProgressFromPointer = (event) => {
    const bounds = caseProgress.getBoundingClientRect();
    const thumbWidth = caseProgressThumb.offsetWidth;
    const travel = Math.max(1, bounds.width - thumbWidth);
    setCaseProgressRatio((event.clientX - bounds.left - thumbWidth / 2) / travel);
  };
  const runCaseInertia = () => {
    caseVelocity *= 0.9;
    if (Math.abs(caseVelocity) < 0.18) {
      caseInertiaFrame = 0;
      return;
    }
    const previous = caseOffset;
    setCaseOffset(caseOffset + caseVelocity);
    if (caseOffset === previous) {
      caseInertiaFrame = 0;
      return;
    }
    caseInertiaFrame = requestAnimationFrame(runCaseInertia);
  };

  caseTrack.addEventListener("pointerdown", (event) => {
    if (!event.isPrimary || event.button !== 0) return;
    stopCaseWheel();
    stopCaseInertia();
    casePointerActive = true;
    caseDragging = false;
    caseHasMoved = false;
    caseStartX = caseLastX = event.clientX;
    caseStartOffset = caseOffset;
    caseLastTime = event.timeStamp;
    caseVelocity = 0;
  });
  caseTrack.addEventListener("pointermove", (event) => {
    if (!casePointerActive) return;
    const distance = event.clientX - caseStartX;
    if (!caseDragging) {
      if (Math.abs(distance) < 7) return;
      caseDragging = true;
      caseHasMoved = true;
      caseTrack.classList.add("is-dragging");
      caseTrack.setPointerCapture(event.pointerId);
    }
    const now = event.timeStamp;
    const elapsed = Math.max(8, now - caseLastTime);
    caseVelocity = Math.max(-24, Math.min(24, ((event.clientX - caseLastX) / elapsed) * 16.667));
    caseLastX = event.clientX;
    caseLastTime = now;
    setCaseOffset(caseStartOffset + distance);
  });
  const finishCaseDrag = (event) => {
    if (!casePointerActive) return;
    const wasDragging = caseDragging;
    casePointerActive = false;
    caseDragging = false;
    caseTrack.classList.remove("is-dragging");
    if (caseTrack.hasPointerCapture(event.pointerId)) caseTrack.releasePointerCapture(event.pointerId);
    if (wasDragging && !reduced && Math.abs(caseVelocity) >= 0.18)
      caseInertiaFrame = requestAnimationFrame(runCaseInertia);
  };
  addEventListener("pointerup", finishCaseDrag);
  addEventListener("pointercancel", finishCaseDrag);
  caseTrack.addEventListener(
    "click",
    (event) => {
      if (!caseHasMoved) return;
      event.preventDefault();
      event.stopPropagation();
      caseHasMoved = false;
    },
    true,
  );
  caseTrack.addEventListener("dragstart", (event) => event.preventDefault());
  caseSlider?.addEventListener(
    "wheel",
    (event) => {
      if (event.ctrlKey || innerWidth <= 768 || caseMinOffset === 0) return;
      const rawDelta = Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
      if (Math.abs(rawDelta) < 0.1) return;
      const modeScale = event.deltaMode === WheelEvent.DOM_DELTA_LINE ? 20 : event.deltaMode === WheelEvent.DOM_DELTA_PAGE ? innerWidth : 1;
      const delta = rawDelta * modeScale;
      const nextTarget = clampCaseOffset(caseWheelTarget - delta * 1.05);
      const isStillMoving = Math.abs(caseWheelTarget - caseOffset) >= 0.35;
      if (nextTarget === caseWheelTarget && !isStillMoving) return;
      stopCaseInertia();
      caseWheelTarget = nextTarget;
      if (!caseWheelFrame) caseWheelFrame = requestAnimationFrame(runCaseWheel);
    },
    { passive: true },
  );
  caseProgress.addEventListener("pointerdown", (event) => {
    if (!event.isPrimary || event.button !== 0) return;
    event.preventDefault();
    stopCaseWheel();
    stopCaseInertia();
    progressPointerId = event.pointerId;
    caseProgress.classList.add("is-dragging");
    caseProgress.setPointerCapture(event.pointerId);
    setCaseProgressFromPointer(event);
  });
  caseProgress.addEventListener("pointermove", (event) => {
    if (event.pointerId !== progressPointerId) return;
    event.preventDefault();
    setCaseProgressFromPointer(event);
  });
  const finishProgressDrag = (event) => {
    if (event.pointerId !== progressPointerId) return;
    progressPointerId = null;
    caseProgress.classList.remove("is-dragging");
    if (caseProgress.hasPointerCapture(event.pointerId)) caseProgress.releasePointerCapture(event.pointerId);
  };
  caseProgress.addEventListener("pointerup", finishProgressDrag);
  caseProgress.addEventListener("pointercancel", finishProgressDrag);
  caseProgress.addEventListener("keydown", (event) => {
    const currentRatio = caseMinOffset === 0 ? 0 : caseOffset / caseMinOffset;
    const steps = { ArrowLeft: -0.08, ArrowRight: 0.08, PageUp: -0.2, PageDown: 0.2 };
    if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      stopCaseInertia();
      setCaseProgressRatio(event.key === "Home" ? 0 : 1);
      return;
    }
    if (!(event.key in steps)) return;
    event.preventDefault();
    stopCaseInertia();
    setCaseProgressRatio(currentRatio + steps[event.key]);
  });
  addEventListener("resize", measureCaseSlider, { passive: true });
  requestAnimationFrame(measureCaseSlider);
}

const contactDrawerLayer = document.querySelector(".contact-drawer-layer");
const contactDrawer = document.querySelector(".contact-drawer");
const contactDrawerClose = document.querySelector(".contact-drawer-close");
const contactDrawerBackdrop = document.querySelector(".contact-drawer-backdrop");
const contactDrawerTriggers = [
  ...document.querySelectorAll(".nav-actions .button,.hero-copy .button,.footer-contact-trigger"),
];
const contactSelect = document.querySelector(".contact-drawer-select");
const contactSelectTrigger = document.querySelector(".contact-drawer-select-trigger");
const contactSelectValue = contactSelectTrigger?.querySelector("span");
const contactSelectInput = contactSelect?.querySelector('input[name="topic"]');
const contactSelectOptions = [...(contactSelect?.querySelectorAll('[role="option"]') || [])];
let contactDrawerLastFocus = null;
const closeContactSelect = (restoreFocus = false) => {
  if (!contactSelect?.classList.contains("is-open")) return;
  contactSelect.classList.remove("is-open");
  contactSelectTrigger?.setAttribute("aria-expanded", "false");
  if (restoreFocus) contactSelectTrigger?.focus();
};
const openContactSelect = () => {
  if (!contactSelect || !contactSelectTrigger) return;
  contactSelect.classList.add("is-open");
  contactSelectTrigger.setAttribute("aria-expanded", "true");
  const selected = contactSelectOptions.find((option) => option.getAttribute("aria-selected") === "true");
  requestAnimationFrame(() => (selected || contactSelectOptions[0])?.focus());
};
contactSelectTrigger?.addEventListener("click", () =>
  contactSelect?.classList.contains("is-open") ? closeContactSelect() : openContactSelect(),
);
contactSelectOptions.forEach((option) =>
  option.addEventListener("click", () => {
    contactSelectOptions.forEach((item) => item.setAttribute("aria-selected", String(item === option)));
    if (contactSelectValue) contactSelectValue.textContent = option.dataset.value || option.textContent;
    if (contactSelectInput) contactSelectInput.value = option.dataset.value || option.textContent || "";
    contactSelectTrigger?.classList.add("has-value");
    closeContactSelect(true);
  }),
);
contactSelect?.addEventListener("keydown", (event) => {
  const activeIndex = contactSelectOptions.indexOf(document.activeElement);
  if (event.key === "Escape") {
    event.preventDefault();
    event.stopPropagation();
    closeContactSelect(true);
    return;
  }
  if (!contactSelect?.classList.contains("is-open") && ["ArrowDown", "Enter", " "].includes(event.key)) {
    event.preventDefault();
    openContactSelect();
    return;
  }
  if (activeIndex < 0) return;
  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    event.preventDefault();
    const direction = event.key === "ArrowDown" ? 1 : -1;
    contactSelectOptions[
      (activeIndex + direction + contactSelectOptions.length) % contactSelectOptions.length
    ]?.focus();
  }
  if (event.key === "Home" || event.key === "End") {
    event.preventDefault();
    contactSelectOptions[event.key === "Home" ? 0 : contactSelectOptions.length - 1]?.focus();
  }
});
const openContactDrawer = () => {
  if (!contactDrawerLayer || contactDrawerLayer.classList.contains("is-open")) return;
  contactDrawerLastFocus = document.activeElement;
  contactDrawerLayer.classList.add("is-open");
  contactDrawerLayer.setAttribute("aria-hidden", "false");
  document.documentElement.classList.add("drawer-open");
  document.body.classList.add("drawer-open");
  requestAnimationFrame(() => contactDrawerClose?.focus());
};
const closeContactDrawer = () => {
  if (!contactDrawerLayer || !contactDrawerLayer.classList.contains("is-open")) return;
  contactDrawerLayer.classList.remove("is-open");
  closeContactSelect();
  contactDrawerLayer.setAttribute("aria-hidden", "true");
  document.documentElement.classList.remove("drawer-open");
  document.body.classList.remove("drawer-open");
  if (contactDrawerLastFocus instanceof HTMLElement) contactDrawerLastFocus.focus();
};
contactDrawerTriggers.forEach((trigger) => {
  trigger.setAttribute("aria-haspopup", "dialog");
  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    openContactDrawer();
  });
});
contactDrawerClose?.addEventListener("click", closeContactDrawer);
contactDrawerBackdrop?.addEventListener("click", closeContactDrawer);
contactDrawer?.addEventListener("keydown", (event) => {
  if (event.key !== "Tab") return;
  const focusable = [
    ...contactDrawer.querySelectorAll(
      'button:not([disabled]):not([tabindex="-1"]),input:not([disabled]),textarea:not([disabled])',
    ),
  ];
  if (!focusable.length) return;
  const first = focusable[0],
    last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});
document.querySelector(".contact-drawer-form")?.addEventListener("submit", (event) => event.preventDefault());
addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeContactDrawer();
});

const cookieNotice = document.querySelector(".cookie-notice");
const cookieConsentKey = "fifty-five-cookie-consent";
let savedCookieChoice = "";
try {
  savedCookieChoice = localStorage.getItem(cookieConsentKey) || "";
} catch {}
const dismissCookie = (choice) => {
  if (!cookieNotice || cookieNotice.classList.contains("is-hidden")) return;
  cookieNotice.dataset.choice = choice;
  try {
    localStorage.setItem(cookieConsentKey, choice);
  } catch {}
  cookieNotice.classList.remove("is-visible");
  cookieNotice.classList.add("is-hidden");
  cookieNotice.setAttribute("aria-hidden", "true");
  setTimeout(() => {
    cookieNotice.hidden = true;
  }, 560);
};
cookieNotice?.querySelector(".cookie-necessary")?.addEventListener("click", () => dismissCookie("necessary"));
cookieNotice?.querySelector(".cookie-accept")?.addEventListener("click", () => dismissCookie("all"));
if (cookieNotice && savedCookieChoice) {
  cookieNotice.hidden = true;
  cookieNotice.dataset.choice = savedCookieChoice;
  cookieNotice.setAttribute("aria-hidden", "true");
} else {
  requestAnimationFrame(() => requestAnimationFrame(() => cookieNotice?.classList.add("is-visible")));
}

const articleModalLayer = document.querySelector(".article-modal-layer");
const articleModal = document.querySelector(".article-modal");
const articleModalClose = document.querySelector(".article-modal-close");
const articleModalBackdrop = document.querySelector(".article-modal-backdrop");
const articleModalTriggers = [...document.querySelectorAll(".nav-links a:nth-child(3),.article-trigger")];
const articleModalTrigger = articleModalTriggers[0];
let articleModalLastFocus = null;
const openArticleModal = () => {
  if (!articleModalLayer || articleModalLayer.classList.contains("is-open")) return;
  articleModalLastFocus = document.activeElement;
  articleModalLayer.classList.add("is-open");
  articleModalLayer.setAttribute("aria-hidden", "false");
  articleModalTrigger?.setAttribute("aria-expanded", "true");
  document.documentElement.classList.add("modal-open");
  document.body.classList.add("modal-open");
  requestAnimationFrame(() => articleModalClose?.focus());
};
const closeArticleModal = () => {
  if (!articleModalLayer?.classList.contains("is-open")) return;
  articleModalLayer.classList.remove("is-open");
  articleModalLayer.setAttribute("aria-hidden", "true");
  articleModalTrigger?.setAttribute("aria-expanded", "false");
  document.documentElement.classList.remove("modal-open");
  document.body.classList.remove("modal-open");
  if (articleModalLastFocus instanceof HTMLElement) articleModalLastFocus.focus();
};
articleModalTriggers.forEach((trigger) => {
  trigger.setAttribute("aria-haspopup", "dialog");
  trigger.setAttribute("aria-expanded", "false");
  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    openArticleModal();
  });
});
articleModalClose?.addEventListener("click", closeArticleModal);
articleModalBackdrop?.addEventListener("click", closeArticleModal);
articleModal?.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.stopPropagation();
    closeArticleModal();
    return;
  }
  if (event.key !== "Tab") return;
  const focusable = [...articleModal.querySelectorAll("button:not([disabled]),a[href]")];
  if (!focusable.length) return;
  const first = focusable[0],
    last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});
addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeArticleModal();
});

const nav = document.querySelector(".nav");
const heroVideo = document.querySelector(".hero-video");
if (heroVideo) {
  heroVideo.muted = true;
  const showHeroVideo = () => requestAnimationFrame(() => heroVideo.classList.add("is-media-ready"));
  if (heroVideo.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) showHeroVideo();
  else heroVideo.addEventListener("loadeddata", showHeroVideo, { once: true });
  heroVideo.play().catch(() => {});
}
let previousY = scrollY;
let navTicking = false;
addEventListener(
  "scroll",
  () => {
    if (navTicking) return;
    navTicking = true;
    requestAnimationFrame(() => {
      const y = scrollY;
      nav?.classList.toggle("is-scrolled", y > 24);
      if (y < 70 || y < previousY - 5) nav.classList.remove("is-hidden");
      else if (y > previousY + 5) nav.classList.add("is-hidden");
      previousY = y;
      navTicking = false;
    });
  },
  { passive: true },
);

const detailAnchorLinks = [...document.querySelectorAll(".case-detail-anchor a")];
const detailSections = [...document.querySelectorAll(".case-detail-section")];
const setDetailAnchor = (id) =>
  detailAnchorLinks.forEach((link) => {
    const active = link.dataset.anchor === id;
    link.classList.toggle("is-active", active);
    if (active) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
detailAnchorLinks.forEach((link) => link.addEventListener("click", () => setDetailAnchor(link.dataset.anchor)));
if (detailSections.length && "IntersectionObserver" in window) {
  const detailAnchorObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setDetailAnchor(visible.target.id);
    },
    { rootMargin: "-18% 0px -58% 0px", threshold: [0, 0.15, 0.35, 0.6] },
  );
  detailSections.forEach((section) => detailAnchorObserver.observe(section));
}

const casesFilterButtons = [...document.querySelectorAll(".cases-filter button")];
const casesListGrid = document.querySelector(".cases-list-grid");
let activeCasesFilter = "all";
let casesFilterTimer = 0;
casesFilterButtons.forEach((button) =>
  button.addEventListener("click", () => {
    const nextFilter = button.dataset.filter;
    if (!casesListGrid || !nextFilter || nextFilter === activeCasesFilter) return;
    if (innerWidth <= 768) {
      const filterRail = button.closest(".cases-filter");
      const left = button.offsetLeft - (filterRail.clientWidth - button.offsetWidth) / 2;
      filterRail.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
    }
    activeCasesFilter = nextFilter;
    casesFilterButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    clearTimeout(casesFilterTimer);
    casesListGrid.classList.add("is-switching");
    casesFilterTimer = setTimeout(
      () => {
        casesListGrid.innerHTML = casesForIndustry(nextFilter).map(casesGridCard).join("");
        casesListGrid.dataset.filter = nextFilter;
        requestAnimationFrame(() => requestAnimationFrame(() => casesListGrid.classList.remove("is-switching")));
      },
      reduced ? 0 : 180,
    );
  }),
);
