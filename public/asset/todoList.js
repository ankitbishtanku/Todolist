

$(document).ready(function(){
	$('form').on('submit', function(){
		var item = $('form input');
		var todo = {item: item.val()};

		$.ajax({
			type: 'POST', 
			url: '/todo',
			data: todo,
			success: function (){
				location.reload(true);
			}
		});
		return false;
	});
	

	$('.btn-remove').on('click', function(){
		console.log('testing', this);
		var item = $(this).parent().text().trim().replace(/ /g, '-');
		console.log(item.id);

		$.ajax({
			type: 'DELETE',
			url: '/todo/' + item,
			success: function (){
				location.reload(true);
			}
		});
	});


	$('.btn-edit').on('click', function(){
		var item = $(this).parent().text().trim();
		console.log(item);
		$('#popupDiv').show();
		$('#newName').val(item);
		$('#updateBtn').on('click', function(){
			var newValue = $('#newName').val().trim();
			console.log(item, "2");
			console.log(newValue);
			$('#popupDiv').hide();

			$.ajax({
				type: 'POST',
				url: '/todo/' + newValue,
				data: {item: item},
				success: function (){
					location.reload(true);
				}
			});
		});
	});

});



