// event pada saat link di klik 
$('.page-scroll').on('click', function(e){

    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen ybs
    var elemenTujuan = $(tujuan);

    // pindahkan scroll
    $('body').scrollTop('0');

    e.preventDefault();

});