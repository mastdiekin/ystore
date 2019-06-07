$(function(){

	var cookieToolsBar = '1',
		cookieWidthBody = '2',
		cookieBodyBg = '3',
		colorScheme = '8ccade',
		nowColorScheme,
		cookieColorScheme = '4',
		colorScheme2 = '737271',
		nowColorScheme2,
		cookieColorScheme2 = '8',
		cookieOptions = {expires: 7, path: '/'};
	
	if($.cookie(cookieToolsBar) == 'is-opened'){
		$('.style__switcher').addClass('is-opened');
	};

	if($.cookie(cookieWidthBody) == 'full'){
		$('.content').addClass('full');
		$('.popular__slider, .blog__slider, .random__slider').trigger('refresh.owl.carousel');

		$('.style__switcher-layout li').removeClass('selected');
		$('.style__switcher-layout li.fixed__layout').addClass('selected');
	};

	$('body').addClass($.cookie(cookieBodyBg));

	$('.style__switcher-open').click(function(){
		if($('.style__switcher').hasClass('is-opened')){
			$('.style__switcher').removeClass('is-opened');
			$.cookie(cookieToolsBar, '1', {path:'/'});
			
		}else{
			$('.style__switcher').addClass('is-opened');
			$.cookie(cookieToolsBar, 'is-opened', cookieOptions);
		}
	});
	
	$('.style__switcher-layout li').click(function(){
		if($(this).hasClass('fixed__layout')){
			$.cookie(cookieWidthBody, 'full', cookieOptions);
			if(!$('.content').hasClass('full')){
				location.reload();
			}
			
		}else{
			$.cookie(cookieWidthBody, '2', {path:'/'});
			if($('.content').hasClass('full')){
				location.reload();
			}
		}

	});

	////////////////////// Color scheme

	$('.tools').magnificPopup({
		type: 'inline',
		preloader: false,
		modal: true
	});

	$('<style id="style__switcher-style"></style>').appendTo('head');
	$('<style id="style__switcher-style2"></style>').appendTo('head');
	
	$('<div id="tools__modal" class="popup__modal mfp-hide white-popup-block"><p>Вставьте полученный код в "<b>Таблица стилей (CSS)</b>". В самый низ файла.</p><textarea class="style__switcher-form textarea1"></textarea><textarea class="style__switcher-form textarea2"></textarea><a class="popup__modal-dismiss btn btn__inline btn__fill" href="#"><span class="icon-close"></span></a></div>').appendTo('body');

	if($.cookie(cookieColorScheme)){
		nowColorScheme = $.cookie(cookieColorScheme);
	}else{
		nowColorScheme = '8ccade';
		$.cookie(cookieColorScheme, colorScheme, cookieOptions);
	}
	
	if($.cookie(cookieColorScheme2)){
		nowColorScheme2 = $.cookie(cookieColorScheme2);
	}else{
		nowColorScheme2 = '737271';
		$.cookie(cookieColorScheme2, colorScheme2, cookieOptions);
	}

	$('#picker').val(nowColorScheme);
	$('#picker').attr('style', 'border-color: #'+nowColorScheme);
	$('#style__switcher-style').text('button[type=button],button[type=file],button[type=reset],button[type=submit],input[type=button],input[type=file],input[type=reset],input[type=submit]{background: #'+nowColorScheme+';border:1px solid  #'+nowColorScheme+'}.btn__under:hover:before,button[type=button]:hover,button[type=file]:hover,button[type=reset]:hover,button[type=submit]:hover,input[type=button]:hover,input[type=file]:hover,input[type=reset]:hover,input[type=submit]:hover{background: #'+nowColorScheme+'}input[type=email]:-ms-input-placeholder,input[type=password]:-ms-input-placeholder,input[type=phone]:-ms-input-placeholder,input[type=text]:-ms-input-placeholder{color: #'+nowColorScheme+'}.header__search-form form input[type=text]::-moz-placeholder,input[type=email]::-moz-placeholder,input[type=password]::-moz-placeholder,input[type=phone]::-moz-placeholder,input[type=text]::-moz-placeholder{color: #'+nowColorScheme+'}.header__search-form form input[type=text]::-webkit-input-placeholder,input[type=email]::-webkit-input-placeholder,input[type=password]::-webkit-input-placeholder,input[type=phone]::-webkit-input-placeholder,input[type=text]::-webkit-input-placeholder{color: #'+nowColorScheme+'}.header__search-form form input[type=text]:-ms-input-placeholder,.header__search-form form input[type=text]::-ms-input-placeholder,input[type=email]::-ms-input-placeholder,input[type=password]::-ms-input-placeholder,input[type=phone]::-ms-input-placeholder,input[type=text]::-ms-input-placeholder{color: #'+nowColorScheme+'}.header__search-form form input[type=text]::placeholder,input[type=email]::placeholder,input[type=password]::placeholder,input[type=phone]::placeholder,input[type=text]::placeholder{color: #'+nowColorScheme+'}a:hover{color: #'+nowColorScheme+'}.btn,.entryReadAll .entryReadAllLink,.gb__addform input[type=button],.gb__addform select,.uSpoilerButBl input,.ucoz-editor-htpanel.ucoz-editor-panel input[type=button],.ucoz-editor-htpanel.ucoz-editor-panel select{display:block}.btn__inline,.comments__call a,.fourofour .myBtnCont a,.maintemance .myBtnCont a,.maintemance__wrapper .myBtnCont a,.profile-label{display:inline-block}.btn__fill,.comments__call a,.fourofour .myBtnCont a,.main__cart__buttons .basket,.maintemance .myBtnCont a,.maintemance__wrapper .myBtnCont a{background: #'+nowColorScheme+';border:1px solid  #'+nowColorScheme+';color:#fff}.btn__fill:hover,.comments__call a:hover,.fourofour .myBtnCont a:hover,.main__cart__buttons .basket:hover,.maintemance .myBtnCont a:hover,.maintemance__wrapper .myBtnCont a:hover{background-color:transparent;color: #'+nowColorScheme+'}.btn__fill.white,.comments__call a.white,.fourofour .myBtnCont a.white,.main__cart__buttons .white.basket,.maintemance .myBtnCont a.white,.maintemance__wrapper .myBtnCont a.white{background:#fff;border-color:#fff;color: #'+nowColorScheme+'}.btn__fill.white:hover,.comments__call a.white:hover,.fourofour .myBtnCont a.white:hover,.main__cart__buttons .white.basket:hover,.maintemance .myBtnCont a.white:hover,.maintemance__wrapper .myBtnCont a.white:hover{color:#fff}.btn__transparent,.random__cart__buttons .basket{background-color:transparent;color: #'+nowColorScheme+'}.btn__transparent:hover,.random__cart__buttons .basket:hover{color:#fff;background: #'+nowColorScheme+'}.btn__transparent.white,.random__cart__buttons .white.basket{color:#fff}.btn__transparent.white:hover,.random__cart__buttons .white.basket:hover{background:#fff;color: #'+nowColorScheme+'}.btn__under:before{background:#737271}.btn__under.white:hover:before{background:#fff}.callback__btn:hover,.header__menu .uMenuRoot li a.uMenuItemA{color: #'+nowColorScheme+'}.topline{border-bottom:5px solid  #'+nowColorScheme+'}.topline.is-fixed{border-bottom:2px solid  #'+nowColorScheme+'}.fixedline a:hover,.header__cart .cart__count,.header__menu .uMenuRoot li a:after,.header__menu-btn span,.header__slider-wrapper a.header__slider-next:hover,.header__slider-wrapper a.header__slider-prev:hover{background: #'+nowColorScheme+'}.header__slider-item.item3 .header__slider__item-title a:hover{color: #'+nowColorScheme+'!important}.header__search-form form input[type=text]{border:1px solid  #'+nowColorScheme+';color: #'+nowColorScheme+'}.header__search-form form input[type=submit]:hover{color: #'+nowColorScheme+';border-color: #'+nowColorScheme+'}.blog__slider .owl-nav button:hover span:before,.cart__buttons a:hover,.cart__del,.popular__slider .owl-nav button:hover span:before{color: #'+nowColorScheme+'}.cart__buttons a,.header__search-form form input[type=submit],.shop__buttons input[type=button]{background: #'+nowColorScheme+';border:1px solid  #'+nowColorScheme+'}.main__title:first-letter,h1:first-letter,h2:first-letter,h3:first-letter{background: #'+nowColorScheme+'!important}.bestsellers__label.discount,.bestsellers__label.discount:before,.bestsellers__plus:after,.bestsellers__plus:before,.goup,.main__title:before,.no__available:before,.products__label.discount,.products__label.discount:before,.products__plus:after,.products__plus:before,.sidebar__item.calendar .calMdayIs,.sidebar__item.calendar .calWday,.sidebar__item.calendar .calWdaySe,.sidebar__item.calendar .calWdaySu,.sidebar__item.category.shop .sidebar__title,.sidebar__item.category.shop ul li u:hover,h1:before,h2:before,h3:before{background: #'+nowColorScheme+'}.breadcrumbs a,.goup:hover,.layout__grid:hover span,.layout__inline:hover span,.shop__buttons input[type=button]:hover,.shop__description ul li:before,.shop__wishlist:before,.sidebar__item.category.shop ul li u:before,.sidebar__item.category.shop ul ul li a:after{color: #'+nowColorScheme+'}.sidebar__item.category.shop .sidebar__title:before{width:0;height:0;border-style:solid;border-width:10px 10px 0;border-color: #'+nowColorScheme+' transparent transparent}.shop__wishlist,.sidebar__item.category.shop ul li u{border:1px solid  #'+nowColorScheme+'}.sidebar__item.calendar .calWdaySe,.sidebar__item.calendar .calWdaySu{background:#d21212}.shop__wishlist:hover{background: #'+nowColorScheme+'}.shop__buttons input[type=button]:disabled{color: #'+nowColorScheme+'}.catPages1 a:hover,.catPages2 a:hover,.pagesBlock1 a:hover,.pagesBlock2 a:hover,.pagesBlockuz1 a:hover,.pagesBlockuz2 a:hover,.plist a:hover,.pnext a:hover,.pprev a:hover,.shop__slider__nav .slick-current img{border-color: #'+nowColorScheme+'}.compare-widget-remove:hover{border-color: #'+nowColorScheme+'!important}.photo__item a{border:3px solid  #'+nowColorScheme+'}#pagesBlock1 span a:hover,#pagesBlock2 span a:hover,.UhideBlockL a,.comments__name,.comments__rating-count,.gb__addform input[type=submit],.pagesBlockuz1 span a:hover,.pagesBlockuz2 span a:hover,.swchItemDots{color: #'+nowColorScheme+'}.jq-checkbox.focused,.jq-radio.focused,html.js .preload span:before{border:1px solid  #'+nowColorScheme+'}.jq-number__spin:after{border-bottom:5px solid  #'+nowColorScheme+'}.jq-number__spin.minus:after{border-top:5px solid  #'+nowColorScheme+'}.jq-selectbox:hover .jq-selectbox__trigger-arrow{border-top-color: #'+nowColorScheme+'}.jq-selectbox li:hover{background-color: #'+nowColorScheme+'}.bbCodeName,.bbQuoteName,.gb__addform input[type=submit]:hover,.jq-select-multiple li.selected,.search__block #sFltLst,.tabs__caption .active,.uTable td.uTopTd,code{background: #'+nowColorScheme+'}.catPages1 b,.catPages2 b,.pagesBlock1 b,.pagesBlock2 b,.pagesBlockuz1 b,.pagesBlockuz2 b,.pgSwchA b{background: #'+nowColorScheme+';border-color: #'+nowColorScheme+'}blockquote{border-left:5px solid  #'+nowColorScheme+'}.bbCodeName:before,.bbQuoteName:before{width:0;height:0;border-style:solid;border-width:5px 7.5px 0;border-color: #'+nowColorScheme+' transparent transparent}.quoteMessage{border-left:5px solid  #'+nowColorScheme+'!important}.UhideBlockL,.tabs__caption li{border:1px solid  #'+nowColorScheme+';color: #'+nowColorScheme+'}.forumTop a:hover,.gTableTop,.pagesInfo,.switch{background: #'+nowColorScheme+'}.uSpoilerText{border:1px solid  #'+nowColorScheme+'!important;color: #'+nowColorScheme+'}@media only screen and (max-width:1025px){.header__menu .uMenuRoot li.uWithSubmenu>a:hover{color: #'+nowColorScheme+'}.category__btn{background: #'+nowColorScheme+'}}');


	$('#picker2').val(nowColorScheme2);
	$('#picker2').attr('style', 'border-color: #'+nowColorScheme2);
	$('#style__switcher-style2').text('.fixedline,.slist a.active{background: #'+nowColorScheme2+'}.header__slider-item.item1 .header__slider-item.item3 .header__slider__item-slogan a,.header__slider-item.item1 .header__slider__item-slogan,.header__slider-item.item1 .header__slider__item-title,.header__slider-item.item3 .header__slider-item.item1 .header__slider__item-slogan a,.header__slider-item.item3 .header__slider__item-title a,.main__title{color: #'+nowColorScheme2+'}.categories__category{color: #'+nowColorScheme2+'!important}.shop__info,.shop__info a{color: #'+nowColorScheme2+'}.breadcrumbs,.jq-select-multiple li.selected.disabled,.jq-select-multiple.disabled li.selected{background: #'+nowColorScheme2+'}.jq-file__name{border:1px solid  #'+nowColorScheme2+'}.jq-file__browse{border-left:1px solid  #'+nowColorScheme2+'}.jq-file.disabled,.jq-file.disabled .jq-file__browse,.jq-file.disabled .jq-file__name,.jq-number.disabled .jq-number__field,.jq-number.disabled .jq-number__spin,.jq-select-multiple.disabled,.jq-selectbox.disabled .jq-selectbox__select,button.styler[disabled],input[type=button].styler[disabled],input[type=submit].styler[disabled]{border-color: #'+nowColorScheme2+'}.jq-selectbox__select{background: #'+nowColorScheme2+'}.jq-select-multiple,.jq-selectbox__dropdown,.jq-selectbox__search input,.jq-selectbox__select,button.styler,input[type=button].styler,input[type=email].styler,input[type=password].styler,input[type=reset].styler,input[type=search].styler,input[type=submit].styler,input[type=tel].styler,input[type=text].styler,input[type=url].styler,textarea.styler{border:1px solid  #'+nowColorScheme2+'}.jq-selectbox li.selected{background-color: #'+nowColorScheme2+'}input[type=email].styler:hover:focus,input[type=password].styler:hover:focus,input[type=search].styler:hover:focus,input[type=tel].styler:hover:focus,input[type=text].styler:hover:focus,input[type=url].styler:hover:focus,textarea.styler:hover:focus{border-color: #'+nowColorScheme2+'}');


	$('#picker').colpick({
		layout:'hex',
		colorScheme:'dark',
		color: cookieColorScheme,
		onChange:function(hsb,hex,rgb,el,bySetColor){
			$(el).css('border-color','#'+hex);
			if(!bySetColor) $(el).val(hex);
			$.cookie(cookieColorScheme, hex, cookieOptions);
			
			$('#style__switcher-style').text('button[type=button],button[type=file],button[type=reset],button[type=submit],input[type=button],input[type=file],input[type=reset],input[type=submit]{background: #'+hex+';border:1px solid  #'+hex+'}.btn__under:hover:before,button[type=button]:hover,button[type=file]:hover,button[type=reset]:hover,button[type=submit]:hover,input[type=button]:hover,input[type=file]:hover,input[type=reset]:hover,input[type=submit]:hover{background: #'+hex+'}input[type=email]:-ms-input-placeholder,input[type=password]:-ms-input-placeholder,input[type=phone]:-ms-input-placeholder,input[type=text]:-ms-input-placeholder{color: #'+hex+'}.header__search-form form input[type=text]::-moz-placeholder,input[type=email]::-moz-placeholder,input[type=password]::-moz-placeholder,input[type=phone]::-moz-placeholder,input[type=text]::-moz-placeholder{color: #'+hex+'}.header__search-form form input[type=text]::-webkit-input-placeholder,input[type=email]::-webkit-input-placeholder,input[type=password]::-webkit-input-placeholder,input[type=phone]::-webkit-input-placeholder,input[type=text]::-webkit-input-placeholder{color: #'+hex+'}.header__search-form form input[type=text]:-ms-input-placeholder,.header__search-form form input[type=text]::-ms-input-placeholder,input[type=email]::-ms-input-placeholder,input[type=password]::-ms-input-placeholder,input[type=phone]::-ms-input-placeholder,input[type=text]::-ms-input-placeholder{color: #'+hex+'}.header__search-form form input[type=text]::placeholder,input[type=email]::placeholder,input[type=password]::placeholder,input[type=phone]::placeholder,input[type=text]::placeholder{color: #'+hex+'}a:hover{color: #'+hex+'}.btn,.entryReadAll .entryReadAllLink,.gb__addform input[type=button],.gb__addform select,.uSpoilerButBl input,.ucoz-editor-htpanel.ucoz-editor-panel input[type=button],.ucoz-editor-htpanel.ucoz-editor-panel select{display:block}.btn__inline,.comments__call a,.fourofour .myBtnCont a,.maintemance .myBtnCont a,.maintemance__wrapper .myBtnCont a,.profile-label{display:inline-block}.btn__fill,.comments__call a,.fourofour .myBtnCont a,.main__cart__buttons .basket,.maintemance .myBtnCont a,.maintemance__wrapper .myBtnCont a{background: #'+hex+';border:1px solid  #'+hex+';color:#fff}.btn__fill:hover,.comments__call a:hover,.fourofour .myBtnCont a:hover,.main__cart__buttons .basket:hover,.maintemance .myBtnCont a:hover,.maintemance__wrapper .myBtnCont a:hover{background-color:transparent;color: #'+hex+'}.btn__fill.white,.comments__call a.white,.fourofour .myBtnCont a.white,.main__cart__buttons .white.basket,.maintemance .myBtnCont a.white,.maintemance__wrapper .myBtnCont a.white{background:#fff;border-color:#fff;color: #'+hex+'}.btn__fill.white:hover,.comments__call a.white:hover,.fourofour .myBtnCont a.white:hover,.main__cart__buttons .white.basket:hover,.maintemance .myBtnCont a.white:hover,.maintemance__wrapper .myBtnCont a.white:hover{color:#fff}.btn__transparent,.random__cart__buttons .basket{background-color:transparent;color: #'+hex+'}.btn__transparent:hover,.random__cart__buttons .basket:hover{color:#fff;background: #'+hex+'}.btn__transparent.white,.random__cart__buttons .white.basket{color:#fff}.btn__transparent.white:hover,.random__cart__buttons .white.basket:hover{background:#fff;color: #'+hex+'}.btn__under:before{background:#737271}.btn__under.white:hover:before{background:#fff}.callback__btn:hover,.header__menu .uMenuRoot li a.uMenuItemA{color: #'+hex+'}.topline{border-bottom:5px solid  #'+hex+'}.topline.is-fixed{border-bottom:2px solid  #'+hex+'}.fixedline a:hover,.header__cart .cart__count,.header__menu .uMenuRoot li a:after,.header__menu-btn span,.header__slider-wrapper a.header__slider-next:hover,.header__slider-wrapper a.header__slider-prev:hover{background: #'+hex+'}.header__slider-item.item3 .header__slider__item-title a:hover{color: #'+hex+'!important}.header__search-form form input[type=text]{border:1px solid  #'+hex+';color: #'+hex+'}.header__search-form form input[type=submit]:hover{color: #'+hex+';border-color: #'+hex+'}.blog__slider .owl-nav button:hover span:before,.cart__buttons a:hover,.cart__del,.popular__slider .owl-nav button:hover span:before{color: #'+hex+'}.cart__buttons a,.header__search-form form input[type=submit],.shop__buttons input[type=button]{background: #'+hex+';border:1px solid  #'+hex+'}.main__title:first-letter,h1:first-letter,h2:first-letter,h3:first-letter{background: #'+hex+'!important}.bestsellers__label.discount,.bestsellers__label.discount:before,.bestsellers__plus:after,.bestsellers__plus:before,.goup,.main__title:before,.no__available:before,.products__label.discount,.products__label.discount:before,.products__plus:after,.products__plus:before,.sidebar__item.calendar .calMdayIs,.sidebar__item.calendar .calWday,.sidebar__item.calendar .calWdaySe,.sidebar__item.calendar .calWdaySu,.sidebar__item.category.shop .sidebar__title,.sidebar__item.category.shop ul li u:hover,h1:before,h2:before,h3:before{background: #'+hex+'}.breadcrumbs a,.goup:hover,.layout__grid:hover span,.layout__inline:hover span,.shop__buttons input[type=button]:hover,.shop__description ul li:before,.shop__wishlist:before,.sidebar__item.category.shop ul li u:before,.sidebar__item.category.shop ul ul li a:after{color: #'+hex+'}.sidebar__item.category.shop .sidebar__title:before{width:0;height:0;border-style:solid;border-width:10px 10px 0;border-color: #'+hex+' transparent transparent}.shop__wishlist,.sidebar__item.category.shop ul li u{border:1px solid  #'+hex+'}.sidebar__item.calendar .calWdaySe,.sidebar__item.calendar .calWdaySu{background:#d21212}.shop__wishlist:hover{background: #'+hex+'}.shop__buttons input[type=button]:disabled{color: #'+hex+'}.catPages1 a:hover,.catPages2 a:hover,.pagesBlock1 a:hover,.pagesBlock2 a:hover,.pagesBlockuz1 a:hover,.pagesBlockuz2 a:hover,.plist a:hover,.pnext a:hover,.pprev a:hover,.shop__slider__nav .slick-current img{border-color: #'+hex+'}.compare-widget-remove:hover{border-color: #'+hex+'!important}.photo__item a{border:3px solid  #'+hex+'}#pagesBlock1 span a:hover,#pagesBlock2 span a:hover,.UhideBlockL a,.comments__name,.comments__rating-count,.gb__addform input[type=submit],.pagesBlockuz1 span a:hover,.pagesBlockuz2 span a:hover,.swchItemDots{color: #'+hex+'}.jq-checkbox.focused,.jq-radio.focused,html.js .preload span:before{border:1px solid  #'+hex+'}.jq-number__spin:after{border-bottom:5px solid  #'+hex+'}.jq-number__spin.minus:after{border-top:5px solid  #'+hex+'}.jq-selectbox:hover .jq-selectbox__trigger-arrow{border-top-color: #'+hex+'}.jq-selectbox li:hover{background-color: #'+hex+'}.bbCodeName,.bbQuoteName,.gb__addform input[type=submit]:hover,.jq-select-multiple li.selected,.search__block #sFltLst,.tabs__caption .active,.uTable td.uTopTd,code{background: #'+hex+'}.catPages1 b,.catPages2 b,.pagesBlock1 b,.pagesBlock2 b,.pagesBlockuz1 b,.pagesBlockuz2 b,.pgSwchA b{background: #'+hex+';border-color: #'+hex+'}blockquote{border-left:5px solid  #'+hex+'}.bbCodeName:before,.bbQuoteName:before{width:0;height:0;border-style:solid;border-width:5px 7.5px 0;border-color: #'+hex+' transparent transparent}.quoteMessage{border-left:5px solid  #'+hex+'!important}.UhideBlockL,.tabs__caption li{border:1px solid  #'+hex+';color: #'+hex+'}.forumTop a:hover,.gTableTop,.pagesInfo,.switch{background: #'+hex+'}.uSpoilerText{border:1px solid  #'+hex+'!important;color: #'+hex+'}@media only screen and (max-width:1025px){.header__menu .uMenuRoot li.uWithSubmenu>a:hover{color: #'+hex+'}.category__btn{background: #'+hex+'}}');
			
		}
	}).keyup(function(){
		$(this).colpickSetColor(this.value);
	});

	$('#picker2').colpick({
		layout:'hex',
		colorScheme:'dark',
		color: cookieColorScheme2,
		onChange:function(hsb,hex,rgb,el,bySetColor){
			$(el).css('border-color','#'+hex);
			if(!bySetColor) $(el).val(hex);
			$.cookie(cookieColorScheme2, hex, cookieOptions);
			
			$('#style__switcher-style2').text('.fixedline,.slist a.active{background: #'+hex+'}.header__slider-item.item1 .header__slider-item.item3 .header__slider__item-slogan a,.header__slider-item.item1 .header__slider__item-slogan,.header__slider-item.item1 .header__slider__item-title,.header__slider-item.item3 .header__slider-item.item1 .header__slider__item-slogan a,.header__slider-item.item3 .header__slider__item-title a,.main__title{color: #'+hex+'}.categories__category{color: #'+hex+'!important}.shop__info,.shop__info a{color: #'+hex+'}.breadcrumbs,.jq-select-multiple li.selected.disabled,.jq-select-multiple.disabled li.selected{background: #'+hex+'}.jq-file__name{border:1px solid  #'+hex+'}.jq-file__browse{border-left:1px solid  #'+hex+'}.jq-file.disabled,.jq-file.disabled .jq-file__browse,.jq-file.disabled .jq-file__name,.jq-number.disabled .jq-number__field,.jq-number.disabled .jq-number__spin,.jq-select-multiple.disabled,.jq-selectbox.disabled .jq-selectbox__select,button.styler[disabled],input[type=button].styler[disabled],input[type=submit].styler[disabled]{border-color: #'+hex+'}.jq-selectbox__select{background: #'+hex+'}.jq-select-multiple,.jq-selectbox__dropdown,.jq-selectbox__search input,.jq-selectbox__select,button.styler,input[type=button].styler,input[type=email].styler,input[type=password].styler,input[type=reset].styler,input[type=search].styler,input[type=submit].styler,input[type=tel].styler,input[type=text].styler,input[type=url].styler,textarea.styler{border:1px solid  #'+hex+'}.jq-selectbox li.selected{background-color: #'+hex+'}input[type=email].styler:hover:focus,input[type=password].styler:hover:focus,input[type=search].styler:hover:focus,input[type=tel].styler:hover:focus,input[type=text].styler:hover:focus,input[type=url].styler:hover:focus,textarea.styler:hover:focus{border-color: #'+hex+'}');
			
		}
	}).keyup(function(){
		$(this).colpickSetColor(this.value);
	});


	$('.cookie__style-del').click(function(){
		$.cookie(cookieColorScheme, colorScheme, cookieOptions);
		$.cookie(cookieColorScheme2, colorScheme2, cookieOptions);
		$.cookie(cookieWidthBody, cookieWidthBody, cookieOptions);
		location.reload();
	});
	
	
	$('.style__switcher-generate').click(function(){
		var textPath1 = $('#style__switcher-style').text();
		var textPath2 = $('#style__switcher-style2').text();
		$('#tools__modal .textarea1').val(textPath1 + textPath2);


		var textPath4='', textPath5='', textPath6='', textPath7='';
		if($.cookie(cookieWidthBody) == 'full'){
			textPath6 = $.cookie(cookieWidthBody);
		}
		
		if($.cookie(cookieBodyBg) != '3'){
			textPath7 = $.cookie(cookieBodyBg);
		}
		
		if(textPath4==''&&textPath5==''&&textPath6==''&&textPath7==''){

		}else{
			// $('#tools__modal .textarea2').val('$("body").addClass("'+textPath4+' '+textPath5+' '+textPath6+' '+textPath7+'");');
			$('#tools__modal .textarea2').val('.content,.content.full{max-width:1500px;margin:0 auto;padding:0 15px}');
		}

	});
}); // end ready



