// 기능 링크
import 'antd/dist/antd.css';
import {Switch, Route, Link, useHistory} from 'react-router-dom';
import {Button} from "antd";
import {DownloadOutlined} from "@ant-design/icons";
// CSS링크
import './App.css';
// 페이지 링크
import MainPageComponent from './main/index.js';
import UploadPage from './upload';
import ProductPage from './product';


function App() {
  const history = useHistory();
  return (
  <div>
    <div id="header">
      <div id="header-area">
        <Link to={`/`}>
          <img src="/images/icons/logo.png"/>
        </Link>
        <Button
          size = "large"
          onClick = {function(){
            history.push('/upload');
          }}
          icon = {<DownloadOutlined/>}
         >
          상품 업로드
        </Button>
      </div>
    </div>
    <div id="body">
    <Switch>
      <Route exact={true} path={"/"}>
        <MainPageComponent/>
      </Route>
      <Route exact={true} path={"/products/:id"}>
        <ProductPage/>
      </Route>
      <Route exact={true} path={"/upload"}>
        <UploadPage/>
      </Route>
    </Switch>
    </div>
    <div id="footer"></div>
  </div>
  )
}

export default App;
