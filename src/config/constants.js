// export const API_URL = 'http://localhost:8090';
// 프로그램 실행 위치에 따른 로컬 주소 변경
export const API_URL = process.env.NODE_ENV === 'production' ? "https://study-grab-market-server.herokuapp.com" : "http://localhost:8090";