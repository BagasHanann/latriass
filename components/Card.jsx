import Info from "../components/Info";

export default function Card({ thumbnail, ...info}) {
    return (
        <article>
            <img src={thumbnail} className="w-full rounded-xl mb-4" />
            <Info 
                {...info}
            />
        </article>
    )
}