//

function displayContent (eventId, eventValue) {
  document.getElementById(eventId).style.display = eventValue
}



const secondNavLinks = document.querySelectorAll(".second_nav_link")         //
secondNavLinks.forEach(secondNavLink => {
  secondNavLink.onclick = () => secondNavLinkActiveClass(event)
})

function secondNavLinkActiveClass(event) {
  secondNavLinks.forEach(secondNavLink => {
    secondNavLink.className = secondNavLink.className.replace("active", "")
  })
  event.currentTarget.classList.add("active")
} 

function displayQuickLinks (event, content) {
  const quickLinksNavs = document.querySelectorAll(".quick_links_nav_link")         //
  quickLinksNavs.forEach(quickLinksNav => {
      quickLinksNav.className = quickLinksNav.className.replace("active", "")
  })

  const quickLinksContents = document.querySelectorAll(".quick_links_nav_contents")         //
  quickLinksContents.forEach(quickLinksContent => {
    quickLinksContent.style.display = "none"
  })
  
  displayContent (content, "grid")
  
  event.currentTarget.classList.add("active")
}





//