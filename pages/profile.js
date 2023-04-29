// import a from "next/a";
import { getSession } from 'next-auth/react'

export default () => {
    return (
        <section className="container mx-auto text-center">
                <h3 className="text-4xl font-bold">Profile Page</h3>

                <a href={"/"}>Home Page</a>
        </section>
    )
}

export async function getServerSideProps({ req }){
    const session = await getSession({ req })

    if(!session){
        return {
            redirect : {
                destination : "/login",
                premanent: false
            }
        }
    }
    // authorize user return session
    return {
        props: { session }
    }
}
