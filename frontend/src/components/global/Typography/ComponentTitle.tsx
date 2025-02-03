export default function ComponentTitle({ title }: { title: string }) {
    return (
        <h2 className="text-center text-2xl sm:text-3xl py-1.5 sm:py-2.5">{title}</h2>
    )
}