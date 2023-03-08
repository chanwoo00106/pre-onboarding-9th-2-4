import API from '@/lib/api'
import Product from '@/types/Product'

const getProducts = async () => {
  try {
    const { data } = await API.get<Product[]>(
      '/secure.notion-static.com/f1be87a4-38e1-4c1e-a527-bd4775812374/mock_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230308T111952Z&X-Amz-Expires=86400&X-Amz-Signature=02653a322ddaf764526a3013fe9da2617db3d2a108cd2de64e0947c9658ec010&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22mock_data.json%22&x-id=GetObject'
    )

    return data
  } catch (e) {
    alert('알 수 없는 에러가 발생했습니다')
  }
}
export default getProducts
