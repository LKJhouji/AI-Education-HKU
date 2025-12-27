import { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [featuresLoaded, setFeaturesLoaded] = useState(false);
  const [featureItemsLoaded, setFeatureItemsLoaded] = useState(false);

  useEffect(() => {
    const heroTimer = setTimeout(() => setHeroLoaded(true), 200);
    const featuresTimer = setTimeout(() => setFeaturesLoaded(true), 400);
    const itemsTimer = setTimeout(() => setFeatureItemsLoaded(true), 1000);

    return () => {
      clearTimeout(heroTimer);
      clearTimeout(featuresTimer);
      clearTimeout(itemsTimer);
    };
  }, []);

  return (
      <div className="home-bg-container">
        <div className="page-wrapper">
          <div className="container">
            <section className={`home-hero ${heroLoaded ? 'home-hero-loaded' : ''}`}>
              <h1>智启教育 · 数智未来</h1>
              <p style={{ maxWidth: '800px', margin: '0 auto 40px' }}>
                AI Education 团队 | 以人工智能重构教育体验，让学习更高效、更个性化
              </p>
              <button className="btn-apple">探索 AI 教育解决方案</button>
            </section>

            <section className={`home-features ${featuresLoaded ? 'home-features-loaded' : ''}`}>
              <h2>我们的核心理念</h2>
              <div className="features-list">
                <div className={`feature-item ${featureItemsLoaded ? 'feature-item-loaded' : ''}`} style={{ transitionDelay: '0ms' }}>
                  <h3>AI 驱动教学</h3>
                  <p>基于大模型与自适应学习算法，为每位学习者定制专属路径</p>
                </div>
                <div className={`feature-item ${featureItemsLoaded ? 'feature-item-loaded' : ''}`} style={{ transitionDelay: '200ms' }}>
                  <h3>极简交互体验</h3>
                  <p>遵循苹果设计范式，让复杂的 AI 教育功能，拥有极致简洁的操作体验</p>
                </div>
                <div className={`feature-item ${featureItemsLoaded ? 'feature-item-loaded' : ''}`} style={{ transitionDelay: '400ms' }}>
                  <h3>团队共创价值</h3>
                  <p>技术、教育、设计多方协同，打造有温度的 AI 教育产品</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
  );
};

export default Home;