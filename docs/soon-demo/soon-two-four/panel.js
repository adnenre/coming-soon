

$('.gradient-one').click(function(){
    $('#background-template').attr('class','bg-color-one');
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
});

$('.gradient-two').click(function(){
    $('#background-template').attr('class','bg-color-two');
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
});

$('.gradient-three').click(function(){
    $('#background-template').attr('class','bg-color-three');
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
});

$('.gradient-four').click(function(){
    $('#background-template').attr('class','bg-color-four');
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
});

$('.panel-slide-button').click(function(){
	$('.panel-container').toggleClass('slide-panel');
	
});