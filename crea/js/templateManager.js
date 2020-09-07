export default function templateManager () { 
	var _ctrl = null;
	var init = function(_that) {
		_ctrl = _that;
	};
	var loadTemplate = function(templateChanged = false) {
		let id = $('[name^=\'inp-design\']:checked').val();
		id = id.replace('inp-design-', '');
		if (_ctrl.sessionStatus == 'START SESSION') {
			$('input[value=\'inp-design-' + id + '\']').closest('.control-design-thumb').addClass('thumb-selected');
		}
		if (_ctrl.sessionStatus == 'RESUME SESSION') {
			id = _ctrl.jd.selections.templateTypeId.value;
			$('[name^=\'inp-design\']').removeAttr('checked');
			let $newInp = $('input[value=\'inp-design-' + id + '\']');
			$newInp.attr('checked','checked');
			$newInp.closest('.control-design-thumb').addClass('thumb-selected');
		}
		if(templateChanged) { _ctrl.sessionStatus = 'RESUME SESSION'; }
		_ctrl.new_dataManager.saveSelected(_ctrl.jd,'templateTypeId',id,'config');
		$('#template').html('');
		var content_id = (!_ctrl.jd.respuestas[22] || _ctrl.jd.respuestas[22].resp_id == '') ? 2 : _ctrl.jd.respuestas[22].resp_id;
		var src = 'Templates/Template-' + id + '/index.php?t=' + content_id + '&color=impact&hex=000000'; 
		$('#template-cont').load(src + ' #template', function() {
			var $template = $('#template');
			$template.find('link[href^=\'css/styles.css\']').attr('href', ('Templates/Template-' + id + '/css/styles.css'));
			_ctrl.new_imageManager.setImageSelection((!_ctrl.jd.respuestas[22] || _ctrl.jd.respuestas[22].localizacion_en == '') ? 'nature' : _ctrl.jd.respuestas[22].localizacion_en);
			_ctrl.new_itemManager.setItems();
			updateContent();
			console.log('TEMPLATE LOADED');
			$.ajax({
				url: ('Templates/Template-' + id + '/js/scripts.js'),
				dataType: 'script'
			});
			_ctrl.new_mapManager.start('inp-contact-address', 'iMap');		
		});
	};
	var updateContent = function (target = null) {
		let $template = $('#template');
		let selections = _ctrl.jd.selections || {};
		if (target == null || target.href) {
			_ctrl.new_itemManager.setContentType();
			updateTexts($template, selections);
			_ctrl.new_colorManager.updateColor(selections, $template);
			updateImages(target);
			updateRemoveControls($template, selections);
		} else if (target.name == 'inp-content-item-type') {
			_ctrl.new_itemManager.setContentType();
		} else if ((target.type) && ((target.type == 'text') || (target.type == 'textarea'))) {
			updateTexts($template, selections);
		} else if (target.name == 'inp-color' || target.name == 'inp-palette') {
			_ctrl.new_colorManager.updateColor(selections, $template);
		} else if (target.name.indexOf('inp-rem-content') > -1) {
			updateRemoveControls($template, selections);
		} else {
			updateImages(target);
		}
		_ctrl.new_dataManager.saveWeb2bJson(_ctrl.jd);
		if (_ctrl.sessionStatus != 'UPDATE SESSION') { _ctrl.sessionStatus = 'UPDATE SESSION'; }
	};
	var afterTemplateLoad = () => {
		_ctrl.new_mapManager.start('inp-contact-address', 'iMap');
	};
	var updateTexts = function ($template, selections) {
		if (_ctrl.sessionStatus == 'START SESSION') {
			$('[id^=\'inp-contact-\'], [id^=\'inp-content-\'], #siteName').each(function() {
				let $this = $(this);
				let i_id = $this.attr('id');
				let v_id = i_id.replace('inp', 'val');
				selections[i_id] = {};	
				if (i_id == 'inp-content-slogan') {
					let slogan_from_tour = '';
					for (let key in _ctrl.jd.respuestas) {
						if(_ctrl.jd.respuestas[key].tipo == 3) {
							slogan_from_tour = _ctrl.jd.respuestas[key].respuesta;
							break;
						}
					}
					_ctrl.new_dataManager.saveSelected(_ctrl.jd,'inp-content-slogan',slogan_from_tour,'text');
					$this.val(selections[i_id] ? selections[i_id].text : '');
					$template.find('#' + v_id).html(selections[i_id] ? selections[i_id].text : '');
				} 
				if (i_id == 'inp-content-title-aboutus' || i_id == 'inp-content-aboutus') {
					_ctrl.new_dataManager.saveSelected(_ctrl.jd,i_id,$template.find('#' + v_id).html(),'text');
					$this.val(selections[i_id] ? selections[i_id].text : '');
				} 
			});
			hideTemplateElements(true, '#img-logo');
		}
		if (_ctrl.sessionStatus == 'RESUME SESSION') {
			$('[id^=\'inp-contact-\'], [id^=\'inp-content-\'], #siteName').each(function() {
				let $this = $(this);
				let i_id = $this.attr('id');
				let v_id = i_id.replace('inp', 'val');
				let text = selections[i_id] && selections[i_id].text ? selections[i_id].text : '';
				if(i_id == 'inp-contact-address' && text.search('##') != -1) {
					let arr = text.split('##');
					text = arr[0];
					$this.data('place', arr[1]);
				}
				$this.val(text);
				if(selections[i_id] && selections[i_id].active !== undefined && selections[i_id].active === false) {
					hideTemplateElements(true, i_id.replace('inp-','val-'));
					_ctrl.new_menuManager.hideFormElements('[name=\'' + i_id + '\']');
				}				

				updateSpecificFields($this, i_id, v_id, text, $template, selections);
				if ($('#' + v_id + '[pattern]').length > 0) {
					console.log(v_id);
					_ctrl.new_utilsManager.validateFields('#' + v_id);
				}
				if (i_id == 'inp-content-name') {
					$template.find('#menu h4').html(selections[i_id].text);
				}		
			});
			$template.find('.footer-column:not(:has(li:visible))').hide();
		}
		if (_ctrl.sessionStatus == 'UPDATE SESSION') {
			$('[id^=\'inp-contact-\'], [id^=\'inp-content-\'], #siteName')
				.each(function() {
					let $this = $(this); 
					let i_id = $this.attr('id');
					let v_id = i_id.replace('inp', 'val');
					let text = '';
					let val = $this.val();
					if(i_id == 'inp-contact-address') {
						text = val;
						val = val + ($this.data('place') ? ('##' + $this.data('place')) : '');
						if(text.search('##') != -1) {
							let arr = text.split('##');
							text = arr[0];
							$this.data('place', arr[1]);
						}					
					}
					_ctrl.new_dataManager.saveSelected(_ctrl.jd,i_id,val,'text');
					$template.find('#' + v_id).show().closest('.column').show();
					if (i_id == 'inp-content-name') {
						$template.find('#menu h4').html(selections[i_id].text);
						if($template.find('#val-content-aboutus>span').length > 0) {
							$template.find('#val-content-aboutus>span').html(selections[i_id].text);
							let t = $template.find('#val-content-aboutus').html();
							t = t.replace('</span>','');
							t = t.replace('<span class="name">','');
							$template.find('#val-content-aboutus').html(t);
							$('#inp-content-aboutus').val($template.find('#val-content-aboutus').html());
						}
					}
					updateSpecificFields($this, i_id, v_id, text, $template, selections);
					if ($this.hasClass('optional')) {
						if ($('.app-control-step:eq(' + (_ctrl.current_step) + ')').has($this).length > 0) {
							if (_ctrl.lastKeyPressed == 8) {
								$template.find('#' + v_id).html(val);
							}
						}
					} 

				});
			$template.find('.footer-column:not(:has(li:visible))').hide();
		}
	};
	var hideTemplateElements = function (hide, selector) {
		if (selector === '#img-logo' || selector == undefined) {
			if (!hide)
				$('#branding').show();
			else
				$('#branding').hide();
		} else {
			selector = selector.replace('inp-', 'val-');
			if (!hide)
				$('#' + selector).show();
			else
				$('#' + selector).hide();
		}
	};
	var updateSpecificFields = function($this, i_id, v_id, text, $template, selections) {
		let dir;
		let arr;
		switch (i_id) {
		case 'inp-contact-email' :
			$template.find('#val-contact-email').html('<a href=\'mailto:' + (selections[i_id] ? selections[i_id].text : '') + '\'>' + (selections[i_id] ? selections[i_id].text : '') + '</a>');
			break;
		case 'inp-contact-map' :
			$template.find('#val-contact-map').html(selections[i_id] ? selections[i_id].text : '');
			break;		
		case 'inp-contact-address' :
			$template.find('#val-contact-address').html(selections[i_id] ? text : '');
			break;												
		case 'inp-contact-facebook' :
			arr = (selections[i_id] && selections[i_id].text && selections[i_id].text != '')  ? 
				selections[i_id].text.toLowerCase().split('facebook.com/') : '';
			if(arr != '') {
				dir = arr.length > 1 ? arr[1] : arr[0];
				$template.find('#val-contact-facebook').html('<span class="font-icon">g</span> <a href="http://www.facebook.com/' + 
						dir + '" target="_blank">' + dir + '</a>');
			} else {
				$template.find('#val-contact-facebook').html('');
			}							
			break;	
		case 'inp-contact-twitter' :
			arr = (selections[i_id] && selections[i_id].text && selections[i_id].text != '')  ? 
				selections[i_id].text.toLowerCase().split('twitter.com/') : '';
			if(arr != '') {
				dir = arr.length > 1 ? arr[1] : arr[0];
				$template.find('#val-contact-twitter').html('<span class="font-icon">t</span> <a href="http://www.twitter.com/' + 
						dir + '" target="_blank">' + dir + '</a>');	
			} else {
				$template.find('#val-contact-twitter').html('');
			}
			break;	
		case 'siteName':
			$('.siteName span').text(selections[i_id] ? selections[i_id].text : '');
			$('.siteName').attr('href','http://' + (selections[i_id] ? selections[i_id].text : '') + '.web2b.mx');
			_ctrl.new_utilsManager.validateFields('#siteName');
			break;
		default : 
			$template.find('#' + v_id).html(selections[i_id] && selections[i_id].text !== '' ? selections[i_id].text : $this.attr('placeholder'));
			break;
		}		
	};

	var updateRemoveControls = function ($template, selections) {
		if (_ctrl.sessionStatus == 'START SESSION') {
			$('[id^=\'inp-rem-\']').each(function() {
				let $this = $(this);
				let v = 'Y';
				_ctrl.new_dataManager.saveSelected(_ctrl.jd,$this.attr('id'),v,'text');
			});
		}
		if (_ctrl.sessionStatus == 'RESUME SESSION') {
			$('[id^=\'inp-rem-\']').each(function() {
				let $this = $(this);
				let v = selections[$this.attr('id')] && selections[$this.attr('id')].text ? selections[$this.attr('id')].text : 'N';
				let sec = '';
				switch ($this.attr('id')) {
				case 'inp-rem-content-cta' :
					sec = '#cta';
					break;
				case 'inp-rem-content-aboutus' :
					sec = '#aboutus';
					break;
				case 'inp-rem-content-gallery' :
					sec = '#gallery';
					break;
				case 'inp-rem-content-logo' :
					sec = '#branding';
					break;	 
				}
				if (v == 'N') {
					$this.prop('checked', false);
					let i = $this.attr('id').replace('inp-rem-content', '#toggle');
					let t = $this.attr('id').replace('inp-rem-content', '#conditional');
					$(i).find('.fas.fa-toggle-on').attr('class', 'fas fa-toggle-off');
					_ctrl.new_menuManager.hideFormElements($(t));
					$template.find(sec).hide();
				}
			});	
		}
		if (_ctrl.sessionStatus == 'UPDATE SESSION') {
			$('[id^=\'inp-rem-\']').each(function() {
				let $this = $(this);
				let v = 'Y';
				let sec = '';
				switch ($this.attr('id')) {
				case 'inp-rem-content-cta' :
					sec = '#cta';
					break;
				case 'inp-rem-content-aboutus' :
					sec = '#aboutus';
					break;	 
				case 'inp-rem-content-gallery' :
					sec = '#gallery';
					break;
				case 'inp-rem-content-logo' :
					sec = '#branding';
					break;	 
				}
				if ($this.is(':checked')) { v = 'Y'; } else { v = 'N'; }
				if (selections[$this.attr('id')] && selections[$this.attr('id')].text) {
					selections[$this.attr('id')].text = v;
				}
				_ctrl.new_dataManager.saveSelected(_ctrl.jd,$this.attr('id'),v,'text');		
				if (v == 'N') {
					$template.find(sec).hide();
				} else {
					$template.find(sec).show();
				}
			});	
		}
	};
	var updateImages = function (target) {
		if(_ctrl.sessionStatus == 'START SESSION'){ _ctrl.new_imageManager.setImagesOnStartSession(); }
		if(_ctrl.sessionStatus == 'RESUME SESSION'){ _ctrl.new_imageManager.setImagesOnResumeSession(); }
		if(_ctrl.sessionStatus == 'UPDATE SESSION'){ _ctrl.new_imageManager.setImagesOnUpdateSession(target); }
	};
	return {
		init : init,
		loadTemplate : loadTemplate,
		updateContent: updateContent, 
		hideTemplateElements: hideTemplateElements,
		updateTexts: updateTexts
	};
}