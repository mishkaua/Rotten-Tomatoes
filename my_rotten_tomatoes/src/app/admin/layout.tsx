import NavAdmin from "@/components/admin/navAdmin"

export default function AdminLayout({children}:{children:React.ReactNode}){
    return(
        <div className="flex bg-[#011935] w-full h-[100vh] absolute top-0">
            <NavAdmin />
            <article className="w-full h-[100vh] flex justify-center ">
                <figure className="w-[95%] h-full">
                    {children}
                </figure>
            </article>
            
        </div>
    )
}