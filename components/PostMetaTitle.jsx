export default function PostMetaTitle({category, date}) {
    return (
        <>
        <div className="flex items-center text-white/80 space-x-6">
            <div className="uppercase">
                {category}
            </div>
                <span>&bull;</span>
            <div>
                {date}
            </div>
        </div>
        </>
    )
}