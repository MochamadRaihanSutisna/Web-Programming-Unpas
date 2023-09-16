.selector {
    width: 80%;
    height: 500px;
    font-size: 2em;
    opacity: 0.5;
    transform: rotate(30deg);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
    position: absolute;
    z-index: -9999;
}

/*
    > Angka 80 pada width bisa disebut dengan "VALUE"
    > Dan px atau % (persen) pada height disebut dengan "UNIT"
*/

/*
INTEGER / angka saja (bilangan bulat yang nilainya bisa positif atau negatif)

    z-index: 1; 
    z-index: -9999;

        -keterangan:> z-index bisa positif (+) akan membuat elemennya menjadi di depan secara sumbu z
                    > sedangkan negatif (-) akan membuat elemennya menjadi di belakang { jadi kita kasih negatif maupun positif tanpa satuan }

    order: 3;

        -keterangan:> ada yang namanya order itu juga urutan kita bisa ngasih nilai integer hanya angka saja. 
                    > bilangan bulat tidak boleh koma-koma 

    grid-column-start: 2;
    grid-row-end: -4;

        -keterangan:> untuk grid boleh positif boleh negatif akan tetapi tidak boleh koma
*/

/*
NUMBER / hanya angka saja tapi boleh bilangan pecahan

    opacity: 0.8;
    transform: scale(2.5);
*/

/*
PERCENTAGE / persen %
        -keterangan:> "Merepresentasikan sebagian dari nilai tertentu dan Persen % selalu relative terhadap nilai yang lain"
    >> dengan contoh dibawah sebagai berikut
*/

.box-besar {
    width: 80%;
    height: 200px;
    background-color: salmon;
}

/*
untuk width 80% masksudnya adalah 80% dari elemen pembungkusnya di antara yang lain atau 80% dari lebar bodinya
*/

.box-besar .box-kecil {
    width: 50%;
    height: 100px;
    background-color: blue;
}

/*
DIMENSION / Number yang memiliki satuan dibelakangnya (jadi ada angka, bilangan bulat, pecahan, yang punya satuan dibelakangnya)\
> Dimesion dibagi ke beberapa kategori diantaranya
        - Length
            Length di bagi 2 kategori yaitu
            - Absolute Length
                Absolute Unit | Description
                *px           | 1/96 of 1 inch (96px = 1 inch) 
                *pt           | 1/72 of 1 inch (72pt = 1 inch)
                *pc           | 12pt = 1 pc  
                *cm           | centimeter
                *mm           | milimeter (10mm = 1cm)
                *in           | inchies 

            - Relative Length

                Relative Unit | Description
                *%            | presentase ukuran relatif terhadap ukuran element parent
                *em           | relatif terhadap ukuran font yang sedang digunakan
                *rem          | relatif terhadap ukuran font "root" / <html>
                *ch           | relatif terhadap lebar karakter '0' dari font yang sedang digunakan 
                *vh           | relatif terhadap tinggi dari viewport
                *vw           | relatif terhadap lebar dari viewport
                *vmin         | relative terhadap dimensi terkecil sebuah viewport
                *vmax         | relative terhadap dimensi terbesar sebuah viewport

        - Angle (sudut) > salah satuan untuk sudut adalah::after
            *deg
            *rad
            *grad
            *turn

                -Radian:
                    Radian adalah satuan sudut dalam sistem pengukuran sudut yang paling umum digunakan. Satu radian (1 rad) setara dengan sudut yang dibentuk oleh lengkungan lingkaran dengan panjang lengkung yang sama dengan jari-jarinya. Jadi, rumus untuk mengkonversi sudut dari derajat ke radian adalah sebagai berikut:

                    Sudut dalam radian = (Sudut dalam derajat × π) / 180

                    Contoh:
                    Misalkan ada sebuah sudut 60 derajat, maka untuk mengkonversi ke radian:
                    Sudut dalam radian = (60 × π) / 180 = π/3 rad

                -Gradian:
                    Gradian (atau gon) adalah satuan sudut lainnya yang kurang umum digunakan. Dalam sistem pengukuran sudut ini, lingkaran dibagi menjadi 400 gradian. Untuk mengkonversi sudut dari derajat ke gradian, digunakan rumus berikut:

                    Sudut dalam gradian = (Sudut dalam derajat × 400) / 360

                    Contoh:
                    Misalkan ada sebuah sudut 45 derajat, maka untuk mengkonversi ke gradian:
                    Sudut dalam gradian = (45 × 400) / 360 = 50 gradian

                -Turns:
                    Turns mengukur sudut dengan mengacu pada jumlah putaran penuh dalam lingkaran. Satu putaran penuh dalam lingkaran sama dengan satu turn. Jadi, untuk mengkonversi sudut dari derajat ke turns, digunakan rumus berikut:

                    Sudut dalam turns = Sudut dalam derajat / 360

                    Contoh:
                    Misalkan ada sebuah sudut 720 derajat, maka untuk mengkonversi ke turns:
                    Sudut dalam turns = 720 / 360 = 2 turns

                -Derajat (Degree):
                    Derajat adalah satuan sudut yang paling umum digunakan secara luas. Lingkaran dibagi menjadi 360 derajat. Untuk mengkonversi sudut dari derajat ke derajat, tidak perlu dilakukan konversi.

Contoh:
Misalkan ada sebuah sudut 180 derajat, sudut tersebut tetap 180 derajat tanpa konversi.

        - Time
            *s (1 s = 1000ms)
            *ms  (2000ms = 2s)

        - Resolution (untuk menentukan resolusi pada website)
            *dpi (dot per inch)
            *dpcn (dot per centimeter)
            *dppx (dot per pixel)
                EX 
                    @media print and (min-resolution: 300dpi) {
                        ...etc
                    }


*/

.boxsatu {
    width: 400px;
    height: 400px;
    margin:50px;
    background-color: green;
    transition: 2s; /*hanya contohg*/
    transform: rotate(30deg);
    font-size: 30px;
}

/*  h1 ukurannya menjadi 30px dikarenakan:
    1 em sama dengan ukuran font yang sedang digunakan  */
.boxsatu h1 {
    font-size: 1em;
}

/* Sedangkan p dikarenakan 2 em yang dipakai sehingga 2em x 30 dari ukuran font yang sedang digunakan = 60px */
.boxsatu p {
    font-size: 2em;
}

/* 2/12 */
.boxdua {
    width: 400px;
    height: 400px;
    margin:50px;
    background-color: gold;

    transform: rotate(0.08333333turn);
}

/* π /6 */
.boxtiga {
    width: 400px;
    height: 400px;
    margin:50px;
    background-color: slateblue;

    transform: rotate(0.52333333rad);
}

/* 33 1/3 */
.boxempat {
    width: 400px;
    height: 400px;
    margin:50px;
    background-color: red;
    /* 33*/
    transform: rotate(33.3grad);
}