import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  // 新增：滚动状态监测，实现导航栏滚动收缩效果
  const [isScroll, setIsScroll] = useState(false);
  // 新增：获取当前路由，实现激活状态高亮
  const location = useLocation();
  const currentPath = location.pathname;

  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // 动态添加滚动类名
    <header className={`apple-header ${isScroll ? 'scroll' : ''}`}>
      <div className="container">
        {/* 苹果风格 Logo/品牌名 */}
        <div className="header-logo">
          <Link to="/">AI Education</Link>
        </div>
        {/* 导航链接（高级感优化 + 激活状态） */}
        <nav className="header-nav">
          <Link to="/" className={currentPath === '/' ? 'active' : ''}>Home</Link>
          <Link to="/about" className={currentPath === '/about' ? 'active' : ''}>About us</Link>
          <Link to="/team" className={currentPath === '/team' ? 'active' : ''}>Team</Link>
          <Link to="/contact" className={currentPath === '/contact' ? 'active' : ''}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;