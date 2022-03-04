import React, { useState, useEffect, useRef } from 'react'
import * as Styles from './Styles'
import doener from './resources/doener-kebab.webp'
import { SectionDisplay } from './components/SectionDisplay'

const App = () => {
  const [activeSection, setActiveSection] = useState(0)
  const [maxSections] = useState(5)
  const prevScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = document.querySelector('#content')!.scrollTop
      const sectionHeight = document.querySelector('#section1')!.getBoundingClientRect().height
      let scrollUp = false
      if (currentScrollY > prevScrollY.current && scrollUp) {
        scrollUp = false
      }
      else if (currentScrollY < prevScrollY.current && !scrollUp) {
        scrollUp = true
      }
      prevScrollY.current = currentScrollY
      if (scrollUp) {
        const heightOfSections = activeSection > 0 ? (activeSection - 1) * sectionHeight : 0
        const breakpoint = sectionHeight / 2
        if (currentScrollY < (heightOfSections + breakpoint) && activeSection > 0) {
          setActiveSection(activeSection-1)
        }
      }
      else {
        const heightOfSections = activeSection * sectionHeight
        const breakpoint = sectionHeight / 2
        if (currentScrollY > (heightOfSections + breakpoint) && activeSection < maxSections - 1) {
          setActiveSection(activeSection+1)
        }
      }
    }

    document.querySelector('#content')!.addEventListener("scroll", handleScroll)

    return () => document.querySelector('#content')!.removeEventListener("scroll", handleScroll)
  }, [activeSection, maxSections])

  return (
    <div id={'content'} className={Styles.content}>
      <SectionDisplay activeSection={activeSection} maxSections={maxSections}/>
      <section id={'section1'} className={Styles.chapter1}>
        <h1>Der perfekte Döner</h1>
        <h3>Klingt einfach - aber nicht einfach zu finden</h3>
        <img alt={'doener-kebab'} src={doener}/>
        <p>A guide by Pascal Dittmann</p>
      </section>
      <section className={Styles.chapter2}>
        <h1>Brot</h1>
        <h3>Die Form des Brots spielt erstmal keine Rolle. Wichtig ist hier, dass das Brot leicht knusprig zubereitet wird.
          Das Innere vom Fladenbrot sollte noch schön weich sein. Ist das Brot zu labbrig oder zu kross, zerstört es den Dönergenuss vollständig.
        </h3>
      </section>
      <section className={Styles.chapter3}>
        <h1>Soßen</h1>
        <h3>
          Die Soßenwahl ist individuell und nicht vorgeschrieben. Prinzipiell gilt aber: Man sollte immer mindestens die Auswahl zwischen den drei Standardsoßen Kräuter, Scharf und Knoblauch haben.
          Sollte es mehr Soßen geben (wie z.B. Hummus, Barbecue etc.) dann ist das nur von Vorteil. Wichtig ist hier, dass eine ordentliche Menge an Soße auf das Brot geschmiert wird. Auch der letzte Klecks
          Soße am Ende der Zubereitung ist notwendig für ein perfektes Erlebnis.
        </h3>
      </section>
      <section className={Styles.chapter4}>Section4</section>
      <section className={Styles.chapter5}>Section5</section>
    </div>
  )
}

export default App
