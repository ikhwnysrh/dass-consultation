AOS.init({
	duration: 800,
});
var typed = new Typed('.txt a', {
	strings: ['6 penyakit akibat kesehatan mental tidak sehat'],
	typeSpeed: 80,
	backSpeed: 30,
	loop: true,
  	loopCount: Infinity,
});
//PARALLAX
document.querySelectorAll('.scene-parallax').forEach((elem) => {
    
    const from = elem.getAttribute('data-from');
	const x = elem.getAttribute('data-modx');
	const y = elem.getAttribute('data-mody');
	
	basicScroll.create({
		elem: elem,
		from: from,
		to: '1000',
		direct: true,
		props: {
			'--translateX': {
				from: '0',
                to: `${ 20 * x }px`,

            },'--translateY': {
                from: '0',
                to: `${ 20 * y }px`,
             }
           
		}
	}).start();
		
});
var title = [
	"Lima Dasar Kesehatan Mental",
	"1. Pola Hidup Sehat",
	"2. Manajemen Stress",
	"3. Keseimbangan Emosi",
	"4. Interaksi Sosial Positif",
	"5. Pemahaman Kondisi Diri",
];
var text = [
	"Lima Dasar Kesehatan Mental (LDKM) adalah prinsip yang dapat membantu menjaga dan meningkatkan keseimbangan mental seseorang. Konsep ini sejalan dengan pendekatan Depression Anxiety Stress Scales (DASS 42) yang bertujuan untuk mengukur kondisi mental secara menyeluruh. Berikut adalah lima dasar kesehatan mental yang dapat diterapkan:",
	"Keseimbangan antara pola makan bergizi, olahraga teratur, dan tidur yang cukup adalah fondasi untuk mendukung kesehatan mental dan fisik.",
	"Mengelola stres melalui teknik relaksasi, meditasi, atau hobi dapat membantu menurunkan tekanan yang dialami sehari-hari.",
	"Mengenali dan mengelola emosi dengan baik, termasuk mencari dukungan saat dibutuhkan, sangat penting untuk kesehatan mental.",
	"Menjaga hubungan yang sehat dengan keluarga, teman, dan komunitas dapat meningkatkan rasa bahagia dan menurunkan tingkat kecemasan.",
	"Menggunakan alat seperti DASS 42 untuk mengenali tingkat depresi, kecemasan, dan stres, memungkinkan seseorang memahami kondisi mental mereka dan mengambil tindakan tepat jika diperlukan."
];
var now = 0;
var max = title.length-1;
setText(now);
$('#next').click(function(){
	if(now == max){
		now=0;
	}else{
	now++;
	}
	setText(now);
});
$('#back').click(function(){
	if(now == 0){
		now=max;
	}else{
	now--;
	}
	setText(now);
});
function setText(x){
	$( "#content" ).slideUp( "slow", function() {
		$('#title').text(title[x]);
		check();
	$('#text').text(text[x]);
	});
	$( "#content" ).slideDown( "slow", function() {
	
});
}
function check(){
	if (now == 0){
		$('#btng').show();
	}else{
		$('#btng').hide();
	}
}
var slided = false;
$(window).scroll(function () {
    $('#search-content').each( function(i){
        
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
		if($(window).width() > 762){
			if( bottom_of_window >= bottom_of_element){
				if(slided == false){
					slided = true;
				$( "#search-content" ).slideDown( 1500 ,function() {
					slided = false;
				});
				}
			}else if( bottom_of_window <= bottom_of_element-300){
				if(slided == false){
				$( "#search-content" ).fadeOut( "fast");
				}
			}    
		  }
                
    }); 
});