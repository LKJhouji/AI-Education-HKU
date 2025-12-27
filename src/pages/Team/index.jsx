import { useEffect, useState } from 'react';
import './Team.css';

// 团队成员数据
const teamMembers = [
  {
    name: "Henry",
    role: "创始人 / 前端架构师",
    desc: "10年React开发经验，曾任职于一线互联网公司，专注前端性能优化与组件化设计",
    avatar: "/avatars/Henry.jpg"
  },
  {
    name: "李丽",
    role: "UI/UX 设计师",
    desc: "8年设计经验，擅长极简风格设计，深度研究苹果设计体系，注重用户体验细节",
    avatar: "/avatars/girl.jpeg"
  },
  {
    name: "Apylee",
    role: "后端开发负责人",
    desc: "12年后端开发经验，精通Node.js/Java，专注高可用、高性能架构设计",
    avatar: "/avatars/apylee.png"
  },
  {
    name: "陈雪",
    role: "产品经理",
    desc: "7年产品经验，擅长需求分析与产品规划，衔接设计与开发，保障项目落地",
    avatar: "/avatars/girl.jpeg"
  },
  {
    name: "赵阳",
    role: "测试工程师",
    desc: "6年测试经验，专注自动化测试与质量保障，确保产品稳定上线",
    avatar: "/avatars/boy.jpeg"
  },
  {
    name: "孙杰",
    role: "运营顾问",
    desc: "9年市场运营经验，帮助客户梳理产品定位，提升产品市场竞争力",
    avatar: "/avatars/boy.jpeg"
  }
];

const Team = () => {
  // 定义各模块的载入状态
  const [headerLoaded, setHeaderLoaded] = useState(false);
  const [cardsLoaded, setCardsLoaded] = useState([]); // 存储每个卡片的载入状态
  const [ideaLoaded, setIdeaLoaded] = useState(false);

  useEffect(() => {
    // 1. 页面头部先载入（延迟100ms，模拟自然加载）
    const headerTimer = setTimeout(() => {
      setHeaderLoaded(true);
    }, 100);

    // 2. 团队卡片逐个载入（每个间隔150ms，营造递进效果）
    const cardTimers = teamMembers.map((_, index) => {
      return setTimeout(() => {
        setCardsLoaded(prev => [...prev, index]);
      }, 500 + index * 150);
    });

    // 3. 团队理念最后载入（延迟1500ms）
    const ideaTimer = setTimeout(() => {
      setIdeaLoaded(true);
    }, 1500);

    // 清除定时器
    return () => {
      clearTimeout(headerTimer);
      clearTimeout(ideaTimer);
      cardTimers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <div className="home-bg-container">
      <div className="container">
        {/* 页面头部 - 动态载入 */}
        <section className={`team-header ${headerLoaded ? 'loaded' : ''}`}>
          <h1>我们的团队</h1>
          <p>一群热爱产品、追求极致的专业人</p>
          <div className="divider"></div>
        </section>

        {/* 团队成员列表 - 卡片逐个载入 */}
        <section className="team-members">
          <div className="members-grid">
            {teamMembers.map((member, index) => (
              <div
                className={`member-card ${cardsLoaded.includes(index) ? 'loaded' : ''}`}
                key={index}
                style={{ transitionDelay: `${index * 0.15}s` }} // 逐个延迟
              >
                <img src={member.avatar} alt={member.name} className="member-avatar" />
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-desc">{member.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 团队理念 - 动态载入 */}
        <section className={`team-idea ${ideaLoaded ? 'loaded' : ''}`}>
          <h2>团队理念</h2>
          <p>
            我们相信，优秀的产品来自优秀的团队协作。每个人都发挥自己的专业所长，
            相互配合、相互启发，像苹果的研发团队一样，把细节做到极致，最终呈现出超出预期的产品。
          </p>
        </section>
      </div>
    </div>
  );
};

export default Team;