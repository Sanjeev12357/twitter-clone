import {useQuery} from "@tanstack/react-query";
import {graphqlClient} from "../clients/api";
import {getCurrentUserQuery} from "../graphql/query/user";
export const useCurrentUser=()=>{
    const query=useQuery({
        queryKey:['curent-user'],
        queryFn:()=>graphqlClient.request(getCurrentUserQuery),

    })

    return { ...query,user:query.data?.getCurrentUser}

}