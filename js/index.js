function Menu() {
  this.items = ['Home', 'About', 'Main', 'Contact', 'Blog']
}

Menu.prototype.renderMenuButton = function() {
  $('body').append(
    '<nav id="nav"><button>Menu</button></nav>'
    )
}

Menu.prototype.initialize = function() {
  this.renderMenuButton()
}

new Menu().initialize()