window.addEventListener("DOMContentLoaded", () => {
    const setHeaderSize = () => {
        const headerSection = document.getElementById("page-header")
        const headerHeight = parseFloat(getComputedStyle(headerSection).height)
        const rootStyles = getComputedStyle(document.documentElement)
        const headerProperty = parseFloat(rootStyles.getPropertyValue("--header-size"))
        if (headerHeight !== headerProperty) {
            document.documentElement.style.setProperty("--header-size", `${headerHeight}px`)
        }
    }
    setHeaderSize()
    window.addEventListener("resize", setHeaderSize)

    const toggleBodyOverflow = (areOpenSubmenus = false) => {
        if (areOpenSubmenus === false){
            const bodyOverflow = document.body.style.overflow
            switch(bodyOverflow){
                case "":
                    document.body.style.overflow="hidden"
                    break;
                case "visible":
                    document.body.style.overflow="hidden"
                    break;
                default:
                    document.body.style.overflow="visible"
            }
        }
    }

    const hideSubmenuOnOpen = (indexGiven) => {
        return new Promise(( resolve, reject ) => {
            let areOpenSubmenus = false
            const mainMenu = document.getElementById("menu")
            const menuItems = mainMenu.querySelectorAll(".item")
            for (let i = 0; i < menuItems.length; i++){
                const submenu = menuItems[i].querySelector(".submenu")
                if (submenu){
                    if (i !== indexGiven){
                        if (submenu.classList.contains("show")){
                            const itemLink = submenu.previousElementSibling
                            submenu.classList.toggle("show")
                            itemLink.classList.toggle("open")
                            areOpenSubmenus = true
                            break
                        }
                    }
                }
            }
            resolve(areOpenSubmenus)
        })
    }

    const showSubmenu = () => {
        const mainMenu = document.getElementById("menu")
        const menuItems = mainMenu.querySelectorAll(".item")
        menuItems.forEach((item, index) => {
            item.addEventListener("click", async () => {
                const submenu = item.querySelector(".submenu")
                if (submenu){
                    const areOpenSubmenus = await hideSubmenuOnOpen(index)
                    const itemLink = submenu.previousElementSibling
                    itemLink.classList.toggle("open")
                    submenu.classList.toggle("show")
                    toggleBodyOverflow(areOpenSubmenus)
                }
            })
        })
    }
    showSubmenu()

    const hideSubmenuOnResize = () => {
        const largeBp = matchMedia("(max-width: 1024px)")
        if (largeBp.matches){
            const mainMenu = document.getElementById("menu")
            const menuItems = mainMenu.querySelectorAll(".item")
            for (let item of menuItems){
                const submenu = item.querySelector(".submenu")
                if (submenu){
                    const itemLink = submenu.previousElementSibling
                    if (submenu.classList.contains("show")){
                        itemLink.classList.toggle("open")
                        submenu.classList.toggle("show")
                        toggleBodyOverflow()
                    }
                }
            }
        }
    }
    window.addEventListener("resize", hideSubmenuOnResize)

    const showOffCanvas = () => {
        const offCanvasButton = document.getElementById("offcanvas-button")
        offCanvasButton.addEventListener("click", () => {
            const offCanvas = document.getElementById("offcanvas")
            offCanvas.classList.toggle("show")
            toggleBodyOverflow()
        })
    }
    showOffCanvas()

    const hideOffCanvasOnResize = () => {
        const largeBp = matchMedia("(min-width: 1024px)")
        if (largeBp.matches){
            const offCanvas = document.getElementById("offcanvas")
            if (offCanvas.classList.contains("show")){
                offCanvas.classList.toggle("show")
                toggleBodyOverflow()
            }
        }
    }
    window.addEventListener("resize", hideOffCanvasOnResize)

    const hideMenuOnLogoClick = () => {
        const logo = document.getElementById("main-logo")
        logo.addEventListener("click", () => {
            const largeBp = matchMedia("(min-width: 1024px")
            if (largeBp.matches){
                const desktopMenu = document.getElementById("menu")
                const desktopItems = desktopMenu.querySelectorAll(".item")
                for (let item of desktopItems){
                    const submenu = item.querySelector(".submenu")
                    if (submenu){
                        const itemLink = submenu.previousElementSibling
                        if (submenu.classList.contains("show")){
                            itemLink.classList.toggle("open")
                            submenu.classList.toggle("show")
                            toggleBodyOverflow()
                        }
                    }
                }
            }
            else {
                const offCanvas = document.getElementById("offcanvas")
                if (offCanvas.classList.contains("show")){
                    offCanvas.classList.toggle("show")
                    toggleBodyOverflow()
                }
            }
        })
    }
    hideMenuOnLogoClick()

    const setCarouselMaxWidth = () => {
        const brandSection = document.getElementById("brands")
        const smallBp = matchMedia("(max-width: 640px)")
        if (smallBp.matches){
            const screenWidth = document.documentElement.getBoundingClientRect().width
            brandSection.style.setProperty("--carousel-max-w", `${screenWidth}px`)
        }
    }
    setCarouselMaxWidth()
    window.addEventListener("resize", setCarouselMaxWidth)

    const hideMenuOnItemClick = () => {
        const offCanvasMenu = document.getElementById("offcanvas")
        const offCanvasItems = offCanvasMenu.querySelectorAll(".offcanvas-item")
        for (let item of offCanvasItems){
            item.addEventListener("click", () => {
                offCanvasMenu.classList.toggle("show")
                toggleBodyOverflow()
            })
        }
    }
    hideMenuOnItemClick()
})