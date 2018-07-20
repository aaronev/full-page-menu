function Menu() {
  this.items = ['Home', 'About', 'Main', 'Contact', 'Blog']
}

Menu.prototype.renderMenuButton = function() {
  $('body').append(
    '<nav id="nav"><button>Menu</button></nav>'
    )
}

Menu.prototype.renderMenuItems = function() {
  for (i = 0; i < this.items.length; i++) {
    $('#nav').append('<li class="hidden"><a>'+this.items[i]+'</a></li>')
  }    
}

Menu.prototype.clickMenu = function() {
  
}








Menu.prototype.initialize = function() {
  this.renderMenuButton()
  this.renderMenuItems()
}


new Menu().initialize()