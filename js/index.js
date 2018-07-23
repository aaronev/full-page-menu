function Menu() {
  this.items = ['Home', 'About', 'Main', 'Contact', 'Blog']
}

Menu.prototype.renderMenuButton = function() {
  $('body').append(
    '<nav id="nav"><button id="menu">Menu</button><ul id="list"></ul></nav>'
    )
}

Menu.prototype.renderMenuItems = function() {
  for (i = 0; i < this.items.length; i++) {
    $('#list').append('<li><a href="">'+this.items[i]+'</a></li>')
  }    
}

Menu.prototype.clickMenu = function() {
  document.getElementById('menu').addEventListener('click', function(){
    $('li').show()
    $('#list').addClass('animated slideInLeft')
  })
}

Menu.prototype.initialize = function() {
  this.renderMenuButton()
  this.renderMenuItems()
  this.clickMenu()
}


new Menu().initialize()