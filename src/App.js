import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// 直接引入页面组件，不再依赖 router/index.jsx
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="app-container">
      {/* 关键：BrowserRouter 包裹整个应用，提供路由上下文 */}
      <BrowserRouter>
        <Header />
        {/* 路由规则配置 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          {/* 404 页面 */}
          <Route path="*" element={
            <div className="page-wrapper container">
              <h1>404 - 页面未找到</h1>
              <p>你访问的页面不存在，请返回首页</p>
              <a href="/" className="btn-apple">返回首页</a>
            </div>
          } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;