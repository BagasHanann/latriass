import Layout from "../components/Layout";
import  Container  from "../components/Container";
import  PostMetaTitle  from "../components/PostMetaTitle";
import  PostAuthor  from "../components/PostAuthor";

export default function Detail() {
    return (
        <Layout>
            <Container>
                <div className="md:w-6/12 w-full mx-auto flex flex-col items-center">
                    <PostMetaTitle
                        category="Happy Birthday To You"
                        date="31 July 2022"
                    />
                </div>
                <div className="md:w-10/12 w-full mx-auto my-10">
                    <img src="/4.jpg" alt="" className="w-full rounded-xl" />
                </div>
                <div className="md:w-8/12 w-full mx-auto">
                    <p className="text-xl mb-4">
                        Hai sayang, selamat ulang tahun yaa ke-21. Udah tua wkwkwk au cuma mau ingetin.. sehat-sehat ya sayangku kamu udah gede, kejar impian kamu. Aku tau kamu pasti punya impian ko hehe. terus yang rajin yaa solatnya, jangan bolong-bolong nanti allah marah aku au kondisi kamu sekarang kaya gimana makannya apapun yang kamu lakuin, pasti aku support banget banget banget. jangan dengerin orang yang underestimate kamu, yakin aja sama tujuan kamu. Aku bakal support dan nemenin kamu apapun kondisinya.
                    </p>
                    <p className="mb-4 text-xl">
                        Oiya, maaf yaa aku cuma bisa bikin ini buat kamu. Emang sih, ini ga seberapa tapi aku beneran buat ini biar kamu bisa liat terus sampe kapanpun, biar kamu bisa inget-inget aku hehe. Mungkin aku belom bisa menuhin apa yang kamu mau, tapi aku terus-terusan berusaha gimanapun caranya biar bisa menuhin apapun yang kamu butuhin. 
                    </p>
                    <p className="text-xl">
                        Satu lagi deh wkwk. Biar panjang xixi ngakak abiez aku sayang banget sama kamu. Aku udah berubah dari yang sebelumnya dan aku pengen terus-terusan bareng kamu. Aku berharap kamu bisa percaya sama aku yang sekarang yaa AAMIIN. Sekarang aku tau bahagianya dimana,yaitu ketika ngeliat kamu sehat, itu bahagia yang sangat luar biasa soalnya kalo sehat kita bisa quality time bareng, terus seneng-seneng sama kamu deh. Aku berharap kita bertahan lama yaa AAMIIN
                    </p>
                </div>
            </Container>
        </Layout>
    );
}