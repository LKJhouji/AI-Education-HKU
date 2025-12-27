import { useEffect, useState } from 'react';
import './Contact.css';

// 核心联系信息
const contactInfo = {
  name: "Henry",
  role: "创始人 / 前端架构师",
  email: "henrytojob@gmail.com",
  avatar: "/avatars/Henry.jpg", // 和团队页面统一的头像路径
  desc: "欢迎随时联系我，关于产品咨询、合作洽谈、技术交流，我都会尽快回复。"
};

const Contact = () => {
  // 动态载入状态
  const [headerLoaded, setHeaderLoaded] = useState(false);
  const [contactLoaded, setContactLoaded] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  // 复制邮箱功能
  const copyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000); // 2秒后隐藏提示
      })
      .catch(err => console.error('复制失败:', err));
  };

  useEffect(() => {
    // 分步载入动画
    const headerTimer = setTimeout(() => setHeaderLoaded(true), 100);
    const contactTimer = setTimeout(() => setContactLoaded(true), 600);

    return () => {
      clearTimeout(headerTimer);
      clearTimeout(contactTimer);
    };
  }, []);

  return (
      <div className="home-bg-container">
        <div className="page-wrapper">
          <div className="container">
            {/* 页面头部 - 动态载入 */}
            <section className={`contact-header ${headerLoaded ? 'loaded' : ''}`}>
              <h1>联系我们</h1>
              <p>随时为你解答疑问，期待与你合作</p>
              <div className="divider"></div>
            </section>

            {/* 核心联系人区域 - 动态载入 */}
            <section className={`contact-main ${contactLoaded ? 'loaded' : ''}`}>
              <div className="contact-card">
                {/* 头像区域 */}
                <div className="contact-avatar-wrapper">
                  <img
                    src={contactInfo.avatar}
                    alt={contactInfo.name}
                    className="contact-avatar"
                  />
                  <div className="contact-role">{contactInfo.role}</div>
                </div>

                {/* 联系信息 */}
                <div className="contact-details">
                  <h2>{contactInfo.name}</h2>
                  <p className="contact-desc">{contactInfo.desc}</p>

                  {/* 邮箱区域（可复制） */}
                  <div className="email-wrapper" onClick={copyEmail}>
                    <span className="email-icon">✉️</span>
                    <span className="email-text">{contactInfo.email}</span>
                    <span className={`copy-tip ${copySuccess ? 'show' : ''}`}>
                      {copySuccess ? '复制成功 ✔' : '点击复制'}
                    </span>
                  </div>
                </div>
              </div>

              {/* 辅助提示区域 */}
              <div className="contact-tip">
                <p>工作时间：周一至周五 9:00-18:00（法定节假日除外）</p>
                <p>一般情况下，我们会在1-2个工作日内回复你的邮件</p>
              </div>
            </section>
          </div>
        </div>
      </div>
  );
};

export default Contact;