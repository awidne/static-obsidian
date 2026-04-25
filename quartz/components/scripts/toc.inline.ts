const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    const slug = entry.target.id
    const tocEntryElements = document.querySelectorAll(`a[data-for="${slug}"]`)
    const windowHeight = entry.rootBounds?.height
    if (windowHeight && tocEntryElements.length > 0) {
      if (entry.boundingClientRect.y < windowHeight) {
        tocEntryElements.forEach((tocEntryElement) => tocEntryElement.classList.add("in-view"))
      } else {
        tocEntryElements.forEach((tocEntryElement) => tocEntryElement.classList.remove("in-view"))
      }
    }
  }
})

function toggleTocMobile(this: HTMLElement) {
  const nearestToc = this.closest(".toc") as HTMLElement
  if (!nearestToc) return

  const isOpening = nearestToc.classList.toggle("open")

  if (isOpening) {
    document.documentElement.classList.add("mobile-no-scroll")
  } else {
    document.documentElement.classList.remove("mobile-no-scroll")
  }
}

function toggleToc(this: HTMLElement) {
  this.classList.toggle("collapsed")
  this.setAttribute(
    "aria-expanded",
    this.getAttribute("aria-expanded") === "true" ? "false" : "true",
  )
  const content = this.nextElementSibling as HTMLElement | undefined
  if (!content) return
  content.classList.toggle("collapsed")
}

function closeTocMobile() {
  for (const toc of document.getElementsByClassName("toc")) {
    const tocEl = toc as HTMLElement
    tocEl.classList.remove("open")
  }
  document.documentElement.classList.remove("mobile-no-scroll")
}

function setupToc() {
  for (const toc of document.getElementsByClassName("toc")) {
    const desktopButton = toc.querySelector(".toc-header")
    const mobileButton = toc.querySelector(".mobile-toc")

    ;(toc as HTMLElement).classList.remove("open")

    mobileButton?.classList.remove("hide-until-loaded")

    if (desktopButton) {
      desktopButton.addEventListener("click", toggleToc)
      window.addCleanup(() => desktopButton.removeEventListener("click", toggleToc))
    }

    if (mobileButton) {
      mobileButton.addEventListener("click", toggleTocMobile)
      window.addCleanup(() => mobileButton.removeEventListener("click", toggleTocMobile))
    }

    const tocLinks = toc.querySelectorAll(".toc-content a")
    tocLinks.forEach((link) => {
      link.addEventListener("click", closeTocMobile)
      window.addCleanup(() => link.removeEventListener("click", closeTocMobile))
    })
  }
}

document.addEventListener("nav", () => {
  setupToc()

  // update toc entry highlighting
  observer.disconnect()
  const headers = document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]")
  headers.forEach((header) => observer.observe(header))
})