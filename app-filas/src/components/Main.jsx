export default function Main({children, ...props}){
    return(
        <main className="p-[40px_0px_80px_0px] flex flex-col gap-[80px]">
            {children}
        </main>
    )
}