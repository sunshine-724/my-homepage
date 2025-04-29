import { useRouter } from "next/navigation";

export default function handlePageTransition(pageNumber: number,router: ReturnType<typeof useRouter>) {
    switch (pageNumber) {
        case 0:
            router.push('/')
            break
        case 1:
            router.push('/portfolio')
            break
        case 2:
            router.push('/introduction')
            break
        case 3:
            router.push('/blog')
            break
        case 4:
            router.push('/inquiry')
            break
        case 5:
            router.push('/notification')
            break
        default:
            alert("存在しないページです")
            console.error("エラーです")
    }
}