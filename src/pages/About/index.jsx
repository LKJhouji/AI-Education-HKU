import { useEffect, useState } from 'react';
import './About.css';

const About = () => {
  // 分层控制动画加载状态，实现丝滑的分步呈现
  const [headerLoaded, setHeaderLoaded] = useState(false);
  const [introLoaded, setIntroLoaded] = useState(false);
  const [valuesLoaded, setValuesLoaded] = useState(false);
  const [valueItemsLoaded, setValueItemsLoaded] = useState(false);

  // 设计自然的动画节奏：头部 → 团队故事 → 价值观容器 → 价值观项逐个出现
  useEffect(() => {
    // 页面加载后0.2s显示头部（基础层）
    const headerTimer = setTimeout(() => setHeaderLoaded(true), 200);
    // 头部显示后0.6s显示团队故事（核心层）
    const introTimer = setTimeout(() => setIntroLoaded(true), 400);
    // 故事显示后0.5s显示价值观容器（补充层）
    const valuesTimer = setTimeout(() => setValuesLoaded(true), 600);
    // 容器显示后0.3s显示价值观项（细节层）
    const valueItemsTimer = setTimeout(() => setValueItemsLoaded(true), 1000);

    // 清除定时器避免内存泄漏
    return () => {
      clearTimeout(headerTimer);
      clearTimeout(introTimer);
      clearTimeout(valuesTimer);
      clearTimeout(valueItemsTimer);
    };
  }, []);

  return (

    <div className="home-bg-container">
      <div className="container">
        {/* 页面头部 - 动态加载 */}
        <section className={`about-header ${headerLoaded ? 'about-header-loaded' : ''}`}>
          <h1>关于我们</h1>
          <p>HKU AI Education | 始于热爱，成于同行</p>
          <div className="divider"></div>
        </section>

        {/* 团队介绍 - 动态加载 */}
        <section className={`about-intro ${introLoaded ? 'about-intro-loaded' : ''}`}>
          <h2>我们的故事</h2>
          <p>
            缘起港大，因梦相聚。2025年，8位扎根香港大学的追光者，因对AI重塑教育的共同信仰走到一起。
            我们来自计算机、教育学、设计等不同专业，却怀揣着同一个初心：让人工智能走出实验室，
            成为每个学习者手中的「个性化导师」，让优质教育资源突破边界、触手可及。
          </p>
          <p>
            作为港大校内成长的初创团队，我们深植学术土壤，又兼具敢想敢为的创业热情——
            从宿舍里的第一版原型，到面向港大师生的内测产品，我们始终以「教育为本，AI为辅」为准则，
            拒绝技术的炫技式堆砌，只做真正能解决学习痛点的产品。
          </p>
          <p>
            这不是一场孤军奋战的旅程，而是8份热爱的同频共振。我们相信，小团队也能创造大价值，
            而源自HKU的学术基因与创新精神，终将让我们的AI教育理念，照亮更多学习者的成长之路。
          </p>
        </section>

        {/* 核心价值观 - 动态加载 */}
        <section className={`about-values ${valuesLoaded ? 'about-values-loaded' : ''}`}>
          <h2>核心价值观</h2>
          <div className="values-list">
            {/* 价值观项逐个延迟加载，营造层次感 */}
            <div className={`value-item ${valueItemsLoaded ? 'value-item-loaded' : ''}`} style={{ transitionDelay: '0ms' }}>
              <h3>学术为本</h3>
              <p>扎根港大科研体系，让AI教育落地有理论支撑</p>
            </div>
            <div className={`value-item ${valueItemsLoaded ? 'value-item-loaded' : ''}`} style={{ transitionDelay: '200ms' }}>
              <h3>用户中心</h3>
              <p>从学习者需求出发，拒绝脱离实际的技术空想</p>
            </div>
            <div className={`value-item ${valueItemsLoaded ? 'value-item-loaded' : ''}`} style={{ transitionDelay: '400ms' }}>
              <h3>共创成长</h3>
              <p>8人同频，与用户同行，在迭代中实现双向成长</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;