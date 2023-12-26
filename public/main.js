//top-menu
const topMenu = document.getElementById('top-menu')

//toggle-top-menu-icon"
const toggleTopMenuIcon = document.getElementById('toggle-top-menu-icon')

document.addEventListener('click', (e) => {
  console.log(e)
  if (toggleTopMenuIcon.contains(e.target)) {
    //when click the Toggle button
    topMenu.classList.toggle('top-menu-expand')
    topMenu.classList.toggle('hidden')
    console.log('click button')
  } else {
    //when click somewhere else
    console.log('click outside button')
    if (topMenu.classList.contains('top-menu-expand')) {
      topMenu.classList.remove('top-menu-expand')
      topMenu.classList.add('hidden')
      console.log('out and remove')
    }
  }
})
