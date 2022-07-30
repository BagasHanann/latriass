import PostMetaTitle from '../components/PostMetaTitle';
import PostAuthor from '../components/PostAuthor';

export default function Info({
    category,
    date,
    title,
    authorAvatar,
    authorName,
    authorLove
}) {
    return (
        <>
            <PostMetaTitle
                category={category}
                date={date}
            />
            <h3 className="lg:text-xl md:text-md mt-2">
                {title}
            </h3>
            <PostAuthor 
                authorAvatar={authorAvatar}
                authorName={authorName}
                authorLove={authorLove}
            />
        </>
    );
}