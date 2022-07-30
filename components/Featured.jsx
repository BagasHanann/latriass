import Info from "../components/Info";

export default function Featured() {
    return (
        <article>
            <div className="flex -mx-4 lg:items-center items-start flex-wrap">
                <div className="px-4 lg:w-6/12 md:w-6/12 w-full">
                    <a href="/detail">
                        <img src="/4.jpg" className="rounded-xl w-full mb-4"/>
                    </a>
                </div>
                <div className="px-4 lg:w-6/12 md:w-6/12 w-full">
                    <Info
                        category="Happy Birthday Sayang"
                        date="31 July 2022"
                        title="Selamat Ulang Tahun buat orang spesial yang membawa begitu banyak kebahagiaan di hatiku. Aku bersyukur buat setiap momen yang kita habiskan bersama, dan aku berharap kebahagiaan kita Gapernah berakhir. Gaad hari yang indah tanpa dirimu, kamu selalu membawa kebahagian dan senyuman buatku. Di hari yang spesial ini, aku berharap kamu akan terus menjadi kebahagiaan kita. Selamat ulang tahun sayang🧡😘"
                        authorAvatar="/3.png"
                        authorName="Bagas Hananto"
                        authorLove="Ur Boyfriend ❤"
                    />
                </div>
            </div>  
        </article>
    );
}