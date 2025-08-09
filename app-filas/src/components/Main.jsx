export default function Main({children,className="" }){
    return(
        <main className={`p-[40px_0px_80px_0px] flex flex-col gap-[80px] flex-grow`}>
            {children}
        </main>
    )
}