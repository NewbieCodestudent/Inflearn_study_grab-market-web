import {useParams} from "react-router-dom";
import './index.css';
import axios from "axios";
import { useEffect, useState } from "react";
import {API_URL} from "../config/constants.js"
import dayjs from "dayjs";
import {Button, message} from "antd";

function ProductPage(){
  const {id} = useParams();
  const [product, setProduct] = useState(null);

  // 상품정보 가져오기
  const getProduct = () => {
    axios
      .get(`${API_URL}/products/${id}`)
      .then(function(result){
        console.log(result);
        console.log(result.data);
        console.log(result.data.product);
        setProduct(result.data.product);
      })
      .catch(function(error){
        console.log(error);
      });
  }

  // 상품정보 읽기
  useEffect(function(){
    console.log(id);
    getProduct();
  },[])

  // 읽는 동안 대기 화면
  if(product === null) {
    return <h1>상품 정보를 불러오고 있습니다...</h1>
  }

  //구매 함수
  const onClickPurchase = () => {
    axios.post(`${API_URL}/purchase/${id}`)
    .then((result)=>{
      message.info('구매가 완료되었습니다.');
      getProduct();
    }).catch((error)=>{
      console.error(error);
      message.error(`에러가 발생했습니다. ${error.message}`);
    })
  }

  return (
    <div>
      <div id="image-box">
        <img src={`${API_URL}/${product.imageUrl}`}/>
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png"/>
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}</div>
        <div id="createdAt">{dayjs(product.createdAt).format('YYYY년 MM월 DD일')}</div>
        <Button size="large" type="primary" danger={true} id="purchase-button" onClick={onClickPurchase} disabled={product.soldout === 1}>
          구매하기
        </Button>
        {/* 줄바꿈을 구현해 주는 태그 */}
        <pre id="description">{product.description}</pre>
      </div>
    </div>
  )
}

export default ProductPage;