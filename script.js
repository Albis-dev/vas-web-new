class BulmaModal {
	constructor(selector) {
		this.elem = document.querySelector(selector)
		this.close_data()
	}
	
	show() {
		this.elem.classList.toggle('is-active')
		this.on_show()
	}
	
	close() {
		this.elem.classList.toggle('is-active')
		this.on_close()
	}
	
	close_data() {
		var modalClose = this.elem.querySelectorAll("[data-bulma-modal='close'], .modal-background")
		var that = this
		modalClose.forEach(function(e) {
			e.addEventListener("click", function() {
				
				that.elem.classList.toggle('is-active')

				var event = new Event('modal:close')

				that.elem.dispatchEvent(event);
			})
		})
	}
	
	on_show() {
		var event = new Event('modal:show')
	
		this.elem.dispatchEvent(event);
	}
	
	on_close() {
		var event = new Event('modal:close')
	
		this.elem.dispatchEvent(event);
	}
	
	addEventListener(event, callback) {
		this.elem.addEventListener(event, callback)
	}
}

var btn0 = document.querySelector("#popmodal0")
var mdl0 = new BulmaModal("#modal0")

var btn1 = document.querySelector("#popmodal1")
var mdl1 = new BulmaModal("#modal1")

var btn2 = document.querySelector("#popmodal2")
var mdl2 = new BulmaModal("#modal2")

btn0.addEventListener("click", function () {
	mdl0.show()
})

btn1.addEventListener("click", function () {
	mdl1.show()
})

btn2.addEventListener("click", function () {
	mdl2.show()
})