import { INewUser } from '@/types'
import {
    useQuery, 
    useQueryClient,
    useInfiniteQuery,
    useMutation
} from '@tanstack/react-query'
import { createUserAccount } from '../appwrite/api'


export const useCreateUserAccount = () => {
    return useMutation({
        mutationFn : (user: INewUser) => createUserAccount(user)
    })
}

export const useSignInAccount = () => {
    return useMutation({
        mutationFn : (
            user : {
                email: string,
                password: string
            }
        ) => useSignInAccount(user)
    })
}





