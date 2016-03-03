var _d = $(document);
var _w = $(window);
_d.ready(function() {
	$("input.product-count").off('change').on('change', function() {
		var e = $(this);
		var par = e.closest('.products-item');
		par.find(".product-price.price").text((parseInt(e.attr('product-price')) * e.val()).toFixed(2));
		checkOutAmount();
	});
	function checkOutAmount() {
		var par = $(".products-list");
		var amount = parseInt(0);
		par.find(".products-item").each(function(e) {
		  amount += parseInt($(this).find(".mobile-product-details .product-price.price").text());
		});
		$('.product-checkout .product-price.price').text(amount.toFixed(2));
		$('.product-amount-total .total.product-price').text((amount + parseInt($('.product-price.coupon-code').text())).toFixed(2));
	}
	checkOutAmount();
	$(".product-bottom button.remove").off('click').on('click', function() {
		$(this).closest('.products-item').remove();
		checkOutAmount();
	});
	$(".product-bottom button.edit").off('click').on('click', function(e) {
		e.preventDefault();
		var par = $(this).closest('.products-item');
		var modal = $("#product-modal");
		modal.find('.title').text(par.find('.title').text());
		modal.find('.product-price').text(par.find('.mobile-product-details .product-price').text());
		modal.find('.img img').attr('src', par.find('.img img').attr('src'));
		modal.modal('show');
	});
});