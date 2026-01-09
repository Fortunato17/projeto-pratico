export default function Main({children, className="" }){
    return(
        <main className={`p-[40px_20px_80px_20px] flex flex-col gap-[80px] flex-grow ${className} container shadow-xl`}>
            {children}
        </main>
    )
}