import Layout from './layout';
import Header from './header';
import Sider from './sider';
import Content from './content';
import Footer from './footer';

Layout.Header = Header;
Layout.Sider = Sider;
Layout.Content = Content;
Layout.Footer = Footer;

// Layout.install = (Vue)=>{
//     Vue.component(Header.name,header);
// }
// Layout.install = (Vue)=>{
//     Vue.component(Sider.name,sider);
// }
// Layout.install = (Vue)=>{
//     Vue.component(Content.name,content);
// }
// Layout.install = (Vue)=>{
//     Vue.component(Footer.name,footer);
// }

export default Layout; 