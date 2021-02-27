import {gql, useQuery} from '@apollo/client';
import {Post} from '../../common/interfaces/post.interface'

const GET_POSTS = gql`
        query GetPosts($options : PageQueryOptions!){ # query 이름은 마음대로 변경이 가능하다.
            posts(options: $options) { # Schema
                data {                 # 임의로 변경 불가능 한 곳
                    id                 # schema에 정의되어 있는 영역들로 구성되어 있다.
                    title              #
                    body               #
                }                      #
            }                          #
        }
`

export const useGetPosts = () : Post[] | undefined => {
    const {data} = useQuery(GET_POSTS,{
        variables:{ options: {paginate:{page:1, limit:10}}}
    });
    return data?.posts?.data;
}