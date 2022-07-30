export default function PostAuthor({
    authorAvatar, 
    authorName, 
    authorLove 
}) {
    return (
        <div className="flex items-center mt-2">
            <img src={authorAvatar} className="w-10 h-10 rounded-full object-cover"/>
                <div className="ml-4">
                    <h4>{authorName}</h4>
                <div className="text-white/80 text-sm">
                    {authorLove}
                </div>
            </div>
        </div>
    )
}